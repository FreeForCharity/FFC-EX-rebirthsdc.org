import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { DIRECTOR } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Director',
  description: `${DIRECTOR.name} — ${DIRECTOR.title}`,
}

export default function DirectorPage() {
  return (
    <>
      {/* Blueprint section — photo left, text right, exactly as Canva */}
      <Section tone="blueprint">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[420px_1fr] md:items-start">
          {/* Portrait */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-[var(--pr-maroon)]/30">
              <img
                src={assetPath('/Images/project-rebirth/director-portrait.jpg')}
                alt={`${DIRECTOR.name}, ${DIRECTOR.title}`}
                className="w-full object-cover object-top"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            <h2 className="pr-heading mt-4 text-2xl">{DIRECTOR.name}</h2>
            <p className="font-nav text-xs font-bold uppercase tracking-widest text-[var(--pr-body)] mt-1">
              {DIRECTOR.title}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 pt-2">
            <div>
              <h1 className="pr-heading text-3xl md:text-4xl mb-4">{DIRECTOR.philosophyHeading}</h1>
              <p className="text-base font-bold leading-relaxed text-[var(--pr-maroon)]">
                {DIRECTOR.philosophy}
              </p>
            </div>
            <div>
              <h2 className="pr-heading text-2xl md:text-3xl mb-4">{DIRECTOR.forgedHeading}</h2>
              <p className="text-base font-bold leading-relaxed text-[var(--pr-maroon)]">
                {DIRECTOR.forged}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dark executive oversight band */}
      <Section tone="ink">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:items-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
            {DIRECTOR.oversightHeading}
          </h2>
          <p className="text-base leading-relaxed text-white/85">{DIRECTOR.oversight}</p>
        </div>
      </Section>
    </>
  )
}
