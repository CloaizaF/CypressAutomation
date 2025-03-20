import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../../support/pageObjects/HomePage'

let testData
const homePage = new HomePage()
let productPage
let cartPage
let confirmationPage

before(() => {
    cy.then(() => {
        cy.fixture('example.json').then((data) => {
            testData = data
        })
    })
})

Given("I am on Ecommerce page", () => {
    homePage.goTo(Cypress.env('url') + "/loginpagePractise/#")
})

When("I login to the application", () => {
    cy.then(() => { // Nos aseguramos de que testData está definido antes de usarlo
        productPage = homePage.login(testData.username, testData.password)
    })
})

When("I login to the application portal", (dataTable) => {
    productPage = homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
})

Then("verify the page is loaded", () => {
    productPage.getPageLogo().should('be.visible')
    productPage.getCardCount().should('have.length', 4)
})

When("I add items to Cart and checkout", () => {
    productPage.selectProduct(testData.productName)
    productPage.selectFirstProduct()
    cartPage = productPage.goToCart()
})

Then("verify the total price limit", () => {
    cartPage.calculateTotalPrice().then(($price) => {
        expect($price).to.be.lessThan(200000)
    })
})

When("I select the country and submit", () => {
    confirmationPage = cartPage.checkoutItems()
    confirmationPage.submitFormDetails()
})

Then("verify the thank you message is displayed", () => {
    confirmationPage.getAlertMessage().should('contain', 'Success')
})