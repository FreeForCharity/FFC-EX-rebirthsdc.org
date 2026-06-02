'use client'

import React, { useState } from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import { assetPath } from '@/lib/assetPath'
import { TECHNOLOGY } from '@/data/project-rebirth/content'
import { LINKS } from '@/data/project-rebirth/site'

const impactIcons: Record<string, string> = {
  'For the Individual': '🏠',
  'For the Community': '🤝',
  'For the Economy': '📈',
  'For the Environment': '🌱',
}

const housingStats = [
  {
    value: '771K+',
    label: 'Americans unhoused in 2024',
    sub: 'Largest single-year jump on record',
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
    value: '7.3M',
    label: 'Shortage of affordable rental units',
    sub: 'For extremely low-income households',
  },
]

const cityData = [
  { city: 'Phoenix, AZ', count: 9734, change: '+67%' },
  { city: 'Portland, OR', count: 12034, change: '+67%' },
  { city: 'New Orleans, LA', count: 3200, change: '+22%' },
  { city: 'Grand Rapids, MI', count: 1139, change: '+70%' },
  { city: 'Hawaii / Maui', count: 10227, change: '+87%' },
]

const housingCostData = [
  { year: '2019', medianHome: 258000, medianRent: 1080 },
  { year: '2020', medianHome: 293000, medianRent: 1100 },
  { year: '2021', medianHome: 347000, medianRent: 1200 },
  { year: '2022', medianHome: 400000, medianRent: 1400 },
  { year: '2023', medianHome: 410000, medianRent: 1550 },
  { year: '2024', medianHome: 412500, medianRent: 1650 },
]

function DataDeepDive() {
  return (
    <div className="mt-6 space-y-10">
      {/* Impact stats */}
      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-flame)] mb-6 text-center">
          The Scale of the Crisis
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {housingStats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-[var(--pr-flame)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* City breakdown */}
      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-flame)] mb-6">
          City-by-City: Unhoused Population (2024–2025)
        </h3>
        <div className="space-y-3">
          {cityData.map((d) => (
            <div key={d.city}>
              <div className="flex justify-between text-xs text-white/80 mb-1">
                <span>{d.city}</span>
                <span className="font-semibold">
                  {d.count.toLocaleString()}{' '}
                  <span className="text-[var(--pr-flame)]">{d.change}</span>
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--pr-maroon)]"
                  style={{ width: `${(d.count / 12034) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Housing cost table */}
      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-flame)] mb-6">
          Housing Costs Are Outpacing Everything
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-white/80">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2 text-left font-semibold text-white">Year</th>
                <th className="py-2 text-right font-semibold text-[var(--pr-maroon)]">
                  Median Home Price
                </th>
                <th className="py-2 text-right font-semibold text-[var(--pr-flame)]">
                  Median Rent/mo
                </th>
              </tr>
            </thead>
            <tbody>
              {housingCostData.map((d) => (
                <tr key={d.year} className="border-b border-white/10">
                  <td className="py-2">{d.year}</td>
                  <td className="py-2 text-right">${d.medianHome.toLocaleString()}</td>
                  <td className="py-2 text-right">${d.medianRent.toLocaleString()}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3D vs Traditional */}
      <div>
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-flame)] mb-6">
          3D Printing vs. Traditional Construction
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
              Cost / sq ft
            </p>
            {[
              { method: 'Traditional', cost: 225 },
              { method: '3D Printed', cost: 110 },
            ].map((d) => (
              <div key={d.method}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/80">{d.method}</span>
                  <span className="font-bold text-[var(--pr-maroon)]">${d.cost}/sq ft</span>
                </div>
                <div className="h-4 w-full rounded bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded bg-[var(--pr-maroon)]"
                    style={{ width: `${(d.cost / 225) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
              Days to structural shell
            </p>
            {[
              { method: 'Traditional', days: 120 },
              { method: '3D Printed', days: 2 },
            ].map((d) => (
              <div key={d.method}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/80">{d.method}</span>
                  <span className="font-bold text-[var(--pr-flame)]">{d.days} days</span>
                </div>
                <div className="h-4 w-full rounded bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded bg-[var(--pr-flame)]"
                    style={{ width: `${(d.days / 120) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TechnologyPage() {
  const [showData, setShowData] = useState(false)

  return (
    <>
      <Section tone="blueprint">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <SectionHeading as="h1" center className="mb-6">
            {TECHNOLOGY.heading}
          </SectionHeading>
          <p className="text-base leading-relaxed text-[var(--pr-body)] max-w-2xl mx-auto">
            {TECHNOLOGY.intro}
          </p>
        </div>

        {/* Nozzle image at top — not the portrait */}
        <div className="mx-auto max-w-4xl mb-10">
          <div className="rounded-xl overflow-hidden shadow-lg bg-[var(--pr-ink)]">
            <img
              src={assetPath('/Images/project-rebirth/forge-mix-nozzle.png')}
              alt="3D concrete printer nozzle — Forge Mix additive construction"
              className="w-full object-contain p-4"
              style={{ maxHeight: '320px' }}
            />
          </div>
        </div>

        {/* Additive Construction label above How It Works */}
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)] text-center mb-1">
            Additive Construction
          </p>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-8 text-center">
            {TECHNOLOGY.advantageHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="pr-card rounded-xl p-7">
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-body)] mb-4">
                {TECHNOLOGY.traditional.title}
              </h3>
              <ul className="space-y-3">
                {TECHNOLOGY.traditional.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--pr-body)]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-[var(--pr-maroon)] bg-white/80 p-7">
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-[var(--pr-maroon)] mb-4">
                {TECHNOLOGY.additive.title}
              </h3>
              <ul className="space-y-3">
                {TECHNOLOGY.additive.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--pr-body)]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--pr-maroon)]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Forge Mix */}
        <div className="mx-auto max-w-4xl mt-10">
          <div className="rounded-xl overflow-hidden bg-[var(--pr-ink)]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <img
                src={assetPath('/Images/project-rebirth/mission-printing.jpg')}
                alt="3D concrete printing in action"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--pr-flame)] mb-4">
                  {TECHNOLOGY.forgeHeading}
                </h2>
                <p className="text-sm leading-relaxed text-white/85">{TECHNOLOGY.forge}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact sections */}
        <div className="mx-auto max-w-4xl mt-14">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-8 text-center">
            {TECHNOLOGY.impactHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TECHNOLOGY.impacts.map((impact, i) => (
              <div
                key={impact.title}
                className={`rounded-xl p-7 ${i % 2 === 0 ? 'bg-white/70' : 'border border-[var(--pr-maroon)]/25 bg-[var(--pr-maroon)]/5'}`}
              >
                <div className="text-2xl mb-3">{impactIcons[impact.title]}</div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-4">
                  {impact.title}
                </h3>
                {impact.body.split('\n\n').map((p, j) => (
                  <p
                    key={j}
                    className="mb-3 text-sm leading-relaxed text-[var(--pr-body)] last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-3xl mt-12 text-center">
          <p className="text-sm font-semibold text-[var(--pr-maroon)] mb-6">
            Ready to invest in the technology that changes everything?
          </p>
          <a
            href={LINKS.updatesForm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rebirth inline-block"
          >
            Partner With Us
          </a>
        </div>
      </Section>

      {/* Toggleable housing data section — not in nav */}
      <Section tone="ink">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <button
              onClick={() => setShowData(!showData)}
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[var(--pr-flame)] px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-[var(--pr-flame)] transition-all hover:bg-[var(--pr-flame)] hover:text-white focus-visible:outline-2 focus-visible:outline-[var(--pr-flame)]"
              aria-expanded={showData}
            >
              {showData ? '▲ Hide the Data' : '▼ Explore the Housing Crisis Data'}
            </button>
            <p className="mt-3 text-xs text-white/50">
              The numbers behind why this technology matters
            </p>
          </div>

          {showData && <DataDeepDive />}
        </div>
      </Section>
    </>
  )
}
