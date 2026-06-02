import React from 'react'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { assetPath } from '@/lib/assetPath'
import { HOME } from '@/data/project-rebirth/content'

/** Home hero with the 3D-printing video as a background layer. */
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--pr-ink)]">
      {/* Static poster background — the sole background for reduced-motion users */}
      <img
        src={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background video via Vimeo — autoplay, muted, looped, no controls */}
      <div
        className="absolute inset-0 motion-reduce:hidden overflow-hidden"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        <iframe
          src="https://player.vimeo.com/video/1197012454?autoplay=1&muted=1&loop=1&background=1&autopause=0"
          allow="autoplay; fullscreen"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '177.78vh',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Subtle dark overlay for text legibility — no maroon tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(14,14,16,0.72) 0%, rgba(14,14,16,0.55) 55%, rgba(14,14,16,0.65) 100%)',
        }}
      />

      <div className="pr-container relative z-10 py-24 md:py-32 text-center text-white">
        <h1 className="font-display mx-auto max-w-4xl text-3xl font-bold uppercase leading-tight tracking-wide text-white md:text-5xl">
          {HOME.eyebrow}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 md:text-lg">{HOME.intro}</p>
        <div className="mt-10">
          <PartnerButton />
        </div>
      </div>
    </section>
  )
}

export default Hero
