import React from 'react'

/** Maroon uppercase serif section heading, optionally centered. */
export const SectionHeading: React.FC<{
  children: React.ReactNode
  center?: boolean
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}> = ({ children, center = false, as: Tag = 'h2', className = '' }) => (
  <Tag className={`pr-heading text-3xl md:text-4xl ${center ? 'text-center' : ''} ${className}`}>
    {children}
  </Tag>
)

/**
 * Themed placeholder for photography the client will supply (the Canva mockup used
 * watermarked stock for these slots, so we don't ship those images).
 * TODO: replace with client-supplied licensed imagery.
 */
export const PhotoPlaceholder: React.FC<{
  label?: string
  className?: string
  rounded?: boolean
}> = ({ label = 'Image coming soon', className = '', rounded = true }) => (
  <div
    className={`relative overflow-hidden bg-[var(--pr-charcoal)] ${rounded ? 'rounded-lg' : ''} ${className}`}
    role="img"
    aria-label={label}
  >
    <div className="bp-grid-dark absolute inset-0 opacity-60" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-nav text-[11px] uppercase tracking-[0.2em] text-white/40">{label}</span>
    </div>
  </div>
)

/** Standard light "blueprint" page section. */
export const Section: React.FC<{
  children: React.ReactNode
  tone?: 'blueprint' | 'paper' | 'ink'
  className?: string
  id?: string
}> = ({ children, tone = 'paper', className = '', id }) => {
  const toneClass =
    tone === 'blueprint' ? 'bp-grid' : tone === 'ink' ? 'bp-grid-dark text-white' : 'bg-white'
  return (
    <section id={id} className={`${toneClass} py-16 md:py-24 ${className}`}>
      <div className="pr-container">{children}</div>
    </section>
  )
}
