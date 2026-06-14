"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Play,
  Github,
  Sparkles,
  Rocket,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { workflowItems } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/animations";

const icons = [Apple, Play, Github, Sparkles];

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding">
      <div className="section-divider" />
      <div className="section-glow">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="How I Work"
          title="Ship Faster, Ship Smarter"
          description="From AI-assisted development to live App Store and Play Store releases — a complete build-and-publish workflow."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {workflowItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -6 }}
                className="premium-card group p-7"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/25 transition-all group-hover:bg-accent/25 group-hover:shadow-glow">
                    <Icon className="h-6 w-6 text-accent-light" />
                  </div>
                  <Rocket className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold leading-snug text-white transition-colors group-hover:text-accent-light">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
