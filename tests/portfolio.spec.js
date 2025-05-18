import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about.html',
  '/tech.html',
  '/work.html',
  '/contact.html',
];

const expectedTitles = {
  '/': /Robin|Portfolio/i,
  '/about.html': /About/i,
  '/tech.html': /Tech Skills/i,
  '/work.html': /Work|Projects/i,
  '/contact.html': /Contact/i,
};

test.describe('Portfolio Smoke Tests', () => {
  for (const path of pages) {
    test(`loads ${path} successfully`, async ({ page }) => {
      const url = `http://localhost:5173${path}`;
      await page.goto(url);

      await expect(page).toHaveTitle(expectedTitles[path]);
      await expect(page.locator('header')).toBeVisible({ timeout: 10000 });
    });
  }
});
test.describe('Portfolio Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('navigates to About page', async ({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about\.html/);
    await expect(page.locator('h1')).toHaveText(/About/i);
  });

  test('navigates to Tech Skills page', async ({ page }) => {
    await page.click('text=Tech Skills');
    await expect(page).toHaveURL(/.*tech\.html/);
    await expect(page.locator('h1')).toHaveText(/Tech Skills/i);
  });

  test('navigates to Work/Projects page', async ({ page }) => {
    await page.click('text=Work');
    await expect(page).toHaveURL(/.*work\.html/);
    await expect(page.locator('h1')).toHaveText(/Work|Projects/i);
  });

  test('navigates to Contact page', async ({ page }) => {
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact\.html/);
    await expect(page.locator('h1')).toHaveText(/Contact/i);
  });
});