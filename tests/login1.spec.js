import {test,expect} from '@playwright/test'

test.describe('Login Site 1', ()=>{

test('Demo Login Test 1', async({page})=> {
    
    await page.goto('https://demo.applitools.com/')
    //pauses and opens inspector
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('janedoe')
    await page.getByPlaceholder('Enter your password').fill('password12345')
    await page.getByRole('link', { name: 'Sign in' }).click()

    
})
})


test.describe('Login Site 2', ()=>{

test.afterAll(async({page})=> {
    await page.close();
})

test.beforeEach(async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    
  
})
test('check leave page', async({page})=>{
    await page.getByRole('button', { name: 'Assign Leave' }).click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('b');
    await page.getByRole('option', { name: 'Cecil Bonaparte' }).click();
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'CAN - Vacation' }).click();
    await page.locator('form i').nth(2).click();
    await page.getByText('23', { exact: true }).click();
    await page.locator('form i').nth(3).click();
    await page.getByText('27').click();
    await page.locator('form i').nth(4).click();
    await page.getByRole('option', { name: 'All Days' }).click();
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByRole('option', { name: 'Specify Time' }).click();
    await page.getByRole('button', { name: 'Assign' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
})


})