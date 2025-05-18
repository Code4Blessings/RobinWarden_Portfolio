# Test info

- Name: Portfolio Smoke Tests >> loads / successfully
- Location: /Users/robinwarden/Desktop/Projects/RobinWarden_Portfolio/tests/portfolio.spec.js:21:9

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toBeVisible()

Locator: locator('header')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 10000ms
  - waiting for locator('header')
    14 × locator resolved to <header>…</header>
       - unexpected value "hidden"

    at /Users/robinwarden/Desktop/Projects/RobinWarden_Portfolio/tests/portfolio.spec.js:26:44
```

# Page snapshot

```yaml
- banner
- main:
  - heading "Robin Warden" [level=1]
  - heading "Software Engineer | Frontend & API Developer | AI Automation Enthusiast" [level=2]
  - paragraph: Innovative Software Engineer skilled in React, APIs, and AI-driven automation. I build clean, scalable, user-first experiences with modern tools, powerful workflows, and purposeful design.
  - link:
    - /url: https://www.instagram.com/code4serenitycoloringbooks
  - link:
    - /url: https://www.tiktok.com/@code4serenity_2008
  - link:
    - /url: https://www.linkedin.com/in/robin-warden-7126b054/
  - link:
    - /url: https://github.com/Code4Blessings
  - link:
    - /url: hhttps://www.pinterest.com/code4serenity/
- contentinfo: Copyright © May 2025 | Images provided by unsplash.com and pexels.com
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | const pages = [
   4 |   '/',
   5 |   '/about.html',
   6 |   '/tech.html',
   7 |   '/work.html',
   8 |   '/contact.html',
   9 | ];
  10 |
  11 | const expectedTitles = {
  12 |   '/': /Robin|Portfolio/i,
  13 |   '/about.html': /About/i,
  14 |   '/tech.html': /Tech Skills/i,
  15 |   '/work.html': /Work|Projects/i,
  16 |   '/contact.html': /Contact/i,
  17 | };
  18 |
  19 | test.describe('Portfolio Smoke Tests', () => {
  20 |   for (const path of pages) {
  21 |     test(`loads ${path} successfully`, async ({ page }) => {
  22 |       const url = `http://localhost:5173${path}`;
  23 |       await page.goto(url);
  24 |
  25 |       await expect(page).toHaveTitle(expectedTitles[path]);
> 26 |       await expect(page.locator('header')).toBeVisible({ timeout: 10000 });
     |                                            ^ Error: Timed out 10000ms waiting for expect(locator).toBeVisible()
  27 |     });
  28 |   }
  29 | });
  30 | test.describe('Portfolio Navigation Tests', () => {
  31 |   test.beforeEach(async ({ page }) => {
  32 |     await page.goto('http://localhost:5173/');
  33 |   });
  34 |
  35 |   test('navigates to About page', async ({ page }) => {
  36 |     await page.click('text=About');
  37 |     await expect(page).toHaveURL(/.*about\.html/);
  38 |     await expect(page.locator('h1')).toHaveText(/About/i);
  39 |   });
  40 |
  41 |   test('navigates to Tech Skills page', async ({ page }) => {
  42 |     await page.click('text=Tech Skills');
  43 |     await expect(page).toHaveURL(/.*tech\.html/);
  44 |     await expect(page.locator('h1')).toHaveText(/Tech Skills/i);
  45 |   });
  46 |
  47 |   test('navigates to Work/Projects page', async ({ page }) => {
  48 |     await page.click('text=Work');
  49 |     await expect(page).toHaveURL(/.*work\.html/);
  50 |     await expect(page.locator('h1')).toHaveText(/Work|Projects/i);
  51 |   });
  52 |
  53 |   test('navigates to Contact page', async ({ page }) => {
  54 |     await page.click('text=Contact');
  55 |     await expect(page).toHaveURL(/.*contact\.html/);
  56 |     await expect(page.locator('h1')).toHaveText(/Contact/i);
  57 |   });
  58 | });
```