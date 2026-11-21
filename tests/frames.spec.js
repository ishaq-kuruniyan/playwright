import test, { expect } from "@playwright/test"


test("frame", async ({ page }) => {
    await page.goto("https://demoqa.com/frames")
    const frame = await page.frameLocator("#frame1")
    const frameheading = await frame.locator("#sampleHeading").textContent()// use for iframe locator
    console.log(frameheading)


    await page.waitForTimeout(20000)

})
