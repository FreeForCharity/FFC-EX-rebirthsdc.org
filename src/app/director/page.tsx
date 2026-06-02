import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { DIRECTOR } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Director',
  description: `${DIRECTOR.name} — ${DIRECTOR.title}`,
}

export default function DirectorPage() {
  return (
    <>
      <Section tone="blueprint">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_1fr] md:items-start">
          <div>
            <div className="rounded-xl overflow-hidden shadow-2xl" style={{ border: 'none' }}>
              <img
                src={assetPath('/Images/project-rebirth/director-portrait.jpg')}
                alt={`${DIRECTOR.name}, ${DIRECTOR.title}`}
                className="aspect-[3/4] w-full object-cover object-top"
                style={{ filter: 'contrast(1.05) brightness(1.02)' }}
              />
            </div>
            <h2 className="pr-heading mt-5 text-2xl">{DIRECTOR.name}</h2>
            <p className="font-nav text-xs font-semibold uppercase tracking-wide text-[var(--pr-body)]">
              {DIRECTOR.title}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="leading-relaxed text-[var(--pr-body)] mb-6">{DIRECTOR.bio}</p>
            </div>
            <div>
              <SectionHeading as="h1">{DIRECTOR.philosophyHeading}</SectionHeading>
              <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{DIRECTOR.philosophy}</p>
            </div>
            <div>
              <SectionHeading>{DIRECTOR.forgedHeading}</SectionHeading>
              <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{DIRECTOR.forged}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Executive Oversight — silver-band WITH maroon border */}
      <Section tone="blueprint">
        <div className="silver-band rounded-xl p-8 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
            {DIRECTOR.oversightHeading}
          </h2>
          <p className="leading-relaxed text-[var(--pr-body)]">{DIRECTOR.oversight}</p>
        </div>
      </Section>
    </>
  )
}
