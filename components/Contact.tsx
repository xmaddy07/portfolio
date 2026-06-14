"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { slideInLeft, slideInRight } from "@/lib/animations";

const socialLinks = [
  { icon: Github, href: "https://github.com/xmaddy07", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mueem-hassan",
    label: "LinkedIn",
  },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/mueem-hassan";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-divider" />
      <div className="section-glow">
        <div className="absolute right-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/12 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build Something Together"
          description="Have a project to build and publish? From development to App Store & Play Store launch — reach out on LinkedIn."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInLeft}
            onSubmit={handleSubmit}
            className="premium-card space-y-5 p-5 sm:space-y-6 sm:p-8"
          >
            {[
              {
                id: "name",
                label: "Name",
                type: "text" as const,
                placeholder: "Your name",
                value: formState.name,
                onChange: (v: string) =>
                  setFormState({ ...formState, name: v }),
              },
              {
                id: "email",
                label: "Email",
                type: "email" as const,
                placeholder: "your@email.com",
                value: formState.email,
                onChange: (v: string) =>
                  setFormState({ ...formState, email: v }),
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-2 block text-sm font-medium text-white"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  required
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="input-premium"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="input-premium resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary shimmer w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-4 w-4" />
              {submitted ? "Opening LinkedIn..." : "Connect on LinkedIn"}
            </motion.button>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="premium-card p-5 sm:p-8">
              <h3 className="mb-4 font-heading text-xl font-bold text-white">
                Connect on LinkedIn
              </h3>
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-accent transition-colors hover:text-accent-light"
                whileHover={{ x: 4 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                  <Linkedin className="h-5 w-5" />
                </div>
                linkedin.com/in/mueem-hassan
              </motion.a>
              <p className="mt-5 text-sm leading-relaxed text-muted">
              Shipping cross-platform iOS & Android apps from concept to App Store — clean code, modern AI workflows, and a track record that speaks for itself.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-lg font-bold text-white">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-muted backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 30px rgba(108,99,255,0.2)",
                    }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
