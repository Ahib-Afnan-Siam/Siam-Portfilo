import type { Metadata } from 'next'
import Skills from '@/components/sections/Skills'

const description =
  'Technical skills of Ahib Afnan Siam across Python, TypeScript, FastAPI, React, Next.js, RAG, semantic search, vector search, Oracle VECTOR, LLM integration, and full-stack AI development.'

export const metadata: Metadata = {
  title: 'Skills',
  description,
  alternates: { canonical: '/skills' },
  openGraph: {
    title: 'Skills — Ahib Afnan Siam',
    description,
    url: '/skills',
  },
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Skills />
    </main>
  )
}