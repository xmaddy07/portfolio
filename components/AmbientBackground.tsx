"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <motion.div
        className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-accent/15 blur-[140px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/12 blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-accent-gold/10 blur-[90px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="noise-overlay" />
    </div>
  );
}
