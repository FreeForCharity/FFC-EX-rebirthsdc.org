import React from 'react'
import Hero from '@/components/project-rebirth/sections/Hero'
import FeatureCards from '@/components/project-rebirth/sections/FeatureCards'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import Link from 'next/link'
import { LINKS } from '@/data/project-rebirth/site'

const impactStats = [
  {
    value: '771K+',
    label: 'Americans unhoused in 2024',
    sub: 'Largest single-year jump ever recorded',
  },
  {
    value: '48 hrs',
    label: 'To deploy a structural shell',
    sub: 'Via 3D-printed additive construction',
  },
  { value: '45%', label: 'Less to build', sub: 'vs. traditional construction cost per sq ft' },
  {
    value: '$35K',
    label: 'Annual cost of homelessness per person',
    sub: 'vs. $12.8K for permanent housing',
  },
  { value: '150K', label: 'Children among the unhoused', sub: 'A record high in 2024' },
  {
    value: '$1.5T',
    label: 'Global 3D construction market by 2030',
    sub: 'The technology is the future',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Deploy the Technology',
    body: 'We use advanced additive construction equipment to print high-resilience housing structures in under 48 hours per unit — at up to 45% less than conventional builds.',
  },
  {
    step: '02',
    title: 'Train the Workforce',
    body: 'The Forge Technology Academy and Foundry School of Innovation equip community members with the skills to operate, maintain, and advance the technology — creating careers, not just jobs.',
  },
  {
    step: '03',
    title: 'Stabilize the Community',
    body: 'Permanent housing, vocational credentials, mentorship, and economic integration programs work in concert to transform systemic instability into generational autonomy.',
  },
]

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeatureCards />

      {/* Impact Stats */}
      <Section tone="ink">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)] text-center mb-10">
            The Scale of the Problem — and Our Response
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-[var(--pr-flame)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section tone="blueprint">
        <div className="mx-auto max-w-4xl">
          <SectionHeading center className="mb-10">
            How It Works
          </SectionHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="pr-card rounded-xl p-7">
                <div className="font-display text-4xl font-bold text-[var(--pr-maroon)]/20 mb-3 leading-none">
                  {step.step}
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--pr-maroon)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--pr-body)]">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm leading-relaxed text-[var(--pr-body)] mb-6 max-w-2xl mx-auto">
              Project Rebirth is a 501(c)(3) nonprofit organization. Every contribution directly
              funds housing deployments, vocational training, and community stabilization programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINKS.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rebirth"
              >
                Donate Now
              </a>
              <Link
                href="/mission"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[var(--pr-maroon)] px-6 py-3 font-nav text-sm font-bold uppercase tracking-wide text-[var(--pr-maroon)] transition-all hover:bg-[var(--pr-maroon)] hover:text-white"
              >
                Learn Our Mission →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default HomePage
