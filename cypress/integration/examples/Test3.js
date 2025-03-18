/// <reference types="Cypress" />

describe('Verify elements in webpage', () => {
    it('Verify checkbox', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"').check(['option2', 'option3'])
      
    })

    it('Verify static dropdown', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('select').select('option2').should('have.value', 'option2')
      
    })

    it('Verify dynamic dropdown', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($el) => {
        if($el.text() === "India") {
          cy.wrap($el).click()
        }
      })
      
    })
})