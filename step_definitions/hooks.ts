import { binding, before, after } from "cucumber-tsflow";
import { World } from "./world/world";
import { WelcomePage } from "../page_objects/welcome_page";
import { BaseSteps } from "./baseSteps";
import { setDefaultTimeout } from 'cucumber'
import { browser } from "protractor";

@binding([World])
class Hooks extends BaseSteps {
    protected world!: World
    constructor(world: World)
    {super(world) }

    @before()
    public async beforeAllScenariosRequiring(): Promise<void> {
        await setDefaultTimeout(30 * 1000)
    }
    
    @before('@Web')
    public async beforeAllScenariosRequiringWeb(): Promise<void> {
        await browser.driver.manage().window().maximize()
        await browser.waitForAngularEnabled(false)
        this.world.welcomePage = await new WelcomePage().navigate()
    }
}

export = Hooks;
