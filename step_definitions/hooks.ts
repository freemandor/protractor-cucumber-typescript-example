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
    
    @before('@Web')
    public async beforeAllScenariosRequiringWeb(): Promise<void> {
             
        setDefaultTimeout(30 * 1000)
        await browser.waitForAngularEnabled(false)
        this.world.welcomePage = await new WelcomePage().navigate()
    }
}

export = Hooks;