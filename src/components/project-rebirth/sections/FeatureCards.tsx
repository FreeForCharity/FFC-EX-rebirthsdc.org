import React from 'react'
import { Home, GraduationCap, TrendingUp } from 'lucide-react'
import { Section } from '@/components/project-rebirth/Primitives'
import { HOME } from '@/data/project-rebirth/content'
import Link from 'next/link'

const icons = [Home, GraduationCap, TrendingUp]
const links = ['/technology', '/community', '/resources']

const FeatureCards: React.FC = () => {
  return (
    <Section tone="blueprint">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {HOME.features.map((f, i) => {
          const Icon = icons[i]
          return (
            <Link
              key={f.title}
              href={links[i]}
              className="pr-card p-7 block transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[var(--pr-maroon)] focus-visible:outline-offset-2 focus-visible:rounded-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--pr-maroon)]/10 text-[var(--pr-maroon)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--pr-body)]">{f.body}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[var(--pr-flame)]">
                Learn More →
              </p>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}

export default FeatureCards
