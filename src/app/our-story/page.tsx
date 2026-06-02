import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { OUR_STORY } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'The story behind Project Rebirth — who we are, where we come from, and why we were called to this mission.',
}

function renderBody(body: string) {
  return body.split('\n\n').map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <p
          key={i}
          className="mb-4 text-sm leading-relaxed font-bold text-[var(--pr-maroon)] last:mb-0"
        >
          {p.replace(/\*\*/g, '')}
        </p>
      )
    }
    return (
      <p key={i} className="mb-4 text-sm leading-relaxed text-[var(--pr-body)] last:mb-0">
        {p}
      </p>
    )
  })
}

function StorySection({
  heading,
  body,
  accent = false,
}: {
  heading: string
  body: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-8 ${accent ? 'border border-[var(--pr-maroon)]/25 bg-[var(--pr-maroon)]/5' : 'bg-white/70'}`}
    >
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
        {heading}
      </h2>
      {renderBody(body)}
    </div>
  )
}

export default function OurStoryPage() {
  return (
    <>
      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h1" center className="mb-6 text-white">
            Our Story
          </SectionHeading>
          <p className="text-base font-semibold leading-relaxed text-[var(--pr-maroon)]">
            {OUR_STORY.subheading}
          </p>
        </div>
      </Section>

      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Let's Start at the Root */}
          <StorySection heading={OUR_STORY.thePeople.heading} body={OUR_STORY.thePeople.body} />

          {/* The Story Behind Project Rebirth */}
          <StorySection
            heading={OUR_STORY.theStory.heading}
            body={OUR_STORY.theStory.body}
            accent
          />

          {/* Where We Are Going */}
          <StorySection heading={OUR_STORY.theVision.heading} body={OUR_STORY.theVision.body} />

          {/* Bridge to data pages */}
          <div className="rounded-xl border border-[var(--pr-maroon)]/30 bg-[var(--pr-maroon)]/5 p-8 text-center">
            <p className="text-sm leading-relaxed text-[var(--pr-body)] mb-6">
              Want to understand the full scale of the housing crisis — the data, the human cost,
              and why 3D-printed construction is the most viable solution?
            </p>
            <Link
              href="/housing-crisis"
              className="inline-block font-display text-xs font-bold uppercase tracking-widest text-[var(--pr-flame)] border border-[var(--pr-flame)] px-6 py-3 rounded hover:bg-[var(--pr-flame)] hover:text-white transition-colors mr-3"
            >
              The Housing Crisis →
            </Link>
            <Link
              href="/why-it-matters"
              className="inline-block font-display text-xs font-bold uppercase tracking-widest text-[var(--pr-maroon)] border border-[var(--pr-maroon)] px-6 py-3 rounded hover:bg-[var(--pr-maroon)] hover:text-white transition-colors"
            >
              Why It Matters →
            </Link>
          </div>

          <div className="text-center pt-2">
            <PartnerButton label="Partner With Us" variant="flame" />
          </div>
        </div>
      </Section>
    </>
  )
}
