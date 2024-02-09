Feature: WebdriverUniversity Login Page

    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username webdriver
        And I enter password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using invalid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username webdriver
        And I enter password webdriver555
        And I click on the login button
        Then I should be presented with the following message validation faileed
