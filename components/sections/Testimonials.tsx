
'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from '@/components/testimonials/TestimonialCard'
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel'
import TestimonialGrid from '@/components/testimonials/TestimonialGrid'
import { TESTIMONIALS, FEATURED_TESTIMONIALS } from '@/data/testimonials'

type SectionVariant = 'featured' | 'full'

type TestimonialsProps = {
  variant?: SectionVariant
}

export default function Testimonials({
  variant = 'featured',
}: TestimonialsProps) {
  const isFull = variant === 'full'
  const visible = isFull ? TESTIMONIALS : FEATURED_TESTIMONIALS

  // No featured recommendations: do not add an empty section to the homepage.
  if (!isFull && visible.length === 0) return null

  return (
    <section id="testimonials" className="section-padding container-wide">
      <SectionHeader
        label={isFull ? 'Professional Endorsements' : '03 / Recommendations'}
        title="Professional Recommendations"
        subtitle={
          isFull
            ? "Firsthand perspectives from professionals I've worked with, reflecting technical expertise, collaboration, and a commitment to meaningful results."
            : "Recognition from professionals I've worked with — sharing firsthand perspectives on my engineering, collaboration, and approach to solving real-world problems."
        }
        spacing={isFull ? 'compact' : 'default'}
      />

      {isFull ? (
        visible.length === 0 ? (
          <div className="glass mx-auto max-w-[700px] rounded-2xl px-6 py-12 text-center text-slate-500 dark:text-slate-400">
            No professional recommendations have been published yet.
          </div>
        ) : visible.length === 1 ? (
          <TestimonialCard testimonial={visible[0]} variant="full" />
        ) : (
          <TestimonialGrid testimonials={visible} />
        )
      ) : visible.length === 1 ? (
        <TestimonialCard testimonial={visible[0]} variant="featured" />
      ) : (
        <TestimonialCarousel testimonials={visible} />
      )}

      {isFull && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="glass inline-flex items-center gap-2 rounded-xl border border-black/5 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-cyan-500/30 hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:border-white/5 dark:text-slate-300 dark:hover:text-cyan-400"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      )}
    </section>
  )
}
