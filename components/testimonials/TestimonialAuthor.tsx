'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

type Props = {
  testimonial: Testimonial
  showProfileButton?: boolean
}

function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('')
}

function formatDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

function Portrait({ testimonial }: { testimonial: Testimonial }) {
  const [failed, setFailed] = useState(false)
  if (testimonial.avatarUrl && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={testimonial.avatarUrl}
        alt={`${testimonial.name}'s portrait`}
        width={52}
        height={52}
        onError={() => setFailed(true)}
        className="h-[52px] w-[52px] rounded-full border-2 border-cyan-500/40 object-cover shadow-md shadow-cyan-500/10 transition-transform duration-300 group-hover/avatar:scale-105"
      />
    )
  }
  return (
    <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-sm font-bold text-white">
      {initials(testimonial.name)}
    </span>
  )
}

export default function TestimonialAuthor({ testimonial, showProfileButton = true }: Props) {
  const profileUrl = testimonial.profileUrl
  return (
    <div className="flex flex-wrap items-center gap-4">
      {profileUrl ? (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${testimonial.name}'s LinkedIn profile`} className="group/avatar shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500">
          <Portrait testimonial={testimonial} />
        </a>
      ) : <Portrait testimonial={testimonial} />}

      <div className="min-w-0 flex-1">
        {profileUrl ? (
          <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="inline-block font-bold text-slate-900 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400">
            {testimonial.name}
          </a>
        ) : <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>}
        {testimonial.role && <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>}
        <p className="text-xs leading-relaxed text-cyan-700 dark:text-cyan-400">{testimonial.relationship}</p>
        <p className="mt-1 text-xs font-mono text-slate-400">{formatDate(testimonial.date)} · {testimonial.source}</p>
      </div>

      {profileUrl && showProfileButton && (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/25 bg-cyan-500/5 px-3 py-2 text-xs font-semibold text-cyan-700 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:text-cyan-400">
          View Profile <ExternalLink size={13} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
