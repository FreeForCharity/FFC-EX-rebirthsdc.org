'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from './header'
import Footer from './footer'
import CookieConsent from './cookie-consent'
import IntakeAgent from './agents/IntakeAgent'

const STANDALONE_ROUTES = ['/bearup-international-ministries']

export default function ConditionalAppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandalone = STANDALONE_ROUTES.some((p) => pathname.startsWith(p))

  if (isStandalone) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-[84px]">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <IntakeAgent />
    </>
  )
}
