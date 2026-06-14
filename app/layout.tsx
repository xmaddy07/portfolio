import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
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
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
