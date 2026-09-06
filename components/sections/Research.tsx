'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, PenLine } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

import { PUBLICATIONS, type Publication } from '@/data/research'

type SectionVariant = 'featured' | 'full'

type ResearchProps = {
  variant?: SectionVariant
}

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

export default function Research({ variant = 'full' }: ResearchProps) {
  const researchPapers = PUBLICATIONS.filter(
    (item) => item.type === 'Research Paper'
  )

  const blogs = PUBLICATIONS.filter((item) => item.type === 'Blog')
  const visibleBlogs =
    variant === 'featured'
      ? blogs.filter((blog) => blog.featured)
      : blogs

  return (
    <section id="research" className="section-padding container-wide">
      <SectionHeader
        label="05 / Research & Blogs"
        title="Research & Blogs"
        subtitle={
          variant === 'featured'
            ? 'Featured research and practical writing on modern AI engineering.'
            : 'Research work and technical writing on neural networks, federated learning, RAG, NL2SQL, edge computing, privacy-preserving AI, and modern AI engineering.'
        }
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
            {visibleBlogs.map((item, i) => (
              <PublicationCard key={item.id} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>

      {variant === 'featured' && (
        <div className="flex justify-center mt-10">
          <a
            href="/research"
            className="px-5 py-2.5 rounded-xl glass border border-black/5 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            View All Research &amp; Blogs
          </a>
        </div>
      )}
    </section>
  )
}