"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Smartphone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
        scrolled || isOpen ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-5 ${
          scrolled || isOpen ? "nav-glass" : "py-1"
        }`}
      >
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-3 font-heading text-lg font-bold text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/10 ring-1 ring-accent/30 transition-all group-hover:shadow-glow">
            <Smartphone className="h-4 w-4 text-accent-light" />
          </span>
          <span className="hidden sm:inline">Mueem Hassan</span>
          <span className="sm:hidden">MH</span>
        </motion.a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-300 group-hover:w-3/4" />
              </button>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
          >
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary ml-3 !px-5 !py-2.5 text-xs"
            >
              Hire Me
            </button>
          </motion.li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-50 rounded-xl border p-2.5 text-white transition-all md:hidden ${
            isOpen
              ? "border-accent/40 bg-accent/15 shadow-glow"
              : "border-white/10 bg-white/[0.03] hover:border-accent/30 hover:bg-white/5"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden rounded-3xl border border-white/10 bg-background/95 shadow-card-hover backdrop-blur-2xl md:hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-[60px]" />

              <ul className="relative flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-base font-medium text-muted transition-all hover:bg-accent/10 hover:text-white active:scale-[0.98]"
                    >
                      {link.label}
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/40 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-3"
                >
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="btn-primary shimmer w-full !py-4 text-sm"
                  >
                    Hire Me
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
