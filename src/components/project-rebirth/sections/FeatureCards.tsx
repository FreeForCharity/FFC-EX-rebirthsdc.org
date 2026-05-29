import React from 'react'
import { Home, GraduationCap, TrendingUp } from 'lucide-react'
import { Section } from '@/components/project-rebirth/Primitives'
import { HOME } from '@/data/project-rebirth/content'

const icons = [Home, GraduationCap, TrendingUp]

const FeatureCards: React.FC = () => {
  return (
    <Section tone="blueprint">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {HOME.features.map((f, i) => {
          const Icon = icons[i]
          return (
            <div key={f.title} className="pr-card p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[var(--pr-maroon)]/10 text-[var(--pr-maroon)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-maroon)]">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--pr-body)]">{f.body}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default FeatureCards
