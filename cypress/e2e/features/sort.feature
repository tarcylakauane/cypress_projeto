Feature: Product Sorting Functionality

  As a logged in user
  I want to sort the products
  So that I can find items easily

  Scenario: Sort products by price low to high
    Given I am logged in as "standard_user"
    When I select sort option "Price (low to high)"
    Then products should be sorted by price ascending

  Scenario: Sort products by name Z to A
    Given I am logged in as "standard_user"
    When I select sort option "Name (Z to A)"
    Then products should be sorted by name descending 