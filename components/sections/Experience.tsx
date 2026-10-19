'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BriefcaseBusiness, CalendarDays, ChevronDown, Layers3 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { EXPERIENCES } from '@/data/experience'
import type { Experience as ExperienceType } from '@/types'

function formatDate(value: string) {
  const [year, month] = value.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

type ExperienceCardProps = {
  experience: ExperienceType
  index: number
  isLast: boolean
}

function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(experience.current)
  const reducedMotion = useReducedMotion()
  const detailsId = useId()
  const period = `${formatDate(experience.startDate)} — ${
    experience.current
      ? 'Present'
      : experience.endDate
        ? formatDate(experience.endDate)
        : ''
  }`

  return (
    <motion.li
      className="relative list-none pl-9 sm:pl-12 md:pl-14"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : index * 0.06 }}
    >
      {/* Rail segments meet milestone centers; no rail continues below the final one. */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[12px] top-[37px] bottom-[-57px] w-[2px] rounded-full bg-gradient-to-b from-cyan-400/80 via-blue-500/55 to-purple-500/45 sm:left-[16px] sm:bottom-[-61px] md:left-[18px] md:bottom-[-65px]"
        />
      )}

      {/* Milestone and its connection to the card. */}
      <span
        aria-hidden="true"
        className="absolute left-[12px] top-9 z-10 h-[2px] w-6 bg-gradient-to-r from-cyan-400/75 to-purple-400/40 sm:left-[16px] sm:w-8 md:left-[18px] md:w-9"
      />
      <span
        aria-hidden="true"
        className={`absolute left-[5px] top-[29px] z-20 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[var(--bg-primary)] sm:left-[9px] md:left-[11px] ${
          experience.current
            ? 'bg-cyan-400 shadow-[0_0_0_5px_rgba(6,182,212,0.12),0_0_18px_rgba(6,182,212,0.35)]'
            : 'bg-gradient-to-br from-cyan-400 to-purple-500'
        }`}
      />

      <motion.article
        whileHover={reducedMotion ? undefined : { y: -2 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
        className={`group relative overflow-hidden rounded-[20px] border bg-white/95 shadow-[0_8px_30px_rgba(35,55,110,0.055)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none dark:bg-[#0b1125]/95 dark:shadow-[0_8px_30px_rgba(0,0,0,0.18)] ${
          experience.current
            ? 'border-cyan-400/55 hover:shadow-[0_14px_42px_rgba(6,182,212,0.12)] dark:border-cyan-400/35'
            : 'border-slate-200/85 hover:border-cyan-400/45 hover:shadow-[0_14px_40px_rgba(6,182,212,0.09)] dark:border-white/10'
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 ${experience.current ? 'opacity-100' : 'opacity-45'}`}
        />
        <div className="relative p-5 sm:p-7 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
                <CalendarDays size={14} className="shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                <span>{period}</span>
              </p>
              <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-slate-900 transition-colors motion-reduce:transition-none group-hover:text-cyan-700 sm:text-xl md:text-[22px] dark:text-white dark:group-hover:text-cyan-300">
                {experience.role}
              </h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-cyan-700 sm:text-base dark:text-cyan-300">
                <BriefcaseBusiness size={15} className="shrink-0" aria-hidden="true" />
                <span>{experience.company}</span>
              </p>
            </div>
            {experience.current && (
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Current
              </span>
            )}
          </div>

          <p className="mt-5 text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300">
            {experience.description}
          </p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={detailsId}
                key="details"
                initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 border-t border-slate-200/80 pt-5 dark:border-white/10">
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-[15px] leading-[1.7] text-slate-700 dark:text-slate-300">
                        <span aria-hidden="true" className="mt-[2px] shrink-0 font-semibold text-cyan-600 dark:text-cyan-400">▸</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-slate-200/70 pt-5 dark:border-white/10">
                    <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
                      <Layers3 size={14} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span key={technology} className="rounded-full border border-purple-400/25 bg-purple-500/[0.08] px-3 py-1 font-mono text-[11px] font-medium text-purple-700 transition-colors hover:border-purple-400/45 hover:bg-purple-500/[0.14] sm:text-xs dark:text-purple-300">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`flex flex-wrap items-center justify-between gap-3 ${expanded ? 'mt-5' : 'mt-5 border-t border-slate-200/70 pt-4 dark:border-white/10'}`}>
            <span className="font-mono text-[11px] font-medium text-slate-600 sm:text-xs dark:text-slate-400">
              {experience.responsibilities.length} responsibilities · {experience.technologies.length} technologies
            </span>
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls={detailsId}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-xs font-semibold text-cyan-700 transition-colors hover:bg-cyan-500/10 focus-visible:border-cyan-600 focus-visible:bg-cyan-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500/40 sm:text-sm dark:text-cyan-300 dark:focus-visible:border-cyan-300 dark:focus-visible:bg-cyan-400/15 dark:focus-visible:ring-cyan-300/40 motion-reduce:transition-none"
            >
              {expanded ? 'Show Less' : 'View Responsibilities'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>
                <ChevronDown size={16} aria-hidden="true" />
              </motion.span>
            </button>
          </div>
        </div>
      </motion.article>
    </motion.li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding container-wide">
      <SectionHeader
        label="02 / Experience"
        title="Work Experience"
        subtitle="My journey through enterprise AI engineering, RAG and NL2SQL systems, semantic search, AI automation, computer vision, and full-stack development."
      />
      <div className="relative mx-auto w-full max-w-[960px]">
        <ol className="relative space-y-5 sm:space-y-6 md:space-y-7">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience._id ?? index}
              experience={experience}
              index={index}
              isLast={index === EXPERIENCES.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
