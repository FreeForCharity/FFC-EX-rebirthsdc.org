import { test, expect, type Page } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Google Tag Manager (GTM) Tests
 *
 * GTM loads on every pageview; whether its tags may use cookies is governed by
 * Google Consent Mode v2 (global consent defaults set in the layout <head>,
 * lifted or lowered by `consent update` pushes from the cookie banner). The
 * container itself is therefore present before any consent interaction.
 */

const GTM_TIMEOUT = 15000

// Click "Accept All" on the cookie banner to grant analytics consent.
async function acceptConsent(page: Page) {
  await page.getByRole('button', { name: 'Accept All' }).click({ timeout: GTM_TIMEOUT })
}

// Wait until the consent-gated GTM script has been injected and dataLayer initialized.
async function waitForGtm(page: Page) {
  await expect(page.locator('script#gtm-script')).toHaveCount(1, { timeout: GTM_TIMEOUT })
  await expect
    .poll(() => page.evaluate(() => Array.isArray((window as { dataLayer?: unknown }).dataLayer)), {
      timeout: GTM_TIMEOUT,
    })
    .toBe(true)
}

test.describe('Google Tag Manager Integration', () => {
  test('loads GTM before any consent, with Consent Mode defaults queued first', async ({
    page,
  }) => {
    await page.goto('/')
    // Banner is shown; no consent yet -> GTM is already injected (Consent
    // Mode gates cookie storage, not loading).
    await expect(page.locator('[role="region"][aria-label="Cookie consent notice"]')).toBeVisible()
    await waitForGtm(page)

    // The layout <head> bootstrap pushed exactly ONE `consent default` call
    // -- unscoped, denying -- onto the dataLayer before any user
    // interaction. A second call, or a `region` on this one, would
    // reintroduce a class of visitor measured before they consented, so
    // both the count and the absence of `region` are asserted. gtag()
    // pushes an `arguments` object, so entries are inspected positionally.
    const defaults = await page.evaluate(() => {
      const dl = (window as { dataLayer?: unknown }).dataLayer
      if (!Array.isArray(dl)) return []
      return dl
        .filter((item) => {
          const args = item as { [key: number]: unknown }
          return Boolean(args) && args[0] === 'consent' && args[1] === 'default'
        })
        .map((item) => (item as { [key: number]: unknown })[2] as Record<string, unknown>)
    })
    expect(defaults).toHaveLength(1)
    expect(defaults[0].analytics_storage).toBe('denied')
    expect(defaults[0].ad_storage).toBe('denied')
    expect(defaults[0].region).toBeUndefined()
  })

  test('should initialize dataLayer after consent', async ({ page }) => {
    await page.goto('/')
    await acceptConsent(page)
    await waitForGtm(page)

    const hasDataLayer = await page.evaluate(() => {
      return typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)
    })
    expect(hasDataLayer).toBe(true)
  })

  test('should load GTM script with correct ID after consent', async ({ page }) => {
    await page.goto('/')
    await acceptConsent(page)
    await waitForGtm(page)

    const gtmScript = page.locator('script#gtm-script')
    await expect(gtmScript).toHaveCount(1)

    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain('googletagmanager.com/gtm.js')
    expect(scriptContent).toContain('dataLayer')
  })

  test('should have GTM noscript fallback in body', async ({ page }) => {
    await page.goto('/')

    // The noscript iframe is server-rendered, so it is present regardless of consent.
    const pageContent = await page.content()
    expect(pageContent).toContain('googletagmanager.com/ns.html')
    expect(pageContent).toContain('noscript')
  })

  test('should push events to dataLayer after consent', async ({ page }) => {
    await page.goto('/')
    await acceptConsent(page)
    await waitForGtm(page)

    const canPushToDataLayer = await page.evaluate(() => {
      if (typeof window.dataLayer === 'undefined') return false
      const initialLength = window.dataLayer.length
      window.dataLayer.push({ event: 'test_event', test: true })
      return window.dataLayer.length > initialLength
    })
    expect(canPushToDataLayer).toBe(true)
  })

  test('should work with cookie consent system', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    const banner = page.locator('[role="region"][aria-label="Cookie consent notice"]')
    await expect(banner).toBeVisible()

    await acceptConsent(page)
    await waitForGtm(page)

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
  test('should load GTM script with configured ID after consent', async ({ page }) => {
    await page.goto('/')
    await acceptConsent(page)
    await waitForGtm(page)

    const gtmScript = page.locator('script#gtm-script')
    await expect(gtmScript).toHaveCount(1)

    const scriptContent = await gtmScript.innerHTML()
    expect(scriptContent).toContain(testConfig.googleTagManager.id)
  })
})
