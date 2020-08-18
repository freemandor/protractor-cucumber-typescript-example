import { GithubLoginPage } from "./githubLoginPage";
import { BasePage } from "./basePage";
import { WebElement, element, by, browser, ExpectedConditions, ElementFinder } from "protractor";
import { CommonHelpers } from '../helpers/commonHelpers'


const {defineSupportCode} = require('cucumber');


export class LoginPage extends BasePage {
    private githubButtonText: string = 'github'
    private githubButton: ElementFinder = element(by.partialButtonText(this.githubButtonText))


    public async clickGithubButton(): Promise<GithubLoginPage> {
        await CommonHelpers.waitForElementToBeClickable(this.githubButton, 10 * 1000)
        await this.githubButton.click()

        return new GithubLoginPage()
    }

    public async didPageToLoad(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.githubButton), 5000)
    }
}