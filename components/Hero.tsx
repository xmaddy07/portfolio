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
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-hero-spotlight" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px] animate-glow-pulse sm:h-[700px] sm:w-[700px] sm:blur-[180px]" />

      {/* Mobile decorative orbs */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-32 w-32 rounded-full bg-accent/20 blur-[60px] sm:hidden" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[25%] h-28 w-28 rounded-full bg-violet-500/15 blur-[50px] sm:hidden" />

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
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={fadeUp} custom={0} className="mb-6 sm:mb-8">
            <span className="badge-accent text-xs sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent-light sm:h-4 sm:w-4" />
              React Native & React Developer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-[2.75rem] font-bold leading-[1.08] tracking-tight min-[400px]:text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">Mueem</span>
            <br />
            <span className="text-white">Hassan</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-light sm:mt-8 sm:text-lg lg:mx-0 lg:text-xl"
          >
            Crafting premium mobile apps and polished React interfaces —
            published on the App Store & Play Store, powered by modern AI
            workflows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 grid grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3 sm:max-w-md lg:max-w-none"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl px-2 py-3.5 text-center sm:px-4 sm:py-4"
              >
                <span className="stat-value text-xl sm:text-2xl lg:text-3xl">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-wider text-muted sm:mt-1 sm:text-[10px] lg:text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:mt-8 sm:gap-2 lg:justify-start"
          >
            {["App Store", "Play Store", "GitHub", "Cursor AI"].map((item) => (
              <span key={item} className="badge-premium !px-3 !py-1 !text-[10px] sm:!px-4 sm:!py-1.5 sm:!text-xs">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start"
          >
            <motion.button
              onClick={() => scrollTo("#projects")}
              className="btn-primary shimmer w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="btn-secondary w-full sm:w-auto"
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
          <div className="relative h-64 w-64 min-[400px]:h-72 min-[400px]:w-72 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
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
              className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-accent/25 bg-background/90 px-4 py-2 text-xs font-semibold text-white shadow-glow backdrop-blur-xl sm:px-6 sm:py-2.5 sm:text-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Store className="h-4 w-4 text-accent-light" />
              6+ Apps on App Store
            </motion.div>

            <motion.div
              className="absolute -right-1 top-6 rounded-xl border border-white/10 bg-background/80 px-3 py-2 text-[10px] font-medium text-muted-light shadow-premium backdrop-blur-xl sm:-right-2 sm:top-8 sm:px-4 sm:py-2.5 sm:text-xs"
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
