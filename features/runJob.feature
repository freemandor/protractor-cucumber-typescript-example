@StartJob @Web
Feature: As a user I would like to start a job and make sure it runs properlly

  # Background: Login using github
    
  #   And I login using my github credentials 

  Scenario: As a user, I want to verify that a runnig a job works
    Given I'm in the welcome page
    When I press the sign in button
    And I click the github button
    Then I'm in the github login page
    When I insert my github user name
    And I insert my github password
    Then I click the github submit button
    Given I'm in the main page
   
