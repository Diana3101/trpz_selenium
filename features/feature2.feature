Feature: Search job

  Background:
    Given I am on the Careers page

  Scenario: Search any job
    Given I have cleared keyword input
    When I clicks Find button
    Then I should see vacancies