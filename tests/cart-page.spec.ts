import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.coim');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('B');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Bob32145@');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.locator('#basic-navbar-nav').getByRole('link').nth(3).click();
  await page.getByRole('link', { name: 'Proceed to Payment' }).click();
});
