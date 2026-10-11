import React from "react";

const FAQS = [
  {
    q: "Is this Lite version completely free for commercial projects?",
    a: "Yes! Modern SaaS Starter Lite is licensed under the permissive MIT license. You can use it freely in personal and commercial applications.",
  },
  {
    q: "What makes the Pro Edition worth $19?",
    a: "The Pro Edition saves you dozens of hours of repetitive setup by providing an end-to-end Stripe subscription workflow, full admin dashboards with live telemetry, and account settings panels.",
  },
  {
    q: "Can I upgrade my Lite project to Pro later?",
    a: "Absolutely. The architecture is 100% compatible. You can easily copy over the dashboard segments, database repositories, and Stripe helpers from Pro at any time.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common questions about Community Edition
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
