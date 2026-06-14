"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Smartphone, ArrowUpRight, Hammer } from "lucide-react";
import type { Project } from "@/data/projects";
import { scaleIn } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function StoreIcon({ type }: { type: "play" | "app" }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {type === "play" ? (
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 01-1.242.428L1.5 21.5V2.5l.868-.114a1.003 1.003 0 011.241.428zM14.5 12.707l2.302 2.302-10.937 6.35a1.003 1.003 0 01-1.242.428L5.5 21.5V2.5l-.123.013a1.003 1.003 0 011.241.428L14.5 11.293v1.414zM17.792 14.61l2.81 1.624a1 1 0 010 1.732l-2.81 1.624L15.5 17.5v-3l2.292 1.61z" />
      ) : (
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      )}
    </svg>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const links = [
    {
      href: project.githubUrl,
      label: "GitHub",
      renderIcon: () => <Github className="h-4 w-4" />,
      show: !!project.githubUrl,
    },
    {
      href: project.playStoreUrl,
      label: "Play Store",
      renderIcon: () => <StoreIcon type="play" />,
      show: !!project.playStoreUrl,
    },
    {
      href: project.appStoreUrl,
      label: "App Store",
      renderIcon: () => <StoreIcon type="app" />,
      show: !!project.appStoreUrl,
    },
    {
      href: project.liveUrl,
      label: "Live Demo",
      renderIcon: () => <ExternalLink className="h-4 w-4" />,
      show: !!project.liveUrl,
    },
  ].filter((link) => link.show);

  const primaryLink =
    project.liveUrl ??
    project.appStoreUrl ??
    project.playStoreUrl ??
    project.githubUrl;

  return (
    <motion.article
      layout
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      custom={index}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="premium-card group overflow-hidden max-sm:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface sm:aspect-[16/10]">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-card-shine opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {project.inDevelopment && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-100 backdrop-blur-sm"
          >
            <Hammer className="h-3 w-3" />
            In Development
          </motion.span>
        )}

        {project.featured && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/90 px-3 py-1 text-xs font-semibold text-white shadow-glow backdrop-blur-sm"
          >
            <Star className="h-3 w-3 fill-current" />
            Featured
          </motion.span>
        )}

        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute inset-0 flex cursor-pointer items-end justify-end p-4 opacity-100 transition-all duration-400 sm:items-center sm:justify-center sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-accent/90 text-white shadow-glow-lg backdrop-blur-sm transition-transform duration-300 sm:h-14 sm:w-14 sm:group-hover:scale-110">
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </a>
        )}
      </div>

      <div className="p-5 sm:p-7">
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/20">
            <Smartphone className="h-4 w-4 text-accent-light" />
          </div>
          <h3 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-accent-light sm:text-xl">
            {project.title}
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-light line-clamp-3 sm:mb-5">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="tag-pill"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4 sm:gap-3 sm:pt-5">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs text-muted transition-all hover:border-accent/20 hover:bg-accent/10 hover:text-accent-light sm:border-transparent sm:bg-transparent sm:px-2.5 sm:py-1.5 sm:text-sm"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.renderIcon()}
                {link.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
