# Modern Next.js SaaS Starter (Lite / Community Edition)

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An open-source, minimalist SaaS starter template built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Designed to give founders and indie hackers a clean, unbloated boilerplate with zero unnecessary baggage.

---

## 🚀 Community Edition vs. Pro Edition

Looking for a production-ready setup with Stripe subscriptions, telemetry dashboards, and API key management? Check out the Pro Edition!

| Feature | Community Edition (Free) | Pro Edition ($19 on Gumroad) |
| :--- | :---: | :---: |
| **Next.js 14 App Router & Strict TypeScript** | ✅ Yes | ✅ Yes |
| **Tailwind CSS Design System & Dark Mode** | ✅ Yes | ✅ Yes |
| **Responsive SaaS Landing Page & UI Primitives** | ✅ Yes | ✅ Yes |
| **Basic Mock Authentication (Login / Signup)** | ✅ Yes | ✅ Yes |
| **Full Interactive Admin Dashboard Suite** | ❌ | ✅ Yes |
| **Real-time KPI Metrics & Stat Trend Cards** | ❌ | ✅ Yes |
| **Stripe Billing & Subscription State Logic** | ❌ | ✅ Yes |
| **Tiered Pricing Tables (Starter, Pro, Enterprise)** | ❌ | ✅ Yes |
| **Account Settings & Developer API Key Manager** | ❌ | ✅ Yes |
| **Pluggable DB Repository Pattern (Prisma/Supabase)**| ❌ | ✅ Yes |
| **Vercel & Docker Ready Deployment Configs** | ❌ | ✅ Yes |
| **Commercial License & Free Lifetime Updates** | MIT License | Full Commercial License |

---

<div align="center">

### ⚡ Ready to ship faster?

**[👉 Get the Full Pro SaaS Starter on Gumroad ($19)](https://rishank172.gumroad.com/l/mvwse)**

*Save 80+ hours of repetitive scaffolding. Start building what your customers actually pay for.*

</div>

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: `v18.17.0` or later
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/modern-saas-starter-lite.git
cd modern-saas-starter-lite
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 4. Run Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Architecture

```
modern-saas-starter-lite/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/route.ts      # Community auth endpoint
│   │   │   └── health/route.ts    # Health check endpoint
│   │   ├── login/page.tsx         # Sign in interface
│   │   ├── signup/page.tsx        # Registration interface
│   │   ├── globals.css            # Tailwind theme tokens
│   │   ├── layout.tsx             # Root document layout
│   │   └── page.tsx               # High-converting landing page
│   ├── components/
│   │   ├── landing/               # Hero, Features, ProPromo, FAQ, Navbar, Footer
│   │   └── ui/                    # Reusable Button, Card, Badge, Input primitives
│   └── lib/
│       ├── auth.ts                # Session & mock credentials
│       └── utils.ts               # Class merging & date helpers
├── .env.example                   # Environment configuration template
├── next.config.js                 # Next.js bundler settings
├── tailwind.config.js             # Styling tokens
├── tsconfig.json                  # Strict TypeScript compiler options
├── LICENSE                        # MIT License
└── package.json                   # Dependencies & scripts
```

---

## 📜 License
Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
Feel free to use this template for your own personal and commercial projects!

---

<div align="center">
  <b>Built with ❤️ for indie hackers and modern developers.</b><br/>
  Support the development by checking out <a href="https://rishank172.gumroad.com/l/mvwse"><b>LaunchKit Pro</b></a>!
</div>
