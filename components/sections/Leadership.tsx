'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Trophy, Star } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

interface LeadershipRole {
  id: string
  title: string
  organisation: string
  period: string
  description: string
  impact: string[]
  icon: 'users' | 'trophy' | 'star'
}

const ROLES: LeadershipRole[] = [
  {
    id: '1',
    title: 'Team Lead, AI & Autonomous Team',
    organisation: 'BRACU Ognibir — Autonomous Fire Extinguishing Robot',
    period: 'Mar 2023 – Apr 2024',
    description:
      'Led the AI and autonomous systems team for BRACU Ognibir, focusing on building an autonomous fire-extinguishing robot that combined robotics, sensing, control logic, and intelligent decision-making.',
    impact: [
      'Led technical planning and team coordination for the autonomous robot development workflow.',
      'Worked on AI-assisted navigation, sensor-based decision-making, and autonomous fire response logic.',
      'Coordinated hardware, software, and robotics tasks across team members to keep development aligned.',
      'Helped bridge research, prototyping, and practical implementation for a real-world robotics use case.',
    ],
    icon: 'trophy',
  },
  {
    id: '2',
    title: 'Director, Human Resources',
    organisation: 'Robotics Club of BRAC University',
    period: 'Feb 2023 – Feb 2024',
    description:
      'Led the HR department of the Robotics Club of BRAC University while also supporting database administration, IT services, technical training, and robotics-focused member development.',
    impact: [
      'Organized and managed recruitment, onboarding, and team coordination for club members.',
      'Assisted in building and maintaining club databases and IT services for smoother operations.',
      'Trained members in basic robotics, database management, IT management, and software development.',
      'Supported robotics projects using Arduino and Raspberry Pi, including SoccerBot, line-following robots, and other prototypes.',
    ],
    icon: 'users',
  },
  {
    id: '3',
    title: 'Executive, Communication and Marketing',
    organisation: 'BRAC University Computer Club',
    period: 'Dec 2022 – Dec 2023',
    description:
      'Worked in communication and marketing for one of BRAC University’s major technology clubs, supporting outreach, event promotion, member engagement, and cross-team communication.',
    impact: [
      'Supported communication strategies for club events, campaigns, and technical programs.',
      'Helped promote activities to improve student participation and visibility across campus.',
      'Coordinated with internal teams to ensure clear messaging, event updates, and smooth information flow.',
      'Contributed to building a more active and connected student technology community.',
    ],
    icon: 'star',
  },
  {
    id: '4',
    title: 'Vice President',
    organisation: 'Notre Dame Eco & Space Club',
    period: 'Aug 2018 – Aug 2019',
    description:
      'Served as Vice President of Notre Dame Eco & Space Club, contributing to leadership, planning, and student engagement around science, environment, astronomy, and space-focused activities.',
    impact: [
      'Helped lead club operations, activity planning, and member coordination.',
      'Supported science and space-related programs that encouraged curiosity beyond the classroom.',
      'Worked with members and organizers to execute club initiatives and student activities.',
      'Built early leadership experience through teamwork, communication, and event ownership.',
    ],
    icon: 'trophy',
  },
  {
    id: '5',
    title: 'Secretary',
    organisation: 'Notre Dame English Club',
    period: 'Sep 2018 – Sep 2019',
    description:
      'Served as Secretary of Notre Dame English Club, supporting communication, documentation, event organization, and club-level coordination for language and public-speaking activities.',
    impact: [
      'Managed communication, documentation, and coordination for club activities.',
      'Supported events focused on English communication, writing, presentation, and public speaking.',
      'Helped maintain smooth collaboration between members, organizers, and leadership teams.',
      'Strengthened interpersonal communication, organization, and leadership skills from an early stage.',
    ],
    icon: 'star',
  },
]

const ICON_MAP = {
  users: Users,
  trophy: Trophy,
  star: Star,
}

export default function Leadership() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? ROLES : ROLES.slice(0, 6)

  return (
    <section id="leadership" className="section-padding container-wide">
      <SectionHeader
        label="03 / Leadership"
        title="Leadership & Club Activities"
        subtitle="Roles where I led teams, managed people, supported technical communities, and contributed beyond academics."
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

      {ROLES.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-2.5 rounded-xl glass border border-black/5 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/30 text-sm font-medium transition-all hover:scale-105"
          >
            {showAll ? 'Show Less' : `Show More (${ROLES.length - 6} more)`}
          </button>
        </div>
      )}
    </section>
  )
}