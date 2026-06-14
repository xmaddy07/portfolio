"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

type Filter = "all" | "featured" | "open-source";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "open-source", label: "Open Source" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "open-source") return !!project.githubUrl;
    return true;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="section-divider" />
      <div className="section-glow">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Portfolio"
          title="My Projects"
          description="A selection of mobile apps I've built — from concept to App Store launch."
        />

        <LayoutGroup>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="inline-flex gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-premium backdrop-blur-md">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`relative rounded-xl px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    activeFilter === filter.key
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {activeFilter === filter.key && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-xl bg-accent shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </LayoutGroup>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-muted"
            >
              No projects match this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
