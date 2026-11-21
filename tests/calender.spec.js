import test, { expect } from "@playwright/test"

test("calender", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const datepicker = page.locator(".form-control.datepicker")
    await datepicker.click()
    await page.locator(".datepicker-days").locator("th.datepicker-switch").click()
    await page.locator(".datepicker-months").locator("th.datepicker-switch").click()


    const year = 2015
    const month = 9
    const day = 2

    while (true) {
        const yearrange = await page.locator(".datepicker-years").locator("th.datepicker-switch").textContent()
        console.log("year range is: " + yearrange)// take th range of years

        const yeararray = yearrange.split("-")// split the range of years into an array
        const startyear = parseInt(yeararray[0])// take the first year of the range and into number from string 
        const endyear = parseInt(yeararray[1])// take the last year of the range and into number from string
        console.log("start year is: " + startyear)
        console.log("end year is: " + endyear)

        if (year >= startyear && year <= endyear) {
            
            
            break;

        }

        else if (year < startyear) {
            await page.locator(".datepicker-years").locator(".prev").click()

        }
        else {
            await page.locator(".datepicker-years").locator(".next").click()
        }
    }
    await page.locator(".datepicker-years").locator(".year",{hasText:year.toString()}).click()
    await page.locator(".datepicker-months").locator(".month").nth(month -1).click()
    await page.locator(".datepicker-days").locator(".day:not(.new)",{hasText:new RegExp(`^${day}$`)}).click()// need to check more exact date due to the fact that there are multiple days with the same number in the calendar. For example, if we want to select 2nd of September 2015, we need to make sure that we are selecting the correct day and not the 2nd of October or November. So we use a regular expression to match the exact day number.
    await page.locator("#button-one").click()
    await page.waitForTimeout(20000)

})