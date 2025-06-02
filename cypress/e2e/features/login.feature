Feature: Login Functionality on Sauce Demo

  As a user
  I want to test login functionality
  So that I can ensure the system works correctly

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username "standard_user"
    And I enter valid password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the products title

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid username "invalid_user"
    And I enter invalid password "wrong_password"
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: Login attempt with locked out user
    Given I am on the login page
    When I enter valid username "locked_out_user"
    And I enter valid password "secret_sauce"
    And I click the login button
    Then I should see an error message containing "locked out"
    And I should remain on the login page

  Scenario: Login attempt with missing credentials
    Given I am on the login page
    When I click the login button without entering credentials
    Then I should see an error message about required fields
    And I should remain on the login page

  Scenario: Login with problem user
    Given I am on the login page
    When I enter valid username "problem_user"
    And I enter valid password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page
    And I should see the products title
    And I should see broken product images

  Scenario: Login attempt with missing password
    Given I am on the login page
    When I enter valid username "standard_user"
    And I click the login button
    Then I should see an error message containing "Password is required"
    And I should remain on the login page 