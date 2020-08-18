@StartJob @Backend
Feature: As a user I would like to start a job and make sure it runs properlly

  # Background: Login using github
    
  #   And I login using my github credentials 

  Scenario: As a user, I want to verify that a runnig a job works
    Given I send a request to get employees
    And I send a request to create employe
        | name   | test |
        | salary | 123  |
        | age    | 23   |
    And I send a request to get employee
        | id   | __getCreateEmployeeId |


        

    
   