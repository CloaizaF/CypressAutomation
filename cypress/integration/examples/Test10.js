/// <reference types="cypress" />
import 'cypress-iframe';

describe('Handling Calendars', () => {
    it('Should handle calendar', () => {

        const day = "15"
        const monthNumber = "6"
        const year = "2027"
        const expectedValues = [monthNumber, day, year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains('button', year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber) -1).click()
        cy.contains('abbr', day).click()

        cy.get('.react-date-picker__inputGroup__input').each(($el, $index) => {
            cy.wrap($el).invoke('val').should('eq', expectedValues[$index])
        })
    })
})