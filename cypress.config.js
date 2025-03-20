const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");


async function setupNodeEvents(on, config){
  
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;
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
    //   require('cypress-mochawesome-reporter/plugin')(on); -> reporter for js files not cucumber
    // },
    //specPattern: 'cypress/integration/*/*.js'
    setupNodeEvents,
    specPattern: 'cypress/integration/BDD/*.feature'
  },
});
