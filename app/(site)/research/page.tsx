import type { Metadata } from 'next'
import Research from '@/components/sections/Research'

const description =
  'Research and technical blogs by Ahib Afnan Siam on federated learning, RAG, NL2SQL, edge computing, privacy-preserving AI, and modern AI engineering.'

export const metadata: Metadata = {
  title: 'Research',
  description,
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research — Ahib Afnan Siam',
    description,
    url: '/research',
  },
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Research />
    </main>
  )
}