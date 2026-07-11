import type { Metadata } from 'next'
import Experience from '@/components/sections/Experience'

const description =
  'Professional experience of Ahib Afnan Siam as an AI Software Engineer building production-grade LLM systems, RAG pipelines, NL2SQL assistants, semantic search, and computer vision solutions.'

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience — Ahib Afnan Siam',
    description,
    url: '/experience',
  },
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Experience />
    </main>
  )
}