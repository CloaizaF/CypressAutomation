/// <reference types="cypress" />

describe('Verify different alerts in cypress', () => {
    it('Verify autoaccepted alerts', () => {

      cy.visit(Cypress.env('url') + "/AutomationPractice/")

      cy.get('#alertbtn').click()
      cy.get('input[value="Confirm"]').click()

      // event = window:alert
      cy.on('window:alert', (str) => {
        // Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      // event = window:confirm
      cy.on('window:confirm', (str) => {
        // Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })
    })
})