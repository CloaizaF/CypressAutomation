/// <reference types="cypress" />

describe('Verify Upload Download Test', () => {
    it('Verify Excel Upload Download', () => {

        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";
        const replaceNum = 150;
        const searchText = "Kivi";
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
        cy.get('#downloadButton').click();
        cy.task('writeExcel', {
            searchText: searchText,
            replaceText: replaceNum,
            change: {row: 0, col: 2},
            filePath: filePath,
            sheetName: "Sheet1"
        });

        cy.get('#fileinput').selectFile(filePath);

        cy.contains(searchText).parent().parent().find('#cell-4-undefined').should('have.text', replaceNum);

    })
})