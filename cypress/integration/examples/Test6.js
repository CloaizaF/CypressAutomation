/// <reference types="Cypress" />

describe('Verify Mouse Hover', () => {
    it('Verify mouse hover', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        // To click by forcing
        // cy.contains('Top').click( {force: true} )
        cy.url().should('include', 'top')
    })
})