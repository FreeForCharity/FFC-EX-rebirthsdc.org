import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://rebirthsdc.org'),
  title: {
    default: 'Project Rebirth | Sustainable Community Development Project',
    template: '%s | Project Rebirth',
  },
  description:
    'Project Rebirth engineers the systemic eradication of housing insecurity through scalable, 3D-printed infrastructure and high-impact vocational training.',
  keywords: [
    'Project Rebirth',
    '3D-printed housing',
    'additive construction',
    'vocational training',
    'sustainable community development',
    'nonprofit',
    'homelessness',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://rebirthsdc.org/',
    siteName: 'Project Rebirth',
    title: 'Project Rebirth | Sustainable Community Development Project',
    description:
      'Restoring dignity through scalable, 3D-printed infrastructure and high-impact vocational training.',
    images: [
      {
        url: '/Images/project-rebirth/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Rebirth — Restoring Dignity Through Scalable 3D-Printed Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Rebirth | Sustainable Community Development Project',
    description:
      'Restoring dignity through scalable, 3D-printed infrastructure and high-impact vocational training.',
    images: ['/Images/project-rebirth/hero-poster.jpg'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.zeffy.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.zeffy.com" />
        <GoogleTagManager />
        {/* Structured data — nonprofit organization for Google Knowledge Panel (#56) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Project Rebirth',
              legalName: 'Project Rebirth, Inc.',
              url: 'https://rebirthsdc.org',
              logo: 'https://rebirthsdc.org/Images/project-rebirth/logo-phoenix.png',
              description:
                'Project Rebirth engineers the systemic eradication of housing insecurity through scalable, 3D-printed infrastructure and high-impact vocational training.',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Grand Rapids',
                addressRegion: 'MI',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@rebirthSDC.org',
                telephone: '+1-480-559-2365',
                contactType: 'customer support',
              },
              sameAs: [
                'https://facebook.com/share/1BYV22rv6k/',
                'https://instagram.com/sustainablecommunityproject',
                'https://x.com/projectrebirth7',
              ],
              nonprofitStatus: 'Nonprofit501c3',
              taxID: 'Available upon request',
            }),
          }}
        />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {/* id="main-content" enables the skip-to-content link in the header */}
        <main id="main-content" className="pt-[84px]">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
