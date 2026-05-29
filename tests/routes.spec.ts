import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Smoke tests for the Project Rebirth multi-route site.
 * Verifies every section route renders with header + footer, and that the
 * primary navigation links are present on the homepage.
 */
test.describe('Site routes', () => {
  for (const route of testConfig.routes) {
    test(`route ${route} renders header and footer`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('header')).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()
    })
  }

  test('homepage exposes the primary nav sections', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('header nav')
    for (const label of testConfig.site.navSections) {
      await expect(nav.getByText(label, { exact: true }).first()).toBeVisible()
    }
  })

  test('homepage shows the Partner With Us call to action', async ({ page }) => {
    await page.goto('/')
    const partnerLink = page.locator('a', { hasText: 'Partner With Us' }).first()
    await expect(partnerLink).toBeVisible()
    await expect(partnerLink).toHaveAttribute('href', /zeffy\.com/)
  })
})
