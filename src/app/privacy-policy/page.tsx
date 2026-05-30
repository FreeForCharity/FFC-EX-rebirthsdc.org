import type { Metadata } from 'next'
import PolicyDoc from '@/components/project-rebirth/PolicyDoc'
import { LEGAL_DOCS } from '@/data/project-rebirth/legal'

const doc = LEGAL_DOCS['privacy-policy']

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
}

export default function PrivacyPolicyPage() {
  return <PolicyDoc doc={doc} />
}
