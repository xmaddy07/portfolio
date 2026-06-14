"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={`mb-10 overflow-visible sm:mb-16 ${isCenter ? "text-center" : ""}`}
    >
      <motion.span
        variants={fadeUp}
        custom={0}
        className="badge-accent mb-4 !px-5 !py-2 !text-[11px] !font-semibold !uppercase !tracking-[0.22em]"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-light" />
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        custom={1}
        className="section-title text-balance text-white"
      >
        {title.split(" ").length > 2 ? (
          <>
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient">
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </>
        ) : (
          <>
            {title.split(" ")[0]}{" "}
            <span className="text-gradient">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={2}
          className={`mt-4 text-balance text-base leading-relaxed text-muted-light sm:mt-5 sm:text-lg ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        custom={3}
        className={`mt-8 h-px w-16 bg-gradient-to-r from-accent to-transparent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
