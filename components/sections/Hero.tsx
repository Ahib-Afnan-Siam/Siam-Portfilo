'use client'

import { useEffect, useState, useRef } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, MapPin } from 'lucide-react'

import AnimatedHeroBackground from '@/components/ui/AnimatedHeroBackground'
import AnimatedHeroLeftBackground from '@/components/ui/AnimatedHeroLeftBackground'

const ROLES = [
  'AI Software Engineer',
  'Machine Learning Engineer',
  'LLM Engineer',
  'RAG Engineer',
  'NL2SQL Developer',
  'Computer Vision Engineer',
  'Full-Stack AI Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const [introPopupVisible, setIntroPopupVisible] = useState(false)
  const [hireHoverVisible, setHireHoverVisible] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.82])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60])

  const showHirePopup = introPopupVisible || hireHoverVisible

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        )
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          40
        )
      } else {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIntroPopupVisible(true)
    }, 900)

    const hideTimer = setTimeout(() => {
      setIntroPopupVisible(false)
    }, 4600)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  useEffect(() => {
    let hireButton: HTMLElement | null = null

    const handleMouseEnter = () => {
      setIntroPopupVisible(false)
      setHireHoverVisible(true)
    }

    const handleMouseLeave = () => {
      setHireHoverVisible(false)
    }

    const setupHoverListener = () => {
      const clickableElements = Array.from(
        document.querySelectorAll<HTMLElement>('a, button')
      )

      hireButton =
        clickableElements.find(
          (el) => el.textContent?.trim().toLowerCase() === 'hire me'
        ) ?? null

      if (!hireButton) return

      hireButton.addEventListener('mouseenter', handleMouseEnter)
      hireButton.addEventListener('mouseleave', handleMouseLeave)
      hireButton.addEventListener('focus', handleMouseEnter)
      hireButton.addEventListener('blur', handleMouseLeave)
    }

    const setupTimer = setTimeout(setupHoverListener, 300)

    return () => {
      clearTimeout(setupTimer)

      if (hireButton) {
        hireButton.removeEventListener('mouseenter', handleMouseEnter)
        hireButton.removeEventListener('mouseleave', handleMouseLeave)
        hireButton.removeEventListener('focus', handleMouseEnter)
        hireButton.removeEventListener('blur', handleMouseLeave)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Right bottom Lottie animation */}
      <AnimatedHeroBackground />

      {/* Left bottom Lottie animation */}
      <AnimatedHeroLeftBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-radial from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none opacity-80" />

      {/* Hire Me hover/intro popup */}
      <AnimatePresence>
        {showHirePopup && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-6 top-[88px] z-[80] hidden xl:block w-[270px] pointer-events-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/80 dark:bg-slate-950/75 backdrop-blur-xl shadow-xl shadow-cyan-500/10 px-4 py-3">
              {/* Small arrow */}
              <div className="absolute -top-1.5 right-9 w-3 h-3 rotate-45 bg-white/80 dark:bg-slate-950/75 border-l border-t border-cyan-500/20" />

              {/* Soft glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-purple-500/15 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow shadow-green-400/40" />
                    <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
                      Available
                    </span>
                  </div>

                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/20 text-slate-500 dark:text-slate-400 bg-cyan-500/5">
                    AI / ML roles
                  </span>
                </div>

                <h3 className="text-[13px] font-bold text-slate-900 dark:text-white leading-snug mb-1">
                  Open to AI & ML Engineering Opportunities
                </h3>

                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  LLMs, RAG, NL2SQL, machine learning, computer vision, and
                  full-stack AI product roles.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content zooms out as you scroll */}
      <motion.div
        style={{
          scale: contentScale,
          opacity: contentOpacity,
          y: contentY,
        }}
        className="hero-content relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto -mt-6 sm:-mt-10 md:-mt-14"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="heading-xl mb-4 text-slate-900 dark:text-white"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient">Ahib Afnan Siam</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-6 h-10"
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-7 bg-cyan-500 ml-1 animate-blink" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build production-grade AI and machine learning systems — from RAG
          pipelines, NL2SQL assistants, and semantic search to predictive ML
          models, computer vision solutions, and Oracle VECTOR-powered matching.
          Turning enterprise data into intelligent, reliable, and scalable
          products.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-slate-400 text-sm font-mono mb-10 -mt-4"
        >
          <MapPin size={13} className="text-cyan-500" />
          <span>Uttara, Dhaka, Bangladesh</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-4 mb-14 sm:mb-16"
        >
          <a
            href="#projects"
            className="inline-flex w-full sm:w-auto items-center justify-center text-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-cyan-500/25 glow-cyan"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center text-center px-8 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 glass text-slate-700 dark:text-slate-200 font-semibold hover:border-cyan-500/40 hover:scale-105 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/Ahib-Afnan-Siam',
              label: 'GitHub',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/ahib-afnan-siam/',
              label: 'LinkedIn',
            },
            {
              icon: FileText,
              href: '/Ahib_Afnan_CV.pdf',
              label: 'Resume',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              <Icon
                size={22}
                strokeWidth={1.75}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-500 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}