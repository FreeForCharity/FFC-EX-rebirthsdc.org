'use client'

import { useEffect } from 'react'

// Google Tag Manager ID
const GTM_ID = 'GTM-TQ5H8HPR'

/** True if the stored cookie-consent grants analytics. */
function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem('cookie-consent')
    if (!raw) return false
    return JSON.parse(raw)?.analytics === true
  } catch {
    return false
  }
}

/** Inject the GTM container exactly once. */
function injectGtm() {
  if (typeof document === 'undefined' || document.getElementById('gtm-script')) return
  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `
  document.head.appendChild(script)
}

/**
 * Loads Google Tag Manager only after the user grants analytics consent.
 * Consent is read from localStorage ('cookie-consent') and the cookie-consent
 * banner dispatches a 'cookie-consent-updated' event when preferences change.
 */
export default function GoogleTagManager() {
  useEffect(() => {
    if (hasAnalyticsConsent()) injectGtm()

    const onConsentUpdate = (e: Event) => {
      const detail = (e as CustomEvent).detail as { analytics?: boolean } | undefined
      if (detail?.analytics ?? hasAnalyticsConsent()) injectGtm()
    }
    window.addEventListener('cookie-consent-updated', onConsentUpdate)
    return () => window.removeEventListener('cookie-consent-updated', onConsentUpdate)
  }, [])

  return null
}

// noscript iframe fallback (rendered in <body>); only relevant when JS is disabled.
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
