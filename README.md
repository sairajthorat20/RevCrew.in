# RevCrew Website 2.0

> Official web platform for **RevCrew** — Vishwakarma Institute of Technology (VIT Pune) Motorcycle Technology and Innovation Club.

RevCrew is dedicated to motorcycle engineering, custom bike fabrication, powertrain and chassis innovation, competitive technical events, and riding experiences.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Code Quality**: [ESLint](https://eslint.org/) (Flat Config)
- **Platform**: [Vercel](https://vercel.com/) (Production Hosting & CI/CD)

---

## 📁 Project Structure

```text
revcrew-website/
├── public/                  # Static assets
│   ├── images/
│   │   ├── branding/        # Club logos, emblems, identity
│   │   ├── engineering/     # CAD models, fabrication, engine builds
│   │   ├── trips/           # Expedition & ride photography
│   │   ├── events/          # Workshop, induction, expo photos
│   │   ├── team/            # Core team and members portraits
│   │   └── sponsors/        # Partner and commercial sponsor logos
│   └── videos/              # Teasers, build timelapses, reels
├── src/
│   ├── app/                 # Next.js App Router routes & pages
│   │   ├── globals.css      # Tailwind v4 theme & global styles
│   │   ├── layout.tsx       # Root layout with RevCrew SEO metadata
│   │   ├── not-found.tsx    # Branded 404 handler
│   │   └── page.tsx         # Home view (Phase 1 Foundation)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, layout wrappers
│   │   └── ui/              # Reusable UI primitives
│   ├── config/              # Site and club configuration constants
│   ├── data/                # Static data catalogs and club records
│   ├── lib/                 # Shared utilities and helpers
│   └── types/               # TypeScript interfaces and type definitions
├── .env.example             # Environment variable template
├── .gitignore               # Git ignore rules
├── next.config.ts           # Next.js configuration
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript strict configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or later (tested on `v24.x`)
- **npm**: `v10.x` or later (tested on `v11.x`)

### 1. Install Dependencies

```bash
npm install
```

*(On Windows PowerShell, use `npm.cmd install` if script execution policies are restricted).*

### 2. Configure Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint analysis |
| `npm run typecheck` | Validates TypeScript types across the project without emitting files |

---

## 🌐 Deployment (Vercel)

The repository is configured for zero-configuration continuous deployment on Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 20.x+
- **Framework Preset**: Next.js (automatically detected)

---

## 📄 License & Attribution

Developed by the RevCrew Technical & Web Development Team at Vishwakarma Institute of Technology, Pune.
All club branding, media, and proprietary designs belong to RevCrew VIT Pune.
