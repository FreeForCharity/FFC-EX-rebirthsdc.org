import React from 'react'
import PartnerButton from '@/components/project-rebirth/PartnerButton'
import { assetPath } from '@/lib/assetPath'
import { HOME } from '@/data/project-rebirth/content'

const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#0e0e10',
        overflow: 'hidden',
        /* Pull section back up to sit flush under the fixed header —
           undoes the main pt-[84px] so no gap/body-bg shows above the video */
        marginTop: '-84px',
        /* Push text content back down below the header */
        paddingTop: '84px',
        minHeight: '92vh',
      }}
    >
      {/* Poster — oversized so object-cover always fills, bars clipped by overflow:hidden */}
      <img
        src={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12%',
          left: 0,
          width: '100%',
          height: '124%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />

      {/* Video — same oversized treatment, bars cropped top and bottom */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath('/Images/project-rebirth/hero-poster.jpg')}
        className="motion-reduce:hidden"
        style={{
          position: 'absolute',
          top: '-12%',
          left: 0,
          width: '100%',
          height: '124%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src={assetPath('/videos/hero-3d-printing.mp4')} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(160deg, rgba(14,14,16,0.72) 0%, rgba(14,14,16,0.52) 55%, rgba(14,14,16,0.65) 100%)',
        }}
      />

      {/* Text content */}
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
