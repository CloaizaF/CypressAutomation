class ConfirmationPage {

    submitFormDetails(){
        cy.get('#country').type('India')
        cy.wait(3000)
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
    }

    getAlertMessage(){
        return cy.get('.alert-success')
    }
}

export default ConfirmationPage;