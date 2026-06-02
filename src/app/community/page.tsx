import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { COMMUNITY } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Community',
  description: COMMUNITY.intro,
}

export default function CommunityPage() {
  return (
    <>
      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            Get Involved
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            {COMMUNITY.heading}
          </SectionHeading>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80">
            {COMMUNITY.intro}
          </p>
        </div>
      </Section>

      {/* Program cards with arrow links only — no embedded form */}
      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl space-y-8">
          {COMMUNITY.items.map((item) => (
            <div key={item.title} className="pr-card rounded-xl p-8">
              <h2 className="font-display text-lg font-bold uppercase tracking-widest text-[var(--pr-maroon)] mb-4">
                {item.title}
              </h2>
              {item.body.split('\n\n').map((para, i) => (
                <p key={i} className="mb-3 text-sm leading-relaxed text-[var(--pr-body)] last:mb-0">
                  {para}
                </p>
              ))}
              <a
                href={LINKS.updatesForm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[var(--pr-flame)] hover:underline"
              >
                Register Now →
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
