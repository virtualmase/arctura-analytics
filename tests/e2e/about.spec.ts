import { test, expect } from '@playwright/test'

test('about page highlights civic programmes', async ({ page }) => {
  await page.goto('/about')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/We choreograph national registries/i)
  await expect(page.getByRole('heading', { level: 2, name: /Programmes that connect ministries/i })).toBeVisible()
  await expect(page.locator('#registry')).toBeVisible()
  await expect(page.getByRole('link', { name: /Start a conversation/i })).toBeVisible()
})

