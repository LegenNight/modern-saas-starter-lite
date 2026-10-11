import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge variant="indigo" className="py-1 px-3 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-indigo-600 inline" /> Free & Open-Source Community Edition
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Start building your SaaS with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Next.js 14 & Tailwind CSS
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The clean, zero-bloat foundation for modern web apps. Includes App Router, strict TypeScript, responsive landing sections, and mock authentication.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/login">
            <Button size="lg" className="w-full sm:w-auto text-base">
              Explore Demo App <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <a
            href="https://shipstack.gumroad.com/l/nextjs-saas-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base border-indigo-600/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40">
              Unlock Pro ($19) <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> MIT Open Source
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-indigo-500" /> Next.js 14 App Router
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-purple-500" /> Zero Build Errors
          </div>
        </div>
      </div>
    </section>
  );
}
