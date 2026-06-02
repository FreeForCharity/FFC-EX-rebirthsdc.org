// Central site config for Project Rebirth — Sustainable Community Development Project.
// Edit copy/links here without touching component JSX.

export const SITE = {
  name: 'Project Rebirth',
  legalName: 'Project Rebirth, Inc.',
  tagline: 'Sustainable Community Development Project',
  domain: 'rebirthSDC.org',
  url: 'https://rebirthsdc.org',
  email: 'info@rebirthSDC.org',
  phone: '(480) 559-2365',
  phoneHref: 'tel:+14805592365',
  address: {
    line1: '1833 Ruby Avenue SE',
    city: 'Grand Rapids',
    state: 'MI',
    zip: '49507',
  },
  fiscalSponsor: 'The Way of Yeshua Ministries',
  copyrightYear: 2026,
} as const

// External link targets captured verbatim from the Canva design content.
export const LINKS = {
  donate:
    'https://www.zeffy.com/en-US/donation-form/project-rebirth-uniting-communities-to-eradicate-homelessness',
  updatesForm:
    'https://www.zeffy.com/en-US/newsletter-form/sign-up-for-our-newsletter-3549',
  zeffyEmbed:
    'https://www.zeffy.com/en-US/embed/newsletter-form/sign-up-for-our-newsletter-3549',
  privacyPolicy:
    'https://1drv.ms/b/c/d076761c7cd9edda/IQA_6vNxlcTLR4c2nYS3TMD8AdMXDSvJCEJMlWkGT4eWz4M?e=JOOG8A',
  legalDisclosures:
    'https://1drv.ms/b/c/d076761c7cd9edda/IQCyG-DZASWWR4asCJvG_QNaAYkxC3261oVIVY8ggku5o4o?e=rD3ubI',
  fairHousing:
    'https://1drv.ms/b/c/d076761c7cd9edda/IQB1xABVwb4IT5ZXKPCiREIMAcXWCFIaI7tqeNOemxYHvak?e=wcWYhg',
  termsOfUse:
    'https://1drv.ms/b/c/d076761c7cd9edda/IQBMyslI9kSkSKydGt3dgy0RAcMAStJqOYrWUyWoS7vqoOE?e=NHyzOy',
  social: {
    instagram: 'https://instagram.com/sustainablecommunityproject',
    facebook: 'https://facebook.com/share/1BYV22rv6k/',
    x: 'https://x.com/projectrebirth7',
    tiktok: 'https://tiktok.com/@sustainablecommunity2026',
  },
} as const

export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Director', href: '/director' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Technology', href: '/technology' },
  { label: 'Partnerships', href: '/partnerships' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Forge Technology Academy', href: '/resources' },
      { label: 'Foundry School of Innovation', href: '/resources' },
      { label: 'Housing Assistance', href: '/resources' },
      { label: 'Job Placement Assistance', href: '/resources' },
      { label: 'Entrepreneurial & Business Development', href: '/resources' },
      { label: 'Financial Literacy & Stability', href: '/resources' },
      { label: 'Second Chance Resources', href: '/resources' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Veterans Program', href: '/community' },
      { label: 'Foundry School Registration', href: '/community' },
      { label: 'Forge Technology Academy', href: '/community' },
      { label: 'Mentorship Program', href: '/community' },
      { label: 'Internship Program', href: '/community' },
    ],
  },
  { label: 'Volunteer', href: '/volunteers' },
]
