'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, LockKeyhole } from 'lucide-react'
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

interface Project {
  _id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  demoText?: string
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
    description:
      'An enterprise NL2SQL AI assistant that converts natural language into safe, optimized Oracle SQL queries. Built with React, FastAPI, ChromaDB, schema-aware RAG, local Ollama models, and OpenRouter APIs to support multiple database modes including General, SOS, PRAN ERP, and RFL ERP.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'ChromaDB',
      'Oracle',
      'Sentence Transformers',
      'Ollama',
      'OpenRouter',
    ],
    demoText: 'Demo Available Upon Request',
    codeText: 'Code Available Upon Request',
    imageUrl: uttoronImage,
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    title: 'PRAN-RFL Meeting Assistant — MeetOS',
    description:
      'A multi-session AI meeting assistant that autonomously joins Google Meet and Microsoft Teams calls, tracks participants, captures captions, records audio, transcribes meetings with Whisper, and generates structured reports using DeepSeek LLM. Designed with Oracle 26ai metadata storage and DigitalOcean Spaces for large assets.',
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
    demoText: 'Demo Available Upon Request',
    codeText: 'Code Available Upon Request',
    imageUrl: meetosImage,
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    title: 'AI Recruitment Automation — PRAN-RFL Group',
    description:
      'A full-stack recruiting platform for CV ingestion, structured profile extraction, semantic job matching, recruiter workflows, and pipeline management. It uses Oracle VECTOR search, reranking, async CV processing, eligibility filtering, and DigitalOcean Spaces for scalable CV storage.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Oracle',
      'Oracle VECTOR',
      'Sentence Transformers',
      'MiniLM',
      'DigitalOcean Spaces',
      'APScheduler',
    ],
    demoText: 'Demo Available Upon Request',
    codeText: 'Code Available Upon Request',
    imageUrl: recruitmentImage,
    featured: true,
    order: 3,
  },
  {
    _id: '4',
    title: 'Aluminum Defect Detection',
    description:
      'A real-time industrial defect detection system using YOLOv8 trained on 2,000+ labeled samples for cracks, pits, and scratches. It processes dual USB camera feeds, sends defect signals to a Siemens PLC, logs screenshots, and supports operator reset through PLC bit control.',
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
    demoText: 'Demo Available Upon Request',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Aluminum-Defecr-Detection.git',
    imageUrl: aluminumDefectImage,
    featured: false,
    order: 4,
  },
  {
    _id: '5',
    title: 'Drishty — Facial Recognition Monitoring System',
    description:
      'An enterprise facial recognition monitoring system combining a real-time recognition engine with an administrative dashboard. It supports multi-camera tracking, YOLOv8n-face detection, MobileFaceNet embeddings, FAISS search, HRIS-integrated authentication, approval workflows, and attendance reporting.',
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
    demoText: 'Demo Available Upon Request',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Drishty-PRAN-RFL-Facial-Recognition-Monitoring-System.git',
    imageUrl: drishtyImage,
    featured: false,
    order: 5,
  },
  {
    _id: '6',
    title: 'Facebook AI Reply Automation — Engage360',
    description:
      'A Facebook automation backend for page connection, OAuth-based authorization, admin approval workflows, webhook subscriptions, page/post management, JWT authentication, and user control. Built to support automated Facebook engagement workflows for enterprise use.',
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
    liveUrl: 'https://uttoron.prangroup.com/fbfnt/',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Engage360-Facebook-AI-Reply-Automation.git',
    imageUrl: facebookImage,
    featured: true,
    order: 6,
  },
  {
    _id: '7',
    title: 'Car Price Prediction',
    description:
      'A machine learning project that predicts car price categories as low, medium, or high using features such as year, fuel type, seller type, transmission, and ownership history. Multiple classifiers were trained and evaluated to compare prediction performance.',
    technologies: [
      'KNN',
      'Logistic Regression',
      'SVM',
      'Decision Tree',
      'Machine Learning',
      'Classification',
    ],
    demoText: 'No Live Demo',
    githubUrl: 'https://github.com/Ahib-Afnan-Siam/Car-Price-Predition.git',
    imageUrl: carImage,
    featured: false,
    order: 7,
  },
  {
    _id: '8',
    title: 'Football Match Result Prediction',
    description:
      'A football match outcome prediction project that classifies results as Home Win, Draw, or Away Win using historical match data, team statistics, betting odds, and engineered features. Gradient Boosting achieved the best accuracy at 75.48%.',
    technologies: [
      'Gradient Boosting',
      'Random Forest',
      'Decision Tree',
      'SVM',
      'KNN',
      'Logistic Regression',
    ],
    demoText: 'No Live Demo',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Football-Match-Result-Prediciton.git',
    imageUrl: footballImage,
    featured: false,
    order: 8,
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative glass rounded-2xl overflow-hidden border border-black/5 dark:border-white/5
        hover:border-cyan-500/30 dark:hover:border-cyan-400/30
        hover:shadow-xl hover:shadow-cyan-500/10
        hover:scale-[1.03]
        transition-all duration-300 flex flex-col h-full"
    >
      {project.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/20 to-transparent" />

          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-xs font-medium backdrop-blur-md">
              <Star size={10} fill="currentColor" /> Featured
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 text-left">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs font-mono text-cyan-600 dark:text-cyan-300/80 bg-cyan-500/5 border border-cyan-500/10"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
            >
              <Github size={15} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <LockKeyhole size={14} />
              {project.codeText ?? 'Private'}
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm transition-colors"
            >
              Live Demo <ExternalLink size={13} />
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 text-sm">
              {project.demoText ?? 'Demo Upon Request'}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filtered =
    filter === 'featured'
      ? PROJECTS.filter((project) => project.featured)
      : PROJECTS

  return (
    <section id="projects" className="section-padding container-wide">
      <SectionHeader
        label="04 / Projects"
        title="Selected Work"
        subtitle="Enterprise AI systems, full-stack automation, computer vision, and machine learning projects I have built across real-world and research-driven use cases."
      />

      <div className="flex justify-center gap-3 mb-12">
        {(['all', 'featured'] as const).map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
              filter === item
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/5'
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filtered.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}