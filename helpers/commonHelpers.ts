import { ElementFinder, browser, ExpectedConditions } from "protractor";
import { TableDefinition } from "cucumber";

export class CommonHelpers {
    public static async waitForElementToBeVisible(element: ElementFinder, timeoutTime: number): Promise<void> {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element), timeoutTime)
        } catch(e) {
            throw new Error(`The element was not visible in the past ${timeoutTime} seconds`)
        }
    }

    public static async waitForElementToBeClickable(element: ElementFinder, timeoutTime: number): Promise<void> {
        try {
            await browser.wait(ExpectedConditions.elementToBeClickable(element), timeoutTime)
        } catch(e) {
            throw new Error(`The element was not clickable in the past ${timeoutTime} seconds`)
        }
    }

    public static parseParams(params: TableDefinition): object {
        const parsedParams = {}
        for (const param in params.rowsHash())

        return {}
    }
}
