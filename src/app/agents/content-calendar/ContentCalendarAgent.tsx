'use client'

import React, { useState } from 'react'

interface GeneratedPost {
  platform: string
  goal: string
  content: string
  icon: string
}

interface CalendarWeek {
  theme: string
  posts: GeneratedPost[]
}

const WEEKLY_THEMES = [
  'Housing Crisis Awareness',
  'Volunteer Recruitment Drive',
  'Donor Campaign',
  'Technology & Innovation',
  'Community Impact Stories',
  'Program Spotlight',
  'Partnership Outreach',
  'Mission & Vision',
]

const CONTENT_CALENDAR_SYSTEM = `You are the Project Rebirth Content Calendar Agent. You generate a full week of social media content across all platforms in one batch.

ABOUT PROJECT REBIRTH:
- Fiscally sponsored 501(c)(3) nonprofit — Grand Rapids, MI
- Mission: Engineer the systemic eradication of housing insecurity through 3D-printed infrastructure and vocational training
- Key stats: 771,480 unhoused Americans in 2024 | 3D homes in 48 hours | 45% less cost | $35K vs $12.8K per person
- Programs: Foundry School, Forge Technology Academy, Housing Assistance, Mentorship, Veterans Pathway, Second Chance
- Founder: LaQuan L. Alexander
- Website: rebirthsdc.org | Email: info@rebirthSDC.org | Donate: rebirthsdc.org
- Social: @sustainablecommunityproject (Instagram) | @projectrebirth7 (X) | @sustainablecommunity2026 (TikTok)

PLATFORM SPECS:
- Facebook: 2-3 paragraphs, 1-2 emojis, end with rebirthsdc.org
- Instagram: Strong hook, line breaks, 10-15 hashtags (#ProjectRebirth #3DPrintedHomes #HousingCrisis #EndHomelessness #GrandRapids #Nonprofit #AdditiveConstruction #CommunityDevelopment #VocationalTraining #HousingJustice #3DPrinting #SustainableCommunity #RebuildingCommunities #HousingAffordability #MissionDriven)
- X/Twitter: Under 280 chars, punchy, 1-2 hashtags
- TikTok: Energetic hook, short, trending hashtags, feels native to the platform
- LinkedIn: Professional, mission-driven, connects to business/civic leaders
- Press Release: FOR IMMEDIATE RELEASE, headline, dateline Grand Rapids MI, 3 paragraphs, quote from LaQuan L. Alexander, boilerplate, media contact info@rebirthSDC.org

VOICE: Bold, urgent, data-driven, empowering — never pitying or begging.

OUTPUT FORMAT: Return ONLY valid JSON in this exact structure, no other text:
{
  "theme": "theme name",
  "posts": [
    {"platform": "Facebook", "goal": "goal", "content": "full post content", "icon": "📘"},
    {"platform": "Instagram", "goal": "goal", "content": "full post content", "icon": "📸"},
    {"platform": "X / Twitter", "goal": "goal", "content": "full post content", "icon": "🐦"},
    {"platform": "TikTok", "goal": "goal", "content": "full post content", "icon": "🎵"},
    {"platform": "LinkedIn", "goal": "goal", "content": "full post content", "icon": "💼"},
    {"platform": "Press Release", "goal": "goal", "content": "full press release", "icon": "📰"}
  ]
}`

export default function ContentCalendarAgent() {
  const [theme, setTheme] = useState(WEEKLY_THEMES[0])
  const [customTheme, setCustomTheme] = useState('')
  const [calendar, setCalendar] = useState<CalendarWeek | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const generate = async () => {
    setError('')
    setLoading(true)
    setCalendar(null)

    const activeTheme = customTheme.trim() || theme

    try {
      const response = await fetch('https://dark-night-27ac.projectcommunityrebirth.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          system: CONTENT_CALENDAR_SYSTEM,
          messages: [
            {
              role: 'user',
              content: `Generate a full content batch for the theme: "${activeTheme}"

Create one post for each platform: Facebook, Instagram, X/Twitter, TikTok, LinkedIn, and a Press Release.

Each post should be on-brand, platform-optimized, and advance the theme while staying true to Project Rebirth's mission.

Return ONLY the JSON object. No explanation, no preamble, no markdown code blocks.`,
            },
          ],
        }),
      })

      const data = await response.json()
      const text = data.content?.[0]?.text || ''

      // Parse JSON response
      const clean = text.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(clean) as CalendarWeek
      setCalendar(parsed)
      setExpandedIndex(0)
    } catch (e) {
      setError('Something went wrong generating the content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copy = (content: string, index: number) => {
    navigator.clipboard.writeText(content)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const copyAll = () => {
    if (!calendar) return
    const all = calendar.posts
      .map((p) => `=== ${p.icon} ${p.platform.toUpperCase()} ===\n${p.content}\n`)
      .join('\n')
    navigator.clipboard.writeText(all)
    setCopiedIndex(-1)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-[#7c1f2e] flex items-center justify-center text-2xl">
              📣
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#7c1f2e] uppercase tracking-wide font-serif">
                Project Rebirth
              </h1>
              <p className="text-sm text-[#20242e] font-semibold uppercase tracking-widest">
                Content Calendar Agent
              </p>
            </div>
          </div>
          <p className="text-[#20242e] max-w-xl mx-auto text-sm">
            Generate a full batch of content for every platform at once — Facebook, Instagram, X,
            TikTok, LinkedIn, and a Press Release. One theme, six platforms, ready to post.
          </p>
        </div>

        {/* Theme Selection */}
        <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-6 mb-6">
          <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-4">
            Choose Your Content Theme
          </h2>
          <div className="grid grid-cols-2 gap-2 mb-4 md:grid-cols-4">
            {WEEKLY_THEMES.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTheme(t)
                  setCustomTheme('')
                }}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all text-left ${theme === t && !customTheme ? 'bg-[#7c1f2e] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#7c1f2e]/10'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <input
              value={customTheme}
              onChange={(e) => setCustomTheme(e.target.value)}
              placeholder="Or type your own theme / topic / news angle..."
              className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white"
            />
            <button
              onClick={generate}
              disabled={loading}
              className="rounded-xl bg-[#7c1f2e] px-8 py-2 font-bold uppercase tracking-wider text-white text-sm transition-all hover:bg-[#5a141f] disabled:opacity-60 whitespace-nowrap"
            >
              {loading ? '⚡ Generating...' : '🚀 Generate All'}
            </button>
          </div>
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-12 text-center">
            <div className="text-5xl mb-4 animate-pulse">🔥</div>
            <p className="font-bold text-[#7c1f2e] uppercase tracking-wide text-sm">
              Generating content for all 6 platforms...
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Facebook · Instagram · X · TikTok · LinkedIn · Press Release
            </p>
          </div>
        )}

        {/* Results */}
        {!loading && calendar && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-sm">
                📅 Content Batch: {calendar.theme}
              </h2>
              <button
                onClick={copyAll}
                className="text-xs font-bold uppercase tracking-wide text-[#e8531f] border border-[#e8531f] px-4 py-2 rounded-lg hover:bg-[#e8531f] hover:text-white transition-colors"
              >
                {copiedIndex === -1 ? '✓ All Copied!' : '📋 Copy All'}
              </button>
            </div>

            {calendar.posts.map((post, i) => (
              <div
                key={i}
                className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{post.icon}</span>
                    <div>
                      <p className="font-bold text-[#7c1f2e] text-sm">{post.platform}</p>
                      <p className="text-xs text-gray-500">{post.goal}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        copy(post.content, i)
                      }}
                      className="text-xs font-bold uppercase tracking-wide text-[#e8531f] hover:text-[#7c1f2e] px-3 py-1 border border-[#e8531f] rounded-lg"
                    >
                      {copiedIndex === i ? '✓ Copied!' : '📋 Copy'}
                    </button>
                    <span className="text-gray-400 text-lg">{expandedIndex === i ? '▲' : '▼'}</span>
                  </div>
                </button>
                {expandedIndex === i && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-[#20242e] leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{post.content.length} characters</p>
                  </div>
                )}
              </div>
            ))}

            <div className="text-center pt-2">
              <button
                onClick={generate}
                disabled={loading}
                className="text-sm font-bold uppercase tracking-wide text-[#7c1f2e] border-2 border-[#7c1f2e] px-8 py-3 rounded-xl hover:bg-[#7c1f2e] hover:text-white transition-colors"
              >
                🔄 Regenerate This Batch
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-[#20242e]/50 mt-8">
          Project Rebirth Content Calendar Agent · Powered by Claude AI · rebirthsdc.org
        </p>
      </div>
    </div>
  )
}
