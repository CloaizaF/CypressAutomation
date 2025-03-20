/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'

describe('E2E Ecommerce Test', () => {

    let testData;
    let homePage;

    before(() => {
        // It runs only once before all tests in this block
        cy.fixture('example.json').then((data) => {
            testData = data
            homePage = new HomePage()
        })
    })

    it('Sumbit Order', () => {
        Cypress.config('defaultCommandTimeout', 15000)
        homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")

        // cy.log(testData.username) -> To log data in console
        // Login to the page
        const productPage = homePage.login(testData.username, testData.password)

        // Assert the page is loaded correctly
        productPage.getPageLogo().should('be.visible')
        // cy.pause() -> To debug
        productPage.getCardCount().should('have.length', 4)

        // Add products to the cart
        productPage.selectProduct(testData.productName)
        productPage.selectFirstProduct()

        // Go to checkout
        const cartPage = productPage.goToCart()

        // Assert price is correctly calculated
        cartPage.calculateTotalPrice().then(($price) => {
            // This should be added in a promise as the code inside each 
            // is pure JS therefore asynchronous 
            expect($price).to.be.lessThan(200000)
        })

        // Do the checkout
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetails()

        // Assert success message is displayed
        confirmationPage.getAlertMessage().should('contain', 'Success')
    })
})