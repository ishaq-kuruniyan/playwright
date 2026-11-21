import test, { expect } from "@playwright/test"

test("bootstrapmultmodla",async ({ page }) => {

    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const lauchbtn = await page.getByRole("button", { name: "Launch modal" })
    await lauchbtn.nth(1).click()

    const modal= page.locator("#exampleModalCenter1")
    const launchbtn2 = modal.locator(".btn.btn-primary")
    launchbtn2.nth(0).click()

    const modal2 = page.locator("#exampleModalCenter2")
    const closebtn = modal2.locator(".btn.btn-secondary")
    closebtn.click()






    await page.waitForTimeout(2000)
})