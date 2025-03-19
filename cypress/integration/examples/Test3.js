/// <reference types="cypress" />

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
      cy.get('#autocomplete').should('have.value', 'India')
      
    })

    it('Verify elements visbility and invisibility', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')
      
    })

    it('Verify radio button', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('input[value="radio2"]').check().should('be.checked')
      
    })
})