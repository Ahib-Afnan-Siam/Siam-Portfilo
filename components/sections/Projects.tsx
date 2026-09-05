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
import Image, { type StaticImageData } from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'

import uttoronImage from '@/assets/images/Uttoron 1-01.png'
import meetosImage from '@/assets/images/meetos.png'
import recruitmentImage from '@/assets/images/Recruitement.jpeg'
import aluminumDefectImage from '@/assets/images/aluminum_defect.png'
import drishtyImage from '@/assets/images/Drishti.png'
import facebookImage from '@/assets/images/facebook.png'
import carImage from '@/assets/images/car.png'
import footballImage from '@/assets/images/football.png'

type DeploymentType = 'public' | 'internal' | 'none'

interface Project {
  _id: string
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  deployment: DeploymentType
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  codeText?: string
  imageUrl: string | StaticImageData
  featured: boolean
  order: number
}

const PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'PRAN-RFL AI Assistant — Uttoron',
    subtitle: 'Enterprise NL2SQL & Analytics Assistant',
    description:
      'An enterprise natural-language-to-SQL AI assistant for analytics and reporting. It uses schema-aware RAG, semantic retrieval, Oracle SQL generation, and LLM-powered reasoning to enable real-time querying across large enterprise datasets.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'ChromaDB',
      'Oracle',
      'Sentence Transformers',
      'RAG',
      'NL2SQL',
      'Ollama',
      'OpenRouter',
    ],
    deployment: 'internal',
    codeText: 'Private Enterprise Project',
    imageUrl: uttoronImage,
    featured: true,
    order: 1,
  },

  {
    _id: '2',
    title: 'PRAN-RFL Meeting Assistant — MeetOS',
    subtitle: 'AI Meeting Intelligence Agent',
    description:
      'An AI meeting agent for Google Meet and Microsoft Teams that auto-joins meetings, tracks participants, captures captions, records audio, transcribes with Whisper, and generates structured AI summaries and PDF reports.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Playwright',
      'Whisper',
      'DeepSeek LLM',
      'Oracle 26ai',
      'Redis',
      'DigitalOcean Spaces',
    ],
    deployment: 'internal',
    codeText: 'Private Enterprise Project',
    imageUrl: meetosImage,
    featured: true,
    order: 2,
  },

  {
    _id: '3',
    title: 'Hire360 — PRAN-RFL Group',
    subtitle: 'AI Recruitment Intelligence Platform',
    description:
      'A full-stack enterprise recruitment intelligence platform for CV ingestion, structured profile extraction, semantic candidate search, hybrid job matching, recruiter review, shortlisting, ghost profiles, and end-to-end hiring workflows.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Oracle 26ai',
      'Oracle VECTOR',
      'Sentence Transformers',
      'MiniLM',
      'Semantic Search',
      'Cross-Encoder Reranking',
      'LLM Review',
      'Async Workers',
    ],
    deployment: 'public',
    liveUrl: 'https://hire360.prangroup.com/',
    liveLabel: 'Visit Hire360',
    codeText: 'Private Enterprise Project',
    imageUrl: recruitmentImage,
    featured: true,
    order: 3,
  },

  {
    _id: '4',
    title: 'Aluminum Defect Detection',
    subtitle: 'Industrial Computer Vision System',
    description:
      'A real-time industrial defect detection system using YOLOv8 on 2,000+ labeled samples for cracks, pits, and scratches. It processes dual camera feeds, communicates with a Siemens PLC, and logs detected defects for operators.',
    technologies: [
      'Python',
      'YOLOv8-Seg',
      'EfficientAD',
      'PyTorch',
      'OpenCV',
      'python-snap7',
      'Siemens S7',
      'Roboflow',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Aluminum-Defecr-Detection.git',
    imageUrl: aluminumDefectImage,
    featured: false,
    order: 4,
  },

  {
    _id: '5',
    title: 'Drishty — Facial Recognition Monitoring System',
    subtitle: 'Enterprise Computer Vision & Identity Monitoring',
    description:
      'An enterprise facial recognition monitoring system with multi-camera tracking, face detection, embedding generation, FAISS search, HRIS-integrated authentication, approval workflows, and attendance reporting.',
    technologies: [
      'Python',
      'FastAPI',
      'YOLOv8',
      'MobileFaceNet',
      'FAISS',
      'Oracle Database',
      'Flask',
      'Docker',
      'OpenCV',
      'HRIS API',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Drishty-PRAN-RFL-Facial-Recognition-Monitoring-System.git',
    imageUrl: drishtyImage,
    featured: false,
    order: 5,
  },

  {
    _id: '6',
    title: 'Facebook AI Reply Automation — Engage360',
    subtitle: 'Enterprise Social Automation Platform',
    description:
      'A Facebook automation platform for page connection, OAuth authorization, approval workflows, webhook subscriptions, post management, JWT authentication, and AI-assisted engagement workflows.',
    technologies: [
      'Flask',
      'Oracle DB',
      'SQLAlchemy',
      'JWT',
      'Facebook OAuth',
      'Pydantic',
      'Uvicorn',
      'python-dotenv',
    ],
    deployment: 'public',
    liveUrl: 'https://uttoron.prangroup.com/fbfnt/',
    liveLabel: 'Visit Platform',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Engage360-Facebook-AI-Reply-Automation.git',
    imageUrl: facebookImage,
    featured: true,
    order: 6,
  },

  {
    _id: '7',
    title: 'Car Price Prediction',
    subtitle: 'Machine Learning Classification Project',
    description:
      'A machine learning project that predicts car price categories using vehicle year, fuel type, seller type, transmission, ownership history, and other engineered features across multiple classifiers.',
    technologies: [
      'KNN',
      'Logistic Regression',
      'SVM',
      'Decision Tree',
      'Machine Learning',
      'Classification',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Car-Price-Predition.git',
    imageUrl: carImage,
    featured: false,
    order: 7,
  },

  {
    _id: '8',
    title: 'Football Match Result Prediction',
    subtitle: 'Predictive Machine Learning Project',
    description:
      'A football match outcome prediction system that classifies results as Home Win, Draw, or Away Win using historical match data, betting odds, team statistics, and engineered features. Gradient Boosting achieved 75.48% accuracy.',
    technologies: [
      'Gradient Boosting',
      'Random Forest',
      'Decision Tree',
      'SVM',
      'KNN',
      'Logistic Regression',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Football-Match-Result-Prediciton.git',
    imageUrl: footballImage,
    featured: false,
    order: 8,
  },
]

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

export default function Projects() {
  const [filter, setFilter] =
    useState<'all' | 'featured'>('featured')

  const filtered =
    filter === 'featured'
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
        subtitle="Production AI systems, enterprise automation, semantic search, computer vision, and machine learning projects — including publicly accessible platforms and internally deployed enterprise systems."
      />

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}