'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from './TestimonialCard'

type Props = { testimonial: Testimonial }

export default function TestimonialDetail({ testimonial }: Props) {
  return (
    <section className="section-padding container-wide" aria-label={`Recommendation from ${testimonial.name}`}>
      <SectionHeader
        label="Professional Endorsement"
        title="Professional Recommendation"
        subtitle={`A firsthand recommendation from ${testimonial.name}${testimonial.role ? ` · ${testimonial.role}` : ''}.`}
        spacing="compact"
      />
      <TestimonialCard testimonial={testimonial} variant="full" />
      <div className="mt-10 flex justify-center">
        <Link href="/testimonials" className="glass inline-flex items-center gap-2 rounded-xl border border-black/5 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-cyan-500/30 hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:border-white/5 dark:text-slate-300 dark:hover:text-cyan-400">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Recommendations
        </Link>
      </div>
    </section>
  )
}
