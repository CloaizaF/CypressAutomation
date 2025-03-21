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

    })
})