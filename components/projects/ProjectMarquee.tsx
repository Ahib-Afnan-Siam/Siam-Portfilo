'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Pause, Play, MoveHorizontal } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import type { Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

const LOOP_SECONDS = 55

type Props = { projects: Project[] }

export default function ProjectMarquee({ projects }: Props) {
  const reducedMotion = useReducedMotion()
  const [manuallyPaused, setManuallyPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<Animation | null>(null)
  const pausedRef = useRef(false)

  const canMove = projects.length > 1 && !reducedMotion
  const isPaused = manuallyPaused || hovered || focused || tabHidden
  pausedRef.current = isPaused

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.visibilityState !== 'visible')
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  // Web Animations starts immediately on mount, without waiting for a hover
  // state update or for styled-jsx keyframes to be injected. Animation.pause()
  // and .play() retain the exact travel position.
  useLayoutEffect(() => {
    const track = trackRef.current
    const group = groupRef.current
    if (!track || !group || !canMove) {
      animationRef.current?.cancel()
      animationRef.current = null
      return
    }

    const setup = () => {
      const distance = group.getBoundingClientRect().width
      if (distance <= 0) return
      const oldAnimation = animationRef.current
      const oldProgress = oldAnimation && oldAnimation.effect?.getTiming().duration
        ? (Number(oldAnimation.currentTime ?? 0) / (LOOP_SECONDS * 1000)) % 1
        : 0
      oldAnimation?.cancel()
      const animation = track.animate(
        [
          { transform: 'translate3d(0, 0, 0)' },
          { transform: `translate3d(-${distance}px, 0, 0)` },
        ],
        {
          duration: LOOP_SECONDS * 1000,
          iterations: Infinity,
          easing: 'linear',
        }
      )
      animation.currentTime = oldProgress * LOOP_SECONDS * 1000
      animationRef.current = animation
      // Starts automatically on first load; pause conditions are handled below.
      if (pausedRef.current) animation.pause()
    }

    setup()
    const observer = new ResizeObserver(setup)
    observer.observe(group)
    return () => {
      observer.disconnect()
      animationRef.current?.cancel()
      animationRef.current = null
    }
  // Recreate only when project count or motion preference changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canMove, projects.length])

  useEffect(() => {
    const animation = animationRef.current
    if (!animation) return
    if (isPaused) animation.pause()
    else animation.play()
  }, [isPaused, canMove])

  if (!projects.length) return null

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="project gallery"
      aria-label="Selected featured projects"
    >
      {/* Desktop: duplicate group provides a seamless loop. The decorative
          copy is intentionally removed from keyboard and screen-reader access. */}
      <div
        className="relative hidden overflow-hidden py-5 md:block"
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true)
        }}
        onPointerLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setFocused(false)
          }
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-40 w-5 bg-gradient-to-r from-[var(--bg-primary)] to-transparent lg:w-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-40 w-5 bg-gradient-to-l from-[var(--bg-primary)] to-transparent lg:w-10"
          aria-hidden="true"
        />

        <div ref={trackRef} className="flex w-max will-change-transform">
          <div ref={groupRef} className="flex shrink-0 gap-6 pr-6">
            {projects.map((project) => (
              <div key={project._id} className="w-[350px] shrink-0 lg:w-[370px]">
                <ProjectCard project={project} mode="marquee" />
              </div>
            ))}
          </div>
          {canMove && (
            <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true" inert>
              {projects.map((project) => (
                <div key={`copy-${project._id}`} className="w-[350px] shrink-0 lg:w-[370px]">
                  <ProjectCard project={project} mode="marquee" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile/tablet-touch narrow viewport: stationary native swipe gallery. */}
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 pt-3 md:hidden"
        role="group"
        aria-label="Swipe to explore projects"
      >
        {projects.map((project) => (
          <div key={project._id} className="w-[84vw] max-w-[370px] shrink-0 snap-center">
            <ProjectCard project={project} mode="marquee" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
        <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MoveHorizontal size={15} aria-hidden="true" />
          <span className="hidden md:inline">
            {canMove ? 'Hover or focus a project to pause and explore' : 'Explore featured projects'}
          </span>
          <span className="md:hidden">Swipe to explore projects</span>
        </span>
        {canMove && (
          <button
            type="button"
            onClick={() => setManuallyPaused((value) => !value)}
            aria-label={manuallyPaused ? 'Resume moving projects' : 'Pause moving projects'}
            aria-pressed={manuallyPaused}
            className="glass hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-300 md:inline-flex"
          >
            {manuallyPaused ? <Play size={15} /> : <Pause size={15} />}
            {manuallyPaused ? 'Resume' : 'Pause'}
          </button>
        )}
      </div>
    </div>
  )
}
