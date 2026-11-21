import test, { expect } from "@playwright/test"

test("bootstrap", async ({ page }) => {

    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const input1 = await page.locator(".btn.btn-primary")
    await input1.nth(0).click()



    const modal = page.locator("#exampleModalCenter")
    const closebutton = modal.locator(".btn.btn-secondary")
    await closebutton.click()
    await page.waitForTimeout(20000)

})
