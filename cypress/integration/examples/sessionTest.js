/// <reference types="cypress" />

const neatCSV = require('neat-csv')

describe('Verify JWT Session', () => {
    it('Verify login is done with JWT Token inyected in Session Storage', async () => {

        cy.LoginAPI().then(() => {
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad: (window) => {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })

        let productName
        cy.get('.card-body b').eq(1).then(($el) => {
            productName = $el.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.wait(2000)
        cy.get('[routerlink*="cart"]').click({ force: true })
        cy.wait(5000)
        cy.contains("Checkout").click()
        cy.get('input[placeholder*="Country"]').type("Ind")
        cy.get('.ta-results button').each(($el) => {
            if ($el.text() === " India") {
                cy.wrap($el).click()
            }
        })
        cy.wait(2000)
        cy.get('.action__submit').click()
        cy.wait(3000)
        cy.get('.order-summary button').eq(0).click()
        cy.wait(2000)
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_loaizafcamilo.csv")
            .then(async (text) => {
                console.log("Raw CSV Text:", text);
                const csv = await neatCSV(text);
                console.log("Parsed CSV:", csv);
                const productNameCSV = csv[0]["Product Name"]
                expect(productName).to.equal(productNameCSV)
            });
    })
})