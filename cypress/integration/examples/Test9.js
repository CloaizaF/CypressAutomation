/// <reference types="cypress" />
import 'cypress-iframe';

describe('Handling Frames', () => {
    it('Should handle frame', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

        
    })
})