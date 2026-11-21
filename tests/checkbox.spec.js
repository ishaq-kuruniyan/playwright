import { test, expect } from "@playwright/test";

test("checkboxtest", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php")
    const inputform = page.getByRole("link", { name: "Input Form" })
    await inputform.click()
    const checkboxdemo = page.getByRole("link", { name: "Checkbox Demo" })
    await checkboxdemo.click()
    const checknoxnew = page.getByLabel("click on this check box")
    await checknoxnew.check()
    await expect(checknoxnew).toBeChecked() // male or female must be checked example
    const result = await checknoxnew.isChecked()
    console.log("checkbox is checked or not: " + result)
    await expect(result).toBeTruthy()

    await checknoxnew.uncheck()
    const result2 = await checknoxnew.isChecked()
    console.log("checkbox is checked or not: " + result2)
    await expect(result2).toBeFalsy()
    
    
    await page.waitForTimeout(2000)
     

})

