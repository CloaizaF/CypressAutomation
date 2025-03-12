/// <reference types="Cypress" />

// cypress - Spec
describe('My First Test Suite', () => {
    it('My First Test Case', () => {

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      // Selenium get hits url in browser, Cypress get acts lik findElement of Selenium
      cy.get('.product:visible').should('have.length', 4)
      // Parent child chaining
      cy.get('.products').as('productsLocator')
      cy.get('@productsLocator').find('.product').should('have.length', 4)

      cy.get('@productsLocator').find('.product').eq(2).contains("ADD TO CART").click()
      cy.get(':nth-child(3) > .product-action > button').click() //- not recommended

      cy.get('@productsLocator').find('.product').each(($el) => {
        const productText = $el.find('h4.product-name').text()
        if(productText.includes("Cashews")) {
          cy.wrap($el).find('button').click()
        }
      })

      // I need to handle the promise manually when I want to save output in vars
      cy.get('.brand').then((logoElement) => { 
        cy.log(logoElement.text()) 
      })

    })
})