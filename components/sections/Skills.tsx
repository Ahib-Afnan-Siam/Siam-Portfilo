'use client'

import { useState } from 'react'
import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Database,
  Bot,
  Search,
  Eye,
  Cpu,
  Box,
  Network,
  ShieldCheck,
  Bug,
  KeyRound,
  Sparkles,
  MessageSquare,
  Layers,
  FileCode,
  FlaskConical,
  BarChart3,
  Workflow,
  Braces,
  ServerCog,
  Code2,
} from 'lucide-react'
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiFastapi,
  SiNodedotjs,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiChartdotjs,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiPytorch,
  SiOpencv,
  SiGit,
  SiGithub,
  SiPytest,
  SiJest,
} from 'react-icons/si'
import SectionHeader from '@/components/ui/SectionHeader'

type SkillCategory =
  | 'languages'
  | 'ai'
  | 'frameworks'
  | 'database'
  | 'concepts'
  | 'workflow'

type SkillItem = {
  _id: string
  name: string
  category: SkillCategory
  order: number
  icon: ElementType
}

const SKILLS: SkillItem[] = [
  // Languages
  { _id: 'lang1', name: 'Python', category: 'languages', order: 1, icon: SiPython },
  { _id: 'lang2', name: 'TypeScript', category: 'languages', order: 2, icon: SiTypescript },
  { _id: 'lang3', name: 'JavaScript (ES6+)', category: 'languages', order: 3, icon: SiJavascript },
  { _id: 'lang4', name: 'C/C++', category: 'languages', order: 4, icon: SiCplusplus },
  { _id: 'lang5', name: 'SQL', category: 'languages', order: 5, icon: Database },
  { _id: 'lang6', name: 'PHP', category: 'languages', order: 6, icon: SiPhp },
  { _id: 'lang7', name: 'C# (basic)', category: 'languages', order: 7, icon: Code2 },

  // AI & Machine Learning
  { _id: 'ai1', name: 'RAG', category: 'ai', order: 8, icon: BrainCircuit },
  { _id: 'ai2', name: 'Semantic Search', category: 'ai', order: 9, icon: Search },
  { _id: 'ai3', name: 'Vector Search', category: 'ai', order: 10, icon: Network },
  { _id: 'ai4', name: 'Cross-Encoder Reranking', category: 'ai', order: 11, icon: Layers },
  { _id: 'ai5', name: 'LLM Integration', category: 'ai', order: 12, icon: Bot },
  { _id: 'ai6', name: 'Ollama', category: 'ai', order: 13, icon: Bot },
  { _id: 'ai7', name: 'OpenRouter', category: 'ai', order: 14, icon: Network },
  { _id: 'ai8', name: 'Groq', category: 'ai', order: 15, icon: Cpu },
  { _id: 'ai9', name: 'PyTorch', category: 'ai', order: 16, icon: SiPytorch },
  { _id: 'ai10', name: 'FAISS', category: 'ai', order: 17, icon: Database },
  { _id: 'ai11', name: 'Sentence Transformers', category: 'ai', order: 18, icon: Sparkles },
  { _id: 'ai12', name: 'OpenCV (Computer Vision)', category: 'ai', order: 19, icon: SiOpencv },

  // Frameworks & Libraries
  { _id: 'fw1', name: 'FastAPI', category: 'frameworks', order: 20, icon: SiFastapi },
  { _id: 'fw2', name: 'Node.js', category: 'frameworks', order: 21, icon: SiNodedotjs },
  { _id: 'fw3', name: 'Laravel', category: 'frameworks', order: 22, icon: SiLaravel },
  { _id: 'fw4', name: 'React', category: 'frameworks', order: 23, icon: SiReact },
  { _id: 'fw5', name: 'Next.js', category: 'frameworks', order: 24, icon: SiNextdotjs },
  { _id: 'fw6', name: 'Tailwind CSS', category: 'frameworks', order: 25, icon: SiTailwindcss },
  { _id: 'fw7', name: 'Bootstrap', category: 'frameworks', order: 26, icon: SiBootstrap },
  { _id: 'fw8', name: 'Pydantic', category: 'frameworks', order: 27, icon: ShieldCheck },
  { _id: 'fw9', name: 'Chart.js', category: 'frameworks', order: 28, icon: SiChartdotjs },

  // Databases & Infrastructure
  { _id: 'db1', name: 'Oracle 26ai', category: 'database', order: 29, icon: Database },
  { _id: 'db2', name: 'VECTOR', category: 'database', order: 30, icon: Network },
  { _id: 'db3', name: 'BLOB', category: 'database', order: 31, icon: Box },
  { _id: 'db4', name: 'CLOB', category: 'database', order: 32, icon: FileCode },
  { _id: 'db5', name: 'MySQL', category: 'database', order: 33, icon: SiMysql },
  { _id: 'db6', name: 'SQLite', category: 'database', order: 34, icon: SiSqlite },
  { _id: 'db7', name: 'ChromaDB', category: 'database', order: 35, icon: Database },
  { _id: 'db8', name: 'Docker', category: 'database', order: 36, icon: SiDocker },
  { _id: 'db9', name: 'APScheduler', category: 'database', order: 37, icon: ServerCog },

  // Developer Tools & Concepts
  { _id: 'dev1', name: 'Git', category: 'concepts', order: 38, icon: SiGit },
  { _id: 'dev2', name: 'GitHub', category: 'concepts', order: 39, icon: SiGithub },
  { _id: 'dev3', name: 'REST APIs', category: 'concepts', order: 40, icon: Network },
  { _id: 'dev4', name: 'Unit Testing', category: 'concepts', order: 41, icon: FlaskConical },
  { _id: 'dev5', name: 'pytest', category: 'concepts', order: 42, icon: SiPytest },
  { _id: 'dev6', name: 'Jest', category: 'concepts', order: 43, icon: SiJest },
  { _id: 'dev7', name: 'Debugging', category: 'concepts', order: 44, icon: Bug },
  { _id: 'dev8', name: 'Code Reviews', category: 'concepts', order: 45, icon: Eye },
  { _id: 'dev9', name: 'OOP', category: 'concepts', order: 46, icon: Braces },
  { _id: 'dev10', name: 'Data Structures', category: 'concepts', order: 47, icon: Layers },
  { _id: 'dev11', name: 'Algorithms', category: 'concepts', order: 48, icon: Cpu },
  { _id: 'dev12', name: 'Authentication', category: 'concepts', order: 49, icon: KeyRound },
  { _id: 'dev13', name: 'Authorization', category: 'concepts', order: 50, icon: ShieldCheck },
  { _id: 'dev14', name: 'NL2SQL', category: 'concepts', order: 51, icon: Database },
  { _id: 'dev15', name: 'Full-Stack AI Development', category: 'concepts', order: 52, icon: BrainCircuit },

  // AI Engineering Workflow
  { _id: 'wf1', name: 'Cursor', category: 'workflow', order: 53, icon: FileCode },
  { _id: 'wf2', name: 'Claude', category: 'workflow', order: 54, icon: MessageSquare },
  { _id: 'wf3', name: 'ChatGPT', category: 'workflow', order: 55, icon: Bot },
  { _id: 'wf4', name: 'TRAE AI Agent', category: 'workflow', order: 56, icon: Bot },
  { _id: 'wf5', name: 'Qoder', category: 'workflow', order: 57, icon: FileCode },
  { _id: 'wf6', name: 'Prompt Engineering', category: 'workflow', order: 58, icon: Sparkles },
  { _id: 'wf7', name: 'Context Engineering', category: 'workflow', order: 59, icon: Network },
  { _id: 'wf8', name: 'LLM Debugging', category: 'workflow', order: 60, icon: Bug },
  { _id: 'wf9', name: 'Agentic Workflows', category: 'workflow', order: 61, icon: Workflow },
]

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  languages: 'Languages',
  ai: 'AI & Machine Learning',
  frameworks: 'Frameworks & Libraries',
  database: 'Databases & Infrastructure',
  concepts: 'Developer Tools & Concepts',
  workflow: 'AI Engineering Workflow',
}

const CATEGORY_COLORS: Record<
  SkillCategory,
  { text: string; border: string; bg: string; glow: string }
> = {
  languages: {
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/10',
    glow: 'hover:shadow-cyan-500/10',
  },
  ai: {
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
  workflow: {
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/10',
    glow: 'hover:shadow-pink-500/10',
  },
}

const CATEGORIES = [
  'languages',
  'ai',
  'frameworks',
  'database',
  'concepts',
  'workflow',
  'all',
] as const

type Category = (typeof CATEGORIES)[number]

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const colors = CATEGORY_COLORS[skill.category]
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.035,
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
  const [activeCategory, setActiveCategory] = useState<Category>('languages')

  const filtered =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory)

  const groupedSkills = (
    ['languages', 'ai', 'frameworks', 'database', 'concepts', 'workflow'] as SkillCategory[]
  ).reduce<Record<SkillCategory, SkillItem[]>>((acc, category) => {
    acc[category] = SKILLS.filter((skill) => skill.category === category)
    return acc
  }, {} as Record<SkillCategory, SkillItem[]>)

  return (
    <section id="skills" className="section-padding container-wide">
      <SectionHeader
        label="06 / Skills"
        title="Technical Skills"
        subtitle="A category-wise view of my AI engineering, full-stack development, database, infrastructure, and developer workflow toolkit."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/5'
            }`}
          >
            {category === 'all' ? 'All' : CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {activeCategory === 'all' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skills], groupIndex) => {
            const cat = category as SkillCategory
            const colors = CATEGORY_COLORS[cat]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass rounded-2xl p-6 border border-black/5 dark:border-white/5 hover:scale-[1.02] transition-transform"
              >
                <h3 className={`font-semibold text-sm mb-5 ${colors.text}`}>
                  {CATEGORY_LABELS[cat]}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <SkillCard key={skill._id} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {filtered.map((skill, index) => (
              <SkillCard key={skill._id} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}