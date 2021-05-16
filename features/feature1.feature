Feature: Navigation Bar

  Background:
    Given I am on the main page

  Scenario: Changing site language
    When I click on Global lan button
    And I choose Russian
    Then I see main page on Russian

  Scenario: Getting to Services page
    When I click Services page
    Then Services page opens

  Scenario: Getting to "How we do it" page
    When I click "How we do it" page
    Then "How we do it" page opens

  Scenario: Getting to "Our work" page
    When I click "Our work" page
    Then "Our work" page opens

  Scenario: Getting to Insights page
    When I click Insights page
    Then Insights page opens

  Scenario: Getting to About page
    When I click About page
    Then About page opens

  Scenario: Getting to Careers page
    When I click Careers page
    Then Careers page opens

