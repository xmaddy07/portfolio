"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileImageProps {
  size?: "sm" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-32 w-32 sm:h-36 sm:w-36",
  lg: "h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72",
};

export default function ProfileImage({
  size = "lg",
  className = "",
}: ProfileImageProps) {
  const dim = sizeMap[size];

  return (
    <motion.div
      className={`relative mx-auto ${dim} ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 via-violet-500/25 to-accent-gold/20 blur-xl"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-full p-[2px] ring-1 ring-white/20">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, #7C6CFF, #A599FF, #C9A962, #7C6CFF)",
          }}
        />
        <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
          <Image
            src="/profile.png"
            alt="Mueem Hassan — React Native Developer"
            fill
            className="object-cover"
            sizes={size === "lg" ? "(max-width: 768px) 224px, 288px" : "144px"}
            priority={size === "lg"}
          />
        </div>
      </div>
      <motion.div
        className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-emerald-500 shadow-lg sm:h-8 sm:w-8"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <span className="h-2 w-2 rounded-full bg-white" />
      </motion.div>
    </motion.div>
  );
}
