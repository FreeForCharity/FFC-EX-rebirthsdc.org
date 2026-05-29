import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading, PhotoPlaceholder } from '@/components/project-rebirth/Primitives'
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
            <div className="rounded-lg border-4 border-[var(--pr-maroon)] p-1.5">
              <PhotoPlaceholder
                label="Director portrait"
                className="aspect-[3/4]"
                rounded={false}
              />
            </div>
            <h2 className="pr-heading mt-5 text-2xl">{DIRECTOR.name}</h2>
            <p className="font-nav text-xs font-semibold uppercase tracking-wide text-[var(--pr-body)]">
              {DIRECTOR.title}
            </p>
          </div>

          <div className="space-y-8">
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

      <Section tone="ink">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--pr-flame)]">
            {DIRECTOR.oversightHeading}
          </h2>
          <p className="leading-relaxed text-white/85">{DIRECTOR.oversight}</p>
        </div>
      </Section>
    </>
  )
}
