import React from "react";
import { Check, X, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const COMPARISON = [
  { feature: "Next.js 14 App Router & TypeScript", lite: true, pro: true },
  { feature: "Tailwind CSS Design System & Dark Mode", lite: true, pro: true },
  { feature: "Mock Authentication (Login / Signup)", lite: true, pro: true },
  { feature: "Clean Landing Page & Reusable UI Kit", lite: true, pro: true },
  { feature: "Interactive Admin Dashboard Suite", lite: false, pro: true },
  { feature: "Real-time KPI Analytics & Stat Cards", lite: false, pro: true },
  { feature: "Stripe Subscriptions & Billing Portal Logic", lite: false, pro: true },
  { feature: "Account Settings & Developer API Key Manager", lite: false, pro: true },
  { feature: "Pluggable DB Repository Pattern (Prisma / Supabase)", lite: false, pro: true },
  { feature: "Priority Email & Discord Support", lite: false, pro: true },
];

export function ProPromo() {
  return (
    <section id="comparison" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Upgrade Option
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Community vs. Pro Edition
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Start with the free open-source core, or save 80+ engineering hours with the complete SaaS production suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Community Edition */}
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Community Edition</CardTitle>
                  <Badge variant="default">Free & Open Source</Badge>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
                  <span className="text-xs text-slate-500 ml-1">/ forever</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Ideal for indie developers, weekend hacks, and personal portfolios.
                </p>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    {item.lite ? (
                      <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mr-2 flex-shrink-0" />
                    )}
                    <span className={item.lite ? "text-slate-700 dark:text-slate-300 font-medium" : "text-slate-400 line-through"}>
                      {item.feature}
                    </span>
                  </div>
                ))}
              </CardContent>
            </div>
            <CardFooter className="pt-6">
              <Button variant="outline" className="w-full" disabled>
                Current Repository
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Edition */}
          <Card className="flex flex-col justify-between border-indigo-600 ring-2 ring-indigo-600 shadow-xl relative bg-gradient-to-b from-indigo-50/20 to-transparent dark:from-indigo-950/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="indigo" className="bg-indigo-600 text-white font-semibold shadow">
                Save 80+ Hours of Setup
              </Badge>
            </div>

            <div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-indigo-600 dark:text-indigo-400">Pro Edition</CardTitle>
                  <Badge variant="indigo">Commercial License</Badge>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$19</span>
                  <span className="text-xs text-slate-500 ml-1">/ one-time payment</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Everything you need to launch a monetized SaaS product this weekend.
                </p>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </CardContent>
            </div>

            <CardFooter className="pt-6">
              <a
                href="https://rishank172.gumroad.com/l/mvwse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-md">
                  Get Pro on Gumroad ($19) <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
