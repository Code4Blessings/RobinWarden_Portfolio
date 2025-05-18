# Test info

- Name: Portfolio Smoke Tests >> loads /work.html successfully
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
  - heading "My Work" [level=1]
  - heading "Check out some of my projects..." [level=2]
  - link "Coloring Book Automation Screenshot":
    - /url: "#!"
    - img "Coloring Book Automation Screenshot"
  - link "Amazon Listing & Coloring Book Automation":
    - /url: https://www.amazon.com/stores/Code4Serenity-Publishing/author/B0DPTJ6FLG?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true&ccs_id=57bf4d03-1667-40a6-960f-8552e61eb95b
  - link "MailerLite Campaign Screenshot":
    - /url: "#!"
    - img "MailerLite Campaign Screenshot"
  - link "MailerLite Campaigns":
    - /url: https://pages.code4serenity.com/freepages
  - link "Landing Page Design Screenshot":
    - /url: "#!"
    - img "Landing Page Design Screenshot"
  - link "Landing Page Design":
    - /url: https://pages.code4serenity.com/freepages
  - link "Code4Serenity Logo Design":
    - /url: "#!"
    - img "Code4Serenity Logo Design"
  - 'link "Logo Design: Code4Serenity"':
    - /url: "#!"
  - link "Writing Receipts":
    - /url: rta.html
    - img "Writing Receipts"
  - link "Receipt Tracking App":
    - /url: https://lambda-webpt-rta.github.io/bw_rta_web_ui_robin/
  - link "GitHub":
    - /url: https://github.com/lambda-webpt-rta/bw_rta_web_ui_robin
  - link "Farm Fresh App":
    - /url: farmFresh.html
    - img "Farm Fresh App"
  - link "Farm Fresh App":
    - /url: https://farmfreshapp.now.sh/
  - link "GitHub":
    - /url: https://github.com/Code4Blessings/FarmFreshApp
  - link "Todo App":
    - /url: todo.html
    - img "Todo App"
  - link "Todo List App":
    - /url: https://reducer-todo.robincw35.now.sh/
  - link "GitHub":
    - /url: https://github.com/Code4Blessings/reducer-todo
  - link "Cat-Facts-App":
    - /url: catFacts.html
    - img "Cat-Facts-App"
  - link "Cat Facts App":
    - /url: https://cat-facts-app.now.sh/
  - link "GitHub":
    - /url: https://github.com/Code4Blessings/Cat-Facts-App
  - link "spotify cover page":
    - /url: spotify.html
    - img "spotify cover page"
  - link "Spotify Song Suggester App":
    - /url: https://frontend-tan.now.sh/
  - link "GitHub":
    - /url: https://github.com/Spotify-Song-Suggester-3/backend
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