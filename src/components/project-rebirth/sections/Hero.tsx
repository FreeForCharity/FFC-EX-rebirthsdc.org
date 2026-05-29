import React from 'react'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { HOME } from '@/data/project-rebirth/content'

/**
 * Home hero. The Canva mockup used a watermarked stock video still here, so we render
 * a CSS industrial/blueprint backdrop instead.
 * TODO: drop in a client-supplied licensed hero image as a background layer.
 */
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--pr-ink)]">
      <div className="bp-grid-dark absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(232,83,31,0.18), transparent 55%), linear-gradient(160deg, #0e0e10 0%, #1c1c20 60%, #2a1014 100%)',
        }}
      />
      <div className="pr-container relative z-10 py-24 md:py-32 text-center text-white">
        <h1 className="font-display mx-auto max-w-4xl text-3xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl">
          {HOME.eyebrow}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">{HOME.intro}</p>
        <div className="mt-10">
          <PartnerButton />
        </div>
      </div>
    </section>
  )
}

export default Hero
