'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'

const AUTOPLAY_MS = 9000
const SLIDE_SECONDS = 0.8

type Props = {
  testimonials: Testimonial[]
}

/** Circular distance from the active slide, in the direction of travel. */
function relativePosition(index: number, active: number, count: number, direction: number) {
  if (index === active) return 0
  if (count === 2) return direction > 0 ? 1 : -1

  const forward = (index - active + count) % count
  const backward = (active - index + count) % count
  if (forward === backward) return direction > 0 ? 1 : -1
  return forward < backward ? 1 : -1
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const touchX = useRef<number | null>(null)

  const count = testimonials.length
  const hasMultiple = count > 1
  const safeActive = count ? ((active % count) + count) % count : 0

  useEffect(() => {
    const update = () => setHidden(document.visibilityState !== 'visible')
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  const go = useCallback((next: number, dir: number) => {
    if (count < 2) return
    setDirection(dir)
    setActive(((next % count) + count) % count)
    setResetKey((key) => key + 1)
  }, [count])

  const isAutoPaused = paused || hovered || focused || hidden || !!reducedMotion

  useEffect(() => {
    if (!hasMultiple || isAutoPaused) return
    const timer = window.setInterval(() => {
      setDirection(1)
      setActive((previous) => (previous + 1) % count)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [count, hasMultiple, isAutoPaused, resetKey])

  if (!count) return null
  if (!hasMultiple) {
    return <TestimonialCard testimonial={testimonials[0]} variant="featured" />
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[1300px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured professional recommendations"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false)
        }
      }}
      onTouchStart={(event) => {
        touchX.current = event.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return
        const distance = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current
        touchX.current = null
        if (Math.abs(distance) > 60) {
          const dir = distance < 0 ? 1 : -1
          go(safeActive + dir, dir)
        }
      }}
    >
      {/* The grid keeps a consistent height; slides overlap in one grid cell. */}
      <div className="relative grid grid-cols-1 items-center overflow-hidden py-3 sm:py-5">
        {testimonials.map((testimonial, index) => {
          const position = relativePosition(index, safeActive, count, direction)
          const visible = count <= 3 || Math.min(
            (index - safeActive + count) % count,
            (safeActive - index + count) % count
          ) <= 1
          const isActive = index === safeActive

          // For two testimonials, show the other only on one side.
          // For larger sets, offscreen recommendations stay hidden.
          return (
            <motion.div
              key={testimonial.id}
              className="relative min-w-0 w-[94%] sm:w-[84%] lg:w-[78%] max-w-[900px] justify-self-center"
              style={{ gridArea: '1 / 1', zIndex: isActive ? 30 : 10 }}
              initial={false}
              animate={{
                x: `${position * 81}%`,
                scale: reducedMotion ? 1 : isActive ? 1 : 0.85,
                opacity: !visible ? 0 : isActive ? 1 : 0.48,
                filter: reducedMotion || isActive ? 'blur(0px)' : 'blur(2px)',
              }}
              transition={{
                duration: reducedMotion ? 0 : SLIDE_SECONDS,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={isActive ? `Current recommendation: ${testimonial.name}` : undefined}
            >
              <div className={isActive ? '' : 'pointer-events-none select-none'} aria-hidden={!isActive} inert={!isActive}>
                <TestimonialCard testimonial={testimonial} variant="featured" />
              </div>
              {!isActive && visible && (
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500"
                  aria-label={`Show recommendation from ${testimonial.name}`}
                  onClick={() => go(index, position)}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mx-auto mt-5 flex max-w-[900px] flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous recommendation" onClick={() => go(safeActive - 1, -1)} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-300">
            <ChevronLeft size={19} />
          </button>
          <button type="button" aria-label="Next recommendation" onClick={() => go(safeActive + 1, 1)} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-300">
            <ChevronRight size={19} />
          </button>
          <button type="button" aria-label={paused ? 'Play automatic recommendation slides' : 'Pause automatic recommendation slides'} aria-pressed={paused} onClick={() => { setPaused((p) => !p); setResetKey((key) => key + 1) }} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-300">
            {paused ? <Play size={17} /> : <Pause size={17} />}
          </button>
        </div>
        <div className="flex items-center gap-2" aria-label="Choose recommendation">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show recommendation ${index + 1} of ${count}: ${item.name}`}
              aria-current={index === safeActive ? 'true' : undefined}
              onClick={() => go(index, index >= safeActive ? 1 : -1)}
              className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 ${index === safeActive ? 'w-6 bg-cyan-500' : 'w-2 bg-slate-400/40 hover:bg-cyan-400/60'}`}
            />
          ))}
        </div>
        <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
          {safeActive + 1} / {count}
        </span>
      </div>
    </div>
  )
}
