import React from "react";
import { Lock, Layout, Gauge, Palette } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const FEATURES = [
  {
    icon: Lock,
    title: "Basic Mock Auth",
    description: "Mock login & signup flows with session handlers. Easily upgradeable to NextAuth, Supabase, or Clerk.",
  },
  {
    icon: Layout,
    title: "Next.js 14 App Router",
    description: "Clean folder hierarchy, layout nesting, and modern server component patterns ready for production.",
  },
  {
    icon: Gauge,
    title: "Lighthouse 100 Ready",
    description: "Lean bundles, zero unnecessary dependencies, and optimal font rendering for lightning performance.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS Design System",
    description: "Curated typography, customizable design tokens, and responsive UI components with dark mode support.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400">
            Community Core Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The foundation every modern web app needs
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Free forever under the permissive MIT license. Build without artificial limits.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} className="hover:border-indigo-500/50 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
