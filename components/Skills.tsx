"use client";

import { motion } from "framer-motion";
import { skillCategories, techIcons } from "@/data/skills";
import SectionHeader from "./SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-divider" />
      <div className="section-glow">
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          description="Mobile and web technologies I use to build polished apps and interfaces."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech}
              variants={fadeUp}
              custom={index}
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 0 25px rgba(108,99,255,0.2)",
              }}
              className="glass-card cursor-default px-5 py-3 text-sm font-medium text-white"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="premium-card p-7"
            >
              <h3 className="mb-6 flex items-center gap-3 font-heading text-lg font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2.5 flex justify-between text-sm">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-accent-light">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent-light to-violet-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: catIndex * 0.1 + skillIndex * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-white/20"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: catIndex * 0.1 + skillIndex * 0.08,
                        }}
                        style={{ filter: "blur(4px)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
