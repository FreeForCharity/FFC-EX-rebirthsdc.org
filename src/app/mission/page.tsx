import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { MISSION } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Mission',
  description: MISSION.lead,
}

export default function MissionPage() {
  return (
    <>
      <Section tone="blueprint">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="pr-heading text-4xl md:text-5xl mb-6">{MISSION.heading}</h1>
            <p className="text-base font-semibold leading-relaxed text-[var(--pr-maroon)] mb-4">
              {MISSION.lead}
            </p>
            <p className="text-base leading-relaxed text-[var(--pr-body)] mb-8">{MISSION.body}</p>
            <a
              href={LINKS.updatesForm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rebirth inline-flex"
            >
              Partner With Us
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assetPath('/Images/project-rebirth/mission-printing.jpg')}
              alt="3D concrete printing infrastructure"
              className="w-full h-72 object-cover md:h-full"
            />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <h2
          className="pr-heading text-3xl md:text-4xl text-center mb-12"
          style={{ color: 'var(--pr-flame)' }}
        >
          {MISSION.mandateHeading}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MISSION.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg p-6"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(124,31,46,0.4)',
              }}
            >
              <h3
                className="font-display text-base font-bold uppercase tracking-wide mb-1"
                style={{ color: 'var(--pr-flame)' }}
              >
                {pillar.title} —
              </h3>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-white mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-white/80">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
