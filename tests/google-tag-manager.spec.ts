import { test, expect, type Page } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Google Tag Manager (GTM) Tests
 *
 * The GTM bootstrap is an inline snippet injected by Next.js <Script strategy="lazyOnload">,
 * which runs after the page load event during browser idle time. Tests therefore wait for the
 * `gtm-script` element and for `dataLayer` to be initialized rather than checking immediately.
 */

const GTM_TIMEOUT = 15000

// Wait until the lazyOnload GTM script has been injected and dataLayer initialized.
async function waitForGtm(page: Page) {
  await expect(page.locator('script#gtm-script')).toHaveCount(1, { timeout: GTM_TIMEOUT })
  await expect
    .poll(() => page.evaluate(() => Array.isArray((window as { dataLayer?: unknown }).dataLayer)), {
      timeout: GTM_TIMEOUT,
    })
    .toBe(true)
}

test.describe('Google Tag Manager Integration', () => {
  test('should initialize dataLayer on page load', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const hasDataLayer = await page.evaluate(() => {
      return typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)
    })
    expect(hasDataLayer).toBe(true)
  })

  test('should load GTM script with correct ID', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = page.locator('script#gtm-script')
    await expect(gtmScript).toHaveCount(1)

    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain('googletagmanager.com/gtm.js')
    expect(scriptContent).toContain('dataLayer')
  })

  test('should have GTM noscript fallback in body', async ({ page }) => {
    await page.goto('/')

    // The noscript iframe is server-rendered, so it is present in the HTML immediately.
    const pageContent = await page.content()
    expect(pageContent).toContain('googletagmanager.com/ns.html')
    expect(pageContent).toContain('noscript')
  })

  test('should push events to dataLayer', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const canPushToDataLayer = await page.evaluate(() => {
      if (typeof window.dataLayer === 'undefined') return false
      const initialLength = window.dataLayer.length
      window.dataLayer.push({ event: 'test_event', test: true })
      return window.dataLayer.length > initialLength
    })
    expect(canPushToDataLayer).toBe(true)
  })

  test('should load GTM script after page interaction', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = await page.evaluate(() => {
      const script = document.querySelector('script[id="gtm-script"]')
      return script !== null
    })
    expect(gtmScript).toBe(true)

    const dataLayerInitialized = await page.evaluate(() => {
      return typeof window.dataLayer !== 'undefined'
    })
    expect(dataLayerInitialized).toBe(true)
  })

  test('should work with cookie consent system', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await waitForGtm(page)

    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    await expect(banner).toBeVisible()

    await page.getByRole('button', { name: 'Accept All' }).click()

    // dataLayer should receive a consent update event after accepting.
    await expect
      .poll(
        () =>
          page.evaluate(() => {
            if (typeof window.dataLayer === 'undefined') return false
            return window.dataLayer.some(
              (item: { event?: string }) => item.event === 'consent_update'
            )
          }),
        { timeout: GTM_TIMEOUT }
      )
      .toBe(true)
  })
})

test.describe('Google Tag Manager Configuration', () => {
  test('should load GTM script with configured ID', async ({ page }) => {
    await page.goto('/')
    await waitForGtm(page)

    const gtmScript = page.locator('script#gtm-script')
    await expect(gtmScript).toHaveCount(1)

    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain(testConfig.googleTagManager.id)
  })
})
