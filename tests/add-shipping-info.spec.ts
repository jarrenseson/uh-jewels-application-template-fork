import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('changeme');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.getByRole('link', { name: 'Shipping' }).click();
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('ad');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('d');
  await page.locator('input[name="lastName"]').press('Tab');
  await page.locator('input[name="address1"]').fill('d');
  await page.locator('input[name="address1"]').press('Tab');
  await page.locator('input[name="address2"]').fill('df');
  await page.locator('input[name="address2"]').press('Tab');
  await page.locator('input[name="city"]').fill('df');
  await page.locator('input[name="city"]').press('Tab');
  await page.locator('input[name="zip"]').fill('f');
  await page.locator('input[name="zip"]').press('Tab');
  await page.locator('input[name="state"]').fill('c');
  await page.locator('input[name="state"]').press('Tab');
  await page.locator('input[name="country"]').fill('ds');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});
