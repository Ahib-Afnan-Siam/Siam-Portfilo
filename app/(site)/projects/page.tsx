import type { Metadata } from 'next'
import Projects from '@/components/sections/Projects'

const description =
  'Selected AI and software projects by Ahib Afnan Siam — RAG systems, NL2SQL assistants, AI recruitment automation, semantic search, and enterprise AI applications.'

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Ahib Afnan Siam',
    description,
    url: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Projects />
    </main>
  )
}