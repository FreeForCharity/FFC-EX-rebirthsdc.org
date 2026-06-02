import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { SITE, LINKS } from '@/data/project-rebirth/site'

const EqualHousingMark: React.FC = () => (
  <img
    src={assetPath('/Images/project-rebirth/equal-housing.png')}
    alt="Equal Housing Opportunity"
    className="h-12 w-12 shrink-0 object-contain"
  />
)

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-of-use' },
  { name: 'Legal Disclosures', href: '/legal-disclosures' },
  { name: 'Regulatory & 501(c)(3)', href: '/legal-disclosures' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: LINKS.social.facebook,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: LINKS.social.instagram,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: LINKS.social.x,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: LINKS.social.tiktok,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bp-grid-dark text-white">
      <div className="pr-container grid grid-cols-1 gap-8 py-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {/* Contact Us */}
        <div className="space-y-3">
          <h3 className="font-display text-base uppercase tracking-wide text-white">Contact Us</h3>
          <p className="text-sm text-white/80">{SITE.legalName}</p>
          <p className="text-xs text-white/60">Grand Rapids, MI — United States</p>
          <div className="pt-1 space-y-1">
            <p className="text-white/50 text-xs uppercase tracking-wide">Phone</p>
            <a
              href={SITE.phoneHref}
              className="text-sm text-white hover:text-[var(--pr-flame)] transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-white/50 text-xs uppercase tracking-wide">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-xs text-white hover:text-[var(--pr-flame)] transition-colors break-all"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* Support & FAQ */}
        <div className="space-y-3">
          <h3 className="font-display text-base uppercase tracking-wide text-white">Support</h3>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${SITE.email}?subject=Support Request`}
                className="text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
              >
                Get Help / Support
              </a>
            </li>
            <li>
              <Link
                href="/portal"
                className="text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
              >
                Innovation Portal
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}?subject=General Inquiry`}
                className="text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
              >
                General Inquiries
              </a>
            </li>
          </ul>
          <h3 className="font-display text-base uppercase tracking-wide text-white pt-2">FAQ</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/mission"
                className="text-xs text-white/70 hover:text-[var(--pr-flame)] transition-colors"
              >
                What is Project Rebirth?
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className="text-xs text-white/70 hover:text-[var(--pr-flame)] transition-colors"
              >
                How does 3D printing work?
              </Link>
            </li>
            <li>
              <Link
                href="/partnerships"
                className="text-xs text-white/70 hover:text-[var(--pr-flame)] transition-colors"
              >
                How do I become a partner?
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-xs text-white/70 hover:text-[var(--pr-flame)] transition-colors"
              >
                How do I get involved?
              </Link>
            </li>
            <li>
              <a
                href={LINKS.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/70 hover:text-[var(--pr-flame)] transition-colors"
              >
                How do I donate?
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h3 className="font-display text-base uppercase tracking-wide text-white">Legal</h3>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-xs text-white/50">
            Project Rebirth is a 501(c)(3) tax-exempt organization. Donations are tax-deductible to
            the extent allowed by law.
          </p>
        </div>

        {/* Quick Links — #68 */}
        <div className="space-y-3">
          <h3 className="font-display text-base uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: 'Our Mission', href: '/mission' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'Technology', href: '/technology' },
              { label: 'Partnerships', href: '/partnerships' },
              { label: 'Resources', href: '/resources' },
              { label: 'Community', href: '/community' },
              { label: 'Innovation Portal', href: '/portal' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h3 className="font-display text-base uppercase tracking-wide text-white">Follow Us</h3>
          <ul className="space-y-3">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-[var(--pr-flame)] transition-colors"
                  aria-label={`Project Rebirth on ${s.name}`}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fair Housing */}
        <div className="space-y-4">
          <h3 className="font-display text-base uppercase tracking-wide text-white">
            Fair Housing / Gov
          </h3>
          <Link
            href="/fair-housing"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <EqualHousingMark />
            <span className="text-xs text-white/80">
              We do business in accordance with the Federal Fair Housing Law.
            </span>
          </Link>
          <div className="pt-2 text-xs text-white/50">
            <p className="font-semibold text-white/70 mb-1">Fiscal Sponsorship</p>
            <p>
              Fiscally sponsored by {SITE.fiscalSponsor}. All financial contributions are processed
              in accordance with governing fiscal sponsorship agreements.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        <p>
          Copyright © {SITE.copyrightYear} {SITE.name}. All rights reserved.{' '}
          <Link href="/portal" className="text-[var(--pr-flame)] hover:underline">
            {SITE.domain}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
