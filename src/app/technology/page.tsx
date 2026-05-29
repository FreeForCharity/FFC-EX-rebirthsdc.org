import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading, PhotoPlaceholder } from '@/components/project-rebirth/Primitives'
import { TECHNOLOGY } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Technology',
  description: TECHNOLOGY.heading,
}

export default function TechnologyPage() {
  return (
    <>
      <Section tone="blueprint">
        <SectionHeading as="h1" center className="mb-6">
          {TECHNOLOGY.heading}
        </SectionHeading>
        <p className="mx-auto max-w-3xl text-center leading-relaxed text-[var(--pr-body)]">
          {TECHNOLOGY.intro}
        </p>

        <h2 className="pr-heading mt-14 mb-8 text-center text-2xl">
          {TECHNOLOGY.advantageHeading}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pr-card p-7">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-body)]">
              {TECHNOLOGY.traditional.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {TECHNOLOGY.traditional.points.map((pt, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--pr-body)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pr-card pr-card--maroon p-7">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
              {TECHNOLOGY.additive.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {TECHNOLOGY.additive.points.map((pt, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--pr-body)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pr-maroon)]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <PhotoPlaceholder label="Additive printing nozzle" className="aspect-[4/3]" />
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--pr-flame)]">
              {TECHNOLOGY.forgeHeading}
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">{TECHNOLOGY.forge}</p>
          </div>
        </div>
      </Section>
    </>
  )
}
