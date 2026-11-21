import test, { expect } from "@playwright/test"

test("bootstrapmultmodla", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download")
    const uploadbtn =await page.locator("#uploadFile")
    await uploadbtn.setInputFiles("C:\\Users\\muhdi\\OneDrive\\Documents\\Playright\\Book1.xlsx")


        await page.waitForTimeout(20000)


})