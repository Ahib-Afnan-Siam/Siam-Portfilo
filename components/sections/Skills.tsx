'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  SKILLS,
  type SkillItem,
  type SkillCategory,
} from '@/data/skills'

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  languages: 'Languages',
  machineLearning: 'Machine Learning',
  deepLearning: 'Deep Learning & Computer Vision',
  generativeAI: 'Generative AI & Information Retrieval',
  frameworks: 'Frameworks & Libraries',
  database: 'Databases & Infrastructure',
  concepts: 'Developer Tools & Concepts',
  aiEngineering: 'AI Engineering',
}

const CATEGORY_COLORS: Record<
  SkillCategory,
  {
    text: string
    border: string
    bg: string
    glow: string
  }
> = {
  languages: {
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    glow: 'hover:shadow-cyan-500/10',
  },
  machineLearning: {
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/10',
    glow: 'hover:shadow-blue-500/10',
  },
  deepLearning: {
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/10',
    glow: 'hover:shadow-indigo-500/10',
  },
  generativeAI: {
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/10',
    glow: 'hover:shadow-purple-500/10',
  },
  frameworks: {
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/10',
    glow: 'hover:shadow-violet-500/10',
  },
  database: {
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/10',
    glow: 'hover:shadow-orange-500/10',
  },
  concepts: {
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-500/20',
    bg: 'bg-green-500/10',
    glow: 'hover:shadow-green-500/10',
  },
  aiEngineering: {
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    glow: 'hover:shadow-pink-500/10',
  },
}

const CATEGORIES = [
  'generativeAI',
  'machineLearning',
  'deepLearning',
  'languages',
  'frameworks',
  'database',
  'concepts',
  'aiEngineering',
  'all',
] as const

type Category = (typeof CATEGORIES)[number]

const GROUPED_CATEGORY_ORDER: SkillCategory[] = [
  'generativeAI',
  'machineLearning',
  'deepLearning',
  'languages',
  'frameworks',
  'database',
  'concepts',
  'aiEngineering',
]

function SkillCard({
  skill,
  index,
}: {
  skill: SkillItem
  index: number
}) {
  const colors = CATEGORY_COLORS[skill.category]
  const Icon = skill.icon

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.025, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`glass rounded-2xl p-5 flex flex-col items-center justify-center text-center border ${colors.border} hover:scale-[1.04] hover:shadow-lg ${colors.glow} transition-all min-h-[130px] group`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
      >
        <Icon size={28} className={colors.text} />
      </div>

      <p className="text-slate-800 dark:text-slate-100 text-sm font-semibold leading-snug">
        {skill.name}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('generativeAI')

  const filtered =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter(
          (skill) => skill.category === activeCategory
        )

  const groupedSkills = GROUPED_CATEGORY_ORDER.reduce<
    Record<SkillCategory, SkillItem[]>
  >(
    (acc, category) => {
      acc[category] = SKILLS.filter(
        (skill) => skill.category === category
      )

      return acc
    },
    {} as Record<SkillCategory, SkillItem[]>
  )

  return (
    <section
      id="skills"
      className="section-padding container-wide"
    >
      <SectionHeader
        label="04 / Skills"
        title="Technical Skills"
        subtitle="Technologies and engineering practices I use to build production AI systems, from retrieval and machine learning pipelines to full-stack applications and infrastructure."
      />

      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 mb-12 overflow-x-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:scale-105 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/5'
            }`}
          >
            {category === 'all'
              ? 'All'
              : CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {activeCategory === 'all' ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {GROUPED_CATEGORY_ORDER.map(
            (category, groupIndex) => {
              const skills = groupedSkills[category]
              const colors =
                CATEGORY_COLORS[category]

              return (
                <motion.div
                  key={category}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay:
                      groupIndex * 0.06,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="glass rounded-2xl p-6 border border-black/5 dark:border-white/5 hover:border-cyan-500/15 transition-all"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <h3
                      className={`font-semibold text-sm ${colors.text}`}
                    >
                      {
                        CATEGORY_LABELS[
                          category
                        ]
                      }
                    </h3>

                    <span className="text-[11px] font-mono text-slate-400">
                      {skills.length}{' '}
                      {skills.length === 1
                        ? 'skill'
                        : 'skills'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skills.map(
                      (skill, index) => (
                        <SkillCard
                          key={skill._id}
                          skill={skill}
                          index={index}
                        />
                      )
                    )}
                  </div>
                </motion.div>
              )
            }
          )}
        </div>
      ) : (
        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {filtered.map(
              (skill, index) => (
                <SkillCard
                  key={skill._id}
                  skill={skill}
                  index={index}
                />
              )
            )}
          </div>
        </motion.div>
      )}
    </section>
  )
}
