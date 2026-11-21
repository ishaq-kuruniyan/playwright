import test, { expect } from "@playwright/test";

test("childwindow", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const input1 = page.locator(".btn.btn-primary.windowSingle")

    console.log("parent page title is :" + await page.title())

    const [newpage] = await Promise.all([
        context.waitForEvent("page"), //wait for new event
        input1.click() 
     ])
        await newpage.waitForLoadState() //need to add while handling childwindow
        console.log("child page title is :" + await newpage.title())

        
  




    await page.waitForTimeout(20000)
})
