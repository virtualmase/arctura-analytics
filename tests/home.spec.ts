import { test, expect } from '@playwright/test'

test('homepage has hero and nav links', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /From Data to Decisions/i })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Solutions' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
})

