
import type { Metadata } from 'next'
import Testimonials from '@/components/sections/Testimonials'

export const metadata: Metadata = {
  title: 'Professional Recommendations | Ahib Afnan Siam',
  description:
    "Professional recommendations and firsthand endorsements of Ahib Afnan Siam's AI engineering, software development, collaboration, and problem-solving.",

  keywords: [
    'Ahib Afnan Siam',
    'Professional Recommendations',
    'LinkedIn Recommendations',
    'AI Software Engineer',
    'AI Engineering',
    'Software Development',
    'Professional Endorsements',
  ],

  openGraph: {
    title: 'Professional Recommendations | Ahib Afnan Siam',
    description:
      "Read firsthand professional recommendations highlighting Ahib Afnan Siam's engineering expertise, collaboration, and professional contributions.",
    type: 'website',
    url: 'https://ahib-afnan-siam.vercel.app/testimonials',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Professional Recommendations | Ahib Afnan Siam',
    description:
      'Professional endorsements recognizing AI engineering expertise, collaboration, and problem-solving.',
  },

  alternates: {
    canonical: 'https://ahib-afnan-siam.vercel.app/testimonials',
  },
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Testimonials variant="full" />
    </main>
  )
}
