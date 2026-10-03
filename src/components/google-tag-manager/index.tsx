'use client'

import { useEffect } from 'react'

/**
 * Serialises the container id for embedding in the inline script body.
 *
 * `JSON.stringify` supplies the quotes and escapes quotes and newlines, but
 * NOT `<` — a value containing `</script>` would close the element early and
 * let the rest parse as markup. U+2028/U+2029 are escaped too: legal in JSON,
 * illegal in a JS string literal before ES2019.
 *
 * Defence in depth, not a live hole: the id is a build-time constant set by a
 * maintainer, never by a visitor. It matters because `isConfigured()` only
 * rejects placeholders — nothing validates the SHAPE of what lands here.
 *
 * Deliberately local rather than imported from the cookie-consent component,
 * which exports the same helper: that module is `'use client'`, so importing
 * from it makes this a client-boundary call and breaks the build wherever
 * this component renders on the server.
 */
function scriptString(value: string): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

// Google Tag Manager ID
const GTM_ID = 'GTM-TQ5H8HPR'

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
    })(window,document,'script','dataLayer',${scriptString(GTM_ID)});
  `
  document.head.appendChild(script)
}

/**
 * Loads Google Tag Manager on every pageview. Whether the Google tags inside
 * the container may use cookies is governed by Google Consent Mode v2: the
 * global consent defaults set in the layout <head> (see
 * src/lib/consent-mode.ts) deny storage in the EEA/UK/CH until the visitor
 * accepts through the cookie-consent banner, and grant it everywhere else — so
 * non-EEA visits are measured from the first pageview and EEA visits are
 * counted cookielessly until consent.
 *
 * (Previously this component loaded GTM only after an explicit analytics
 * grant, which made every visitor who ignored the banner invisible,
 * worldwide. Consent Mode replaces load-gating with storage-gating.)
 */

export default function GoogleTagManager() {
  useEffect(() => {
    injectGtm()
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
