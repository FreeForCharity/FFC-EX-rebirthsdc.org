import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { TECHNOLOGY } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Technology',
  description: TECHNOLOGY.intro,
}

const impactIcons: Record<string, string> = {
  'For the Individual': '🏠',
  'For the Community': '🤝',
  'For the Economy': '📈',
  'For the Environment': '🌱',
}

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            Additive Construction
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            {TECHNOLOGY.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-white/80 max-w-2xl mx-auto">
            {TECHNOLOGY.intro}
          </p>
        </div>
      </Section>

      {/* How It Works — Traditional vs Additive */}
      <Section tone="blueprint">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-8 text-center">
          {TECHNOLOGY.advantageHeading}
        </h2>
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pr-card rounded-xl p-7">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-body)] mb-4">
              {TECHNOLOGY.traditional.title}
            </h3>
            <ul className="space-y-3">
              {TECHNOLOGY.traditional.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--pr-body)]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-[var(--pr-maroon)] bg-white/80 p-7">
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mb-4">
              {TECHNOLOGY.additive.title}
            </h3>
            <ul className="space-y-3">
              {TECHNOLOGY.additive.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--pr-body)]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--pr-maroon)]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Forge Mix */}
        <div className="mx-auto max-w-4xl mt-10">
          <div className="rounded-xl overflow-hidden bg-[var(--pr-ink)]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <img
                src={assetPath('/Images/project-rebirth/forge-mix-nozzle.png')}
                alt="A 3D concrete printer nozzle extruding the Forge Mix composite"
                className="w-full h-64 object-contain p-6"
                style={{ background: 'transparent' }}
              />
              <div className="p-8">
                <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-flame)] mb-4">
                  {TECHNOLOGY.forgeHeading}
                </h2>
                <p className="text-sm leading-relaxed text-white/85">{TECHNOLOGY.forge}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact sections */}
        <div className="mx-auto max-w-4xl mt-14">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-8 text-center">
            {TECHNOLOGY.impactHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TECHNOLOGY.impacts.map((impact, i) => (
              <div
                key={impact.title}
                className={`rounded-xl p-7 ${i % 2 === 0 ? 'bg-white/70' : 'border border-[var(--pr-maroon)]/25 bg-[var(--pr-maroon)]/5'}`}
              >
                <div className="text-2xl mb-3">{impactIcons[impact.title]}</div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-4">
                  {impact.title}
                </h3>
                {impact.body.split('\n\n').map((p, j) => (
                  <p key={j} className="mb-3 text-sm leading-relaxed text-[var(--pr-body)] last:mb-0">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 3D printing house image */}
        <div className="mx-auto max-w-4xl mt-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={assetPath('/Images/project-rebirth/3d-printing-house.jpg')}
              alt="3D printed house construction in progress"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-3xl mt-12 text-center">
          <p className="text-sm font-semibold text-[var(--pr-maroon)] mb-6">
            Ready to invest in the technology that changes everything?
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

      </Section>
    </>
  )
}
