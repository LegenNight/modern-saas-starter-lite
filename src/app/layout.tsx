import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit Lite - Open Source Next.js 14 SaaS Boilerplate",
  description:
    "Open-source Next.js 14 App Router, TypeScript, and Tailwind CSS starter kit. Build modern web apps with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen font-sans flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
