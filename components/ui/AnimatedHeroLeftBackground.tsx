'use client'

import Lottie from 'lottie-react'
import manRobotAnimation from '../../assets/lottie/man-robot-workplace.json'

export default function AnimatedHeroLeftBackground() {
  return (
    <div className="hero-lottie-left-bg" aria-hidden="true">
      <Lottie
        animationData={manRobotAnimation}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
        }}
      />
    </div>
  )
}