/// <reference types="cypress" />

// cypress - Spec
context('Database Connection Test', () => {
    it('Database Interaction', () => {
        // The query is returned as an array
        cy.sqlServer("SELECT * FROM Persons").then((result) => {
            console.log(result[0][1])
        })
    })
})