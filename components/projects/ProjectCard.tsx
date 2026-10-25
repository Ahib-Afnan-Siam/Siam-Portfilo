'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Star, LockKeyhole, Globe2 } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({
  project,
  index = 0,
  mode = 'grid',
}: {
  project: Project
  index?: number
  mode?: 'grid' | 'marquee'
}) {
  const isMarquee = mode === 'marquee'
  const [detailsOpen, setDetailsOpen] = useState(false)
  const isLive = project.deployment !== 'none'
  const isInternal = project.deployment === 'internal'
  const isPublic = project.deployment === 'public'

  return (
    <motion.div
      initial={isMarquee ? false : {
        opacity: 0,
        scale: 0.82,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-40px',
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative glass rounded-2xl overflow-hidden
        border border-black/5 dark:border-white/5
        hover:border-cyan-500/30 dark:hover:border-cyan-400/30
        hover:shadow-xl hover:shadow-cyan-500/10
        hover:scale-[1.03]
        transition-all duration-300
        flex flex-col h-full
        ${isMarquee ? 'h-[505px] max-h-[505px] hover:scale-100 focus-within:border-cyan-500/40 focus-within:shadow-xl focus-within:shadow-cyan-500/10' : ''}
      `}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="
            object-cover
            group-hover:scale-110
            transition-transform duration-500
            opacity-70 group-hover:opacity-90
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent" />

        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-xs font-medium backdrop-blur-md">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {isLive && (
          <div
            title={
              isInternal
                ? "Deployed and running in production on PRAN-RFL's internal network"
                : 'Publicly accessible production system'
            }
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-medium backdrop-blur-md"
          >
            <Globe2 size={11} />

            {isInternal ? 'Live · Internal' : 'Live'}
          </div>
        )}
      </div>

      <div className={`p-6 flex flex-col flex-1 min-h-0 ${isMarquee ? 'overflow-hidden' : ''}`}>
        <div className="mb-3">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1 text-xs font-medium text-purple-600 dark:text-purple-400">
              {project.subtitle}
            </p>
          )}
        </div>

        {isMarquee ? (
          <>
            <p className="mb-4 line-clamp-3 text-left text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {project.description}
            </p>

            {/* Hover/focus reveals a full reading panel across the card body.
                It stays inside the fixed card bounds, so the track never reflows.
                The footer and its links remain above the overlay. */}
            <div
              className={`absolute inset-x-0 bottom-[78px] top-48 z-20 flex flex-col rounded-b-lg border-t border-cyan-500/15 bg-[var(--bg-primary)]/95 p-5 shadow-inner backdrop-blur-xl transition-all duration-300 ease-out dark:bg-[var(--bg-secondary)]/95 sm:p-6 ${
                detailsOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-3 opacity-0 md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100'
              }`}
            >
              <span className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                Project overview
              </span>
              <h4 className="mb-3 text-sm font-bold leading-snug text-slate-900 dark:text-white">
                {project.title}
              </h4>
              <div className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <p className="text-left text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-cyan-500/15 bg-cyan-500/5 px-2 py-0.5 font-mono text-[11px] text-cyan-700 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDetailsOpen((previous) => !previous)}
              aria-expanded={detailsOpen}
              className="relative z-30 mb-3 self-start text-xs font-semibold text-cyan-700 underline underline-offset-2 dark:text-cyan-400 md:hidden"
            >
              {detailsOpen ? 'Hide details' : 'Explore project details'}
            </button>
          </>
        ) : (
          <p className="mb-4 text-left text-sm leading-relaxed text-slate-500 line-clamp-5 dark:text-slate-400">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="
                px-2 py-0.5 rounded
                text-xs font-mono
                text-cyan-600 dark:text-cyan-300/80
                bg-cyan-500/5
                border border-cyan-500/10
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 6 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-400">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        <div className={`flex items-center justify-between gap-3 mt-auto pt-3 border-t border-black/5 dark:border-white/5 ${isMarquee ? 'relative z-30' : ''}`}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
            >
              <Github size={15} />
              Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <LockKeyhole size={14} />
              {project.codeText ?? 'Private'}
            </span>
          )}

          {isPublic && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                px-3 py-1.5
                rounded-lg
                text-sm font-medium
                text-cyan-700 dark:text-cyan-300
                bg-cyan-500/10
                border border-cyan-500/20
                hover:bg-cyan-500/15
                hover:border-cyan-500/40
                hover:scale-[1.03]
                transition-all
              "
            >
              {project.liveLabel ?? 'Visit Platform'}
              <ExternalLink size={13} />
            </a>
          ) : isInternal ? (
            <span
              title="Deployed and running in production on PRAN-RFL's internal network"
              className="
                inline-flex items-center gap-1.5
                px-3 py-1.5
                rounded-lg
                text-sm font-medium
                text-emerald-700 dark:text-emerald-300
                bg-emerald-500/10
                border border-emerald-500/20
              "
            >
              <LockKeyhole size={13} />
              Production · Private Access
            </span>
          ) : (
            <span className="text-slate-400 text-sm">
              Portfolio Project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

