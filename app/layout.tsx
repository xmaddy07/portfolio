import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mueem Hassan | React Native & Frontend Developer",
  description:
    "React Native & React developer — builds and publishes apps to the App Store & Play Store. GitHub, Cursor AI, VS Code, Antigravity.",
  keywords: [
    "React Native",
    "React",
    "App Store",
    "Play Store",
    "GitHub",
    "Cursor AI",
    "VS Code",
    "Antigravity",
    "Mueem Hassan",
  ],
  authors: [{ name: "Mueem Hassan" }],
  openGraph: {
    title: "Mueem Hassan | React Native & Frontend Developer",
    description:
      "Building cross-platform mobile apps and React web experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
