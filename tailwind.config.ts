import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030308",
        surface: "#0C0C14",
        card: "#111118",
        accent: "#7C6CFF",
        "accent-light": "#A599FF",
        "accent-gold": "#C9A962",
        muted: "#9494A8",
        "muted-light": "#B8B8C8",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(124, 108, 255, 0.1) 0%, rgba(17, 17, 24, 0.85) 100%)",
        "hero-gradient":
          "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(124, 108, 255, 0.22) 0%, transparent 55%)",
        "hero-spotlight":
          "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(165, 153, 255, 0.12) 0%, transparent 70%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(124, 108, 255, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201, 169, 98, 0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(99, 102, 241, 0.1) 0px, transparent 50%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "card-shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 108, 255, 0.25)",
        "glow-lg": "0 0 80px rgba(124, 108, 255, 0.35)",
        "glow-gold": "0 0 30px rgba(201, 169, 98, 0.15)",
        "card-hover":
          "0 30px 60px rgba(0, 0, 0, 0.55), 0 0 50px rgba(124, 108, 255, 0.18)",
        premium:
          "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.08)",
        "nav-float":
          "0 8px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        aurora: "aurora 20s ease infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(240deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
