import React from 'react'
import type { Metadata } from 'next'
import { Globe } from 'lucide-react'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { PARTNERSHIPS } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Partnerships',
  description: PARTNERSHIPS.intro,
}

export default function PartnershipsPage() {
  return (
    <>
      <Section tone="blueprint">
        <SectionHeading as="h1" center className="mb-6">
          {PARTNERSHIPS.heading}
        </SectionHeading>
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-[var(--pr-body)]">
          {PARTNERSHIPS.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIPS.pillars.map((p) => (
            <div key={p.no} className="pr-card p-6">
              <span className="font-display text-3xl font-bold text-[var(--pr-maroon)]/30">
                {p.no}
              </span>
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
                {p.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[var(--pr-body)]">
                <span className="font-semibold">Target Partners:</span> {p.partners}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--pr-body)]">
                <span className="font-semibold">Strategic Need:</span> {p.need}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[200px_1fr]">
          <div className="flex justify-center">
            <Globe className="h-32 w-32 text-[var(--pr-flame)]" strokeWidth={1} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
              {PARTNERSHIPS.ctaHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">{PARTNERSHIPS.cta}</p>
            <div className="mt-6">
              <PartnerButton />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
