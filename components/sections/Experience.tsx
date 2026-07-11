'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Experience } from '@/types'

const EXPERIENCES: Experience[] = [
  {
    _id: '1',
    company: 'PRAN-RFL Group',
    role: 'AI Software Engineer (Sub Assistant Manager) — MIS',
    description:
      'Building production-grade AI systems for enterprise analytics, recruitment automation, semantic search, and computer vision workflows used across real business environments.',
    responsibilities: [
      'Built Uttoron, a natural-language-to-SQL AI assistant using FastAPI, ChromaDB, Oracle, and LLM-driven query generation for enterprise reporting.',
      'Designed schema-aware RAG pipelines enabling real-time SQL execution and analytics over 50M+ enterprise records.',
      'Developed a full-stack AI Recruitment Automation system processing 10,000+ CVs with semantic job matching, Oracle VECTOR search, and MiniLM reranking.',
      'Designed an explainable 0–100 hybrid ranking system combining vector similarity and reranker scores, reducing manual screening effort by 60%.',
      'Developed a real-time facial recognition attendance system using YOLOv8n-Face, MobileFaceNet, HRIS authentication, and live multi-camera monitoring dashboards.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'ChromaDB',
      'Oracle',
      'Oracle VECTOR',
      'Sentence Transformers',
      'MiniLM',
      'YOLOv8n-Face',
      'MobileFaceNet',
      'LLM APIs',
      'Docker',
    ],
    startDate: '2025-11',
    current: true,
    order: 1,
  },
  {
    _id: '2',
    company: 'PRAN-RFL Group',
    role: 'AI Software Engineer Intern — MIS',
    description:
      'Contributed to enterprise AI assistant development, focusing on schema-aware NL2SQL generation, RAG optimization, query validation, and on-premise deployment support.',
    responsibilities: [
      'Implemented schema-aware query generation and validation logic for an NL2SQL AI assistant, improving query accuracy and reliability.',
      'Optimized RAG pipeline performance to reduce report generation time and improve system responsiveness.',
      'Assisted in on-premise deployment and reliability improvements for internal enterprise AI workflows.',
      'Worked with Oracle-backed enterprise data systems to make reporting and analytics more accessible to business users.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Oracle',
      'ChromaDB',
      'RAG',
      'NL2SQL',
      'Sentence Transformers',
      'LLM APIs',
      'React',
    ],
    startDate: '2025-06',
    endDate: '2025-11',
    current: false,
    order: 2,
  },
  {
    _id: '3',
    company: 'Universe IT Institute (UITI)',
    role: 'Full Stack Engineer Intern',
    description:
      'Developed AI-powered and full-stack web applications, working across backend APIs, frontend interfaces, ML-powered features, and scalable application workflows.',
    responsibilities: [
      'Built full-stack web applications using Python, FastAPI, React, Next.js, Node.js, and PHP.',
      'Developed and integrated REST APIs connecting frontend interfaces with backend services.',
      'Implemented ML-powered features and frontend-backend functionalities for scalable web applications.',
      'Worked across application logic, API integration, and UI implementation to deliver complete web solutions.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Next.js',
      'Node.js',
      'PHP',
      'REST APIs',
      'JavaScript',
      'MySQL',
    ],
    startDate: '2024-12',
    endDate: '2025-05',
    current: false,
    order: 3,
  },
]

function formatDate(d: string) {
  const [y, m] = d.split('-')
  return new Date(Number(y), Number(m) - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding container-wide">
      <SectionHeader
        label="02 / Experience"
        title="Work Experience"
        subtitle="My journey through enterprise AI engineering, full-stack development, RAG systems, NL2SQL, semantic search, and production-ready automation."
      />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent -translate-x-1/2" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={exp._id}
                initial={{ opacity: 0, scale: 0.88, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 pl-12 md:pl-0 ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-[var(--bg-primary)] shadow-lg shadow-cyan-500/30 z-10 mt-6" />

                <div
                  className={`md:w-[46%] ${
                    isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 border-gradient hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-slate-400 text-xs font-mono mb-4">
                      <Calendar size={12} />
                      <span>
                        {formatDate(exp.startDate)} —{' '}
                        {exp.current
                          ? 'Present'
                          : exp.endDate
                            ? formatDate(exp.endDate)
                            : ''}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {exp.responsibilities.map((r, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-slate-500 dark:text-slate-400 text-sm"
                        >
                          <span className="text-cyan-500 mt-0.5 shrink-0">
                            ▸
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-xs font-mono text-purple-600 dark:text-purple-300 bg-purple-500/10 border border-purple-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}