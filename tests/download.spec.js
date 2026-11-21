import test, { expect } from "@playwright/test"

test("download", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download")
    const downloadbtn = await page.locator("#downloadButton")
    await downloadbtn.click()

    const [downloadFile] = await Promise.all([ // promse.all used to handle multiple window
        page.waitForEvent('download'),
        await downloadbtn.click()
    ])
    await downloadFile.saveAs('C://Users//muhdi//Downloads//dowmloadimg.jpeg')


    await page.waitForTimeout(20000)
})