# Arctura Analytics – arctura-site

Modern, fast marketing site built with Next.js 15 (App Router, TypeScript), Tailwind CSS, shadcn/ui, Framer Motion, MDX, and Playwright/Vitest tests. Source lives under `src/`.

## Tech

- Next.js 15 (App Router, RSC) under `src/app`
- TypeScript (strict), ESLint, Prettier
- Tailwind CSS with CSS variables and typography plugin
- shadcn/ui primitives: Button, Card, Badge
- Framer Motion (reduced-motion aware)
- Long-form storytelling layouts with Framer Motion and Tailwind gradients
- Forms: Zod + React Hook Form + API routes
- Analytics: Plausible/Umami/Vercel Analytics (opt-in via env)
- SEO: metadata, robots, sitemap, dynamic OG image API
- Tests: Playwright (e2e) + Vitest (unit)

## Getting Started

1. Install deps: `npm ci`
2. Dev: `npm run dev` ? http://localhost:3000
3. Lint/Format: `npm run lint` / `npm run format`
4. Build: `npm run build` (then `npm start`). Postbuild generates `public/sitemap.xml` and `public/rss.xml`.
5. Tests: `npm run test:unit` and (in another terminal) `npm run test:e2e`

## Environment

Copy `.env.example` to `.env.local` and set:
- `SITE_URL=https://yourdomain.com`
- `RESEND_API_KEY=...` (email provider, optional)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_UMAMI_SRC` (optional)
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` (optional)

## Structure

- `src/app/` – routes, layouts, API handlers
- `src/components/` – UI primitives and layout
- `src/lib/` – utilities, SEO/theme helpers, and validation
- `src/styles/` – global styles
- `content/` – structured data for hiring and programme highlights
- `public/` – static assets, generated sitemap/rss
- `scripts/` – sitemap/RSS generators

## Theming

- Dark is default. Apply `.theme-light` on `<html>` or a wrapper to switch to light.
- Accent colors come from CSS variables `--accent-start|mid|end`.

## Deployment (Vercel)

- Install the Vercel GitHub App and import the repo. Preview deployments will be created for every PR.
- `vercel.json` sets the preferred region and runs `/api/og` on the Edge runtime.
- Set `SITE_URL` in Project Settings ? Environment Variables. Used by sitemap/RSS and SEO helpers.
- To enable preview comments on PRs, ensure “Deploy Hooks & Comments” are enabled for the GitHub integration.

### Custom domain

1. Add your domain in Vercel ? Project ? Domains.
2. Follow the DNS instructions (CNAME or A/AAAA records).
3. Once verified, set `SITE_URL=https://yourdomain.com` and redeploy.

### Analytics

- Plausible: set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
- Umami: set `NEXT_PUBLIC_UMAMI_SRC`.
- Vercel Analytics: set `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` and enable Analytics in the project.

### Package manager and lockfile

- The repo includes `package-lock.json`. If you prefer pnpm, run `pnpm import` to generate `pnpm-lock.yaml` and use pnpm.