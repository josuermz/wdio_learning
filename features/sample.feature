Feature: Google Homepage


Scenario: Verify Google HomePage 
    Given I open the url "https://www.google.com"
    Then The page title contains the text "Google"


Scenario: Verify HerokuApp HomePage 
    Given I open the url "https://the-internet.herokuapp.com"
    Then The page title contains the text "The Internet"