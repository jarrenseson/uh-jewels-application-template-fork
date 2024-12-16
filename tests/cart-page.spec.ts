import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('john@foo.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('changeme');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('button', { name: 'Proceed to Payment' }).click();
  await page.goto('http://localhost:3000/payment');
});
