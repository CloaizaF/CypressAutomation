/// <reference types="cypress" />

describe('Verify JWT Session', () => {
    it('Verify login is done with JWT Token inyected in Session Storage', () => {

        cy.LoginAPI().then(() => {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad: (window) => {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })

        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click({force: true})
        cy.contains("Checkout").click()
        cy.get('input[placeholder*="Country"]').type("Ind")
        cy.get('.ta-results button').each(($el) => {
            if ($el.text() === " India") {
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(3000)
        cy.get('.order-summary button').eq(0).click()

    })
})