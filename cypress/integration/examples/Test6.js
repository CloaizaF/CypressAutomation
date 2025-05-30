/// <reference types="cypress" />

describe('Verify Mouse Hover', () => {
    it('Verify mouse hover', () => {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        // To click by forcing
        // cy.contains('Top').click( {force: true} )
        cy.url().should('include', 'top')
    })
})