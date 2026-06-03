'use client'

import React, { useState } from 'react'

type EmailType =
  | 'cold-outreach'
  | 'follow-up'
  | 'major-donor'
  | 'grant'
  | 'recurring'
  | 'thank-you'
  | 'lapsed'
  | 'event'

type DonorProfile = 'individual' | 'foundation' | 'corporate' | 'government' | 'faith'

const EMAIL_TYPES: { id: EmailType; label: string; icon: string }[] = [
  { id: 'cold-outreach', label: 'First Outreach', icon: '📬' },
  { id: 'follow-up', label: 'Follow-Up', icon: '🔄' },
  { id: 'major-donor', label: 'Major Donor Ask', icon: '💎' },
  { id: 'grant', label: 'Grant Inquiry', icon: '📋' },
  { id: 'recurring', label: 'Recurring Gift Ask', icon: '📅' },
  { id: 'thank-you', label: 'Thank You / Stewardship', icon: '🙏' },
  { id: 'lapsed', label: 'Re-engage Lapsed Donor', icon: '💫' },
  { id: 'event', label: 'Event / Campaign', icon: '🎯' },
]

const DONOR_PROFILES: { id: DonorProfile; label: string }[] = [
  { id: 'individual', label: 'Individual' },
  { id: 'foundation', label: 'Foundation / Trust' },
  { id: 'corporate', label: 'Corporation' },
  { id: 'government', label: 'Government / Municipal' },
  { id: 'faith', label: 'Faith Organization' },
]

const FUNDRAISING_SYSTEM = `You are Raymond, the Development Officer for Project Rebirth. Raymond builds the donor relationships that fund Project Rebirth's mission — turning compassion into action.

You are the Project Rebirth · Raymond, Development Officer — an expert nonprofit fundraising writer who knows Project Rebirth's mission, impact, and voice deeply.

ABOUT PROJECT REBIRTH:
- Fiscally sponsored 501(c)(3) nonprofit — Grand Rapids, MI
- Mission: Engineer the systemic eradication of housing insecurity through 3D-printed infrastructure and vocational training
- Key stats: 771,480 Americans unhoused in 2024 (18% YoY increase) | 3D homes built in 48 hours | 45% less cost than traditional construction | $35K annual cost of homelessness per person vs $12.8K for permanent housing
- Programs: Foundry School of Innovation, Forge Technology Academy, Housing Assistance, Mentorship, Veterans Pathway, Second Chance/Reentry, Financial Literacy
- Founder: LaQuan L. Alexander, Founder & Managing Director
- Fiscal Sponsor: The Way of Yeshua Ministries
- Website: rebirthsdc.org | Donate: rebirthsdc.org | Email: info@rebirthSDC.org | Phone: (480) 559-2365

FUNDRAISING VOICE:
- Bold and urgent — we are solving a crisis, not asking for charity
- Data-driven — lead with impact numbers, not emotions
- Specific ask — always include a clear, specific dollar amount or action
- Mission alignment — connect donor's values to Project Rebirth's work
- Professional — treat donors as partners in the mission, not ATMs

IMPACT METRICS TO USE:
- $50 = educational materials for one student for a month
- $100 = one day of vocational training supplies
- $500 = partial funding for one 3D-printed housing component
- $1,000 = one week of the Foundry School program
- $5,000 = sponsors one student through the full Forge Technology Academy
- $10,000 = contributes to the deployment of one housing unit
- $25,000 = funds one complete community stabilization package
- Monthly giving: emphasize compounding impact over time

ALWAYS INCLUDE:
- Subject line (compelling, not clickbait)
- Personalized opening (use [DONOR_NAME] placeholder)
- Specific ask with dollar amount
- Clear single CTA (donate at rebirthsdc.org)
- Professional signature from LaQuan L. Alexander`

export default function FundraisingAgent() {
  const [emailType, setEmailType] = useState<EmailType>('cold-outreach')
  const [donorProfile, setDonorProfile] = useState<DonorProfile>('individual')
  const [donorName, setDonorName] = useState('')
  const [askAmount, setAskAmount] = useState('')
  const [context, setContext] = useState('')
  const [generated, setGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const generate = async () => {
    setError('')
    setLoading(true)
    setGenerated('')

    const typeInstructions: Record<EmailType, string> = {
      'cold-outreach':
        'Write a first outreach email to someone who has never heard of Project Rebirth. Hook them fast, establish credibility, make a specific ask.',
      'follow-up':
        'Write a follow-up email to someone who was previously contacted but has not yet responded or donated. Reference previous contact, add urgency.',
      'major-donor':
        "Write a major donor solicitation email. Treat them as a strategic partner, not just a donor. Connect their influence to Project Rebirth's scale.",
      grant:
        'Write a grant inquiry email to a foundation or grantmaking body. Professional, data-driven, mission-aligned. Request a meeting or full proposal submission.',
      recurring:
        'Write an email asking a one-time donor or prospect to become a monthly recurring donor. Emphasize compounding impact.',
      'thank-you':
        'Write a donor stewardship/thank you email. Warm, specific about impact, build the relationship for future giving.',
      lapsed:
        'Write a re-engagement email to a donor who gave in the past but has not given in 6+ months. Remind them of their impact, share progress, re-invite.',
      event:
        'Write an event or campaign fundraising email. Create urgency, specific goal, deadline, and clear ask.',
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY ?? '',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: FUNDRAISING_SYSTEM,
          messages: [
            {
              role: 'user',
              content: `Email Type: ${typeInstructions[emailType]}
Donor Profile: ${donorProfile}
Donor Name: ${donorName || '[DONOR_NAME]'}
Ask Amount: ${askAmount || 'choose the most appropriate amount based on donor profile'}
Additional Context: ${context || 'none provided'}

Write the complete fundraising email now. Include subject line. Output ONLY the email — no labels, no explanation.`,
            },
          ],
        }),
      })
      const data = await response.json()
      setGenerated(data.content?.[0]?.text || '')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copy = () => {
    navigator.clipboard.writeText(generated)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-[#7c1f2e] flex items-center justify-center text-2xl">
              💰
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#7c1f2e] uppercase tracking-wide font-serif">
                Project Rebirth
              </h1>
              <p className="text-sm text-[#20242e] font-semibold uppercase tracking-widest">
                Fundraising Agent
              </p>
            </div>
          </div>
          <p className="text-[#20242e] max-w-xl mx-auto text-sm">
            Generate professional donor outreach emails in seconds. Every email is written in
            Project Rebirth&apos;s voice with specific impact metrics and clear asks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left — Controls */}
          <div className="space-y-5">
            {/* Email Type */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                1. Email Type
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {EMAIL_TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setEmailType(t.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${emailType === t.id ? 'bg-[#7c1f2e] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#7c1f2e]/10'}`}
                  >
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Donor Profile */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                2. Donor Profile
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {DONOR_PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setDonorProfile(p.id)}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${donorProfile === p.id ? 'bg-[#e8531f] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#e8531f]/10'}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5 space-y-3">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-1">
                3. Details (Optional)
              </h2>
              <div>
                <label className="text-xs font-semibold text-[#20242e]/70 block mb-1">
                  Donor Name
                </label>
                <input
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. John Smith or ABC Foundation"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#20242e]/70 block mb-1">
                  Specific Ask Amount
                </label>
                <input
                  value={askAmount}
                  onChange={(e) => setAskAmount(e.target.value)}
                  placeholder="e.g. $500, $5,000, $25,000"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#20242e]/70 block mb-1">
                  Context / Notes
                </label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="e.g. Met at a conference, previously funded housing projects, interested in workforce development..."
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white resize-none"
                  rows={3}
                />
              </div>
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full rounded-xl bg-[#7c1f2e] py-4 font-bold uppercase tracking-widest text-white text-sm transition-all hover:bg-[#5a141f] disabled:opacity-60"
            >
              {loading ? '⚡ Writing Email...' : '💰 Generate Fundraising Email'}
            </button>
          </div>

          {/* Right — Output */}
          <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs">
                Generated Email
              </h2>
              {generated && (
                <button
                  onClick={copy}
                  className="text-xs font-bold uppercase tracking-wide text-[#e8531f] hover:text-[#7c1f2e]"
                >
                  {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
              )}
            </div>

            {loading && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-pulse">💰</div>
                  <p className="text-sm text-[#7c1f2e] font-semibold">
                    Crafting your fundraising email...
                  </p>
                </div>
              </div>
            )}

            {!loading && !generated && (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <p className="text-4xl mb-3">✉️</p>
                  <p className="text-sm text-gray-400">
                    Your fundraising email will appear here. Select type, profile, add optional
                    details, and generate.
                  </p>
                </div>
              </div>
            )}

            {!loading && generated && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-[#20242e] leading-relaxed whitespace-pre-wrap overflow-y-auto">
                  {generated}
                </div>
                <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setGenerated('')}
                    className="text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#7c1f2e]"
                  >
                    Clear
                  </button>
                  <button
                    onClick={generate}
                    className="text-xs font-bold uppercase tracking-wide text-[#e8531f] hover:text-[#7c1f2e]"
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#20242e]/50 mt-6">
          Project Rebirth · Raymond, Development Officer · Powered by Claude AI · rebirthsdc.org
        </p>
      </div>
    </div>
  )
}
