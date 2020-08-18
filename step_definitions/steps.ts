import { binding, given, when, then } from 'cucumber-tsflow';
import {browser} from 'protractor'

@binding()
class MyStepDefinitions {
  @given(/^I have a user account (.*) with password (.*)$/)
  async givenIHaveAUserAccount(username:string, password:string) {
     await browser.get('http://www.google.com') 
     await browser.sleep(5000)
  }
}

export = MyStepDefinitions;