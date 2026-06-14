"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles, Store } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socialLinks = [
  { icon: Github, href: "https://github.com/xmaddy07", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mueem-hassan",
    label: "LinkedIn",
  },
];

const highlights = [
  { value: "6+", label: "Live Apps" },
  { value: "3+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
];

const phoneOutlines = [
  { x: "6%", y: "16%", rotate: -14, delay: 0 },
  { x: "82%", y: "10%", rotate: 16, delay: 0.8 },
  { x: "90%", y: "55%", rotate: -6, delay: 1.4 },
  { x: "2%", y: "58%", rotate: 20, delay: 2 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-hero-spotlight" />
      <div className="absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent/12 blur-[180px] animate-glow-pulse" />

      {phoneOutlines.map((phone, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden h-40 w-[5rem] rounded-[1.5rem] border border-accent/20 bg-gradient-to-b from-accent/10 to-transparent shadow-glow sm:block lg:h-48 lg:w-[5.5rem]"
          style={{ left: phone.x, top: phone.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.15, 0.4, 0.15],
            y: [0, -24, 0],
            rotate: phone.rotate,
          }}
          transition={{
            duration: 8,
            delay: phone.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-1/2 top-3.5 h-1 w-8 -translate-x-1/2 rounded-full bg-accent/50" />
          <div className="absolute bottom-5 left-1/2 h-9 w-9 -translate-x-1/2 rounded-xl bg-accent/15 ring-1 ring-accent/25" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <span className="badge-accent">
              <Sparkles className="h-4 w-4 text-accent-light" />
              React Native & React Developer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Mueem</span>
            <br />
            <span className="text-white">Hassan</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted-light sm:text-xl lg:mx-0"
          >
            Crafting premium mobile apps and polished React interfaces —
            published on the App Store & Play Store, powered by modern AI
            workflows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md lg:max-w-none"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl px-3 py-4 text-center sm:px-4"
              >
                <span className="stat-value text-2xl sm:text-3xl">
                  {item.value}
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {["App Store", "Play Store", "GitHub", "Cursor AI"].map((item) => (
              <span key={item} className="badge-premium">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.button
              onClick={() => scrollTo("#projects")}
              className="btn-primary shimmer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={6}
            className="mt-12 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-muted backdrop-blur-sm transition-all hover:border-accent/30 hover:text-accent-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 35px rgba(124,108,255,0.28)",
                }}
              >
                <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={2}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
            <motion.div
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent/30 via-violet-500/20 to-accent-gold/20 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-[3px] rounded-full opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, #7C6CFF, #A599FF, #C9A962, #7C6CFF)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-full p-[3px]">
              <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/25">
                <Image
                  src="/profile.png"
                  alt="Mueem Hassan — React Native Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 352px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-accent/25 bg-background/90 px-6 py-2.5 text-sm font-semibold text-white shadow-glow backdrop-blur-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Store className="h-4 w-4 text-accent-light" />
              6+ Apps on App Store
            </motion.div>

            <motion.div
              className="absolute -right-2 top-8 hidden rounded-xl border border-white/10 bg-background/80 px-4 py-2.5 text-xs font-medium text-muted-light shadow-premium backdrop-blur-xl sm:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-accent-light">●</span> Available for hire
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
