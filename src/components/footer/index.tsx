import React from 'react'
import Link from 'next/link'
import { SITE, LINKS } from '@/data/project-rebirth/site'

/** Simple inline Equal Housing Opportunity mark. */
const EqualHousingMark: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    className="h-12 w-12 text-white/80"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    aria-hidden="true"
  >
    <path d="M32 10 6 30h6v22h40V30h6L32 10z" strokeLinejoin="round" />
    <line x1="24" y1="38" x2="40" y2="38" />
    <line x1="24" y1="45" x2="40" y2="45" />
  </svg>
)

const legalLinks = [
  { name: 'Privacy Policy', href: LINKS.privacyPolicy },
  { name: 'Terms of Use', href: LINKS.termsOfUse },
  { name: 'Legal Disclosures', href: LINKS.legalDisclosures },
  { name: 'Regulatory & 501(c)(3)', href: LINKS.legalDisclosures },
]

const Footer: React.FC = () => {
  return (
    <footer className="bp-grid-dark text-white">
      <div className="pr-container grid grid-cols-1 gap-8 py-14 md:grid-cols-3">
        {/* Contact & Location */}
        <div className="space-y-2">
          <h3 className="font-display text-lg uppercase tracking-wide text-white">
            Contact &amp; Location
          </h3>
          <p className="text-sm text-white/80">{SITE.legalName}</p>
          <p className="text-sm text-white/70">
            Physical Mailing Address
            <br />
            {SITE.address.line1}
            <br />
            {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
          </p>
          <div className="pt-2 text-sm">
            <p className="text-white/60">Phone</p>
            <a href={SITE.phoneHref} className="text-white hover:text-[var(--pr-flame)]">
              {SITE.phone}
            </a>
          </div>
          <div className="text-sm">
            <p className="text-white/60">Business Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-white hover:text-[var(--pr-flame)] break-all"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="font-display text-lg uppercase tracking-wide text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[var(--pr-flame)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-xs text-white/60">
            Project Rebirth is a 501(c)(3) tax-exempt organization. Donations are tax-deductible to
            the extent allowed by law.
          </p>
        </div>

        {/* Fair Housing + Fiscal Sponsorship */}
        <div className="space-y-4">
          <h3 className="font-display text-lg uppercase tracking-wide text-white">
            Fair Housing / Gov
          </h3>
          <a
            href={LINKS.fairHousing}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <EqualHousingMark />
            <span className="text-sm text-white/80">
              We do business in accordance with the Federal Fair Housing Law.
            </span>
          </a>
          <div className="pt-2 text-xs text-white/60">
            <p className="font-semibold text-white/80">Fiscal Sponsorship</p>
            <p>
              Fiscally sponsored by {SITE.fiscalSponsor}. All financial contributions are processed
              in accordance with governing fiscal sponsorship agreements.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        <p>
          Copyright Notice © {SITE.copyrightYear} {SITE.name}. All rights reserved.{' '}
          <Link href="/portal" className="text-[var(--pr-flame)] hover:underline">
            {SITE.domain}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
