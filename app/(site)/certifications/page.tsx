import type { Metadata } from 'next'
import Certifications from '@/components/sections/Certifications'

const description =
  'Professional certifications and achievements of Ahib Afnan Siam in software engineering, Python, problem solving, and space science.'

export const metadata: Metadata = {
  title: 'Certifications',
  description,
  alternates: { canonical: '/certifications' },
  openGraph: {
    title: 'Certifications — Ahib Afnan Siam',
    description,
    url: '/certifications',
  },
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Certifications />
    </main>
  )
}