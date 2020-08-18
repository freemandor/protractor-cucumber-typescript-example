import { BasePage } from "./basePage";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { MainPage } from "./mainPage";


export class GithubLoginPage extends BasePage {
    private userName: ElementFinder = element(by.id('login_field'))
    private password: ElementFinder = element(by.id('password'))
    private submitButton: ElementFinder = element(by.css('input[type=submit]'))

    public async waitForPageToLoad(): Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.userName))
    }
   
    public async setUserName(input :string): Promise<void> {
        await this.userName.sendKeys(input)
    }

    public async setPassword(input: string): Promise<void> {
        await this.password.sendKeys(input)
    }

    public async clickSubmitButton(): Promise<MainPage> {
        await this.submitButton.click()

        return new MainPage()
    }
}