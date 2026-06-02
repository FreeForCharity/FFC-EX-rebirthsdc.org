import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { PARTNERSHIPS } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Partnerships',
  description: PARTNERSHIPS.intro,
}

export default function PartnershipsPage() {
  return (
    <>
      <Section tone="blueprint">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <SectionHeading as="h1" center className="mb-6">
              {PARTNERSHIPS.heading}
            </SectionHeading>
            <p className="text-base leading-relaxed text-[var(--pr-body)] max-w-3xl mx-auto">
              {PARTNERSHIPS.intro}
            </p>
          </div>

          {/* All pillar cards — white with maroon border */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PARTNERSHIPS.pillars.map((pillar) => (
              <div key={pillar.no} className="pr-card rounded-xl p-7">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-bold text-[var(--pr-maroon)]/25 leading-none shrink-0">
                    {pillar.no}
                  </span>
                  <h2 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mt-1">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--pr-body)] mb-4">{pillar.body}</p>
                <div className="border-t-2 border-[var(--pr-maroon)]/20 pt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pr-maroon)]">
                    Partners
                  </p>
                  <p className="text-xs text-[var(--pr-body)]">{pillar.partners}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--pr-maroon)] mt-2">
                    What We Need
                  </p>
                  <p className="text-xs text-[var(--pr-body)]">{pillar.need}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Initiate Collaboration — muted silver/grey box, maroon text, globe inside */}
          <div className="mt-12 rounded-xl silver-band p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:items-center">
              <div className="flex justify-center">
                <img
                  src={assetPath('/Images/project-rebirth/partnership-globe.png')}
                  alt="Global partnership network"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-maroon)] mb-3">
                  {PARTNERSHIPS.ctaHeading}
                </p>
                <p className="text-sm leading-relaxed text-[var(--pr-maroon)] mb-8">
                  {PARTNERSHIPS.cta}
                </p>
                <a
                  href={LINKS.updatesForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rebirth inline-block"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
