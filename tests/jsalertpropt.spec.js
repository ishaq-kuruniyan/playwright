import test, { expect } from "@playwright/test";

test("jsalertprop", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const input1 = page.locator(".btn.btn-danger")// locator for the button that triggers the alert
    
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        console.log(dialog.type())
        await dialog.accept("ishaq")
        await new Promise(resolve => setTimeout(resolve, 2000))

    })



    await input1.click()
    await page.waitForTimeout(2000)

})