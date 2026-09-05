'use client'

import { useState } from 'react'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'

import {
  BrainCircuit,
  Database,
  Bot,
  Search,
  Eye,
  Cpu,
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
  GitBranch,
  SlidersHorizontal,
  ScanSearch,
  Gauge,
  Boxes,
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
} from 'react-icons/si'

import SectionHeader from '@/components/ui/SectionHeader'

type SkillCategory =
  | 'languages'
  | 'machineLearning'
  | 'deepLearning'
  | 'generativeAI'
  | 'frameworks'
  | 'database'
  | 'concepts'
  | 'aiEngineering'

type SkillIcon = ComponentType<any>

type SkillItem = {
  _id: string
  name: string
  category: SkillCategory
  order: number
  icon: SkillIcon
}

const SKILLS: SkillItem[] = [
  // =========================================================
  // Languages
  // =========================================================
  {
    _id: 'lang1',
    name: 'Python',
    category: 'languages',
    order: 1,
    icon: SiPython,
  },
  {
    _id: 'lang2',
    name: 'TypeScript',
    category: 'languages',
    order: 2,
    icon: SiTypescript,
  },
  {
    _id: 'lang3',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    order: 3,
    icon: SiJavascript,
  },
  {
    _id: 'lang4',
    name: 'C/C++',
    category: 'languages',
    order: 4,
    icon: SiCplusplus,
  },
  {
    _id: 'lang5',
    name: 'SQL',
    category: 'languages',
    order: 5,
    icon: Database,
  },
  {
    _id: 'lang6',
    name: 'PHP',
    category: 'languages',
    order: 6,
    icon: SiPhp,
  },
  {
    _id: 'lang7',
    name: 'C# (Basic)',
    category: 'languages',
    order: 7,
    icon: Code2,
  },

  // =========================================================
  // Machine Learning
  // =========================================================
  {
    _id: 'ml1',
    name: 'Scikit-learn',
    category: 'machineLearning',
    order: 8,
    icon: BrainCircuit,
  },
  {
    _id: 'ml2',
    name: 'Supervised Learning',
    category: 'machineLearning',
    order: 9,
    icon: Layers,
  },
  {
    _id: 'ml3',
    name: 'Unsupervised Learning',
    category: 'machineLearning',
    order: 10,
    icon: Network,
  },
  {
    _id: 'ml4',
    name: 'Classification',
    category: 'machineLearning',
    order: 11,
    icon: BarChart3,
  },
  {
    _id: 'ml5',
    name: 'Regression',
    category: 'machineLearning',
    order: 12,
    icon: Gauge,
  },
  {
    _id: 'ml6',
    name: 'Clustering',
    category: 'machineLearning',
    order: 13,
    icon: Boxes,
  },
  {
    _id: 'ml7',
    name: 'Feature Engineering',
    category: 'machineLearning',
    order: 14,
    icon: SlidersHorizontal,
  },
  {
    _id: 'ml8',
    name: 'Model Evaluation',
    category: 'machineLearning',
    order: 15,
    icon: BarChart3,
  },
  {
    _id: 'ml9',
    name: 'Cross-Validation',
    category: 'machineLearning',
    order: 16,
    icon: GitBranch,
  },
  {
    _id: 'ml10',
    name: 'Hyperparameter Tuning',
    category: 'machineLearning',
    order: 17,
    icon: SlidersHorizontal,
  },
  {
    _id: 'ml11',
    name: 'Ensemble Learning',
    category: 'machineLearning',
    order: 18,
    icon: Layers,
  },

  // =========================================================
  // Deep Learning & Computer Vision
  // =========================================================
  {
    _id: 'dl1',
    name: 'PyTorch',
    category: 'deepLearning',
    order: 19,
    icon: SiPytorch,
  },
  {
    _id: 'dl2',
    name: 'CNNs',
    category: 'deepLearning',
    order: 20,
    icon: BrainCircuit,
  },
  {
    _id: 'dl3',
    name: 'RNNs',
    category: 'deepLearning',
    order: 21,
    icon: Network,
  },
  {
    _id: 'dl4',
    name: 'LSTM',
    category: 'deepLearning',
    order: 22,
    icon: Network,
  },
  {
    _id: 'dl5',
    name: 'GRU',
    category: 'deepLearning',
    order: 23,
    icon: Cpu,
  },
  {
    _id: 'dl6',
    name: 'Transfer Learning',
    category: 'deepLearning',
    order: 24,
    icon: Workflow,
  },
  {
    _id: 'dl7',
    name: 'Vision Transformers (ViT)',
    category: 'deepLearning',
    order: 25,
    icon: BrainCircuit,
  },
  {
    _id: 'dl8',
    name: 'Image Classification',
    category: 'deepLearning',
    order: 26,
    icon: Eye,
  },
  {
    _id: 'dl9',
    name: 'Object Detection',
    category: 'deepLearning',
    order: 27,
    icon: ScanSearch,
  },
  {
    _id: 'dl10',
    name: 'OpenCV',
    category: 'deepLearning',
    order: 28,
    icon: SiOpencv,
  },
  {
    _id: 'dl11',
    name: 'Federated Learning',
    category: 'deepLearning',
    order: 29,
    icon: Network,
  },

  // =========================================================
  // Generative AI & Information Retrieval
  // =========================================================
  {
    _id: 'gen1',
    name: 'RAG',
    category: 'generativeAI',
    order: 30,
    icon: BrainCircuit,
  },
  {
    _id: 'gen2',
    name: 'Semantic Search',
    category: 'generativeAI',
    order: 31,
    icon: Search,
  },
  {
    _id: 'gen3',
    name: 'Vector Search',
    category: 'generativeAI',
    order: 32,
    icon: Network,
  },
  {
    _id: 'gen4',
    name: 'Cross-Encoder Reranking',
    category: 'generativeAI',
    order: 33,
    icon: Layers,
  },
  {
    _id: 'gen5',
    name: 'LLM Integration',
    category: 'generativeAI',
    order: 34,
    icon: Bot,
  },
  {
    _id: 'gen6',
    name: 'Ollama',
    category: 'generativeAI',
    order: 35,
    icon: Bot,
  },
  {
    _id: 'gen7',
    name: 'OpenRouter',
    category: 'generativeAI',
    order: 36,
    icon: Network,
  },
  {
    _id: 'gen8',
    name: 'Groq',
    category: 'generativeAI',
    order: 37,
    icon: Cpu,
  },
  {
    _id: 'gen9',
    name: 'FAISS',
    category: 'generativeAI',
    order: 38,
    icon: Database,
  },
  {
    _id: 'gen10',
    name: 'Sentence Transformers',
    category: 'generativeAI',
    order: 39,
    icon: Sparkles,
  },
  {
    _id: 'gen11',
    name: 'NL2SQL',
    category: 'generativeAI',
    order: 40,
    icon: Database,
  },
  {
    _id: 'gen12',
    name: 'Agentic Workflows',
    category: 'generativeAI',
    order: 41,
    icon: Workflow,
  },

  // =========================================================
  // Frameworks & Libraries
  // =========================================================
  {
    _id: 'fw1',
    name: 'FastAPI',
    category: 'frameworks',
    order: 42,
    icon: SiFastapi,
  },
  {
    _id: 'fw2',
    name: 'Node.js',
    category: 'frameworks',
    order: 43,
    icon: SiNodedotjs,
  },
  {
    _id: 'fw3',
    name: 'Laravel',
    category: 'frameworks',
    order: 44,
    icon: SiLaravel,
  },
  {
    _id: 'fw4',
    name: 'React',
    category: 'frameworks',
    order: 45,
    icon: SiReact,
  },
  {
    _id: 'fw5',
    name: 'Next.js',
    category: 'frameworks',
    order: 46,
    icon: SiNextdotjs,
  },
  {
    _id: 'fw6',
    name: 'Tailwind CSS',
    category: 'frameworks',
    order: 47,
    icon: SiTailwindcss,
  },
  {
    _id: 'fw7',
    name: 'Bootstrap',
    category: 'frameworks',
    order: 48,
    icon: SiBootstrap,
  },
  {
    _id: 'fw8',
    name: 'Pydantic',
    category: 'frameworks',
    order: 49,
    icon: ShieldCheck,
  },
  {
    _id: 'fw9',
    name: 'Chart.js',
    category: 'frameworks',
    order: 50,
    icon: SiChartdotjs,
  },

  // =========================================================
  // Databases & Infrastructure
  // =========================================================
  {
    _id: 'db1',
    name: 'Oracle Database / Oracle 26ai (VECTOR)',
    category: 'database',
    order: 51,
    icon: Database,
  },
  {
    _id: 'db2',
    name: 'MySQL',
    category: 'database',
    order: 52,
    icon: SiMysql,
  },
  {
    _id: 'db3',
    name: 'SQLite',
    category: 'database',
    order: 53,
    icon: SiSqlite,
  },
  {
    _id: 'db4',
    name: 'ChromaDB',
    category: 'database',
    order: 54,
    icon: Database,
  },
  {
    _id: 'db5',
    name: 'Docker',
    category: 'database',
    order: 55,
    icon: SiDocker,
  },
  {
    _id: 'db6',
    name: 'APScheduler',
    category: 'database',
    order: 56,
    icon: ServerCog,
  },

  // =========================================================
  // Developer Tools & Concepts
  // =========================================================
  {
    _id: 'dev1',
    name: 'Git',
    category: 'concepts',
    order: 57,
    icon: SiGit,
  },
  {
    _id: 'dev2',
    name: 'GitHub',
    category: 'concepts',
    order: 58,
    icon: SiGithub,
  },
  {
    _id: 'dev3',
    name: 'REST APIs',
    category: 'concepts',
    order: 59,
    icon: Network,
  },
  {
    _id: 'dev4',
    name: 'Unit Testing (pytest / Jest)',
    category: 'concepts',
    order: 60,
    icon: FlaskConical,
  },
  {
    _id: 'dev5',
    name: 'Debugging',
    category: 'concepts',
    order: 61,
    icon: Bug,
  },
  {
    _id: 'dev6',
    name: 'Code Reviews',
    category: 'concepts',
    order: 62,
    icon: Eye,
  },
  {
    _id: 'dev7',
    name: 'OOP',
    category: 'concepts',
    order: 63,
    icon: Braces,
  },
  {
    _id: 'dev8',
    name: 'Data Structures & Algorithms',
    category: 'concepts',
    order: 64,
    icon: Cpu,
  },
  {
    _id: 'dev9',
    name: 'Authentication & Authorization',
    category: 'concepts',
    order: 65,
    icon: KeyRound,
  },
  {
    _id: 'dev10',
    name: 'Full-Stack AI Development',
    category: 'concepts',
    order: 66,
    icon: BrainCircuit,
  },

  // =========================================================
  // AI Engineering
  // =========================================================
  {
    _id: 'aieng1',
    name: 'Cursor',
    category: 'aiEngineering',
    order: 67,
    icon: FileCode,
  },
  {
    _id: 'aieng2',
    name: 'Claude',
    category: 'aiEngineering',
    order: 68,
    icon: MessageSquare,
  },
  {
    _id: 'aieng3',
    name: 'ChatGPT',
    category: 'aiEngineering',
    order: 69,
    icon: Bot,
  },
  {
    _id: 'aieng4',
    name: 'TRAE AI Agent',
    category: 'aiEngineering',
    order: 70,
    icon: Bot,
  },
  {
    _id: 'aieng5',
    name: 'Qoder',
    category: 'aiEngineering',
    order: 71,
    icon: FileCode,
  },
  {
    _id: 'aieng6',
    name: 'Prompt Engineering',
    category: 'aiEngineering',
    order: 72,
    icon: Sparkles,
  },
  {
    _id: 'aieng7',
    name: 'Context Engineering',
    category: 'aiEngineering',
    order: 73,
    icon: Network,
  },
  {
    _id: 'aieng8',
    name: 'LLM Debugging',
    category: 'aiEngineering',
    order: 74,
    icon: Bug,
  },
]

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
        <Icon
          size={28}
          className={colors.text}
        />
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
        label="06 / Skills"
        title="Technical Skills"
        subtitle="Technologies and engineering practices I use to build production AI systems, from retrieval and machine learning pipelines to full-stack applications and infrastructure."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all hover:scale-105 ${
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