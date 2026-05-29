import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading, PhotoPlaceholder } from '@/components/project-rebirth/Primitives'
import { MISSION } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Mission',
  description: MISSION.lead,
}

export default function MissionPage() {
  return (
    <>
      <Section tone="blueprint">
        <SectionHeading center as="h1" className="mb-10">
          {MISSION.heading}
        </SectionHeading>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-xl font-bold text-[var(--pr-maroon)]">{MISSION.lead}</p>
            <p className="mt-5 leading-relaxed text-[var(--pr-body)]">{MISSION.body}</p>
          </div>
          <PhotoPlaceholder label="3D-printed structure" className="aspect-[4/3]" />
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading center className="mb-12 text-[var(--pr-flame)]">
          {MISSION.mandateHeading}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MISSION.pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-white/15 bg-white/5 p-7">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {p.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--pr-flame)]">
                {p.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
