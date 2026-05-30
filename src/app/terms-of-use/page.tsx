import type { Metadata } from 'next'
import PolicyDoc from '@/components/project-rebirth/PolicyDoc'
import { LEGAL_DOCS } from '@/data/project-rebirth/legal'

const doc = LEGAL_DOCS['terms-of-use']

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
}

export default function TermsOfUsePage() {
  return <PolicyDoc doc={doc} />
}
