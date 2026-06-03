'use client'

import React, { useState, useRef, useEffect } from 'react'

type VisitorType = 'donor' | 'volunteer' | 'partner' | 'applicant' | 'media' | 'unknown'

interface Message {
  role: 'assistant' | 'user'
  content: string
}

interface LeadData {
  name?: string
  email?: string
  phone?: string
  visitorType?: VisitorType
  interest?: string
  organization?: string
  skills?: string
  availability?: string
}

const INTAKE_SYSTEM = `You are Marcus, the Community Outreach Coordinator for Project Rebirth. Marcus is on the front lines of Project Rebirth — connecting people to programs, resources, and opportunities that change lives.

You are the Project Rebirth · Marcus, Community Outreach Coordinator — a professional, warm, and mission-driven AI representative for Project Rebirth, a fiscally sponsored 501(c)(3) nonprofit based in Grand Rapids, MI.

YOUR MISSION: Greet every visitor, identify who they are, collect their contact information, and route them to the right next step. You are the first impression of Project Rebirth.

ABOUT PROJECT REBIRTH:
- Engineers the systemic eradication of housing insecurity through 3D-printed infrastructure and vocational training
- Programs: Foundry School of Innovation, Forge Technology Academy, Housing Assistance, Mentorship, Veterans Pathway, Second Chance/Reentry, Financial Literacy
- Website: rebirthsdc.org | Email: info@rebirthSDC.org | Phone: (480) 559-2365
- Donate at: rebirthsdc.org (via Zeffy)

CONVERSATION FLOW:
1. Warm greeting — introduce yourself briefly
2. Ask what brings them to Project Rebirth today
3. Based on their answer, identify their type and ask relevant follow-up questions
4. Collect: First name, email address (always), and type-specific info
5. Give them a clear next step and warm close

VISITOR TYPES & ROUTING:
- DONOR: Ask what inspired them, explain impact ($1 = X impact), direct to rebirthsdc.org to donate, offer to have someone follow up
- VOLUNTEER: Ask about skills/availability, explain volunteer roles, direct to /community page
- PARTNER: Ask about their organization and which of the 4 pillars interests them (Infrastructure & Tech / Human Capital / Social Architecture / Economic Governance), offer to connect with LaQuan Alexander directly
- PROGRAM APPLICANT (housing, school, jobs): Ask which program, collect basic info, direct to /portal or /community
- MEDIA/PRESS: Ask about their outlet and story angle, offer media kit, direct to info@rebirthSDC.org
- GENERAL: Engage with the mission, build interest, collect email for updates

TONE: Professional, warm, urgent about the mission but never pushy. This is a movement, not a sales pitch.

IMPORTANT: 
- Always collect name and email before ending conversation
- Keep responses concise — 2-3 sentences max per message
- Use line breaks for readability
- Never make up facts or statistics not provided
- If you don't know something, offer to connect them with the team at info@rebirthSDC.org

When you have collected name + email, include this exact JSON block at the end of your message (hidden from display but used to save the lead):
[LEAD_DATA:{"name":"value","email":"value","type":"value","interest":"value"}]`

export default function IntakeAgent() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [leadSaved, setLeadSaved] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true)
      greet()
    }
  }, [isOpen])

  const greet = async () => {
    setLoading(true)
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
          max_tokens: 300,
          system: INTAKE_SYSTEM,
          messages: [
            {
              role: 'user',
              content:
                'START_CONVERSATION - Your name is Marcus, Community Outreach Coordinator for Project Rebirth. Introduce yourself by name.',
            },
          ],
        }),
      })
      const data = await response.json()
      const text = cleanResponse(data.content?.[0]?.text || '')
      setMessages([{ role: 'assistant', content: text }])
    } catch {
      setMessages([
        {
          role: 'assistant',
          content:
            "Welcome to Project Rebirth! 🔥\n\nWe're engineering the end of housing insecurity through 3D-printed infrastructure and vocational training.\n\nWhat brings you here today?",
        },
      ])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const cleanResponse = (text: string) => {
    // Extract lead data if present
    const leadMatch = text.match(/\[LEAD_DATA:({.*?})\]/)
    if (leadMatch && !leadSaved) {
      try {
        const lead = JSON.parse(leadMatch[1])
        saveLead(lead)
        setLeadSaved(true)
      } catch {}
    }
    // Remove the JSON block from displayed text
    return text.replace(/\[LEAD_DATA:.*?\]/g, '').trim()
  }

  const saveLead = async (lead: LeadData) => {
    // Store in localStorage as backup
    try {
      const existing = JSON.parse(localStorage.getItem('pr_leads') || '[]')
      existing.push({ ...lead, timestamp: new Date().toISOString(), source: window.location.href })
      localStorage.setItem('pr_leads', JSON.stringify(existing))
    } catch {}
  }

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

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
          max_tokens: 400,
          system: INTAKE_SYSTEM,
          messages: newMessages,
        }),
      })
      const data = await response.json()
      const reply = cleanResponse(
        data.content?.[0]?.text ||
          "I'm sorry, something went wrong. Please email us at info@rebirthSDC.org"
      )
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please reach us directly at info@rebirthSDC.org or call (480) 559-2365.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all hover:scale-105"
        style={{ background: 'linear-gradient(180deg, #9a2a3a 0%, #7c1f2e 100%)' }}
        aria-label="Chat with Project Rebirth"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#e8531f] text-[10px] font-bold text-white">
            1
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-80 flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{ height: '480px', maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: 'linear-gradient(135deg, #7c1f2e 0%, #5a141f 100%)' }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
              🔥
            </div>
            <div>
              <p className="text-sm font-bold text-white">Project Rebirth</p>
              <p className="text-xs text-white/70">Intake Agent • Online</p>
            </div>
            <div className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white p-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[#7c1f2e] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div
                      className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white px-3 py-2 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#7c1f2e]"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c1f2e] text-white transition-all hover:bg-[#5a141f] disabled:opacity-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="bg-white px-3 pb-2 text-center">
            <p className="text-[10px] text-gray-400">
              Project Rebirth · rebirthsdc.org · info@rebirthSDC.org
            </p>
          </div>
        </div>
      )}
    </>
  )
}
