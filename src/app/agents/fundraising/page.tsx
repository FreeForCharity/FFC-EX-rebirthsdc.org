import type { Metadata } from 'next'
import FundraisingAgent from './FundraisingAgent'

export const metadata: Metadata = {
  title: 'Fundraising Agent | Project Rebirth',
  description: 'AI-powered donor outreach email generator for Project Rebirth.',
  robots: { index: false, follow: false },
}

export default function FundraisingAgentPage() {
  return <FundraisingAgent />
}
