let testData 

beforeEach(() => {
    // It runs only once before all tests in this block
    cy.fixture('example.json').then((data) => {
        Cypress.env('testData', data)
    })
})