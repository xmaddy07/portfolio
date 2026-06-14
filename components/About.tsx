"use client";

import { motion } from "framer-motion";
import { Smartphone, Rocket, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProfileImage from "./ProfileImage";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const stats = [
  { icon: Smartphone, value: "3+", label: "Years Experience" },
  { icon: Rocket, value: "6+", label: "Published on Stores" },
  { icon: Code2, value: "15+", label: "Apps Built" },
];

const technologies = [
  "React Native",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "App Store",
  "Play Store",
  "GitHub",
  "Cursor AI",
  "VS Code",
  "Firebase",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-divider" />
      <div className="section-glow">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="About Me"
          title="Crafting Mobile & Web Experiences"
          align="left"
        />

        <div className="mb-12 grid items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start"
          >
            <ProfileImage size="lg" className="!mx-0" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center lg:text-left"
            >
              <h3 className="font-heading text-2xl font-bold text-white">
                Mueem Hassan
              </h3>
              <p className="mt-1 text-accent-light">
                React Native & Frontend Developer
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            className="space-y-6"
          >
           <p className="text-lg leading-relaxed text-muted-light">
  React Native Developer specializing in smooth, scalable mobile apps
  for iOS and Android — with solid frontend skills in React.js,
  TypeScript, and Tailwind CSS.
</p>
<p className="text-lg leading-relaxed text-muted-light">
  I own the full app lifecycle: clean code in VS Code and Cursor,
  version control on GitHub, and publishing live to the App Store
  and Google Play. Six of my apps are already live.
</p>

            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="tag-pill cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInLeft}
          className="grid gap-4 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="premium-card shimmer flex flex-col items-center p-6 text-center sm:p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/25">
                <stat.icon className="h-7 w-7 text-accent-light" />
              </div>
              <span className="stat-value">{stat.value}</span>
              <span className="mt-2 text-sm text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
