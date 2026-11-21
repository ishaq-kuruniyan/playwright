import test from '@playwright/test';

test("mytest",async({page})=>{
    await page.goto("https://www.obsqurazone.com/")
})

//npx playwright test childwindow.spec.js

//git init
//git status
//git add . 
//git config --global  user.name "ishaqkuruniyan"
//git config --global  user.email "muhdishaqk10@gmail.com"
//git commit -m "first commit"
//git push -u origin main