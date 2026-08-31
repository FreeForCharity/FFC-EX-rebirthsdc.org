// Legal/policy content for Project Rebirth, transcribed from the official documents.
// Rendered as on-site HTML (no external dependency).

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  /** Optional intro line shown above the bullets. */
  bulletsLead?: string
  bullets?: string[]
}

export type LegalDoc = {
  slug: string
  title: string
  description: string
  effectiveDate?: string
  sections: LegalSection[]
  footerNote?: string
}

const FISCAL_NOTE =
  'Project Rebirth is a 501(c)(3) tax-exempt organization. Fiscally sponsored by The Way of Yeshua Ministries.'

export const LEGAL_DOCS = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'How Project Rebirth collects, uses, and protects the information you provide.',
    effectiveDate: 'August 30, 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'Project Rebirth is committed to protecting the privacy and security of our users, donors, and students. This policy outlines how we collect, use, and safeguard the information you provide to us through our website and other platforms.',
        ],
      },
      {
        heading: '2. Data Collection',
        paragraphs: [
          'We collect information that you voluntarily provide to us, including your full name, email address, phone number, and residential address when you complete a pre-enrollment form, register for programs, or submit inquiries.',
        ],
      },
      {
        heading: '3. Use of Information',
        bulletsLead: 'Your data is used solely to:',
        bullets: [
          'Manage registrations for the Foundry School of Innovation.',
          'Communicate updates regarding the Sustainable Community Development Project.',
          'Process contributions in compliance with 501(c)(3) regulations.',
        ],
      },
      {
        heading: '4. Data Sharing & Disclosure',
        bulletsLead: 'We do not sell your personal information. We may share your data with:',
        bullets: [
          'Fiscal Sponsor: Necessary data is shared with our fiscal sponsor, The Way of Yeshua Ministries, strictly for donation processing and regulatory compliance.',
          'Legal Obligations: We may disclose information if required by law or to comply with valid government regulations.',
          'Third-Party Vendors: Trusted service providers may process data on our behalf for secure payment and form management.',
        ],
      },
      {
        heading: '5. Security',
        paragraphs: [
          'We implement industry-standard security measures to protect your personal information. While we strive to ensure data security, please be aware that no transmission over the internet is completely secure.',
        ],
      },
      {
        heading: '6. Your Rights',
        paragraphs: [
          'You have the right to request access to the data we hold about you and to request the correction or deletion of your personal information from our systems.',
        ],
      },
      {
        heading: '7. Cookies and Analytics',
        paragraphs: [
          'Our website uses cookies. Necessary cookies are required for the site to function. For analytics we use Google Tag Manager and Google Consent Mode: if you visit from the European Economic Area, the United Kingdom, or Switzerland, Google’s tags set no cookies and read no identifiers until you accept through the cookie consent banner — until then only aggregate, cookieless measurement takes place. Everywhere else, analytics cookies are set from your first visit. Which rule applies to your visit is determined by Google from your IP address at the time of your visit; IP geolocation is approximate. (Switzerland is included because Google’s consent defaults cover it; the data of visitors in Switzerland is protected by Switzerland’s Federal Act on Data Protection (FADP) rather than the GDPR.)',
          'You can change or withdraw your choice at any time via the Cookie Preferences link in our footer; withdrawing consent deletes the analytics cookies this site set. This site does not read or respond to the “Do Not Track” or Global Privacy Control browser signals; we do not sell or share personal information, so there is nothing for those signals to opt out of.',
        ],
      },
      {
        heading: '8. Your Rights in the European Union, United Kingdom, and EEA (GDPR)',
        paragraphs: [
          'If you visit from the European Union, the United Kingdom, or the wider European Economic Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our handling of your personal data. We process personal data on the basis of consent (for analytics cookies in those regions), legitimate interests (operating and securing this website), and legal obligation.',
          'You have the right to: access the personal data we hold about you; have inaccurate data rectified; have your data erased; restrict or object to processing; receive your data in a portable format; and withdraw any consent you have given, at any time, without affecting the lawfulness of processing before withdrawal. To exercise these rights, contact us through the channels listed on our website; we will respond within the time limits the GDPR sets. You also have the right to lodge a complaint with your national data protection supervisory authority (in the UK, the Information Commissioner’s Office).',
        ],
      },
      {
        heading: '9. Your California Privacy Rights (CCPA/CPRA)',
        paragraphs: [
          'If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA), gives you specific rights. We do not sell personal information, and do not share it for cross-context behavioral advertising, as those terms are defined by California law — and have not done so in the preceding 12 months. We do not knowingly collect or sell the personal information of anyone under 16.',
          'You have the right to: know what personal information we collect, use, and disclose, and to access it; delete personal information we collected from you; correct inaccurate personal information; opt out of any sale or sharing of personal information (not applicable, since we do neither); limit the use of sensitive personal information; and not be discriminated against for exercising any of these rights. Submit a request through the channels listed on our website; you may use an authorized agent, and we will respond within the timeframes California law requires.',
        ],
      },
      {
        heading: '10. Updates to This Policy',
        paragraphs: [
          'We may update this Privacy Policy periodically. Changes will be posted on our official website, and the “Effective Date” will be updated accordingly.',
        ],
      },
    ],
    footerNote: `${FISCAL_NOTE} This Privacy Policy is subject to applicable federal and state laws.`,
  },

  'terms-of-use': {
    slug: 'terms-of-use',
    title: 'Terms of Use',
    description: 'The terms governing your use of the Project Rebirth website.',
    effectiveDate: 'May 28, 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'By accessing or using the Project Rebirth website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with these terms, please discontinue use of this site immediately.',
        ],
      },
      {
        heading: '2. Use of Content',
        paragraphs: [
          'All content provided on this site—including text, graphics, logos, and technical blueprints—is the property of Project Rebirth or its licensors and is protected by copyright laws. You may access this content for personal, non-commercial use only. Any unauthorized reproduction, distribution, or modification of these materials is strictly prohibited.',
        ],
      },
      {
        heading: '3. User Conduct',
        bulletsLead: 'Users agree not to:',
        bullets: [
          'Use the site for any unlawful purpose.',
          'Attempt to compromise the security of the site or our digital intake systems.',
          'Misrepresent their identity when submitting pre-enrollment or contact forms.',
        ],
      },
      {
        heading: '4. Third-Party Links',
        paragraphs: [
          'Our site may contain links to third-party websites, including our fiscal sponsor, The Way of Yeshua Ministries. We are not responsible for the content or privacy practices of these external sites.',
        ],
      },
      {
        heading: '5. Limitation of Liability',
        paragraphs: [
          'Project Rebirth provides this site on an “as is” and “as available” basis. We make no representations or warranties of any kind regarding the accuracy, completeness, or reliability of the information provided. To the fullest extent permitted by law, Project Rebirth shall not be liable for any damages arising out of your use of this site.',
        ],
      },
      {
        heading: '6. Governing Law',
        paragraphs: [
          'These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Project Rebirth operates.',
        ],
      },
    ],
    footerNote: FISCAL_NOTE,
  },

  'legal-disclosures': {
    slug: 'legal-disclosures',
    title: 'Legal Disclosures & 501(c)(3)',
    description: 'Regulatory, tax, and copyright disclosures for Project Rebirth.',
    sections: [
      {
        heading: '1. Copyright Notice',
        paragraphs: [
          '© 2026 Project Rebirth. All rights reserved. All content on this site, including text, graphics, and logos, is the property of Project Rebirth or its licensors.',
        ],
      },
      {
        heading: '2. Regulatory & Tax Disclosure',
        paragraphs: [
          'Project Rebirth is a 501(c)(3) tax-exempt organization. All financial contributions are tax-deductible to the extent allowed by law. We are fiscally sponsored by The Way of Yeshua Ministries. All financial contributions are processed in accordance with governing fiscal sponsorship agreements.',
        ],
      },
      {
        heading: '3. Fair Housing Compliance',
        paragraphs: [
          'We do business in accordance with the Federal Fair Housing Law. We are committed to providing equal housing opportunities and do not discriminate on the basis of race, color, religion, sex, handicap, familial status, or national origin.',
        ],
      },
      {
        heading: '4. General Notice & Disclaimer',
        paragraphs: [
          'The information provided on this site is for educational purposes only and does not constitute legal, financial, or professional advice. Use of this site is subject to our Privacy Policy and Terms of Use.',
        ],
      },
    ],
    footerNote:
      'This document serves as the official legal disclosure for Project Rebirth as of May 28, 2026.',
  },

  'fair-housing': {
    slug: 'fair-housing',
    title: 'Fair Housing',
    description:
      'Our commitment to doing business in accordance with the Federal Fair Housing Law.',
    sections: [
      {
        heading: 'Equal Housing Opportunity',
        paragraphs: [
          'We do business in accordance with the Federal Fair Housing Law. We are committed to providing equal housing opportunities and do not discriminate on the basis of race, color, religion, sex, handicap, familial status, or national origin.',
        ],
      },
    ],
    footerNote: FISCAL_NOTE,
  },
} satisfies Record<string, LegalDoc>

export type LegalSlug = keyof typeof LEGAL_DOCS
