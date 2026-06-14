"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX }}
      >
        <div className="h-full w-full bg-gradient-to-r from-accent via-accent-light to-accent-gold shadow-glow" />
      </motion.div>
    </>
  );
}
