"use client";

import { motion } from "framer-motion";
import { Smartphone, ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-visible border-t border-white/10 bg-surface/80 px-4 py-16 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

      <motion.div
        className="mx-auto max-w-6xl overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="premium-card mb-12 flex flex-col items-center justify-between gap-6 p-8 sm:flex-row">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              Ready to build?
            </p>
            <p className="mt-2 font-heading text-2xl font-bold text-white">
              Let&apos;s ship your next app
            </p>
          </div>
          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="btn-primary shimmer shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 ring-1 ring-accent/25">
              <Smartphone className="h-5 w-5 text-accent-light" />
            </span>
            <div>
              <span className="block font-heading text-lg font-bold leading-normal text-white">
                Mueem Hassan
              </span>
              <span className="text-xs text-muted">
                React Native Developer
              </span>
            </div>
          </motion.div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group relative text-sm leading-normal text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </motion.div>
    </footer>
  );
}
