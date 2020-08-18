import { BasePage } from "./basePage";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { CommonHelpers } from "../helpers/commonHelpers";

export class MainPage extends BasePage {

    private gettingStartedButton: ElementFinder = element(by.partialLinkText('Getting Started'))

    public async waitForPageToLoad(): Promise<void> {
        await CommonHelpers.waitForElementToBeVisible(this.gettingStartedButton, 10 * 1000)
      }
}