# External Dependencies and Third-Party Services

**Last Updated:** May 30, 2026

This document lists the external dependencies and third-party services used by the
**Project Rebirth** website (https://rebirthsdc.org). It covers the services we
intentionally integrate and how user privacy is handled. The site is a fully static
export (Next.js `output: 'export'`) hosted on GitHub Pages, so there is no
application backend — all third-party calls happen client-side in the browser.

## Table of Contents

- [Overview](#overview)
- [Direct Integrations](#direct-integrations)
- [Consent Model](#consent-model)
- [Build & Development Dependencies](#build--development-dependencies)
- [Privacy and Data Handling](#privacy-and-data-handling)

## Overview

Project Rebirth uses a small set of third-party services for donations, analytics,
and updates sign-up. Analytics and marketing services are **gated behind the cookie
consent banner** and do not load until the visitor opts in.

**Privacy Notice:** Visitors control analytics and marketing cookies through the
cookie consent banner. See the [Privacy Policy](/privacy-policy) for details.

## Direct Integrations

### Donations

#### Zeffy

- **Purpose:** Zero-fee donation processing ("Partner With Us" / "Make a Contribution" buttons)
- **Domain:** `www.zeffy.com`
- **Implementation:** External link / embedded form; URL in `src/data/project-rebirth/site.ts`
- **Preconnect:** Configured in `src/app/layout.tsx`
- **Privacy Policy:** https://www.zeffy.com/privacy

### Updates Sign-Up

#### Google Forms

- **Purpose:** "Sign Up for Updates" on the `/portal` (Coming Soon) page
- **Domain:** `docs.google.com`
- **Implementation:** External link; URL in `src/data/project-rebirth/site.ts`
- **Privacy Policy:** https://policies.google.com/privacy

### Legal Documents

#### Microsoft OneDrive

- **Purpose:** Source PDFs for legal documents are also hosted on OneDrive (the
  on-site `/privacy-policy`, `/terms-of-use`, and `/legal-disclosures` pages render
  the same content natively; OneDrive links are provided as downloadable originals)
- **Domain:** `1drv.ms`
- **Implementation:** External links in `src/data/project-rebirth/site.ts`
- **Privacy Policy:** https://privacy.microsoft.com/privacystatement

### Analytics & Marketing (Consent-Gated)

All of the following load **only after** the visitor accepts the relevant cookie
category. Until then, no script is injected and no request is made.

#### Google Tag Manager (GTM)

- **Purpose:** Tag management container
- **Implementation:** `src/components/google-tag-manager/index.tsx`
- **Load Strategy:** Injected only after **analytics** consent; listens for the
  `cookie-consent-updated` event and pushes a `consent_update` to `dataLayer`
- **Container ID:** currently a placeholder inherited from the template
  (`GTM-TQ5H8HPR`) — a Project Rebirth container is pending (see repo issues)
- **Privacy Policy:** https://policies.google.com/privacy

#### Google Analytics 4

- **Purpose:** Website traffic analytics
- **Implementation:** Loaded by `src/components/cookie-consent/index.tsx` on **analytics** consent, via `gtag/js`
- **Measurement ID:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` (placeholder `G-XXXXXXXXXX` until provisioned)
- **Privacy:** `anonymize_ip: true`; cookies cleared on consent withdrawal
- **Privacy Policy:** https://policies.google.com/privacy · **Opt-out:** https://tools.google.com/dlpage/gaoptout

#### Microsoft Clarity

- **Purpose:** Session replay / heatmaps
- **Implementation:** Loaded by `src/components/cookie-consent/index.tsx` on **analytics** consent
- **Project ID:** environment-configured (unset by default)
- **Privacy Policy:** https://privacy.microsoft.com/privacystatement

#### Meta Pixel (Facebook)

- **Purpose:** Conversion / advertising tracking
- **Implementation:** Loaded by `src/components/cookie-consent/index.tsx` on **marketing** consent
- **Pixel ID:** `NEXT_PUBLIC_META_PIXEL_ID` (placeholder until provisioned)
- **Privacy Policy:** https://www.facebook.com/privacy/policy/

## Consent Model

The cookie banner (`src/components/cookie-consent/index.tsx`) stores preferences in
`localStorage` under `cookie-consent` and dispatches a `cookie-consent-updated`
event when the visitor chooses. Categories:

| Category   | Services                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Necessary  | Consent preference itself                  | Always  |
| Functional | Essential site features                    | Always  |
| Analytics  | GTM, Google Analytics 4, Microsoft Clarity | Opt-in  |
| Marketing  | Meta Pixel                                 | Opt-in  |

On withdrawal, analytics/marketing scripts stop loading and their cookies are
cleared (`deleteAnalyticsCookies`).

## Build & Development Dependencies

These are used at build/CI time only and are **not** part of the deployed site:

- **Next.js** (App Router, static export) · **React** · **TypeScript** · **Tailwind CSS v4** · **PostCSS**
- **next/font** — Google fonts (Cinzel, Montserrat, Open Sans) downloaded at build time and self-hosted
- **ESLint** · **Prettier** · **Jest** + Testing Library + jest-axe · **Playwright** · **Husky** · **Commitlint**
- **Lighthouse CI** · **CodeQL** · **Linkinator** · **Dependabot**

See `package.json` for the complete list.

## Privacy and Data Handling

### Principles

1. **Minimal collection** — only what's needed for the site and its improvement
2. **Consent first** — analytics and marketing require explicit opt-in
3. **Transparency** — third-party services documented here
4. **HTTPS only** — all external resources loaded over HTTPS
5. **Self-hosted assets** — images, hero video, fonts, and the logo are served from
   the site (no external media/CDN dependency at runtime)

### User Rights

Visitors may access, correct, or delete their data, opt out of analytics/marketing,
and withdraw consent at any time. Contact details are on the
[Privacy Policy](/privacy-policy) page.

## Related Documentation

- [Privacy Policy](/privacy-policy) — how user data and cookies are handled
- [SECURITY.md](./SECURITY.md) — security practices and reporting

---

**Note:** This document is maintained as part of our commitment to transparency. If
you notice a missing or inaccurate dependency, please open an issue.
