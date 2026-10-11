import React from "react";
import Link from "next/link";
import { Zap, Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              Launch<span className="text-indigo-600">Kit</span> Lite
            </span>
            <span className="text-xs text-slate-500 ml-2">MIT Licensed Open Source Project.</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <Link href="#features" className="hover:text-indigo-600">Features</Link>
            <Link href="#comparison" className="hover:text-indigo-600">Lite vs Pro</Link>
            <a
              href="https://rishank172.gumroad.com/l/mvwse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Get Pro ($19)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
