import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Image loading tests — verifies the header logo asset loads successfully.
 */
test.describe('Image Loading', () => {
  test('header logo should be visible and have a src', async ({ page }) => {
    await page.goto('/')
    const headerLogo = page.locator(
      `header a[href="/"] img[src*="${testConfig.site.logoSrcFragment}"]`
    )
    await expect(headerLogo).toBeVisible()
    const src = await headerLogo.getAttribute('src')
    expect(src).toBeTruthy()
  })

  test('logo image request should return 200', async ({ page }) => {
    const imageRequests: Array<{ url: string; status: number }> = []
    page.on('response', (response) => {
      if (response.url().includes(testConfig.site.logoSrcFragment)) {
        imageRequests.push({ url: response.url(), status: response.status() })
      }
    })

    await page.goto('/')
    const headerLogo = page.locator(
      `header a[href="/"] img[src*="${testConfig.site.logoSrcFragment}"]`
    )
    await expect(headerLogo).toBeVisible()

    expect(imageRequests.length).toBeGreaterThan(0)
    for (const request of imageRequests) {
      expect(request.status).toBe(200)
    }
  })
})
