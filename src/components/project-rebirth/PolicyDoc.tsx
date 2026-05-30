import React from 'react'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import type { LegalDoc } from '@/data/project-rebirth/legal'

/** Renders a legal/policy document as styled, self-hosted content. */
const PolicyDoc: React.FC<{ doc: LegalDoc }> = ({ doc }) => {
  return (
    <Section tone="blueprint">
      <article className="mx-auto max-w-3xl rounded-lg bg-white/90 p-8 shadow-lg md:p-12">
        <SectionHeading as="h1" className="mb-2">
          {doc.title}
        </SectionHeading>
        {doc.effectiveDate && (
          <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-[var(--pr-flame)]">
            Effective Date: {doc.effectiveDate}
          </p>
        )}

        <div className="space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-[var(--pr-body)]">
                  {p}
                </p>
              ))}
              {section.bulletsLead && (
                <p className="mt-3 leading-relaxed text-[var(--pr-body)]">{section.bulletsLead}</p>
              )}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-[var(--pr-body)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pr-maroon)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {doc.footerNote && (
          <p className="mt-10 border-t border-[var(--pr-maroon)]/15 pt-6 text-sm italic text-[var(--pr-body)]/70">
            {doc.footerNote}
          </p>
        )}
      </article>
    </Section>
  )
}

export default PolicyDoc
