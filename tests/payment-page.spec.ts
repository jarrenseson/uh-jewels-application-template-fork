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
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('B');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Bob32145@');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('B');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('changeme');
  await page.getByRole('button', { name: 'Signin' }).click();
  await page.getByRole('navigation').getByRole('link').first().click();
  await page.getByRole('link', { name: 'Shop Jewels' }).click();
  await page.goto('http://localhost:3000/OurProductsPage');
  await page.getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Proceed to Payment' }).click();
  await page.getByRole('button', { name: '--' }).first().click();
  await page.getByRole('button', { name: 'Visa' }).click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').fill('afdasdf');
  await page.locator('.col > .row > div').first().dblclick();
  await page.locator('div').filter({ hasText: /^Expiration dateVisa --010203040506070809101112$/ })
    .locator('#dropdown-basic').click();
  await page.getByRole('button', { name: '01' }).click();
  await page.getByPlaceholder('----').click();
  await page.getByPlaceholder('----').click();
  await page.getByPlaceholder('----').fill('1919');
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').fill('121');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').fill('jarren');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').fill('seson');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').fill('kaneohe');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').fill('adf');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').fill('dsdf');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').fill('dfsd');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').fill('fd');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').fill('dsfsdf');
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Phone number$/ }).getByRole('textbox').fill('sdfsdf');
  await page.locator('div').filter({ hasText: /^Phone number$/ }).getByRole('textbox').press('Tab');
  await page.getByRole('button', { name: 'Continue to Shipping Form >>>' }).click();
});
