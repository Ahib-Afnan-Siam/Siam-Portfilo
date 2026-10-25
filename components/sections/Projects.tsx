'use client'

import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectMarquee from '@/components/projects/ProjectMarquee'

type SectionVariant = 'featured' | 'full'

type ProjectsProps = {
  variant?: SectionVariant
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
        label="04 / Projects"
        title="Selected Work"
        spacing={variant === 'full' ? 'compact' : 'default'}
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

      {variant === 'featured' ? (
        <ProjectMarquee projects={filtered} />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>
      )}

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