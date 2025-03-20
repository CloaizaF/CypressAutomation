class ProductPage {

    getPageLogo() {
        return cy.contains("Shop Name")
    }

    getCardCount() {
        return cy.get('app-card')
    }

    selectProduct(productName) {
        cy.get('app-card').filter(`:contains("${productName}")`).then(($el) => {
            cy.wrap($el).contains('button', 'Add').click()
        })
    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    goToCart() {
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
}

export default ProductPage;