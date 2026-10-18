'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import TestimonialAuthor from './TestimonialAuthor'

type Props = { testimonials: Testimonial[] }

export default function TestimonialGrid({ testimonials }: Props) {
  const reducedMotion = useReducedMotion()
  if (!testimonials.length) return null

  return (
    <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.article
          key={testimonial.id}
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : Math.min(index * 0.07, 0.28) }}
          className="group glass border-gradient relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl p-5 transition-shadow hover:shadow-xl hover:shadow-cyan-500/10 sm:p-7"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="relative z-10 flex flex-1 flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10"><Quote size={19} className="text-cyan-500" aria-hidden="true" /></span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Professional Endorsement</span>
            </div>
            {testimonial.headline && <h3 className="font-display text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-xl">{testimonial.headline}</h3>}
            <blockquote className="border-l-2 border-cyan-500/60 pl-4 text-sm italic leading-7 text-slate-600 dark:text-slate-300">
              “{testimonial.featuredQuote}”
            </blockquote>
            <div className="mt-auto border-t border-black/10 pt-5 dark:border-white/10">
              <TestimonialAuthor testimonial={testimonial} showProfileButton={false} />
            </div>
            <Link href={`/testimonials/${encodeURIComponent(testimonial.id)}`} className="inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-cyan-700 transition-colors hover:text-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:text-cyan-400 dark:hover:text-purple-400">
              Read Full Recommendation <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
