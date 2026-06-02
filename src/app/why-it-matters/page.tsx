import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { WHY_IT_MATTERS, PAGE_IMAGES } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

export const metadata: Metadata = {
  title: 'Why It Matters',
  description: 'Homelessness is not just a personal crisis — it is a communal wound that affects mental health, families, communities, and the economy.',
}

const statCards = [
  { value: '67%', label: 'of unhoused people have a diagnosable mental health disorder', source: 'JAMA, 2024' },
  { value: '$35,578', label: 'avg annual taxpayer cost per chronically homeless person', source: 'National Alliance to End Homelessness' },
  { value: '$12,800', label: 'annual cost of permanent supportive housing', source: 'Nearly 3× less than doing nothing' },
  { value: '3×', label: 'more expensive to criminalize homelessness than house people', source: 'Harvard Law Review, 2023' },
  { value: '61%', label: 'decrease in ER visits after permanent housing is provided', source: 'Texas Taxpayer Study' },
  { value: '$30–40B', label: 'total annual US cost of homelessness', source: 'Emergency services, healthcare, incarceration' },
]

function StatCard({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="bg-white/70 rounded-xl p-5 text-center border border-[var(--pr-maroon)]/10">
      <div className="font-display text-3xl font-bold text-[var(--pr-maroon)] mb-2">{value}</div>
      <div className="text-xs font-semibold text-[var(--pr-body)] mb-1 leading-snug">{label}</div>
      <div className="text-xs text-[var(--pr-flame)] italic">{source}</div>
    </div>
  )
}

interface ImageSectionProps {
  heading: string
  body: string
  image: string
  imageAlt: string
  reverse?: boolean
  accent?: boolean
}

function ImageSection({ heading, body, image, imageAlt, reverse = false, accent = false }: ImageSectionProps) {
  return (
    <div className={`rounded-xl overflow-hidden ${accent ? 'border border-[var(--pr-maroon)]/25 bg-[var(--pr-maroon)]/5' : 'bg-white/70'}`}>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-2/5 shrink-0">
          <img
            src={image}
            alt={imageAlt}
            className="h-56 w-full object-cover md:h-full"
            style={{ minHeight: '220px' }}
          />
        </div>
        <div className="p-8 md:w-3/5">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
            {heading}
          </h2>
          {body.split('\n\n').map((p, i) => (
            <p key={i} className="mb-4 text-sm leading-relaxed text-[var(--pr-body)] last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WhyItMattersPage() {
  return (
    <>
      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            The Human Cost
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            {WHY_IT_MATTERS.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-white/80 max-w-2xl mx-auto italic">
            "{WHY_IT_MATTERS.subheading}"
          </p>
        </div>
      </Section>

      <Section tone="blueprint">
        <div className="mx-auto max-w-4xl space-y-10">

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {statCards.map((s) => <StatCard key={s.value} {...s} />)}
          </div>

          {/* Image sections */}
          <ImageSection
            heading={WHY_IT_MATTERS.individual.heading}
            body={WHY_IT_MATTERS.individual.body}
            image={PAGE_IMAGES.whyItMatters.veteran}
            imageAlt="Person experiencing homelessness"
          />
          <ImageSection
            heading={WHY_IT_MATTERS.families.heading}
            body={WHY_IT_MATTERS.families.body}
            image={PAGE_IMAGES.whyItMatters.family}
            imageAlt="Family in need of housing"
            reverse
            accent
          />
          <ImageSection
            heading={WHY_IT_MATTERS.community.heading}
            body={WHY_IT_MATTERS.community.body}
            image={PAGE_IMAGES.whyItMatters.community}
            imageAlt="Community members working together"
          />
          <ImageSection
            heading={WHY_IT_MATTERS.economy.heading}
            body={WHY_IT_MATTERS.economy.body}
            image={PAGE_IMAGES.whyItMatters.hospital}
            imageAlt="Emergency services and healthcare costs"
            reverse
            accent
          />

          {/* CTA */}
          <div className="rounded-xl bg-[var(--pr-ink)] p-8 text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-flame)] mb-5">
              {WHY_IT_MATTERS.callToAction.heading}
            </h2>
            {WHY_IT_MATTERS.callToAction.body.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 text-sm leading-relaxed text-white/80 max-w-2xl mx-auto last:mb-0">{p}</p>
            ))}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <a href={LINKS.donate} target="_blank" rel="noopener noreferrer"
                className="rounded-lg border border-[var(--pr-flame)] px-6 py-4 text-center transition-colors hover:bg-[var(--pr-flame)] group">
                <div className="font-display text-xs font-bold uppercase tracking-widest text-[var(--pr-flame)] group-hover:text-white mb-1">Donate</div>
                <div className="text-xs text-white/60">Fund the infrastructure</div>
              </a>
              <Link href="/volunteers"
                className="rounded-lg border border-white/20 px-6 py-4 text-center transition-colors hover:bg-white/10 group">
                <div className="font-display text-xs font-bold uppercase tracking-widest text-white mb-1">Volunteer</div>
                <div className="text-xs text-white/60">Give your time</div>
              </Link>
              <PartnerButton label="Partner With Us" variant="flame" className="rounded-lg px-6 py-4 text-xs" />
            </div>
          </div>

        </div>
      </Section>
    </>
  )
}
