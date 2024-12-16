import { test } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('admin@foo.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('changeme');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'List New Products' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('a');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('adfa');
  await page.locator('input[name="name"]').press('Tab');
  await page.getByRole('spinbutton').fill('3');
  await page.getByRole('spinbutton').press('Tab');
  await page.locator('input[name="description"]').fill('dsaf');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('input[name="image"]').click();
  await page.locator('input[name="image"]').fill('asdf');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});
