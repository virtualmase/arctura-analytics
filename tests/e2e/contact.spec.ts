import { test, expect } from '@playwright/test'

test('contact form validation errors display', async ({ page }) => {
  await page.goto('/contact')
  await page.getByRole('button', { name: /send message/i }).click()
  await expect(page.getByText(/name/i)).toBeVisible()
  await expect(page.getByText(/email/i)).toBeVisible()
  await expect(page.getByText(/how can we help/i)).toBeVisible()
  // Fill invalid email
  await page.getByLabel('Email').fill('bad-email')
  await page.getByRole('button', { name: /send message/i }).click()
  await expect(page.getByText(/email/i)).toBeVisible()
})

