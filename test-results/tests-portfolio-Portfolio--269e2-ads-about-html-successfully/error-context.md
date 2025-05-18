# Test info

- Name: Portfolio Smoke Tests >> loads /about.html successfully
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
  - heading "About Me" [level=1]
  - heading "Let’s get acquainted — here’s a quick look at who I am and what I bring to the table." [level=2]
  - img "Robin Warden"
  - heading "BIO" [level=3]
  - paragraph: I’m Robin Warden — a Software Engineer, Frontend & API Developer, and AI Automation Enthusiast passionate about building purposeful tools that solve real-world problems. With a strong foundation in full stack development and a growing expertise in AI-driven solutions, I design and deploy efficient frontends, scalable APIs, and automated workflows. Whether I’m streamlining email marketing with MailerLite, building landing pages, or using AI tools to accelerate design and content creation, I bring creativity, clarity, and precision to every project I touch.
  - heading "🔹 Software Engineer" [level=3]
  - paragraph: I design and build full-stack applications that solve real-world problems using modern development tools. With expertise in JavaScript, React.js, and Node.js, I focus on writing clean, efficient, and scalable code. My experience includes testing with Jest and React Testing Library, working with GraphQL APIs, and managing data using SQL/NoSQL databases. I approach development with a strong foundation in data structures, performance, and user-focused architecture.
  - heading "🔹 Frontend & API Developer" [level=3]
  - paragraph: As a Frontend and API Developer, I create seamless user experiences backed by powerful backends. On the frontend, I build responsive interfaces using React, Sass, and CSS frameworks like Bootstrap. On the backend, I develop RESTful and GraphQL APIs using Node.js and Express. My work includes integrating third-party services, managing authentication flows, and building scalable endpoints that connect clients to data in meaningful, secure ways.
  - heading "🔹 AI Automation Enthusiast" [level=3]
  - paragraph: I’m passionate about using AI tools to streamline workflows and enhance digital content creation. Through my business, Code4Serenity, I’ve designed automated email marketing campaigns with MailerLite, built dynamic landing pages, and leveraged image-generation AI to assist in creating print-ready coloring books. I actively explore automation platforms to boost productivity and apply them to both creative and technical challenges.
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