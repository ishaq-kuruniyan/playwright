import test from '@playwright/test';
test.only("mytest", async ({ browser }) => {
    const context = await browser.newContext() // new tab
    const page = await context.newPage() // new page
    await page.goto("https://www.google.com/")
})
test("mytest2",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.obsqura.com/")
})