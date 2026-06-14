"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
