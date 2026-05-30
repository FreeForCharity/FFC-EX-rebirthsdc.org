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
    effectiveDate: 'May 28, 2026',
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
        heading: '7. Updates to This Policy',
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
