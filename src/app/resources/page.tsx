import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { RESOURCES } from '@/data/project-rebirth/content'

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
            <li key={item.title}>
              <Link
                href="/portal"
                className="pr-card group flex items-start gap-4 p-5 transition-transform hover:-translate-y-0.5"
              >
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--pr-maroon)] transition-transform group-hover:translate-x-1" />
                <span>
                  <span className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--pr-body)]">{item.body}</span>
                </span>
              </Link>
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
