import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

const description =
  'Get in touch with Ahib Afnan Siam — open to AI engineering roles, full-stack AI projects, enterprise automation, and research collaborations.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Ahib Afnan Siam',
    description,
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Contact />
    </main>
  )
}