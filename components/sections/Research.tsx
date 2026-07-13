'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, PenLine } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

interface Publication {
  id: string
  title: string
  year?: string
  summary: string
  link?: string
  category: string
  type: 'Research Paper' | 'Blog'
  actionLabel?: string
  status?: string
}

const PUBLICATIONS: Publication[] = [
  {
    id: 'r1',
    title:
      'Transitioning to Involutional Neural Network for Resource Efficient Federated Plant Disease Classification',
    summary:
      'This study proposes using Involutional Neural Networks with federated learning to classify plant diseases in a decentralized, privacy-preserving manner. By using location-specific and channel-agnostic kernels, InvNets address the computational inefficiencies and privacy risks of traditional CNN-based approaches such as ResNet50 and VGG16. While ResNet50 achieved the highest overall accuracy, InvNets provided a stronger balance of performance and resource efficiency for scalable early disease detection in resource-constrained agricultural environments.',
    category: 'Federated Learning',
    type: 'Research Paper',
    status: 'Paper Under Review',
  },
  {
    id: 'b1',
    title: 'Federated Learning: The Future of Privacy-Preserving AI',
    year: '2025',
    summary:
      'Explains federated learning as a privacy-first AI approach where models are trained directly on user devices instead of sending raw data to centralized servers. The article highlights how local learning protects sensitive data while still contributing to a smarter global model.',
    link: 'https://medium.com/@ahibafnan99/federated-learning-the-future-of-privacy-preserving-ai-a246d9230345?sharedUserId=ahibafnan99',
    category: 'Privacy AI',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b2',
    title: 'Edge Computing: Bringing Data Processing Closer to the Source',
    year: '2025',
    summary:
      'Introduces edge computing as a decentralized computing model that processes data near its source, such as sensors, gateways, or local servers. The article explains how edge computing reduces dependency on distant cloud systems and improves speed, reliability, and efficiency.',
    link: 'https://medium.com/@ahibafnan99/edge-computing-bringing-data-processing-closer-to-the-source-757a974c24f2?sharedUserId=ahibafnan99',
    category: 'Edge Computing',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b3',
    title: 'Google’s New Programming Language “Mangle”: Is This the Next Big Shift?',
    year: '2025',
    summary:
      'Covers Google’s open-source deductive database programming language, Mangle, and its potential to unify fragmented data across APIs, databases, and files. The article explains how logic-based rules can help developers query and reason over complex data more cohesively.',
    link: 'https://medium.com/@ahibafnan99/googles-new-programming-language-mangle-is-this-the-next-big-shift-9615c892113b?sharedUserId=ahibafnan99',
    category: 'Programming Language',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b4',
    title: 'LLMs as Database Interfaces: Can Natural Language Replace SQL?',
    year: '2025',
    summary:
      'Explores how Large Language Models can reduce the barrier between business users and databases by allowing natural-language queries instead of complex SQL. The article discusses how NL2SQL systems can make enterprise data access faster and more accessible.',
    link: 'https://medium.com/@ahibafnan99/llms-as-database-interfaces-can-natural-language-replace-sql-8dac8d9e46af?sharedUserId=ahibafnan99',
    category: 'NL2SQL',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b5',
    title: 'Talk, Don’t Type: The Rise of Vibe Coding',
    year: '2025',
    summary:
      'Discusses vibe coding, a software development shift where natural language becomes the primary interface for building applications. The article explains how LLM-powered tools help developers and non-developers describe, generate, refine, and debug software more naturally.',
    link: 'https://medium.com/@ahibafnan99/talk-dont-type-the-rise-of-vibe-coding-94352d83a6e8?sharedUserId=ahibafnan99',
    category: 'AI Coding',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b6',
    title: 'RAG (Retrieval-Augmented Generation): How It’s Transforming AI Applications',
    year: '2025',
    summary:
      'Explains how Retrieval-Augmented Generation connects LLMs with external knowledge sources to reduce hallucinations and outdated responses. The article presents RAG as a practical way to build accurate, context-aware, and verifiable AI applications without constant model retraining.',
    link: 'https://medium.com/@ahibafnan99/rag-retrieval-augmented-generation-how-its-transforming-ai-applications-f987aae753ad?sharedUserId=ahibafnan99',
    category: 'RAG',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b7',
    title: 'Why RAG Is Replacing Fine-Tuning for Enterprise AI',
    year: '2025',
    summary:
      'Compares RAG with fine-tuning in enterprise AI systems, highlighting why RAG is often more flexible, scalable, and cost-effective. The article explains how retrieval-based systems keep AI applications updated without repeated retraining and compliance-heavy model changes.',
    link: 'https://medium.com/@ahibafnan99/why-rag-is-replacing-fine-tuning-for-enterprise-ai-87e8844f16f1?sharedUserId=ahibafnan99',
    category: 'Enterprise AI',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
]

function PublicationCard({
  item,
  i,
}: {
  item: Publication
  i: number
}) {
  const isClickable = Boolean(item.link)
  const Icon = item.type === 'Research Paper' ? FileText : PenLine

  return (
    <motion.a
      href={item.link || '#'}
      target={isClickable ? '_blank' : undefined}
      rel={isClickable ? 'noopener noreferrer' : undefined}
      onClick={(event) => {
        if (!isClickable) event.preventDefault()
      }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group glass rounded-2xl p-6 border border-black/5 dark:border-white/5
        hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10
        hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3 block ${
          !isClickable ? 'cursor-default' : ''
        }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
            <Icon size={12} />
            {item.type}
          </span>

          {item.year && (
            <span className="text-xs text-slate-400 font-mono">
              {item.year}
            </span>
          )}
        </div>

        {item.status && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
            {item.status}
          </span>
        )}
      </div>

      <h3 className="text-slate-900 dark:text-white font-bold text-sm leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-1">
        {item.title}
      </h3>

      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 text-left">
        {item.summary}
      </p>

      <div className="flex items-center justify-between pt-2 mt-auto">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400">
          {item.category}
        </span>

        {item.actionLabel && (
          <div
            className={`flex items-center gap-1.5 text-xs transition-colors ${
              isClickable
                ? 'text-slate-400 group-hover:text-cyan-500'
                : 'text-slate-400'
            }`}
          >
            <span>{item.actionLabel}</span>
            {isClickable && <ExternalLink size={12} />}
          </div>
        )}
      </div>
    </motion.a>
  )
}

export default function Research() {
  const researchPapers = PUBLICATIONS.filter(
    (item) => item.type === 'Research Paper'
  )

  const blogs = PUBLICATIONS.filter((item) => item.type === 'Blog')

  return (
    <section id="research" className="section-padding container-wide">
      <SectionHeader
        label="05 / Research & Blogs"
        title="Research & Blogs"
        subtitle="Research work and technical writing on neural networks, federated learning, RAG, NL2SQL, edge computing, privacy-preserving AI, and modern AI engineering."
      />

      <div className="space-y-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-5">
            Research Paper
          </h3>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {researchPapers.map((item, i) => (
              <PublicationCard key={item.id} item={item} i={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-5">
            Blogs
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((item, i) => (
              <PublicationCard key={item.id} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}