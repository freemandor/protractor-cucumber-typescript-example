import { binding, given, then, when, before} from 'cucumber-tsflow';
import { assert } from 'chai';
import { World } from './world/world'
import { BaseSteps } from './baseSteps';
import { setDefaultTimeout } from 'cucumber';
import { ElementFinder, element, by, browser, ExpectedConditions } from 'protractor';

@binding([World])
export class LoginPageSteps extends BaseSteps {
  protected world!: World
 
  constructor(world: World) {
    super(world)
  }

  @when(/I'm in the main page/)
  public async ImInTheMainPage() {
      await this.world.mainPage.waitForPageToLoad()    
  }
}
