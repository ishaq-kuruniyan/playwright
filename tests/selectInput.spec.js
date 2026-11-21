import { test, expect } from "@playwright/test";

test("selectinput", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const input1 = page.getByRole("link", { name: "Select Input" })
    await input1.click()
    const select2 = page.locator("#single-input-field")
    await select2.selectOption("Yellow") // select option by value
    const selectedcolor = await page.locator("#message-one").textContent() // fetch value from "messageone" locator and store it in a variable
    await expect(selectedcolor).toContain("Yellow")

    await page.waitForTimeout(20000)
})

test.only("multiplelocator", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const input1 = page.getByRole("link", { name: "Select Input" })
    await input1.click()// no  need to click on the link again as we are already on the page
    const selectdropdown = page.locator("#multi-select-field")
    await selectdropdown.selectOption(["Yellow", "Green"])// select multiple options by value

    const buttonone = page.locator("#button-first")//    locator for the button to get all selected values
    await buttonone.click()
    const message1 = await page.locator("#message-two") 
    const textmessage = await message1.textContent() 
    console.log("text message is: " + textmessage)
    await expect(message1).toHaveText("First selected color is : Red")




    const buttontwo = page.locator("#button-all").click()//    locator for the button to get the first selected value




    await page.waitForTimeout(20000)
})