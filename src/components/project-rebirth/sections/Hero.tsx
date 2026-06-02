import React from 'react'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { assetPath } from '@/lib/assetPath'
import { HOME } from '@/data/project-rebirth/content'

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0e0e10', marginTop: '-4px', paddingTop: '4px' }}
    >
      <img
        src={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
      >
        <source src={assetPath('/videos/hero-3d-printing.mp4')} type="video/mp4" />
      </video>

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
