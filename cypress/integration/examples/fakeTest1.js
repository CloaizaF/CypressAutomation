/// <reference types="cypress" />

describe('Verify Intercept Cypress', () => {
    it('Verify http request is intercepted and modified', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (request) => {
                request.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
                request.continue((response) => {
                    // expect(response.statusCode).to.equal(403)
                })
            }).as('forbiddenUrl')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@forbiddenUrl')

    })
})