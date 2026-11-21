import test, { expect } from "@playwright/test"

test("upload", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download")
    const uploadfile = await page.locator("#uploadFile")
    await uploadfile.setInputFiles("C:/Users/muhdi/Downloads/dowmloadimg.jpeg") // upload file


    await page.waitForTimeout(2000)
})