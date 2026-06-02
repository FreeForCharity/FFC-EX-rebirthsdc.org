import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
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
      {/* Blueprint section */}
      <Section tone="blueprint">
        <h1 className="pr-heading text-3xl md:text-5xl text-center mb-6">{PARTNERSHIPS.heading}</h1>
        <p className="text-base font-bold leading-relaxed text-[var(--pr-maroon)] text-center max-w-4xl mx-auto mb-12">
          {PARTNERSHIPS.intro}
        </p>

        {/* 4-column pillar cards — matches Canva exactly */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIPS.pillars.map((pillar) => (
            <div key={pillar.no} className="pillar-card">
              <h2 className="font-display text-sm font-bold uppercase tracking-wide text-center text-[var(--pr-body)] mb-3">
                Pillar {pillar.no}:<br />{pillar.title}
              </h2>
              <ul className="space-y-3">
                <li className="text-xs font-bold text-[var(--pr-body)]">
                  <span className="text-[var(--pr-maroon)]">•</span>{' '}
                  <strong>Target Partners:</strong> {pillar.partners}
                </li>
                <li className="text-xs font-bold text-[var(--pr-body)]">
                  <span className="text-[var(--pr-maroon)]">•</span>{' '}
                  <strong>Strategic Need:</strong> {pillar.need}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Dark initiate collaboration band */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:items-center">
          <div className="flex justify-center">
            <img
              src={assetPath('/Images/project-rebirth/partnership-globe.png')}
              alt="Global partnership network"
              className="h-44 w-44 object-contain"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white mb-4">
              {PARTNERSHIPS.ctaHeading}
            </h2>
            <p className="text-base font-bold leading-relaxed text-white/85 mb-8">
              {PARTNERSHIPS.cta}
            </p>
            <a href={LINKS.updatesForm} target="_blank" rel="noopener noreferrer" className="btn-rebirth">
              Partner With Us
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
