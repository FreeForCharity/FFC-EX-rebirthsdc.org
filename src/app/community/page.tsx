import React from 'react'
import type { Metadata } from 'next'
import { Section } from '@/components/project-rebirth/Primitives'
import { COMMUNITY } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Community',
  description: COMMUNITY.intro,
}

export default function CommunityPage() {
  return (
    <>
      {/* Blueprint section — bulleted link list exactly as Canva */}
      <Section tone="blueprint">
        <ul className="mx-auto max-w-4xl space-y-2 py-4">
          {COMMUNITY.items.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="text-[var(--pr-maroon)] font-black text-lg leading-none mt-1">•</span>
              <a
                href={LINKS.updatesForm}
                target="_blank"
                rel="noopener noreferrer"
                className="canva-link-item"
              >
                {item.title}
                {item.body ? `:  ${item.body.split('\n\n')[0]}` : ''}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Dark CTA band */}
      <Section tone="ink">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white mb-6">
            Make a Contribution
          </p>
          <a href={LINKS.updatesForm} target="_blank" rel="noopener noreferrer" className="btn-rebirth">
            Partner With Us
          </a>
        </div>
      </Section>
    </>
  )
}
