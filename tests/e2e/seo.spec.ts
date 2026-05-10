import { test, expect } from '@playwright/test'

test('home has title and meta tags', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Arctura/i)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /data platforms|analytics|AI/i)
  await expect(page.locator('meta[property="og:title"]')).toBeVisible()
  await expect(page.locator('meta[name="twitter:card"]')).toBeVisible()
})

