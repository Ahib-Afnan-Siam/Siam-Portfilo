'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Rocket,
  Code2,
  Trophy,
  FileText,
  Cpu,
  Eye,
  GraduationCap,
  CalendarDays,
  MapPin,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const stats = [
  { value: '50M+', label: 'Data Records Analyzed' },
  { value: '8+', label: 'AI & ML Projects Built' },
  { value: '60%', label: 'Screening Process Reduced' },
  { value: '500+', label: 'LeetCode Solved' },
]

const traits = [
  {
    icon: BrainCircuit,
    title: 'LLM & RAG Engineering',
    desc: 'Building production-grade RAG systems, NL2SQL assistants, semantic search, and LLM-powered enterprise tools.',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    desc: 'Working with classification models, feature engineering, model evaluation, KNN, SVM, Decision Tree, Random Forest, and Gradient Boosting.',
  },
  {
    icon: Eye,
    title: 'Computer Vision & Research',
    desc: 'Developing real-world vision systems with YOLOv8, OpenCV, defect detection, facial recognition, CNNs, InvNets, and federated learning research.',
  },
  {
    icon: Rocket,
    title: 'Full-Stack AI Systems',
    desc: 'Developing complete AI products with FastAPI, React, automation pipelines, dashboards, authentication, APIs, and deployment-ready workflows.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'BRAC University',
    duration: 'July 2020 – January 2025',
    location: 'Dhaka, Bangladesh',
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'Notre Dame College',
    duration: 'July 2017 – July 2019',
    location: 'Dhaka, Bangladesh',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: "Bindubashini Govt. Boys' High School",
    duration: 'January 2012 – March 2017',
    location: 'Tangail, Bangladesh',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding container-wide">
      <SectionHeader
        label="01 / About"
        title="About Me"
        subtitle="I build practical AI, machine learning, and computer vision systems that turn complex data into reliable, scalable, and useful products."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — zooms in from left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-left">
            Hey! I&apos;m{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              Ahib Afnan Siam
            </span>
            , an AI Software Engineer focused on building systems at the
            intersection of{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              LLMs, machine learning, computer vision, semantic search
            </span>
            , and enterprise automation.
          </p>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-left">
            I currently work in the MIS department at PRAN-RFL Group, where I
            build production-ready AI systems for real business environments.
            My work includes Uttoron, a natural-language-to-SQL assistant,
            schema-aware RAG pipelines over 50M+ records, AI-powered
            recruitment automation, meeting intelligence, and computer
            vision-based monitoring systems.
          </p>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-left">
            Alongside enterprise AI systems, I have also built machine learning
            and computer vision projects such as car price prediction, football
            match result prediction, aluminum defect detection, and facial
            recognition monitoring. My research interests include federated
            learning, plant disease classification, CNNs, and Involutional
            Neural Networks.
          </p>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-left">
            I enjoy designing AI products end to end — from data processing,
            feature engineering, vector search, reranking, and LLM integration
            to backend APIs, dashboards, authentication, and user-facing
            workflows that create measurable impact.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Python',
              'TypeScript',
              'JavaScript',
              'FastAPI',
              'React',
              'Next.js',
              'Node.js',
              'Vite',
              'Tailwind CSS',
              'Axios',
              'Laravel',
              'Machine Learning',
              'Classification',
              'Feature Engineering',
              'Model Evaluation',
              'KNN',
              'SVM',
              'Random Forest',
              'Gradient Boosting',
              'PyTorch',
              'OpenCV',
              'YOLOv8',
              'CNNs',
              'Federated Learning',
              'RAG',
              'NL2SQL',
              'Semantic Search',
              'Oracle VECTOR',
              'ChromaDB',
              'Sentence Transformers',
              'MiniLM',
              'Docker',
              'Prompt Engineering',
              'AI Agents',
              'REST APIs',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 bg-cyan-500/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Profile buttons */}
          <div className="pt-4 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
            <a
              href="/Ahib_Afnan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all text-sm font-medium"
            >
              <FileText size={16} />
              View Resume
            </a>

            <a
              href="https://leetcode.com/u/Ahib_Afnan_Siam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-lg border border-amber-400/40 text-amber-600 dark:text-amber-400 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/60 hover:scale-105 transition-all text-sm font-medium shadow-lg shadow-amber-400/5"
            >
              <Code2 size={16} />
              View My LeetCode Profile
            </a>

            <a
              href="https://www.hackerrank.com/profile/ahibafnan99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/60 hover:scale-105 transition-all text-sm font-medium shadow-lg shadow-emerald-500/5"
            >
              <Trophy size={16} />
              View My HackerRank Profile
            </a>
          </div>
        </motion.div>

        {/* Right — zooms in from right */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass rounded-2xl p-4 sm:p-6 text-center border-gradient"
              >
                <p className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-snug max-w-[130px] mx-auto">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.82, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass rounded-xl p-5 group hover:border-cyan-500/30 transition-all"
              >
                <trait.icon
                  size={22}
                  className="text-cyan-500 mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-slate-900 dark:text-white font-semibold text-sm mb-1">
                  {trait.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-2xl p-6 border border-cyan-500/15 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
          >
            <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <GraduationCap size={22} className="text-cyan-500" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">
                    Education
                  </p>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Academic Background
                  </h3>
                </div>
              </div>

              <div className="relative pl-5">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent" />

                <div className="space-y-5">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.institution}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative"
                    >
                      <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20" />

                      <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white/35 dark:bg-white/[0.025] px-4 py-4 hover:border-cyan-500/20 transition-colors">
                        <h4 className="text-slate-900 dark:text-white font-semibold text-sm leading-snug">
                          {edu.institution}
                        </h4>

                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-1">
                          {edu.degree}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-[11px] font-mono text-slate-400">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={12} className="text-cyan-500" />
                            {edu.duration}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={12} className="text-purple-500" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}