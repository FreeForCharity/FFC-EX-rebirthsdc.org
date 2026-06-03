'use client'

import React, { useState } from 'react'

type VolunteerRole =
  | 'construction'
  | 'tech'
  | 'education'
  | 'admin'
  | 'outreach'
  | 'mentorship'
  | 'events'
  | 'media'

type Availability = 'weekdays' | 'weekends' | 'evenings' | 'flexible' | 'remote-only'

const ROLES: { id: VolunteerRole; label: string; icon: string; desc: string }[] = [
  {
    id: 'construction',
    label: 'Construction & Builds',
    icon: '🏗️',
    desc: '3D printing operations, site support, build days',
  },
  {
    id: 'tech',
    label: 'Technology & Software',
    icon: '💻',
    desc: 'Software dev, AI/robotics, CAD design',
  },
  {
    id: 'education',
    label: 'Education & Training',
    icon: '🎓',
    desc: 'Curriculum, tutoring, workshop facilitation',
  },
  {
    id: 'admin',
    label: 'Administration',
    icon: '📊',
    desc: 'Operations, data entry, project coordination',
  },
  {
    id: 'outreach',
    label: 'Community Outreach',
    icon: '🤝',
    desc: 'Events, canvassing, community engagement',
  },
  {
    id: 'mentorship',
    label: 'Mentorship',
    icon: '⭐',
    desc: 'Career mentoring, life skills coaching',
  },
  {
    id: 'events',
    label: 'Events & Fundraising',
    icon: '🎯',
    desc: 'Event planning, donor cultivation',
  },
  {
    id: 'media',
    label: 'Media & Marketing',
    icon: '📸',
    desc: 'Photography, videography, social media',
  },
]

const AVAILABILITY: { id: Availability; label: string }[] = [
  { id: 'weekdays', label: 'Weekdays' },
  { id: 'weekends', label: 'Weekends' },
  { id: 'evenings', label: 'Evenings' },
  { id: 'flexible', label: 'Flexible' },
  { id: 'remote-only', label: 'Remote Only' },
]

const VOLUNTEER_SYSTEM = `You are the Project Rebirth Volunteer Recruitment Agent — you write compelling, personalized volunteer recruitment emails and outreach messages.

ABOUT PROJECT REBIRTH:
- Fiscally sponsored 501(c)(3) nonprofit — Grand Rapids, MI
- Mission: Engineer the systemic eradication of housing insecurity through 3D-printed infrastructure and vocational training
- We need skilled volunteers across construction, technology, education, admin, outreach, mentorship, events, and media
- Website: rebirthsdc.org | Email: info@rebirthSDC.org | Volunteer page: rebirthsdc.org/community

VOLUNTEER PROGRAMS:
- Foundry School of Innovation — hands-on 3D construction training
- Forge Technology Academy — software, robotics, AI instruction
- Community Outreach Events — food distribution, awareness campaigns
- Build Days — on-site 3D printing construction support
- Mentorship Pipeline — career and life skills mentoring
- Administrative Support — operations and coordination

VOLUNTEER VOICE:
- Make them feel needed and valued — their skills directly change lives
- Specific about the role — not vague "help us" but "you will do X"
- Connect their background to the mission
- Urgent but not desperate — we are building a movement
- Include time commitment (be realistic: 2-4 hours/week minimum)
- Always include: apply at rebirthsdc.org/community or email info@rebirthSDC.org

OUTREACH TYPES:
- Email: Subject line + personal greeting + why them + what they'll do + impact + CTA
- Social DM: Short, warm, specific — under 150 words
- LinkedIn: Professional tone, connect their career to the mission
- Text/SMS: Ultra brief, friendly, link to volunteer page
- Group/Organization pitch: Formal, group impact focus`

type OutputFormat = 'email' | 'dm' | 'linkedin' | 'sms' | 'group'

const OUTPUT_FORMATS: { id: OutputFormat; label: string; icon: string }[] = [
  { id: 'email', label: 'Email', icon: '✉️' },
  { id: 'dm', label: 'Social DM', icon: '💬' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { id: 'sms', label: 'Text/SMS', icon: '📱' },
  { id: 'group', label: 'Group/Org Pitch', icon: '👥' },
]

export default function VolunteerAgent() {
  const [role, setRole] = useState<VolunteerRole>('construction')
  const [availability, setAvailability] = useState<Availability>('flexible')
  const [format, setFormat] = useState<OutputFormat>('email')
  const [prospectName, setProspectName] = useState('')
  const [prospectBackground, setProspectBackground] = useState('')
  const [generated, setGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const selectedRole = ROLES.find((r) => r.id === role)!

  const generate = async () => {
    setError('')
    setLoading(true)
    setGenerated('')

    const formatInstructions: Record<OutputFormat, string> = {
      email:
        'Write a volunteer recruitment email. Include subject line, personal greeting, specific role description, time commitment (2-4 hrs/week), impact statement, and CTA to apply at rebirthsdc.org/community.',
      dm: 'Write a social media DM (Instagram/Facebook). Warm, conversational, under 150 words. Specific about the role. End with a link to rebirthsdc.org/community.',
      linkedin:
        'Write a LinkedIn message. Professional, connect their career skills to the mission. Under 200 words. Reference their background specifically.',
      sms: 'Write a text message. Under 160 characters. Friendly, specific, include the link rebirthsdc.org/community.',
      group:
        'Write a group/organization volunteer pitch. Professional, emphasize group impact and team volunteering. Could be for a church, company, school, or civic group.',
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
          max_tokens: 600,
          system: VOLUNTEER_SYSTEM,
          messages: [
            {
              role: 'user',
              content: `Format: ${formatInstructions[format]}
Role Needed: ${selectedRole.label} — ${selectedRole.desc}
Availability Focus: ${availability}
Prospect Name: ${prospectName || '[PROSPECT_NAME]'}
Prospect Background/Skills: ${prospectBackground || 'general community member'}

Write the recruitment message now. Output ONLY the message — no labels or explanation.`,
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
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-[#7c1f2e] flex items-center justify-center text-2xl">
              🙋
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#7c1f2e] uppercase tracking-wide font-serif">
                Project Rebirth
              </h1>
              <p className="text-sm text-[#20242e] font-semibold uppercase tracking-widest">
                Volunteer Recruiter Agent
              </p>
            </div>
          </div>
          <p className="text-[#20242e] max-w-xl mx-auto text-sm">
            Generate personalized volunteer recruitment messages for any platform. Turn your network
            into Project Rebirth&apos;s volunteer force.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-5">
            {/* Role */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                1. Volunteer Role Needed
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${role === r.id ? 'bg-[#7c1f2e] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#7c1f2e]/10'}`}
                  >
                    <span className="text-lg">{r.icon}</span>
                    <div>
                      <p className="text-xs font-bold">{r.label}</p>
                      <p className={`text-xs ${role === r.id ? 'text-white/70' : 'text-gray-500'}`}>
                        {r.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* Format */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                2. Output Format
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {OUTPUT_FORMATS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f.id)}
                    className={`flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold transition-all ${format === f.id ? 'bg-[#e8531f] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#e8531f]/10'}`}
                  >
                    <span>{f.icon}</span>
                    <span>{f.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs mb-3">
                3. Availability Focus
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {AVAILABILITY.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setAvailability(a.id)}
                    className={`rounded-lg px-2 py-2 text-xs font-semibold transition-all ${availability === a.id ? 'bg-[#7c1f2e] text-white' : 'bg-gray-100 text-[#20242e] hover:bg-[#7c1f2e]/10'}`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prospect Details */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5 space-y-3">
              <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs">
                4. Prospect Details (Optional)
              </h2>
              <input
                value={prospectName}
                onChange={(e) => setProspectName(e.target.value)}
                placeholder="Prospect's name"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white"
              />
              <textarea
                value={prospectBackground}
                onChange={(e) => setProspectBackground(e.target.value)}
                placeholder="Their background, skills, or how you know them... e.g. 'Electrical engineer, active in church, loves community work'"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-[#7c1f2e] bg-white resize-none"
                rows={3}
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full rounded-xl bg-[#7c1f2e] py-4 font-bold uppercase tracking-widest text-white text-sm transition-all hover:bg-[#5a141f] disabled:opacity-60"
            >
              {loading ? '⚡ Writing...' : '🙋 Generate Recruitment Message'}
            </button>

            {/* Output */}
            <div className="bg-white/85 rounded-xl border-2 border-[#7c1f2e] p-5 flex flex-col min-h-[200px]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-[#7c1f2e] uppercase tracking-wide text-xs">
                  Generated Message
                </h2>
                {generated && (
                  <button
                    onClick={copy}
                    className="text-xs font-bold uppercase tracking-wide text-[#e8531f]"
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                )}
              </div>
              {loading && (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-[#7c1f2e] font-semibold animate-pulse">
                    Writing recruitment message...
                  </p>
                </div>
              )}
              {!loading && !generated && (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm text-gray-400 text-center">
                    Your recruitment message will appear here.
                  </p>
                </div>
              )}
              {!loading && generated && (
                <div className="flex-1">
                  <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-[#20242e] leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-64">
                    {generated}
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={() => setGenerated('')}
                      className="text-xs font-bold text-gray-400 hover:text-[#7c1f2e]"
                    >
                      Clear
                    </button>
                    <button onClick={generate} className="text-xs font-bold text-[#e8531f]">
                      Regenerate
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[#20242e]/50 mt-6">
          Project Rebirth Volunteer Recruiter · Powered by Claude AI · rebirthsdc.org
        </p>
      </div>
    </div>
  )
}
