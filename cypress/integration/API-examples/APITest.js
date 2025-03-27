/// <reference types="cypress" />

describe('Verify API Test', () => {
    //Not recommended to use Cypress in Non Web Automation ONLY
    it('Verify API Test is done', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',
            {
                "name": "Lovely Life Of The Dark One",
                "isbn": "DKJwK",
                "aisle": "23013w",
                "author": "The Dark King"
            }
        ).then((response) => {
            expect(response.body).to.have.property('Msg', "successfully added")
            expect(response.body).to.have.property('ID')
        })

    })
})