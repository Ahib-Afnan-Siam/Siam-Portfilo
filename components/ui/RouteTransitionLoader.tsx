'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Lottie from 'lottie-react'

import loadingHandAnimation from '../../assets/lottie/loading-hand.json'
import walkingShoesAnimation from '../../assets/lottie/walk-cycling-shoes.json'

const TRANSITION_DELAY = 850
const HIDE_DELAY = 450

const animations = [
  {
    name: 'loading-hand',
    data: loadingHandAnimation,
    widthClass: 'w-[220px] sm:w-[260px]',
  },
  {
    name: 'walking-shoes',
    data: walkingShoesAnimation,
    widthClass: 'w-[240px] sm:w-[300px]',
  },
]

export default function RouteTransitionLoader() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [animationIndex, setAnimationIndex] = useState(0)

  const isTransitioningRef = useRef(false)
  const showTimerRef = useRef<NodeJS.Timeout | null>(null)
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const clearTimers = () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a') as HTMLAnchorElement | null

      if (!anchor) return

      const href = anchor.getAttribute('href')
      const targetAttr = anchor.getAttribute('target')
      const downloadAttr = anchor.getAttribute('download')

      if (!href) return
      if (downloadAttr) return
      if (targetAttr === '_blank') return
      if (href.startsWith('mailto:')) return
      if (href.startsWith('tel:')) return
      if (href.startsWith('http') && !href.startsWith(window.location.origin)) return

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (isTransitioningRef.current) return

      const nextUrl = new URL(href, window.location.href)

      if (nextUrl.origin !== window.location.origin) return

      const currentFullPath =
        window.location.pathname + window.location.search + window.location.hash

      const nextFullPath = nextUrl.pathname + nextUrl.search + nextUrl.hash

      if (currentFullPath === nextFullPath) return

      event.preventDefault()

      isTransitioningRef.current = true
      clearTimers()

      setAnimationIndex(Math.floor(Math.random() * animations.length))
      setIsVisible(true)

      showTimerRef.current = setTimeout(() => {
        const isSamePageHashNavigation =
          nextUrl.pathname === window.location.pathname &&
          nextUrl.search === window.location.search &&
          nextUrl.hash

        if (isSamePageHashNavigation) {
          window.history.pushState(null, '', nextUrl.hash)

          const section = document.querySelector(nextUrl.hash)

          if (section) {
            section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        } else {
          router.push(nextFullPath)
        }

        hideTimerRef.current = setTimeout(() => {
          setIsVisible(false)
          isTransitioningRef.current = false
        }, HIDE_DELAY)
      }, TRANSITION_DELAY)
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
      clearTimers()
    }
  }, [router])

  const currentAnimation = animations[animationIndex]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="route-transition-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--bg-primary)]/95 backdrop-blur-sm"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center"
          >
            <div className={currentAnimation.widthClass}>
              <Lottie
                animationData={currentAnimation.data}
                loop
                autoplay
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid meet',
                }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-cyan-600 dark:text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Loading
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}