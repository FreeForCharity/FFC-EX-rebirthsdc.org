import type { Metadata } from 'next'
import ContentCalendarAgent from './ContentCalendarAgent'

export const metadata: Metadata = {
  title: 'Content Calendar | Project Rebirth',
  description: 'AI-powered content calendar generator — all platforms, one click.',
  robots: { index: false, follow: false },
}

export default function ContentCalendarPage() {
  return <ContentCalendarAgent />
}
