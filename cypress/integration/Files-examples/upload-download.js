/// <reference types="cypress" />

describe('Verify Upload Download Test', () => {
    it('Verify Excel Upload Download', () => {

        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";

        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
        cy.get('#downloadButton').click();
        cy.task('writeExcel', {
            searchText: "Apple",
            replaceText: "Iphone",
            filePath: filePath,
            sheetName: "Sheet1"
        });

        cy.get('#fileinput').selectFile(filePath);

    })
})