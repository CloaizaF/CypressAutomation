/// <reference types="cypress" />

describe('E2E Ecommerce Test', () => {
    it('Sumbit Order', () => {

        const productName = "Nokia Edge" 
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        
        // Login to the page
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("learning")
        cy.contains("Sign In").click()

        // Assert the page is loaded correctly
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)

        // Add products to the cart
        cy.get('app-card').filter(`:contains("${productName}")`).then(($el) => {
            cy.wrap($el).contains('button', 'Add').click()
        })
        cy.get('app-card').eq(0).contains('button', 'Add').click()

        // Go to checkout
        cy.contains('a', 'Checkout').click()

        // Assert price is correctly calculated
        let price = 0
        cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim())
            price = price + amount
        }).then(() => {
            // This should be added in a promise as the code inside each 
            // is pure JS not Cy 
            expect(price).to.be.lessThan(200000)
        })

        // Do the checkout
        cy.contains('button', 'Checkout').click()
        cy.get('#country').type('India')
        cy.wait(5000)
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain', 'Success')
    })
})