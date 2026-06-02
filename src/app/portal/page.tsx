import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
import { PORTAL_PAGE } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: PORTAL_PAGE.lead,
}

export default function PortalPage() {
  return (
    <Section tone="blueprint">
      <div className="mx-auto max-w-3xl rounded-lg bg-white/80 p-8 text-center shadow-lg md:p-12">
        <p className="font-nav text-xs font-semibold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
          {PORTAL_PAGE.badge}
        </p>
        <h1 className="pr-heading mt-3 text-3xl md:text-4xl">{PORTAL_PAGE.heading}</h1>
        <p className="mt-6 font-display text-lg font-bold text-[var(--pr-maroon)]">
          {PORTAL_PAGE.lead}
        </p>
        <p className="mt-4 leading-relaxed text-[var(--pr-body)]">{PORTAL_PAGE.body}</p>

        <h2 className="pr-heading mt-10 text-xl">{PORTAL_PAGE.stayConnectedHeading}</h2>
        <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{PORTAL_PAGE.stayConnected}</p>

        <div className="mt-8">
          <a
            href={LINKS.updatesForm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rebirth"
          >
            Sign Up for Updates
          </a>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-[var(--pr-body)]/70">
          {PORTAL_PAGE.regulatory}
        </p>
      </div>
    </Section>
  )
}
