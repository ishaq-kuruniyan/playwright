import test from "@playwright/test";

test("locatortest",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("ABC")
    await page.locator(".form-control").nth(1).fill("XYZ")//use classname and index to locate the element
    await page.locator("[placeholder='Username']").fill("Abid")
    await page.locator("//input[@placeholder='City']").fill("Texas")
    await page.locator("//*[@placeholder='State']").fill("California")
    await page.getByPlaceholder("Zip").fill("123456")
    await page.getByLabel("Agree to terms and conditions").check()  
    await page.getByRole("button",{name:"Submit form"}).click()  
    await page.waitForTimeout(2000)
})
