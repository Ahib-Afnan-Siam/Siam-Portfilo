'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

import { CERTS, type Certification } from '@/data/certifications'

type SectionVariant = 'featured' | 'full'

type CertificationsProps = {
  variant?: SectionVariant
}

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

export default function Certifications({ variant = 'full' }: CertificationsProps) {
  const visibleCerts =
    variant === 'featured'
      ? CERTS.filter((cert) => cert.featured)
      : CERTS

  return (
    <section id="certifications" className="section-padding container-wide">
      <SectionHeader
        label="07 / Certifications"
        title="Certifications & Achievements"
        subtitle={
          variant === 'featured'
            ? 'Selected credentials spanning engineering, communication, and space science.'
            : 'Credentials and achievements that validate my foundation in software engineering, Python, SQL, problem solving, English communication, and space science.'
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleCerts.map((cert, i) => {
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

      {variant === 'featured' && (
        <div className="flex justify-center mt-10">
          <a
            href="/certifications"
            className="px-5 py-2.5 rounded-xl glass border border-black/5 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            View All Certifications
          </a>
        </div>
      )}
    </section>
  )
}