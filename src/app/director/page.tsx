import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { DIRECTOR, REBIRTH_BOARD, type BoardMember } from '@/data/project-rebirth/content'

export const metadata: Metadata = {
  title: 'Leadership',
  description: `${DIRECTOR.name}, ${DIRECTOR.title}, and The Rebirth Board of Project Rebirth.`,
}

/** Portrait when supplied, otherwise an on-brand initials monogram. */
function Avatar({ member }: { member: BoardMember }) {
  if (member.portrait) {
    return (
      <img
        src={assetPath(member.portrait)}
        alt={`${member.name}, ${member.office}`}
        className="h-20 w-20 flex-none rounded-full object-cover object-top shadow-md"
        style={{ filter: 'contrast(1.05) brightness(1.02)' }}
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-20 w-20 flex-none items-center justify-center rounded-full font-display text-xl font-bold tracking-wide text-white shadow-md"
      style={{
        background:
          'linear-gradient(180deg, #9a2a3a 0%, var(--pr-maroon) 45%, var(--pr-maroon-dark) 100%)',
      }}
    >
      {member.initials}
    </div>
  )
}

function MemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="pr-card flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <Avatar member={member} />
        <div>
          {member.seat && (
            <p className="font-nav text-[11px] font-bold uppercase tracking-widest text-[var(--pr-flame)]">
              {member.seat}
            </p>
          )}
          <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-wide text-[var(--pr-maroon)]">
            {member.name}
          </h3>
          <p className="font-nav text-xs font-semibold uppercase tracking-wide text-[var(--pr-body)]">
            {member.office}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--pr-body)]">{member.mandate}</p>
      {member.focus && member.focus.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {member.focus.map((f) => (
            <li
              key={f}
              className="rounded-full bg-[var(--pr-maroon)]/10 px-3 py-1 font-nav text-[11px] font-semibold uppercase tracking-wide text-[var(--pr-maroon)]"
            >
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <>
      {/* Founder feature */}
      <Section tone="blueprint">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[360px_1fr] md:items-start">
          <div>
            <div className="rounded-xl overflow-hidden shadow-2xl" style={{ border: 'none' }}>
              <img
                src={assetPath('/Images/project-rebirth/director-portrait.jpg')}
                alt={`${DIRECTOR.name}, ${DIRECTOR.title}`}
                className="aspect-[3/4] w-full object-cover object-top"
                style={{ filter: 'contrast(1.05) brightness(1.02)' }}
              />
            </div>
            <h2 className="pr-heading mt-5 text-2xl">{DIRECTOR.name}</h2>
            <p className="font-nav text-xs font-semibold uppercase tracking-wide text-[var(--pr-body)]">
              {DIRECTOR.title}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="leading-relaxed text-[var(--pr-body)] mb-6">{DIRECTOR.bio}</p>
            </div>
            <div>
              <SectionHeading as="h1">{DIRECTOR.philosophyHeading}</SectionHeading>
              <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{DIRECTOR.philosophy}</p>
            </div>
            <div>
              <SectionHeading>{DIRECTOR.forgedHeading}</SectionHeading>
              <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{DIRECTOR.forged}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Executive Oversight — muted silver/grey box, not black */}
      <Section tone="blueprint">
        <div className="silver-band rounded-xl p-8 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
            {DIRECTOR.oversightHeading}
          </h2>
          <p className="leading-relaxed text-[var(--pr-body)]">{DIRECTOR.oversight}</p>
        </div>
      </Section>

      {/* The Rebirth Board — officer seats */}
      <Section tone="blueprint">
        <SectionHeading center>{REBIRTH_BOARD.heading}</SectionHeading>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-[var(--pr-body)]">
          {REBIRTH_BOARD.intro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {REBIRTH_BOARD.officers.map((m) => (
            <MemberCard key={`${m.seat}-${m.name}`} member={m} />
          ))}
        </div>
      </Section>

      {/* Program leadership — filled department leads */}
      <Section tone="blueprint">
        <SectionHeading center>{REBIRTH_BOARD.programHeading}</SectionHeading>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-[var(--pr-body)]">
          {REBIRTH_BOARD.programIntro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {REBIRTH_BOARD.programLeads.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </Section>
    </>
  )
}
