import type { Metadata } from 'next'
import Leadership from '@/components/sections/Leadership'

const description =
  'Leadership and club activities of Ahib Afnan Siam across robotics, autonomous systems, communication, human resources, and student community initiatives.'

export const metadata: Metadata = {
  title: 'Leadership',
  description,
  alternates: { canonical: '/leadership' },
  openGraph: {
    title: 'Leadership — Ahib Afnan Siam',
    description,
    url: '/leadership',
  },
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <Leadership />
    </main>
  )
}