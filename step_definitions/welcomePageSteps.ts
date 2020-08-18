import { binding, given, then, when} from 'cucumber-tsflow';
import { World } from './world/world'
import { BaseSteps } from './baseSteps';
import { setDefaultTimeout } from 'cucumber';


const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect

chai.use(chaiAsPromised);

@binding([World])
export class WelcomePageSteps extends BaseSteps{

  
  protected world!:World
  constructor(world: World) {
    super(world)
    setDefaultTimeout(30 * 1000)
  }

  @given(/A bank account with starting balance of \$(\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {

  }

  @when(/I'm in the welcome page/)
  public async ImInTheWelcomePage() {
    await this.world.welcomePage.waitForPageToLoad()
  }

  @when(/I press the sign in button/)
  public async accountBalanceShouldEqual() {
    this.world.loginPage = await this.world.welcomePage.clickSignInButton()
  }

  @then(/I print the constant/)
  public iPrintConstant(){

  }
}
