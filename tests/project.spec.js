import test, { expect } from "@playwright/test"

test("project", async ({ page }) => {
    await page.goto("https://saucedemo.com/")
    const username = await page.locator("#user-name")
    await username.fill("standard_user")
    const password = await page.locator("#password")
    await password.fill("sdfg")
    const loginbtn = await page.locator("#login-button")
    await loginbtn.click()
    const message = await page.locator(".error-message-container.error").textContent()
    console.log("Error message: " + message)
    await expect(page.locator(".error-message-container.error")).toHaveText(message)// check error message is coming or not
    await expect(page.locator(".error-message-container.error")).toBeVisible(message)

    // login feature for empty username
    await username.fill("")
    await password.fill("sdfg")
    await loginbtn.click()
    const message2 = await page.locator(".error-message-container.error").textContent()
    console.log("Error message: " + message2)
    await expect(page.locator(".error-message-container.error")).toHaveText(message2)// check error message is coming or not
    await expect(page.locator(".error-message-container.error")).toBeVisible(message2)

    // login feature for empty pasword
    await username.fill("standard_user")
    await password.fill("")
    await loginbtn.click()
    const message3 = await page.locator(".error-message-container.error").textContent()
    console.log("Error message: " + message3)
    await expect(page.locator(".error-message-container.error")).toHaveText(message3)// check error message is coming or not
    await expect(page.locator(".error-message-container.error")).toBeVisible(message3)


    // correct username and password

    await username.fill("standard_user")
    await password.fill("secret_sauce")
    await loginbtn.click()






    await page.waitForTimeout(20000)
})