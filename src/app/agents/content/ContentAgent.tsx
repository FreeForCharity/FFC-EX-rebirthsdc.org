'use client'

import React, { useState } from 'react'

type Platform = 'facebook' | 'instagram' | 'x' | 'tiktok' | 'email' | 'press'
type ContentType = 'awareness' | 'fundraising' | 'volunteer' | 'partnership' | 'event' | 'impact'

const PLATFORMS: { id: Platform; label: string; icon: string; maxChars: number }[] = [
  { id: 'facebook', label: 'Facebook', icon: '📘', maxChars: 500 },
  { id: 'instagram', label: 'Instagram', icon: '📸', maxChars: 2200 },
  { id: 'x', label: 'X / Twitter', icon: '🐦', maxChars: 280 },
  { id: 'tiktok', label: 'TikTok Caption', icon: '🎵', maxChars: 300 },
  { id: 'email', label: 'Donor Email', icon: '✉️', maxChars: 1000 },
  { id: 'press', label: 'Press Release', icon: '📰', maxChars: 2000 },
]

const CONTENT_TYPES: { id: ContentType; label: string }[] = [
  { id: 'awareness', label: 'Raise Awareness' },
  { id: 'fundraising', label: 'Drive Donations' },
  { id: 'volunteer', label: 'Recruit Volunteers' },
  { id: 'partnership', label: 'Seek Partners' },
  { id: 'event', label: 'Promote Event' },
  { id: 'impact', label: 'Share Impact' },
]

const PROJECT_REBIRTH_VOICE = `You are the official content writer for Project Rebirth, a fiscally sponsored 501(c)(3) nonprofit organization based in Grand Rapids, MI.

MISSION: Project Rebirth engineers the systemic eradication of housing insecurity through scalable, 3D-printed infrastructure and high-impact vocational training.

VOICE & TONE:
- Bold, urgent, and mission-driven — we are solving a crisis, not asking for sympathy
- Technical credibility — we speak about additive construction, Forge Mix composite, 48-hour structural shell deployment
- Empowering — we lift communities up, we don't pity them
- Professional but accessible — speak to donors, partners, government officials, AND community members
- Always action-oriented — every piece of content has a clear next step

KEY FACTS:
- 771,480 Americans experienced homelessness in 2024 — an 18% single-year increase
- 3D-printed homes can be built in under 48 hours at 45% less cost than traditional construction
- Project Rebirth deploys housing + vocational training + economic integration simultaneously
- Fiscally sponsored by The Way of Yeshua Ministries
- Website: rebirthsdc.org
- Donate: via Zeffy at rebirthsdc.org
- Email: info@rebirthSDC.org

PROGRAMS:
- Foundry School of Innovation (3D printing & construction)
- Forge Technology Academy (software, robotics, AI)
- Housing Assistance Program
- Mentorship & Internship Pipeline
- Veterans Pathway
- Second Chance / Reentry Program
- Financial Literacy & Economic Stability

NEVER: beg, use pity language, make unverified claims, or sound corporate and cold.
ALWAYS: include a clear call to action, use Project Rebirth's brand language, stay on mission.`

export default function ContentAgent() {
  const [platform, setPlatform] = useState<Platform>('facebook')
  const [contentType, setContentType] = useState<ContentType>('awareness')
  const [topic, setTopic] = useState('')
  const [generated, setGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const selectedPlatform = PLATFORMS.find((p) => p.id === platform)!

  const generate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic or key message.')
      return
    }
    setError('')
    setLoading(true)
    setGenerated('')

    const platformInstructions: Record<Platform, string> = {
      facebook:
        'Write a Facebook post. Use 2-3 short paragraphs. Include emojis sparingly. End with a clear CTA and the website URL rebirthsdc.org. Max 500 characters.',
      instagram:
        'Write an Instagram caption. Start with a strong hook line. Use line breaks for readability. Include 10-15 relevant hashtags at the end (e.g. #ProjectRebirth #3DPrintedHomes #HousingCrisis #EndHomelessness #Nonprofit #GrandRapids #AddictiveConstruction #CommunityDevelopment). End with the CTA.',
      x: 'Write a tweet. Maximum 280 characters including spaces. Punchy, bold, and urgent. Include one relevant hashtag. No fluff.',
      tiktok:
        'Write a TikTok video caption. Short, energetic, and engaging. Include trending-style hashtags. Max 300 characters.',
      email:
        'Write a donor outreach email. Include: Subject line, greeting, 2-3 body paragraphs, clear ask, and signature from "LaQuan L. Alexander, Founder & Managing Director, Project Rebirth". Professional but warm.',
      press:
        'Write a press release. Include: FOR IMMEDIATE RELEASE header, headline, dateline (Grand Rapids, MI), 3-4 body paragraphs with quotes from LaQuan L. Alexander, boilerplate about Project Rebirth, and media contact info@rebirthSDC.org.',
    }

    const contentTypeContext: Record<ContentType, string> = {
      awareness: 'The goal is to raise awareness about Project Rebirth and the housing crisis.',
      fundraising: 'The goal is to inspire donations to Project Rebirth via rebirthsdc.org.',
      volunteer: 'The goal is to recruit volunteers to join the Project Rebirth team.',
      partnership:
        'The goal is to attract organizational partners across our 4 pillars: Infrastructure & Tech, Human Capital, Social Architecture, and Economic Governance.',
      event: 'The goal is to promote an upcoming Project Rebirth event or program launch.',
      impact: "The goal is to share the impact and progress of Project Rebirth's work.",
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
          system: PROJECT_REBIRTH_VOICE,
          messages: [
            {
              role: 'user',
              content: `Platform: ${selectedPlatform.label}
Content Goal: ${contentTypeContext[contentType]}
Platform Instructions: ${platformInstructions[platform]}
Topic/Key Message: ${topic}

Generate the content now. Output ONLY the final content — no explanations, no labels, no preamble.`,
            },
          ],
        }),
      })

      const data = await response.json()
      const text = data.content?.[0]?.text || ''
      setGenerated(text)
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
              🔥
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#7c1f2e] uppercase tracking-wide font-serif">
                Project Rebirth
              </h1>
              <p className="text-sm text-[#20242e] font-semibold uppercase tracking-widest">
                Content & Awareness Agent
              </p>
            </div>
          </div>
          <p className="text-[#20242e] max-w-xl mx-auto text-sm">
            Generate on-brand content for every platform instantly. Enter your topic and get
            ready-to-post content in Project Rebirth&apos;s voice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left — Controls */}
          <div className="space-y-5">
            {/* Platform */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                1. Choose Platform
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all ${
                      platform === p.id
                        ? 'bg-[#7c1f2e] text-white'
                        : 'bg-gray-100 text-[#20242e] hover:bg-[#7c1f2e]/10'
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Type */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                2. Content Goal
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {CONTENT_TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setContentType(t.id)}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                      contentType === t.id
                        ? 'bg-[#e8531f] text-white'
                        : 'bg-gray-100 text-[#20242e] hover:bg-[#e8531f]/10'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                3. Your Topic or Key Message
              </h2>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 'We just broke ground on our first 3D-printed home in Grand Rapids' or 'We need volunteers for our upcoming community event' or 'Housing costs have risen 60% in 5 years'"
                className="w-full rounded-lg border border-gray-200 p-3 text-sm text-[#20242e] resize-none focus:outline-none focus:border-[#7c1f2e] bg-white"
                rows={4}
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full rounded-xl bg-[#7c1f2e] py-4 font-bold uppercase tracking-widest text-white text-sm transition-all hover:bg-[#5a141f] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? '⚡ Generating...' : '🚀 Generate Content'}
            </button>
          </div>

          {/* Right — Output */}
          <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs">
                Generated Content — {selectedPlatform.icon} {selectedPlatform.label}
              </h2>
              {generated && (
                <button
                  onClick={copy}
                  className="text-xs font-bold uppercase tracking-wide text-[#e8531f] hover:text-[#7c1f2e] transition-colors"
                >
                  {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
              )}
            </div>

            {loading && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3 animate-pulse">🔥</div>
                  <p className="text-sm text-[#7c1f2e] font-semibold">
                    Writing in Project Rebirth&apos;s voice...
                  </p>
                </div>
              </div>
            )}

            {!loading && !generated && (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <p className="text-4xl mb-3">✍️</p>
                  <p className="text-sm text-gray-400">
                    Your content will appear here. Select a platform, goal, enter your topic, and
                    hit Generate.
                  </p>
                </div>
              </div>
            )}

            {!loading && generated && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-[#20242e] leading-relaxed whitespace-pre-wrap overflow-y-auto">
                  {generated}
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">
                    {generated.length} / {selectedPlatform.maxChars} chars
                  </p>
                  <div className="flex gap-2">
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
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#20242e]/50 mt-6">
          Project Rebirth Content Agent · Powered by Claude AI · rebirthsdc.org
        </p>
      </div>
    </div>
  )
}
