import { test } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('john@foo.com');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').press('CapsLock');
  await page.getByPlaceholder('Enter your password').fill('B');
  await page.getByPlaceholder('Enter your password').press('CapsLock');
  await page.getByPlaceholder('Enter your password').fill('changeme');
  await page.getByPlaceholder('Enter your password').press('Enter');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Shop Jewels' }).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('row', { name: 'The Kona 2 $50.00 Edit' }).getByRole('link').click();
  await page.getByRole('row', { name: 'The Kona 2 $50.00 Edit' }).getByRole('link').click();
  await page.getByRole('row', { name: 'The Kona 2 $50.00 Edit' }).getByRole('link').click();
  await page.getByPlaceholder('Enter quantity').click();
  await page.getByPlaceholder('Enter quantity').fill('1');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('cell', { name: 'Total:' }).click();
});
