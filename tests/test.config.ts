/**
 * Test Configuration for Template Customization
 *
 * Single source of truth for content-specific values used in E2E tests.
 * Update these values when customizing the template for a new organization.
 */

export const testConfig = {
  /**
   * Site / branding
   * Used in: tests/logo.spec.ts, tests/image-loading.spec.ts, tests/routes.spec.ts
   */
  site: {
    name: 'PROJECT REBIRTH',
    logoSrcFragment: 'logo-phoenix',
    navHomeAriaLabel: 'Project Rebirth home',
    navSections: ['Home', 'Missions', 'Director', 'Technology', 'Partnerships'],
  },

  /**
   * Routes that should render successfully.
   * Used in: tests/routes.spec.ts
   */
  routes: [
    '/',
    '/mission',
    '/director',
    '/technology',
    '/partnerships',
    '/resources',
    '/community',
    '/portal',
    '/privacy-policy',
    '/terms-of-use',
    '/legal-disclosures',
    '/fair-housing',
  ],

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Project Rebirth. All rights reserved.',
    searchText: 'All rights reserved',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
