/// <reference types="cypress" />

describe('Verify Table', () => {
    it('Verify course has price', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, $index) => {
            const courseText = $el.text() 
            if(courseText.includes("Python")) {
                cy.get('tr td:nth-child(2)').eq($index).next().then(($price) => {
                    const priceText = $price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })
})