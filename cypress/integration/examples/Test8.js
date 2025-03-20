/// <reference types="cypress" />

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")

        cy.get('#opentab').then(($el) => {
            const windowUrl = $el.prop('href')
            cy.visit(windowUrl)
            cy.origin(windowUrl, () => {
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
})