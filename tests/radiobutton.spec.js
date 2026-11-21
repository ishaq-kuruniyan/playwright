import { test, expect } from "@playwright/test";

test("radiobuttontest", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    const radiobuttonone = page.getByRole("link", { name: "Radio Buttons Demo" })
    await radiobuttonone.click()
    const radiobuttonclick = page.getByRole("radio", { name: "Male" })
    await radiobuttonclick.first().click()
    const buttonclick = page.getByRole("button", { name: "Show Selected Value" })

    const result = await page.getByText("Radio button 'Male' is checked")
    await expect(result).not.toBeVisible() //making sure that the result is not visible before clicking the button
    await buttonclick.click()
    await expect(result).toBeVisible() //making sure that the result is visible after clicking the button
    
    const message1 = await page.locator("#message-one") // locator for the message that appears after clicking the button
    const textmessage = await message1.textContent() // fetch value from "message1" locator and store it in a variable
    console.log("text message is: " + textmessage)
    await expect(message1).toHaveText("Radio button 'Male' is checked")// check in "message1" locator if the text is equal to "Radio button 'Male' is checked"

    await expect(textmessage).toContain("Male")// check if text contains substring




    await page.waitForTimeout(20000)
})


test("radiobuttontest2", async ({ page }) => {

    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    const radiobuttonone = page.getByRole("link", { name: "Radio Buttons Demo" })
    await radiobuttonone.click()
    const radiobuttonfemale = page.getByText("Female", { exact: true })
    await radiobuttonfemale.nth(0).click()




    await page.waitForTimeout(20000)
})