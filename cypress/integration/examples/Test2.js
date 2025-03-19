/// <reference types="cypress" />

describe('My Second Test Suite', () => {
    it('Search and Buy a Product', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.products').as('productsLocator')
      cy.get('@productsLocator').find('.product').each(($el) => {
        const productText = $el.find('h4.product-name').text()
        if(productText.includes("Cashews")) {
          cy.wrap($el).find('button').click()
        }
      })
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.get('button').contains('Place Order').click()
    })
})