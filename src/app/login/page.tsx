"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("dev@community.dev");
  const [password, setPassword] = useState("••••••••");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn(email, password);
    if (res.success) {
      setSuccess(true);
    } else {
      setError(res.error || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white">
              Launch<span className="text-indigo-600">Kit</span> Lite
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sign In (Mock Auth)</h2>
          <p className="mt-1 text-sm text-slate-500">Community Edition authentication workflow</p>
        </div>

        {success ? (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3">
            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              Authenticated successfully as {email}!
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              In the Pro Edition, this redirects to the complete SaaS Dashboard with analytics and Stripe billing.
            </p>
            <a
              href="https://shipstack.gumroad.com/l/nextjs-saas-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                Unlock Pro Edition Dashboard ($19) <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-xs text-red-600 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg">
                {error}
              </div>
            )}

            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@company.com"
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full">
              Sign In <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}

        <p className="text-center text-xs text-slate-500">
          Want the full SaaS starter with Stripe & Admin dashboard?{" "}
          <a
            href="https://shipstack.gumroad.com/l/nextjs-saas-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Get Pro on Gumroad
          </a>
        </p>
      </div>
    </div>
  );
}
