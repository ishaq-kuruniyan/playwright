import { test, expect } from "@playwright/test";

test("jsalert", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const input1 = page.getByRole("button", { name: "Click Me!" })
    page.on("dialog", async (dialog) => { // listen for the dialog event and handle it
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        // await dialog.accept()
        await dialog.dismiss()
    })
    await input1.nth(1).click()


    await page.waitForTimeout(20000)
})

test.only("jsalertprop", async ({ page }) => {

        await page.goto("https://selenium.qabible.in/javascript-alert.php")
        const input2=page.locator(".btn.btn-success")
        page.on("dialog",async(dialog)=>{
            await page.waitForTimeout(2000)
            console.log(dialog.message())
            await dialog.accept()

        })
        

        await input2.click()
        await page.waitForTimeout(20000)
    
    })