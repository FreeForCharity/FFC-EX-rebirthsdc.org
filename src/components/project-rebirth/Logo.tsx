import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { SITE } from '@/data/project-rebirth/site'

interface LogoProps {
  compact?: boolean
  variant?: 'light' | 'dark'
}

/**
 * Project Rebirth lockup: phoenix flame mark + wordmark.
 * The wordmark is rendered as text (crisp at any size); only the flame is an image.
 */
const Logo: React.FC<LogoProps> = ({ compact = false, variant = 'light' }) => {
  const titleColor = variant === 'dark' ? 'text-white' : 'text-[#1a1f2b]'
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${SITE.name} home`}>
      <img
        src={assetPath('/Images/project-rebirth/logo-phoenix.png')}
        alt=""
        aria-hidden="true"
        className={`${compact ? 'h-9' : 'h-12'} w-auto transition-all duration-300`}
      />
      <span className="leading-tight">
        <span
          className={`font-display block font-bold tracking-wide ${titleColor} ${
            compact ? 'text-[15px]' : 'text-[18px]'
          }`}
        >
          {SITE.name.toUpperCase()}
        </span>
        {!compact && (
          <span className="block text-[10px] font-semibold uppercase tracking-wide text-[var(--pr-maroon)]">
            {SITE.tagline}
          </span>
        )}
      </span>
    </Link>
  )
}

export default Logo
