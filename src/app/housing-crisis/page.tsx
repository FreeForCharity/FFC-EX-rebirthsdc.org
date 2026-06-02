'use client'

import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend,
} from 'recharts'
import { Section, SectionHeading } from '@/components/project-rebirth/Primitives'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { OUR_STORY } from '@/data/project-rebirth/content'

/* ─── Data ─────────────────────────────────────────────────── */

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

const constructionData = [
  { method: 'Traditional Build', costPerSqFt: 225, timeToShell: 120 },
  { method: '3D Printed', costPerSqFt: 110, timeToShell: 2 },
]

const statCards = [
  { value: '771,480', label: 'Americans experiencing homelessness in 2024', sub: '↑ 18% — largest single-year jump ever recorded' },
  { value: '150,000', label: 'Children among the unhoused', sub: 'A record high in 2024' },
  { value: '7.3M', label: 'Shortage of affordable rental units', sub: 'For extremely low-income households nationwide' },
  { value: '60%', label: 'Increase in median home price since 2019', sub: 'From $258K to $412,500' },
  { value: '13×', label: 'More likely to be unhoused after incarceration', sub: 'vs. those without a criminal record' },
  { value: '45%', label: 'Less to build with 3D printing', sub: 'vs. traditional construction cost per sq ft' },
]

/* ─── Helpers ───────────────────────────────────────────────── */

const MAROON = '#7c1f2e'
const FLAME = '#e8531f'
const INK = '#0e0e10'

function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="bg-white/70 rounded-xl p-6 text-center border border-[var(--pr-maroon)]/10">
      <div className="font-display text-4xl font-bold text-[var(--pr-maroon)] mb-2">{value}</div>
      <div className="text-sm font-semibold text-[var(--pr-body)] mb-1">{label}</div>
      <div className="text-xs text-[var(--pr-flame)]">{sub}</div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function TheCrisisPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[var(--pr-flame)]">
            The Full Picture
          </p>
          <SectionHeading as="h1" center className="mb-6 text-white">
            The Housing Crisis in Numbers
          </SectionHeading>
          <p className="text-base leading-relaxed text-white/80 max-w-2xl mx-auto">
            The data behind why Project Rebirth exists — and why 3D-printed additive construction is not just a good idea, but the most urgent solution available.
          </p>
        </div>
      </Section>

      <Section tone="blueprint">
        <div className="mx-auto max-w-4xl space-y-14">

          {/* Stat cards */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-6 text-center">
              The Scale of the Problem
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {statCards.map((s) => <StatCard key={s.value} {...s} />)}
            </div>
          </div>

          {/* City comparison bar chart */}
          <div className="bg-white/70 rounded-xl p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-2">
              City-by-City: Unhoused Population
            </h2>
            <p className="text-xs text-[var(--pr-body)] mb-6">Point-in-time counts, 2024–2025</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={cityData} margin={{ top: 0, right: 10, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(124,31,46,0.1)" />
                <XAxis dataKey="city" tick={{ fontSize: 11, fill: INK }} angle={-20} textAnchor="end" interval={0} />
                <YAxis tick={{ fontSize: 11, fill: INK }} />
                <Tooltip
                  formatter={(v: number) => [v.toLocaleString(), 'Unhoused']}
                  contentStyle={{ fontSize: 12 }}
                />
                <Bar dataKey="count" fill={MAROON} radius={[4, 4, 0, 0]} label={{ position: 'top', fontSize: 10, fill: FLAME, formatter: (_: number, entry: {payload: {change: string}}) => entry.payload.change }} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-[var(--pr-body)] mt-3 text-center">% shown above each bar = recent rate of increase</p>
          </div>

          {/* Housing cost line chart */}
          <div className="bg-white/70 rounded-xl p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-2">
              Housing Costs Are Outpacing Everything
            </h2>
            <p className="text-xs text-[var(--pr-body)] mb-6">US median home price vs. median monthly rent, 2019–2024</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={housingCostData} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(124,31,46,0.1)" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: INK }} />
                <YAxis yAxisId="left" tick={{ fontSize: 11, fill: INK }} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: INK }} tickFormatter={(v) => `$${v}`} />
                <Tooltip formatter={(v: number, name: string) => [name === 'medianHome' ? `$${v.toLocaleString()}` : `$${v}/mo`, name === 'medianHome' ? 'Median Home Price' : 'Median Monthly Rent']} />
                <Legend formatter={(v) => v === 'medianHome' ? 'Median Home Price' : 'Median Monthly Rent'} />
                <Line yAxisId="left" type="monotone" dataKey="medianHome" stroke={MAROON} strokeWidth={2} dot={{ fill: MAROON }} />
                <Line yAxisId="right" type="monotone" dataKey="medianRent" stroke={FLAME} strokeWidth={2} dot={{ fill: FLAME }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 3D vs Traditional */}
          <div className="bg-white/70 rounded-xl p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-2">
              3D Printing vs. Traditional Construction
            </h2>
            <p className="text-xs text-[var(--pr-body)] mb-6">Cost per square foot and time to structural shell</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--pr-maroon)] mb-3">Cost / sq ft (USD)</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={constructionData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(124,31,46,0.1)" />
                    <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
                    <YAxis type="category" dataKey="method" tick={{ fontSize: 11 }} width={90} />
                    <Tooltip formatter={(v: number) => [`$${v}`, 'Cost/sq ft']} />
                    <Bar dataKey="costPerSqFt" fill={MAROON} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--pr-maroon)] mb-3">Days to structural shell</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={constructionData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(124,31,46,0.1)" />
                    <XAxis type="number" tick={{ fontSize: 11 }} />
                    <YAxis type="category" dataKey="method" tick={{ fontSize: 11 }} width={90} />
                    <Tooltip formatter={(v: number) => [`${v} days`, 'Time to shell']} />
                    <Bar dataKey="timeToShell" fill={FLAME} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-[var(--pr-maroon)]/8 p-4">
                <div className="font-display text-2xl font-bold text-[var(--pr-maroon)]">45% less</div>
                <div className="text-xs text-[var(--pr-body)] mt-1">cost per square foot</div>
              </div>
              <div className="rounded-lg bg-[var(--pr-flame)]/10 p-4">
                <div className="font-display text-2xl font-bold text-[var(--pr-flame)]">98% faster</div>
                <div className="text-xs text-[var(--pr-body)] mt-1">time to structural shell</div>
              </div>
            </div>
          </div>

          {/* The Bandage Economy */}
          <div className="rounded-xl border border-[var(--pr-maroon)]/30 bg-[var(--pr-maroon)]/5 p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
              {OUR_STORY.theFrustration.heading}
            </h2>
            {OUR_STORY.theFrustration.body.split('\n\n').map((p, i, arr) => (
              <p key={i} className={`mb-4 text-sm leading-relaxed last:mb-0 ${i === arr.length - 1 ? 'font-semibold text-[var(--pr-maroon)]' : 'text-[var(--pr-body)]'}`}>
                {p}
              </p>
            ))}
          </div>

          {/* Zero Carbon */}
          <div className="bg-white/70 rounded-xl p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
              {OUR_STORY.zeroCarbon.heading}
            </h2>
            {OUR_STORY.zeroCarbon.body.split('\n\n').map((p, i) => (
              <p key={i} className={`mb-4 text-sm leading-relaxed last:mb-0 ${p.startsWith('We are not') ? 'font-semibold text-[var(--pr-maroon)] border-l-4 border-[var(--pr-flame)] pl-4 py-1' : 'text-[var(--pr-body)]'}`}>
                {p}
              </p>
            ))}
          </div>

          {/* Why 3D */}
          <div className="bg-white/70 rounded-xl p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--pr-maroon)] mb-5">
              {OUR_STORY.theWhy.heading}
            </h2>
            {OUR_STORY.theWhy.body.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 text-sm leading-relaxed last:mb-0 text-[var(--pr-body)]">
                {p}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-base font-semibold text-[var(--pr-maroon)] mb-6">
              This is a systemic engine — and it takes all of us.
            </p>
            <PartnerButton label="Partner With Us" variant="flame" />
          </div>

        </div>
      </Section>
    </>
  )
}
