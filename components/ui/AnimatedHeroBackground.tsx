"use client";

import Lottie from "lottie-react";
import workFromHomeAnimation from "../../assets/lottie/work from home.json";

export default function AnimatedHeroBackground() {
  return (
    <div className="hero-lottie-bg" aria-hidden="true">
      <Lottie
        animationData={workFromHomeAnimation}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid meet",
        }}
      />
    </div>
  );
}