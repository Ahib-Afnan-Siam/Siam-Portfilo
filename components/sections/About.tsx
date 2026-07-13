'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Rocket,
  Database,
  Code2,
  Trophy,
  FileText,
  Cpu,
  Eye,
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
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="/Ahib_Afnan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all text-sm font-medium"
            >
              <FileText size={16} />
              View Resume
            </a>

            <a
              href="https://leetcode.com/u/Ahib_Afnan_Siam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-400/40 text-amber-600 dark:text-amber-400 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/60 hover:scale-105 transition-all text-sm font-medium shadow-lg shadow-amber-400/5"
            >
              <Code2 size={16} />
              View My LeetCode Profile
            </a>

            <a
              href="https://www.hackerrank.com/profile/ahibafnan99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/60 hover:scale-105 transition-all text-sm font-medium shadow-lg shadow-emerald-500/5"
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
                className="glass rounded-2xl p-6 text-center border-gradient"
              >
                <p className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap">
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
        </div>
      </div>
    </section>
  )
}