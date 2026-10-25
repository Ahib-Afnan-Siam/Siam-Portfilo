'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'

const AUTOPLAY_MS = 6000
const SLIDE_SECONDS = 1.0
const SLIDE_SPACING = 81
const OFFSETS = [-2, -1, 0, 1, 2] as const

type Props = {
  testimonials: Testimonial[]
}

function wrap(index: number, count: number) {
  return ((index % count) + count) % count
}

function visualState(position: number, reducedMotion: boolean) {
  const center = Math.abs(position) < 0.01
  const neighbor = Math.abs(position) <= 1.01

  return {
    x: `${position * SLIDE_SPACING}%`,
    scale: reducedMotion || center ? 1 : 0.87,
    opacity: center ? 1 : neighbor ? 0.48 : 0,
    filter: reducedMotion || center
      ? 'blur(0px) brightness(1) saturate(1)'
      : 'blur(1.5px) brightness(0.9) saturate(0.85)',
  }
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [moving, setMoving] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const touchX = useRef<number | null>(null)
  const pendingIndex = useRef<number | null>(null)
  const movingRef = useRef(false)

  const count = testimonials.length
  const safeActive = count ? wrap(active, count) : 0

  useEffect(() => {
    const update = () => setHidden(document.visibilityState !== 'visible')
    update()
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  const go = useCallback((next: number, dir: 1 | -1) => {
    if (count < 2 || movingRef.current) return
    const destination = wrap(next, count)
    if (destination === safeActive) return

    pendingIndex.current = destination
    movingRef.current = true
    setDirection(dir)
    setMoving(true)
    setResetKey((key) => key + 1)
  }, [count, safeActive])

  const finish = useCallback(() => {
    if (!movingRef.current) return
    movingRef.current = false
    if (pendingIndex.current !== null) setActive(pendingIndex.current)
    pendingIndex.current = null
    setMoving(false)
  }, [])

  // If motion is disabled, change the active card without a timed transition.
  useEffect(() => {
    if (moving && reducedMotion) finish()
  }, [moving, reducedMotion, finish])

  const autoPaused = paused || hovered || focused || hidden || !!reducedMotion

  useEffect(() => {
    if (count < 2 || autoPaused || moving) return
    const timer = window.setTimeout(() => go(safeActive + 1, 1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [count, autoPaused, moving, safeActive, resetKey, go])

  if (!count) return null
  if (count === 1) {
    return <TestimonialCard testimonial={testimonials[0]} variant="featured" />
  }

  // With two entries, the same neighbor is deliberately shown at both edges.
  // These are decorative preview instances, never duplicate recommendations.
  const target = pendingIndex.current ?? wrap(safeActive + direction, count)
  const incomingOffset = direction

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
        const endX = event.changedTouches[0]?.clientX ?? touchX.current
        const distance = endX - touchX.current
        touchX.current = null
        if (Math.abs(distance) > 60) {
          const dir: 1 | -1 = distance < 0 ? 1 : -1
          go(safeActive + dir, dir)
        }
      }}
    >
      {/* Overlapping cards share a grid cell, keeping the section height stable. */}
      <div className="relative grid grid-cols-1 items-center overflow-hidden py-3 sm:py-5">
        {OFFSETS.map((offset) => {
          // The target is inserted in the incoming slot for dot navigation too.
          const testimonialIndex = moving && offset === incomingOffset
            ? target
            : wrap(safeActive + offset, count)
          const testimonial = testimonials[testimonialIndex]
          const position = offset - (moving ? direction : 0)
          const isCenter = offset === 0 && !moving
          const sideButton = !moving && Math.abs(offset) === 1

          return (
            <motion.div
              key={`coverflow-slot-${offset}`}
              className="relative min-w-0 w-[94%] sm:w-[84%] lg:w-[78%] max-w-[900px] justify-self-center"
              style={{ gridArea: '1 / 1', zIndex: isCenter ? 30 : offset === incomingOffset ? 20 : 10 }}
              initial={false}
              animate={visualState(position, !!reducedMotion)}
              transition={{
                duration: reducedMotion || !moving ? 0 : SLIDE_SECONDS,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => {
                if (offset === 0 && moving) finish()
              }}
            >
              <div
                className={isCenter ? 'relative' : 'pointer-events-none select-none'}
                aria-hidden={!isCenter}
                inert={!isCenter}
              >
                <TestimonialCard testimonial={testimonial} variant="featured" />
              </div>

              {sideButton && (
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500"
                  aria-label={`${offset < 0 ? 'Previous' : 'Next'} recommendation: ${testimonial.name}`}
                  onClick={() => go(safeActive + offset, offset < 0 ? -1 : 1)}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mx-auto mt-5 flex max-w-[900px] flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous recommendation" disabled={moving} onClick={() => go(safeActive - 1, -1)} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 disabled:opacity-50 dark:text-slate-300">
            <ChevronLeft size={19} />
          </button>
          <button type="button" aria-label="Next recommendation" disabled={moving} onClick={() => go(safeActive + 1, 1)} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 disabled:opacity-50 dark:text-slate-300">
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
              disabled={moving}
              aria-label={`Show recommendation ${index + 1} of ${count}: ${item.name}`}
              aria-current={index === safeActive ? 'true' : undefined}
              onClick={() => go(index, index >= safeActive ? 1 : -1)}
              className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 disabled:opacity-50 ${index === safeActive ? 'w-6 bg-cyan-500' : 'w-2 bg-slate-400/40 hover:bg-cyan-400/60'}`}
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
