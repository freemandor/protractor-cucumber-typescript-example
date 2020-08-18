import { binding, given, then, when, before} from 'cucumber-tsflow';
import { assert } from 'chai';
import { World } from './world/world'
import { BaseSteps } from './baseSteps';
import { setDefaultTimeout } from 'cucumber';

@binding([World])
export class LoginPageSteps extends BaseSteps {
  protected world!: World
  constructor(world: World) {
    super(world)
  }

  @before()
    public beforeScenario(): void {
      setDefaultTimeout(10000)
    }

  @when(/I click the github button/)
  public async IClickTheGithubButton() {
    this.world.githubLoginPage = await this.world.loginPage.clickGithubButton()
  }

  @when(/I wait for login page to load/)
  public async waitForLoginPageToLoad() {
    this.world.loginPage.didPageToLoad() 
  }
}
