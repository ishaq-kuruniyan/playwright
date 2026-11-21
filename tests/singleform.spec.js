import test from "@playwright/test";


test("locatortest2", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("ABC")
    await page.getByRole("button", { name: "Show Message" }).click()
    await page.locator("#value-a").fill("65")
    await page.locator("#value-b").fill("35")
    await page.getByRole("button", { name: "Get Total" }).click()




    await page.waitForTimeout(2000)
})

