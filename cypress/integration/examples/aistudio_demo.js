/// <reference types="cypress" />

describe('Cypress Studio Demo', () => {
    it('Create new transaction', () => {
        /* ==== Generated with Cypress Studio ==== */

        // below code belongs to Login Page
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('loaizafcamilo@gmail.com');
        cy.get('#userPassword').clear('testing11%');
        cy.get('#userPassword').type('testing11%');
        cy.get('#login').click();
        // below code belongs to Shopping Page
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
        cy.get(':nth-child(4) > .btn').click();
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        cy.get('.form-group > .input').click();
        cy.get('.form-group > .input').clear('I');
        cy.get('.form-group > .input').type('India');
        cy.get(':nth-child(3) > .ng-star-inserted').click();
        cy.get('.btnn').click();
        // below code belongs to Order Confirmation Page
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');
        cy.get(':nth-child(3) > .btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
        /* ==== End Cypress Studio ==== */
    })
})