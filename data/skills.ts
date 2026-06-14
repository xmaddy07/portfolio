export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Mobile",
    skills: [
      { name: "React Native", level: 92 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "iOS Development", level: 85 },
      { name: "Android Development", level: 85 },
    ],
  },
  {
    name: "Frontend (React)",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Expo", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "App Publishing",
    skills: [
      { name: "Apple App Store", level: 90 },
      { name: "Google Play Store", level: 88 },
      { name: "EAS Build & Submit", level: 85 },
      { name: "App Store Guidelines", level: 87 },
    ],
  },
  {
    name: "State Management",
    skills: [
      { name: "Redux Toolkit", level: 90 },
      { name: "Context API", level: 88 },
      { name: "Zustand", level: 80 },
      { name: "React Query", level: 82 },
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "AWS", level: 82 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    name: "Tools, GitHub & AI",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Cursor AI", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Antigravity", level: 85 },
    ],
  },
];

export const techIcons = [
  "React Native",
  "React.js",
  "Expo",
  "App Store",
  "Play Store",
  "GitHub",
  "Cursor AI",
  "Firebase",
];

export const workflowItems = [
  {
    title: "App Store Publishing",
    description:
      "End-to-end iOS deployment — builds, metadata, screenshots, review submissions, and updates on the Apple App Store.",
    tags: ["iOS", "App Store Connect", "EAS"],
  },
  {
    title: "Play Store Publishing",
    description:
      "Full Android release pipeline — signed APK/AAB builds, Play Console setup, store listings, and production rollouts.",
    tags: ["Android", "Play Console", "EAS"],
  },
  {
    title: "GitHub Workflow",
    description:
      "Clean Git history, branching strategies, pull requests, and collaborative code reviews for reliable team delivery.",
    tags: ["Git", "GitHub", "CI/CD"],
  },
  {
    title: "AI-Powered Development",
    description:
      "Faster, smarter builds using Cursor, VS Code, and Antigravity — AI-assisted coding, debugging, and shipping.",
    tags: ["Cursor", "VS Code", "Antigravity"],
  },
];
