import { browser, element, by, WebElement, ElementFinder, ExpectedConditions } from 'protractor';

import { LoginPage } from "./loginPage";
import { BasePage } from "./basePage";


export class WelcomePage extends BasePage {
    
    private loginButton: ElementFinder = element(by.className('btn btn-outline-primary nav-item-login'))


    public async navigate(): Promise<WelcomePage> {
        await browser.get('https://codefresh.io/')


        return new WelcomePage()
    }

    public async clickSignInButton(): Promise<LoginPage> {
        await this.loginButton.click()

        return new LoginPage()
    }


    public async waitForPageToLoad(): Promise<void> {
         await browser.wait(ExpectedConditions.visibilityOf(this.loginButton))
    }
}