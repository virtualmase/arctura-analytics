import { test, expect } from '@playwright/test'

test('header and nav links render and mobile menu toggles', async ({ page }) => {
  await page.goto('/')
  // Skip link present
  await expect(page.locator('a.skip-link')).toBeVisible()
  // Desktop nav links
  await expect(page.getByRole('link', { name: 'Solutions' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Careers' })).toBeVisible()
  // Mobile menu toggle
  await page.setViewportSize({ width: 360, height: 720 })
  await page.getByRole('button', { name: /open menu/i }).click()
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
  await page.getByRole('button', { name: /close menu/i }).click()
})

