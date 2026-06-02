import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { assetPath } from '@/lib/assetPath'
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

export default function OurStoryPage() {
  return (
    <>
      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <SectionHeading as="h1" center className="mb-6">
            Our Story
          </SectionHeading>
          <p className="text-base font-semibold leading-relaxed text-[var(--pr-maroon)]">
            {OUR_STORY.subheading}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {/* Section 1: Let's Start at the Root — mission volunteers photo */}
          <div className="pr-card rounded-xl overflow-hidden">
            <img
              src={assetPath('/Images/project-rebirth/mission-volunteers.jpg')}
              alt="Project Rebirth volunteers serving the community"
              className="w-full h-52 object-cover"
            />
            <div className="p-8">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
                {OUR_STORY.thePeople.heading}
              </h2>
              {renderBody(OUR_STORY.thePeople.body)}
            </div>
          </div>

          {/* Section 2: The Story Behind — volunteer photo + Benton Harbor neighborhood side by side */}
          <div className="pr-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src={assetPath('/Images/project-rebirth/our-story-root-1.jpg')}
                alt="Project Rebirth volunteers in the community"
                className="w-full h-52 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1564419431702-7f1fe5bfb7ee?w=900&q=80"
                alt="Urban neighborhood — the communities Project Rebirth was built to serve"
                className="w-full h-52 object-cover"
                style={{ objectPosition: 'center 60%' }}
              />
            </div>
            <div className="p-8">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
                {OUR_STORY.theStory.heading}
              </h2>
              {renderBody(OUR_STORY.theStory.body)}
            </div>
          </div>

          {/* Section 3: Where Are We Going — engineering blueprints photo (img 5) */}
          <div className="pr-card rounded-xl overflow-hidden">
            <img
              src={assetPath('/Images/project-rebirth/our-story-vision.jpg')}
              alt="Engineering blueprints and construction tools — building the future"
              className="w-full h-52 object-cover"
            />
            <div className="p-8">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
                {OUR_STORY.theVision.heading}
              </h2>
              {renderBody(OUR_STORY.theVision.body)}
            </div>
          </div>

          <div className="rounded-xl border-2 border-[var(--pr-maroon)]/30 bg-[var(--pr-maroon)]/5 p-8 text-center">
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
