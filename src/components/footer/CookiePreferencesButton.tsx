'use client'

import React from 'react'

/**
 * Persistent consent re-entry point (withdrawing consent must stay as easy
 * as giving it): reopens the preferences modal the cookie-consent banner
 * registers on window. Kept as a tiny client island so the footer itself
 * stays a server component.
 */
export default function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.openCookiePreferences?.()} className={className}>
      Cookie Preferences
    </button>
  )
}
