import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo & branding visibility tests.
 * Verifies the Project Rebirth phoenix logo and wordmark render in the header.
 */
test.describe('Logo and branding', () => {
  test('should display the phoenix logo in the header', async ({ page }) => {
    await page.goto('/')
    const headerLogo = page.locator(
      `header a[href="/"] img[src*="${testConfig.site.logoSrcFragment}"]`
    )
    await expect(headerLogo).toBeVisible()
    const src = await headerLogo.getAttribute('src')
    expect(src).toBeTruthy()
  })

  test('should display the Project Rebirth wordmark', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header').getByText(testConfig.site.name).first()).toBeVisible()
  })
})
