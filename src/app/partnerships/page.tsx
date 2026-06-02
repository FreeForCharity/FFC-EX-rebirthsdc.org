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
      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            Strategic Alliances
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            {PARTNERSHIPS.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-white/80 max-w-2xl mx-auto">
            {PARTNERSHIPS.intro}
          </p>
        </div>
      </Section>

      <Section tone="blueprint">
        <div className="mx-auto max-w-4xl">
          {/* Globe image */}
          <div className="flex justify-center mb-12">
            <img
              src={assetPath('/Images/project-rebirth/partnership-globe.png')}
              alt="Global partnership network"
              className="h-44 w-44 object-contain"
            />
          </div>

          {/* Partnership pillars */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PARTNERSHIPS.pillars.map((pillar, i) => (
              <div
                key={pillar.no}
                className={`rounded-xl p-7 ${i % 2 === 0 ? 'bg-white/70' : 'border border-[var(--pr-maroon)]/25 bg-[var(--pr-maroon)]/5'}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-bold text-[var(--pr-maroon)]/30 leading-none shrink-0">
                    {pillar.no}
                  </span>
                  <h2 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mt-1">
                    {pillar.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[var(--pr-body)] mb-4">{pillar.body}</p>
                <div className="border-t border-[var(--pr-maroon)]/10 pt-4 space-y-2">
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

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-[var(--pr-ink)] p-8 text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)] mb-4">
              {PARTNERSHIPS.ctaHeading}
            </p>
            <p className="text-sm leading-relaxed text-white/80 max-w-2xl mx-auto mb-8">
              {PARTNERSHIPS.cta}
            </p>
            <a
              href={LINKS.updatesForm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rebirth inline-block"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
