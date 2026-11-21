import test, { expect } from "@playwright/test"

test("project", async ({ page }) => {
    await page.goto("https://saucedemo.com/")

    
await page.waitForTimeout(20000)
})