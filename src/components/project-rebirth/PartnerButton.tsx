import React from 'react'
import { LINKS } from '@/data/project-rebirth/site'

interface PartnerButtonProps {
  label?: string
  href?: string
  variant?: 'maroon' | 'flame'
  className?: string
}

/** Glossy "Partner With Us" call-to-action button (defaults to the Zeffy donation form). */
const PartnerButton: React.FC<PartnerButtonProps> = ({
  label = 'Partner With Us',
  href = LINKS.donate,
  variant = 'maroon',
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-rebirth ${variant === 'flame' ? 'btn-flame' : ''} ${className}`}
    >
      {label}
    </a>
  )
}

export default PartnerButton
