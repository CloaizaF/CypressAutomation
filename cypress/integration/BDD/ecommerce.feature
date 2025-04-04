Feature: End to End Ecommerce Validation

    @Regression
    Scenario: Ecommerce products delivery
        Given I am on Ecommerce page
        When I login to the application
        Then verify the page is loaded
        When I add items to Cart and checkout
        Then verify the total price limit
        When I select the country and submit
        Then verify the thank you message is displayed

    @Smoke
    Scenario: Ecommerce products delivery with user input
        Given I am on Ecommerce page
        When I login to the application portal
        | username           | password |
        | rahulshettyacademy | learning |
        Then verify the page is loaded
        When I add items to Cart and checkout
        Then verify the total price limit
        When I select the country and submit
        Then verify the thank you message is displayed

        