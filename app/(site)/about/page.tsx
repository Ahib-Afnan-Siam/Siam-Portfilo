import type { Metadata } from 'next'
import About from '@/components/sections/About'

const description =
  'Learn about Ahib Afnan Siam — an AI Software Engineer specializing in LLMs, RAG, NL2SQL, semantic search, Oracle VECTOR, and production-grade AI systems, based in Dhaka, Bangladesh.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Ahib Afnan Siam',
    description,
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <About />
    </main>
  )
}