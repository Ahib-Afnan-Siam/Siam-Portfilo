'use client'

import { motion } from 'framer-motion'
import { Users, Trophy, Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

import { ROLES, type LeadershipRole } from '@/data/leadership'

type SectionVariant = 'featured' | 'full'

type LeadershipProps = {
  variant?: SectionVariant
}

const ICON_MAP = {
  users: Users,
  trophy: Trophy,
  star: Star,
}

export default function Leadership({ variant = 'full' }: LeadershipProps) {
  const visible = variant === 'featured' ? ROLES.slice(0, 3) : ROLES

  return (
    <section id="leadership" className="section-padding container-wide">
      <SectionHeader
        label="06 / Leadership"
        title="Leadership & Club Activities"
        subtitle={
          variant === 'featured'
            ? 'Selected leadership roles across robotics and student technology communities.'
            : 'Roles where I led teams, managed people, supported technical communities, and contributed beyond academics.'
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((role, i) => {
          const Icon = ICON_MAP[role.icon]

          return (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: (i % 6) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass rounded-2xl p-6 border border-black/5 dark:border-white/5
                hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10
                hover:scale-[1.03] transition-all duration-300"
            >
              {/* Icon badge */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 flex items-center justify-center mb-5">
                <Icon size={20} className="text-cyan-500" />
              </div>

              {/* Title & org */}
              <h3 className="text-slate-900 dark:text-white font-bold text-base mb-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {role.title}
              </h3>

              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-1">
                {role.organisation}
              </p>

              <p className="text-slate-400 text-xs font-mono mb-4">
                {role.period}
              </p>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 text-left">
                {role.description}
              </p>

              {/* Impact bullets */}
              <ul className="space-y-1.5">
                {role.impact.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-slate-500 dark:text-slate-400 text-sm"
                  >
                    <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {variant === 'featured' && (
        <div className="flex justify-center mt-10">
          <a
            href="/leadership"
            className="px-5 py-2.5 rounded-xl glass border border-black/5 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            View All Leadership
          </a>
        </div>
      )}
    </section>
  )
}