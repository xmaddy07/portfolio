# React Native Developer Portfolio

A modern, professional portfolio website for a React Native developer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll & entrance animations)
- **next/image** (optimized images)
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts & metadata
  page.tsx            # Main page assembling all sections
  globals.css         # Global styles & Tailwind utilities
/components
  Navbar.tsx          # Sticky nav with mobile menu
  Hero.tsx            # Hero section with animated background
  About.tsx           # Bio & stats
  Projects.tsx        # Project grid with filter tabs
  ProjectCard.tsx     # Individual project card
  Skills.tsx          # Categorized skills with progress bars
  Contact.tsx         # Contact form (mailto)
  Footer.tsx          # Footer with quick links
/data
  projects.ts         # ← Add your projects here
  skills.ts           # Skills data
/public
  /projects           # ← Put your project screenshots here
```

## Customization

### Add Your Own Projects

1. Open `/data/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: 7,
  title: "My New App",
  description: "What the app does and the problem it solves.",
  image: "/projects/mynewapp.png",
  tags: ["React Native", "Expo", "Firebase"],
  githubUrl: "https://github.com/yourusername/mynewapp",
  playStoreUrl: "https://play.google.com/...",
  appStoreUrl: "https://apps.apple.com/...",
  featured: true,
}
```

3. Place your screenshot at `/public/projects/mynewapp.png`
4. The site auto-displays it — no other changes needed.

### Update Personal Info

- **Name & branding**: Edit `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, and `app/layout.tsx` metadata
- **Social links**: Update URLs in `Hero.tsx` and `Contact.tsx`
- **Email**: Change `alex.morgan@example.com` in `Contact.tsx`
- **Skills**: Edit `/data/skills.ts`
- **About stats**: Edit the `stats` array in `About.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Every push to `main` triggers an automatic redeploy

### Environment Variables

No environment variables are required for the default setup. The contact form uses `mailto:` links. To integrate EmailJS instead, add your keys to `.env.local` and update `Contact.tsx`.

## Design

- **Theme**: Dark (`#0A0A0F` background, `#141420` cards)
- **Accent**: Purple (`#6C63FF`)
- **Fonts**: Inter (body), Syne (headings)
- **Features**: Glassmorphism cards, smooth scroll, Framer Motion animations, fully responsive

## License

MIT
