'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  description: string
  credential?: string
  credentialText?: string
  credentialId?: string
  color: 'blue' | 'orange' | 'green' | 'purple' | 'cyan' | 'gold'
  specialBg?: 'mission' | 'ielts'
}

const CERTS: Certification[] = [
  {
    id: '1',
    name: 'Mission OZ 2022 — Top 5 Worldwide',
    issuer: 'Space Teams · STEMX 365',
    date: '2022',
    description:
      'Ranked among the Top 5 worldwide and completed a space science and engineering program covering planetary science, spacecraft design, orbital mechanics, remote sensing, entry-descent-landing, extraterrestrial habitats, and human-robotic exploration. Certificate signed by NASA astronaut and aerospace engineering professor Gregory Chamitoff, Ph.D.',
    credential:
      'https://drive.google.com/file/d/1lkfS9niXuzvHIO6h3YNKETxFuZ3J0Csl/view?usp=sharing',
    credentialText: 'View Credential',
    color: 'purple',
    specialBg: 'mission',
  },
  {
    id: '2',
    name: 'IELTS Academic — Overall Band 7.5',
    issuer: 'British Council / IDP / Cambridge English',
    date: 'Band 7.5',
    description:
      'Demonstrated strong English communication proficiency across listening, reading, writing, and speaking, supporting professional collaboration, documentation, research writing, and global communication.',
    credentialText: 'Certificate available upon request',
    color: 'cyan',
    specialBg: 'ielts',
  },
  {
    id: '3',
    name: 'Certificate of Accomplishment in Software Engineer',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: 'CF5B58274C39',
    description:
      'Validated practical software engineering skills across problem-solving, Python, SQL, and REST API development, demonstrating readiness for backend and full-stack engineering workflows.',
    credential: 'https://www.hackerrank.com/certificates/iframe/cf5b58274c39',
    credentialText: 'View Credential',
    color: 'green',
  },
  {
    id: '4',
    name: 'Certificate of Accomplishment in Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '6C57FAE14D09',
    description:
      'Certified foundational software engineering ability with focus on problem solving, Python, and SQL — covering core programming and database concepts required for technical roles.',
    credential: 'https://www.hackerrank.com/certificates/iframe/6c57fae14d09',
    credentialText: 'View Credential',
    color: 'green',
  },
  {
    id: '5',
    name: 'Certificate of Accomplishment in Python (Basic)',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '6AC36B44D0F0',
    description:
      'Demonstrated Python fundamentals including scalar types, operators, control flow, strings, collections, iteration, modularity, objects, types, and classes.',
    credential: 'https://www.hackerrank.com/certificates/iframe/6ac36b44d0f0',
    credentialText: 'View Credential',
    color: 'blue',
  },
  {
    id: '6',
    name: 'Certificate of Accomplishment in Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'Mar 2024',
    credentialId: 'AF4F6EACE87F',
    description:
      'Validated foundational algorithmic problem-solving skills, including essential data structures such as arrays and strings, along with core algorithms like sorting and searching.',
    credential: 'https://www.hackerrank.com/certificates/iframe/af4f6eace87f',
    credentialText: 'View Credential',
    color: 'orange',
  },
]

const COLOR_MAP = {
  blue: {
    dot: 'bg-blue-500',
    badge: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
    hover: 'hover:border-blue-500/30 hover:shadow-blue-500/10',
  },
  orange: {
    dot: 'bg-orange-400',
    badge: 'bg-orange-400/10 border-orange-400/20 text-orange-400',
    hover: 'hover:border-orange-400/30 hover:shadow-orange-400/10',
  },
  green: {
    dot: 'bg-green-500',
    badge: 'bg-green-500/10 border-green-500/20 text-green-500',
    hover: 'hover:border-green-500/30 hover:shadow-green-500/10',
  },
  purple: {
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    hover: 'hover:border-purple-500/30 hover:shadow-purple-500/10',
  },
  cyan: {
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500',
    hover: 'hover:border-cyan-500/30 hover:shadow-cyan-500/10',
  },
  gold: {
    dot: 'bg-amber-400',
    badge: 'bg-amber-400/10 border-amber-400/20 text-amber-500',
    hover: 'hover:border-amber-400/30 hover:shadow-amber-400/10',
  },
}

const SPECIAL_BG_MAP = {
  mission: {
    overlay:
      'bg-gradient-to-br from-purple-100/95 via-fuchsia-50/80 to-cyan-100/75 dark:from-purple-950/45 dark:via-fuchsia-950/30 dark:to-cyan-950/35',
    glow:
      'border-purple-300/50 dark:border-purple-500/30 shadow-purple-500/10',
    ring:
      'absolute -right-16 -top-16 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl',
  },
  ielts: {
    overlay:
      'bg-gradient-to-br from-cyan-100/95 via-sky-50/80 to-emerald-100/75 dark:from-cyan-950/45 dark:via-sky-950/30 dark:to-emerald-950/35',
    glow:
      'border-cyan-300/50 dark:border-cyan-500/30 shadow-cyan-500/10',
    ring:
      'absolute -right-16 -top-16 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl',
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding container-wide">
      <SectionHeader
        label="07 / Certifications"
        title="Certifications & Achievements"
        subtitle="Credentials and achievements that validate my foundation in software engineering, Python, SQL, problem solving, English communication, and space science."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((cert, i) => {
          const c = COLOR_MAP[cert.color]
          const special = cert.specialBg
            ? SPECIAL_BG_MAP[cert.specialBg]
            : null

          const cardClassName = `group glass relative overflow-hidden rounded-2xl p-5 border border-black/5 dark:border-white/5
            hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col
            ${c.hover} ${special?.glow ?? ''}`

          const cardContent = (
            <>
              {special && (
                <>
                  <div
                    className={`absolute inset-0 ${special.overlay}`}
                    aria-hidden="true"
                  />
                  <div className={special.ring} aria-hidden="true" />
                  <div
                    className="absolute inset-0 bg-white/20 dark:bg-black/10"
                    aria-hidden="true"
                  />
                </>
              )}

              <div className="relative z-10 flex flex-col flex-1">
                {/* Top row — dot + date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${c.dot} shadow-md`}
                  />
                  <span className="text-slate-400 text-xs font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Cert name */}
                <h3 className="text-slate-900 dark:text-white font-bold text-base leading-snug mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer badge */}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.badge} mb-3`}
                >
                  {cert.issuer}
                </span>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-slate-400 text-xs font-mono mb-3">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 flex-1 text-left">
                  {cert.description}
                </p>

                {/* Credential action */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-cyan-500 transition-colors">
                  {cert.credential && <ExternalLink size={12} />}
                  <span>{cert.credentialText ?? 'View Credential'}</span>
                </div>
              </div>
            </>
          )

          if (cert.credential) {
            return (
              <motion.a
                key={cert.id}
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cardClassName}
              >
                {cardContent}
              </motion.a>
            )
          }

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cardClassName}
            >
              {cardContent}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}