import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Footer copyright notice tests.
 */
test.describe('Footer Copyright Notice', () => {
  test('should display the Project Rebirth copyright notice', async ({ page }) => {
    await page.goto('/')

    const footerText = page.locator(`footer p:has-text("${testConfig.copyright.searchText}")`)
    await expect(footerText).toBeVisible()
    await expect(footerText).toContainText('©')
    await expect(footerText).toContainText(testConfig.copyright.text)
  })
})
