import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { VOLUNTEERS, PAGE_IMAGES } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join the Project Rebirth volunteer team. Help us build communities, support programs, and change lives.',
}

export default function VolunteersPage() {
  return (
    <>
      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            Get Involved
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            {VOLUNTEERS.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-white/80 max-w-2xl mx-auto">
            {VOLUNTEERS.intro}
          </p>
        </div>
      </Section>

      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Hero image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={PAGE_IMAGES.volunteers.outreach}
              alt="Project Rebirth volunteers working in the community"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Role cards */}
          {VOLUNTEERS.roles.map((role, i) => (
            <div
              key={role.title}
              className={`rounded-xl p-7 border border-[var(--pr-maroon)]/10 ${i % 2 === 0 ? 'bg-white/70' : 'bg-[var(--pr-maroon)]/5'}`}
            >
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-3">
                {role.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--pr-body)]">{role.body}</p>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={PAGE_IMAGES.volunteers.team}
              alt="Community volunteers building together"
              className="w-full h-40 object-cover"
            />
            <div className="bg-[var(--pr-ink)] p-8 text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)] mb-4">
                Ready to Volunteer?
              </p>
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-4">
                Reach Out Directly
              </h2>
              <p className="text-sm leading-relaxed text-white/75 max-w-xl mx-auto mb-8">
                Send us a message introducing yourself, your background and availability, and which
                volunteer role interests you most. We will get back to you within 48 hours.
              </p>
              <a
                href={`mailto:${VOLUNTEERS.contactEmail}?subject=Volunteer%20Interest%20-%20Project%20Rebirth&body=Hi%20Project%20Rebirth%20team%2C%0A%0AMy%20name%20is%20%5BYour%20Name%5D%20and%20I%20am%20interested%20in%20volunteering.%0A%0ARole%20I%27m%20interested%20in%3A%0ABackground%2FSkills%3A%0AAvailability%3A%0A%0AThank%20you!`}
                className="inline-block rounded-lg bg-[var(--pr-maroon)] px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              >
                Email Us: {VOLUNTEERS.contactEmail}
              </a>
              <p className="mt-4 text-xs text-white/40">
                Clicking this opens your email app with a pre-filled template.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
