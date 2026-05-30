import React from 'react'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { assetPath } from '@/lib/assetPath'
import { HOME } from '@/data/project-rebirth/content'

/** Home hero with the 3D-printing video as a background layer. */
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--pr-ink)]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        aria-hidden="true"
      >
        <source src={assetPath('/videos/hero-3d-printing.mp4')} type="video/mp4" />
      </video>

      {/* Dark + maroon overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(232,83,31,0.12), transparent 55%), linear-gradient(160deg, rgba(14,14,16,0.88) 0%, rgba(28,28,32,0.78) 55%, rgba(42,16,20,0.85) 100%)',
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
