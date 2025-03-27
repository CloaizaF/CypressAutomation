const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const excelJs = require('exceljs');

async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  config.db = {
    userName: "cloaiza",
    password: "cypressdb11$",
    server: "cypressdbdemo.database.windows.net",
    options: {
      database: "cypressautomation",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on('task', {
    convertExcelToJson(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result;
    }
  })

  on('task', {
    async writeExcel({ searchText, replaceText, change, filePath, sheetName }) {
      const workbook = new excelJs.Workbook();
      await workbook.xlsx.readFile(filePath)
      const worksheet = workbook.getWorksheet(sheetName);
      const coordinates = await getTextCoordinates(worksheet, searchText);
      const cell = worksheet.getCell(coordinates.row + change.row, coordinates.column + change.col);
      cell.value = replaceText;
      return workbook.xlsx.writeFile(filePath).then(() => { return true; }).catch((error) => { return false; })
    }
  })

  return config;
}

async function getTextCoordinates(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow(($row, $rowNumber) => {
    $row.eachCell(($cell, $colNumber) => {
      if ($cell.value === searchText) {
        output.row = $rowNumber;
        output.column = $colNumber;
      }
    })
  });
  return output;
}

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  projectId: 'gk47fx',

  env: {
    url: "https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
    openMode: 1,
  },

  e2e: {
    // setupNodeEvents(on, config) {
    //   require('cypress-mochawesome-reporter/plugin')(on); //-> reporter for js files not cucumber
    // },
    specPattern: 'cypress/integration/*/*.js',
    setupNodeEvents,
    //specPattern: 'cypress/integration/BDD/*.feature'
  },
});
