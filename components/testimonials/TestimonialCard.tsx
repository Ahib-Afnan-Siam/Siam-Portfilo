'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink, Linkedin, Quote } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import TestimonialAuthor from './TestimonialAuthor'

type Props = {
  testimonial: Testimonial
  variant?: 'featured' | 'full'
  index?: number
}

export default function TestimonialCard({ testimonial, variant = 'featured', index = 0 }: Props) {
  const isFull = variant === 'full'
  const reducedMotion = useReducedMotion()
  const recommendationUrl = testimonial.recommendationUrl

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group glass border-gradient relative mx-auto w-full overflow-hidden rounded-2xl p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-8 md:p-10 ${isFull ? 'max-w-[1000px]' : 'max-w-[900px]'}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-purple-500/15">
              <Quote size={20} className="text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Professional Endorsement</span>
          </div>
          {recommendationUrl ? (
            <a href={recommendationUrl} target="_blank" rel="noopener noreferrer" aria-label="View original recommendation on LinkedIn" title="View recommendation on LinkedIn" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#0A66C2] transition-all duration-300 hover:scale-110 hover:bg-cyan-500/10">
              <Linkedin size={21} aria-hidden="true" />
            </a>
          ) : <Linkedin size={21} className="shrink-0 text-[#0A66C2]" aria-hidden="true" />}
        </div>

        {!isFull && (
          <>
            {testimonial.headline && <h3 className="mb-5 font-display text-xl font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl">{testimonial.headline}</h3>}
            <blockquote className="border-l-2 border-cyan-500/60 pl-4 text-sm italic leading-7 text-slate-700 dark:text-slate-200 sm:pl-5 sm:text-base">“{testimonial.featuredQuote}”</blockquote>
            {!!testimonial.themes?.length && (
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Recommendation themes">
                {testimonial.themes.map((theme) => <span key={theme} className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">{theme}</span>)}
              </div>
            )}
          </>
        )}

        <div className={isFull ? 'border-b border-black/10 pb-6 dark:border-white/10' : 'mt-8 border-t border-black/10 pt-6 dark:border-white/10'}>
          <TestimonialAuthor testimonial={testimonial} />
        </div>

        {isFull && (
          <blockquote className="relative mx-auto mt-8 max-w-[820px] space-y-7 border-l-2 border-cyan-500/60 pl-5 text-sm leading-8 text-slate-700 dark:text-slate-200 sm:pl-7 sm:text-base">
            <Quote size={32} aria-hidden="true" className="pointer-events-none absolute -top-2 right-0 hidden text-cyan-500/15 sm:block" />
            {testimonial.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </blockquote>
        )}

        <div className={`flex flex-wrap items-center justify-between gap-x-5 gap-y-4 ${isFull ? 'mt-8 border-t border-black/10 pt-6 dark:border-white/10' : 'mt-6'}`}>
          {!isFull && (
            <Link href={`/testimonials/${encodeURIComponent(testimonial.id)}`} className="inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-cyan-700 transition-colors hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400">
              Read Full Recommendation <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
          {recommendationUrl && (
            <a href={recommendationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-1 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400">
              {isFull ? 'View Original on LinkedIn' : 'View on LinkedIn'} <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
