export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  liveUrl?: string;
  featured: boolean;
  inDevelopment?: boolean;
}

/**
 * HOW TO ADD YOUR OWN PROJECTS:
 * 1. Add a new object to the `projects` array below.
 * 2. Place your app screenshot at /public/projects/yourapp.png
 * 3. Set `image` to "/projects/yourapp.png"
 * 4. The site will automatically display it — no other changes needed.
 */
export const projects: Project[] = [
  {
    id: 8,
    title: "Exylon Guest",
    description:
      "A real-time, multi-guest dining web app for restaurants. Built with React and Socket.IO, it lets tablemates browse menus, share dishes, and track orders together. Features include WebAuthn passwordless login, NFC table onboarding, swipe-based UI, live kitchen tracking, and bilingual support (EN/ES).",
    image: "/projects/exylon-guest.svg",
    tags: [
      "React",
      "Redux Toolkit",
      "Socket.IO",
      "WebAuthn",
      "Framer Motion",
    ],
    liveUrl: "https://guest.exylon.app/",
    featured: false,
  },
  {
    id: 7,
    title: "FireRelay",
    description:
      "Mobile app for first responders and dispatch teams to monitor county-level emergency radio traffic in real time. Features live incident feeds, audio playback, severity-based keyword alerts, push notifications, and an admin panel for users, keywords, and data senders. Built with React Native, Redux, Socket.IO, and Firebase.",
    image: "/projects/firerelay.svg",
    tags: [
      "React Native",
      "TypeScript",
      "Socket.IO",
      "Firebase",
      "Push Notifications",
    ],
    featured: false,
  },
  {
    id: 1,
    title: "Okey Doke!",
    description:
      "A custom voice-based AI assistant app that lets users create their own Q&A pairs. When the same question is asked, the assistant responds instantly in a Siri/Alexa-like voice — showcasing AI, TTS, and voice-driven experiences.",
    image: "/projects/okey-doke.png",
    tags: ["React Native", "AI", "Text-to-Speech", "Voice Recognition"],
    appStoreUrl: "https://apps.apple.com/pk/app/okey-doke/id6745034184",
    featured: true,
  },
  {
    id: 2,
    title: "NiceCity",
    description:
      "A travel & rental app for bikes, e-bikes, and scooters in Nice, France. Features guided routes, audio tours in English and French, maps integration, and cultural stories for an immersive exploration experience.",
    image: "/projects/nicecity.png",
    tags: ["React Native", "Maps", "Geolocation", "Audio Guide", "i18n"],
    appStoreUrl: "https://apps.apple.com/pk/app/nice-city-guide/id6749684779",
    featured: true,
  },
  {
    id: 3,
    title: "Remember Me Family Tree",
    description:
      "A family networking & legacy app that helps families build trees, share photos, videos, and documents, and preserve memories across generations — with event reminders and a referral reward system.",
    image: "/projects/remember-me.png",
    tags: ["React Native", "Firebase", "Family Tree", "Media Sharing"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.rememberme.familytree",
    featured: true,
  },
  {
    id: 4,
    title: "Redidial.ai",
    description:
      "An AI-powered lead generation and engagement platform for dealerships and service-based businesses. Features real-time lead management, CRM dashboards, multi-channel AI responses, and intelligent follow-ups.",
    image: "/projects/redidial.png",
    tags: ["React Native", "AI", "CRM", "Lead Management", "REST APIs"],
    appStoreUrl: "https://apps.apple.com/pk/app/redidial-ai/id6753592103",
    liveUrl: "https://redidial.ai",
    featured: true,
  },
  {
    id: 5,
    title: "Balitech",
    description:
      "A workforce management mobile app for BaliTech Pvt. Ltd. Includes employee onboarding with multi-step forms, profile management, role-based access, and secure authentication for HR operations.",
    image: "/projects/balitech.png",
    tags: ["React Native", "HR Management", "Multi-step Forms", "Authentication"],
    appStoreUrl: "https://apps.apple.com/pk/app/balitech-icu/id6753283186",
    liveUrl: "https://balitech.io",
    featured: true,
  },
  {
    id: 6,
    title: "Builder Bricks",
    description:
      "A construction project management app for tracking expenses, monitoring project progress, and managing multiple sites. Features financial dashboards, progress tracking, and multi-project summaries.",
    image: "/projects/builder-bricks.png",
    tags: ["React Native", "Dashboard", "Charts", "Project Management"],
    appStoreUrl: "https://apps.apple.com/pk/app/builderbricks/id6753346693",
    featured: false,
  },
];
