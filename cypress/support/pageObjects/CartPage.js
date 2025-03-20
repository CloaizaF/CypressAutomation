import ConfirmationPage from "./ConfirmationPage"

class CartPage {

    calculateTotalPrice() {
        let price = 0
        cy.get('tr td:nth-child(4) strong').each(($el) => {
            const amount = Number($el.text().split(" ")[1].trim())
            price = price + amount
        }).then(() => {
            // This should be added in a promise as the code inside each 
            // is pure JS not Cy 
            return price
        })
    }

    checkoutItems() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }
}

export default CartPage;