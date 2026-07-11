import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

import Providers from '@/components/Providers'
import RouteTransitionLoader from '@/components/ui/RouteTransitionLoader'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

// Display face for headings — geometric, technical, distinctive.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s — Ahib Afnan Siam',
  },
  description: SITE.description,
  keywords: [
    'Ahib Afnan Siam',
    'AI Software Engineer',
    'AI Engineer',
    'LLM Engineer',
    'RAG Engineer',
    'NL2SQL Developer',
    'Full Stack AI Developer',
    'Machine Learning Engineer',
    'Semantic Search',
    'Vector Search',
    'Oracle VECTOR',
    'FastAPI',
    'React',
    'Next.js',
    'Computer Vision',
    'Portfolio',
    'Dhaka',
    'Bangladesh',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      givenName: 'Ahib Afnan',
      familyName: 'Siam',
      url: SITE.url,
      image: `${SITE.url}/opengraph-image`,
      email: `mailto:${SITE.email}`,
      jobTitle: 'AI Software Engineer',
      description: SITE.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressRegion: 'Dhaka',
        addressCountry: 'BD',
      },
      sameAs: [SITE.socials.github, SITE.socials.linkedin],
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Large Language Models',
        'Retrieval-Augmented Generation',
        'Natural Language to SQL',
        'Semantic Search',
        'Vector Search',
        'Oracle VECTOR',
        'FastAPI',
        'React',
        'Next.js',
        'Computer Vision',
        'Full-Stack AI Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#person` },
      about: { '@id': `${SITE.url}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE.url}/#profilepage`,
      url: SITE.url,
      name: SITE.title,
      isPartOf: { '@id': `${SITE.url}/#website` },
      mainEntity: { '@id': `${SITE.url}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <Providers>
          <RouteTransitionLoader />

          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#0a0a1f',
                color: '#f1f5f9',
                border: '1px solid rgba(6, 182, 212, 0.3)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}