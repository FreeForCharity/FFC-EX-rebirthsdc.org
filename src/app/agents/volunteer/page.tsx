import type { Metadata } from 'next'
import VolunteerAgent from './VolunteerAgent'

export const metadata: Metadata = {
  title: 'Volunteer Recruiter | Project Rebirth',
  description: 'AI-powered volunteer recruitment message generator for Project Rebirth.',
  robots: { index: false, follow: false },
}

export default function VolunteerAgentPage() {
  return <VolunteerAgent />
}
