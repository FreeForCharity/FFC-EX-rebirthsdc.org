import React from 'react'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { RESOURCES } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Resources',
  description: RESOURCES.intro,
}

export default function ResourcesPage() {
  return (
    <>
      <Section tone="blueprint">
        <SectionHeading as="h1" center className="mb-6">
          {RESOURCES.heading}
        </SectionHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-[var(--pr-body)]">
          {RESOURCES.intro}
        </p>
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-4">
          {RESOURCES.items.map((item) => (
            <li key={item.title} className="pr-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--pr-maroon)]" />
                <div className="flex-1">
                  <h2 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[var(--pr-body)] mb-4">{item.body}</p>
                  <a
                    href={LINKS.updatesForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--pr-flame)] hover:underline"
                  >
                    Learn More / Register →
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <PartnerButton label="Make a Contribution" />
        </div>
      </Section>
    </>
  )
}
