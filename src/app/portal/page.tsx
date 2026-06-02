import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { PORTAL_PAGE } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Innovation Portal — Coming Soon',
  description: PORTAL_PAGE.lead,
}

const upcomingPortals = [
  {
    name: 'Foundry School of Innovation',
    desc: 'Pre-enrollment portal for innovation research tracks, curriculum scheduling, and student intake.',
    cta: 'Join the Waitlist',
  },
  {
    name: 'Housing Assistance Intake',
    desc: 'Application portal for sustainable housing deployment programs, architectural consultations, and placement support.',
    cta: 'Get Notified',
  },
  {
    name: 'Community Intake & Services',
    desc: 'Centralized intake for mentorship matching, internship placement, veteran pathways, and second-chance programs.',
    cta: 'Get Notified',
  },
]

export default function PortalPage() {
  return (
    <>
      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="font-nav text-xs font-semibold uppercase tracking-[0.25em] text-[var(--pr-flame)] mb-3">
            {PORTAL_PAGE.badge}
          </p>
          <SectionHeading as="h1" center className="mb-6">
            {PORTAL_PAGE.heading}
          </SectionHeading>
          <p className="text-base font-semibold leading-relaxed text-[var(--pr-maroon)] mb-4">
            {PORTAL_PAGE.lead}
          </p>
          <p className="leading-relaxed text-[var(--pr-body)]">{PORTAL_PAGE.body}</p>
        </div>

        {/* Upcoming portals — interim value instead of blank coming soon */}
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 mb-12">
          {upcomingPortals.map((portal) => (
            <div
              key={portal.name}
              className="pr-card rounded-xl p-7 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex-1">
                <h2 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mb-2">
                  {portal.name}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--pr-body)]">{portal.desc}</p>
              </div>
              <a
                href={LINKS.updatesForm}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rebirth shrink-0 text-sm"
              >
                {portal.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="pr-heading text-xl mb-4">{PORTAL_PAGE.stayConnectedHeading}</h2>
          <p className="leading-relaxed text-[var(--pr-body)] mb-8">{PORTAL_PAGE.stayConnected}</p>
          <a
            href={LINKS.updatesForm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rebirth"
          >
            Sign Up for Updates
          </a>
          <p className="mt-8 text-xs leading-relaxed text-[var(--pr-body)]/60">
            {PORTAL_PAGE.regulatory}
          </p>
        </div>
      </Section>
    </>
  )
}
