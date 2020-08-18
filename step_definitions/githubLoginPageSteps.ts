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

  @when(/I'm in the github login page/)
  public async ImInTheGithubLoginPage() {
    await this.world.githubLoginPage.waitForPageToLoad()
  }

  @when(/I insert my github user name/)
  public async IInsertMyGithubUserName() {
    await this.world.githubLoginPage.setUserName(this.world.getGithubUsername())
  }

  @when(/I insert my github password/)
  public async IInsertMyGithubPassword() {
    await this.world.githubLoginPage.setPassword(this.world.getGithubPassword())
  }

  @when(/I click the github submit button/)
  public async IClickTheSubmitButton() {
    this.world.mainPage =  await this.world.githubLoginPage.clickSubmitButton()
  }
}
