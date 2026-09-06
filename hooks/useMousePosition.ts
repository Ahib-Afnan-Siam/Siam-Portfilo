'use client'

import { useEffect, useRef } from 'react'
import type { MousePosition } from '@/types'

/**
 * Tracks the mouse cursor position relative to the viewport.
 * Returns normalized coordinates (x, y) as well as raw pixel values.
 */
export function useMousePosition() {
  const position = useRef<MousePosition>({ x: 0, y: 0 })
  const normalised = useRef<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current.x = e.clientX
      position.current.y = e.clientY
      normalised.current.x = (e.clientX / window.innerWidth) * 2 - 1
      normalised.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { position, normalised }
}
