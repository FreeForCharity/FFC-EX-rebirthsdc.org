import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { TECHNOLOGY } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Technology',
  description: TECHNOLOGY.intro,
}

export default function TechnologyPage() {
  return (
    <>
      {/* Blueprint section — heading top left, bold maroon body, exactly as Canva */}
      <Section tone="blueprint">
        <h1 className="pr-heading text-3xl md:text-5xl mb-6">
          Deploying High-Resilience Additive Utilities
        </h1>
        <p className="text-base font-bold leading-relaxed text-[var(--pr-maroon)] mb-10 max-w-4xl">
          {TECHNOLOGY.intro}
        </p>

        {/* Two-column comparison cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
          {/* Traditional */}
          <div className="pillar-card">
            <h2 className="font-display text-base font-bold uppercase tracking-wide text-center text-[var(--pr-body)] mb-5">
              Traditional Limitations
            </h2>
            <ul className="space-y-4">
              {TECHNOLOGY.traditional.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold leading-relaxed text-[var(--pr-body)]">
                  <span className="text-[var(--pr-maroon)] font-black mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Additive */}
          <div className="pillar-card" style={{ background: 'rgba(124,31,46,0.08)', border: '2px solid var(--pr-maroon)' }}>
            <h2 className="font-display text-base font-bold uppercase tracking-wide text-center text-[var(--pr-maroon)] mb-5">
              The Additive Advantage
            </h2>
            <ul className="space-y-4">
              {TECHNOLOGY.additive.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold leading-relaxed text-[var(--pr-maroon)]">
                  <span className="text-[var(--pr-maroon)] font-black mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Forge Mix — image left, text right */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white/50">
            <img
              src={assetPath('/Images/project-rebirth/forge-mix-nozzle.png')}
              alt="Forge Mix 3D printing nozzle"
              className="w-full object-contain p-4"
              style={{ maxHeight: '320px' }}
            />
          </div>
          <div>
            <h2 className="pr-heading text-2xl md:text-3xl mb-4">Material Science: {TECHNOLOGY.forgeHeading}</h2>
            <p className="text-base font-bold leading-relaxed text-[var(--pr-maroon)]">
              {TECHNOLOGY.forge}
            </p>
          </div>
        </div>

        {/* Volunteer/action photos */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assetPath('/Images/project-rebirth/volunteers-1.jpeg')}
              alt="Project Rebirth volunteers at a community event"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assetPath('/Images/project-rebirth/volunteers-2.jpeg')}
              alt="Project Rebirth team in action"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Dark impacts band */}
      <Section tone="ink">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-center mb-10" style={{ color: 'var(--pr-flame)' }}>
          {TECHNOLOGY.impactHeading}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECHNOLOGY.impacts.map((impact) => (
            <div key={impact.title} className="rounded-lg p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(124,31,46,0.35)' }}>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--pr-flame)' }}>
                {impact.title}
              </h3>
              {impact.body.split('\n\n').map((p, j) => (
                <p key={j} className="mb-3 text-sm leading-relaxed text-white/80 last:mb-0">{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">
            Ready to invest in the technology that changes everything?
          </p>
          <a href={LINKS.updatesForm} target="_blank" rel="noopener noreferrer" className="btn-rebirth">
            Partner With Us
          </a>
        </div>
      </Section>
    </>
  )
}
