
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import TestimonialDetail from '@/components/testimonials/TestimonialDetail'
import { TESTIMONIALS } from '@/data/testimonials'

type PageProps = {
  params: Promise<{
    id: string
  }>
}

const SITE_URL = 'https://ahib-afnan-siam.vercel.app'

export function generateStaticParams() {
  return TESTIMONIALS.map((testimonial) => ({
    id: testimonial.id,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params

  const testimonial = TESTIMONIALS.find(
    (item) => item.id === id
  )

  if (!testimonial) {
    return {
      title: 'Recommendation Not Found | Ahib Afnan Siam',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const title = `${testimonial.name} — Professional Recommendation | Ahib Afnan Siam`

  const description = testimonial.featuredQuote

  const canonicalUrl = `${SITE_URL}/testimonials/${encodeURIComponent(
    testimonial.id
  )}`

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Ahib Afnan Siam',
      publishedTime: `${testimonial.date}T00:00:00.000Z`,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function TestimonialPage({
  params,
}: PageProps) {
  const { id } = await params

  const testimonial = TESTIMONIALS.find(
    (item) => item.id === id
  )

  if (!testimonial) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <TestimonialDetail testimonial={testimonial} />
    </main>
  )
}
