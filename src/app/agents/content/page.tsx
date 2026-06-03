import type { Metadata } from 'next'
import ContentAgent from './ContentAgent'

export const metadata: Metadata = {
  title: 'Content Agent | Project Rebirth',
  description:
    'AI-powered content generation for Project Rebirth — social media, donor emails, press releases.',
  robots: { index: false, follow: false }, // Keep this internal
}

export default function ContentAgentPage() {
  return <ContentAgent />
}
