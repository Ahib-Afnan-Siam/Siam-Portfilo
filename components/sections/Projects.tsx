'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Star,
  LockKeyhole,
  Globe2,
} from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'

import { PROJECTS, type Project } from '@/data/projects'

type SectionVariant = 'featured' | 'full'

type ProjectsProps = {
  variant?: SectionVariant
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const isLive = project.deployment !== 'none'
  const isInternal = project.deployment === 'internal'
  const isPublic = project.deployment === 'public'

  return (
    <motion.div
      initial={{
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
      className="
        group relative glass rounded-2xl overflow-hidden
        border border-black/5 dark:border-white/5
        hover:border-cyan-500/30 dark:hover:border-cyan-400/30
        hover:shadow-xl hover:shadow-cyan-500/10
        hover:scale-[1.03]
        transition-all duration-300
        flex flex-col h-full
      "
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

      <div className="p-6 flex flex-col flex-1">
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

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 text-left line-clamp-5">
          {project.description}
        </p>

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

        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-black/5 dark:border-white/5">
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

export default function Projects({ variant = 'full' }: ProjectsProps) {
  const [filter, setFilter] =
    useState<'all' | 'featured'>('featured')

  const filtered =
    variant === 'featured'
      ? PROJECTS.filter((project) => project.featured)
      : filter === 'featured'
      ? PROJECTS.filter((project) => project.featured)
      : PROJECTS

  return (
    <section
      id="projects"
      className="section-padding container-wide"
    >
      <SectionHeader
        label="03 / Projects"
        title="Selected Work"
        subtitle={
          variant === 'featured'
            ? 'Selected production AI systems and enterprise projects.'
            : 'Production AI systems, enterprise automation, semantic search, computer vision, and machine learning projects — including publicly accessible platforms and internally deployed enterprise systems.'
        }
      />

      {variant === 'full' && (
        <div className="flex justify-center gap-3 mb-12">
          {(['featured', 'all'] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                filter === item
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/5'
              }`}
            >
              {item === 'featured'
                ? 'Featured'
                : 'All Projects'}
            </button>
          ))}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {variant === 'featured' && (
        <div className="flex justify-center mt-10">
          <a
            href="/projects"
            className="px-5 py-2.5 rounded-xl glass border border-black/5 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            View All Projects
          </a>
        </div>
      )}
    </section>
  )
}