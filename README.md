# ShineOne Estate — Home Inspection Platform

A premium, luxury-branded home-inspection **lead-generation** platform for flat buyers,
builder-floor buyers, property investors, homeowners and NRI buyers across Gurgaon & NCR.

Built with **Next.js 15 (App Router)**, React 18, TypeScript, Tailwind CSS, Framer Motion,
React Hook Form + Zod, Prisma + PostgreSQL, and Nodemailer.

---

## 1. Architecture Overview

```
Browser ──► Next.js 15 (App Router, RSC + Client Components)
              │
              ├─ Home (/)            10 sections, SEO, JSON-LD
              ├─ Book Inspection     RHF + Zod client validation
              ├─ Thank You           post-submit confirmation (noindex)
              ├─ /sitemap.xml        generated route
              ├─ /robots.txt         generated route
              │
              └─ API: POST /api/inspection/submit
                       ├─ Zod server validation
                       ├─ Prisma ──► PostgreSQL (Neon / Railway)
                       └─ Nodemailer ──► admin email (IST timestamp)
```

- **Rendering:** Server Components by default; client components only where interactivity
  or animation is required (`Navbar`, `CommonIssues`, `FAQ`, `BookingForm`, `Reveal`).
- **Validation:** a single Zod schema (`src/lib/validations.ts`) is shared by the browser
  (React Hook Form resolver) and the API route (server-side re-validation).
- **State of truth:** every submission is persisted to PostgreSQL; email is best-effort and
  never blocks lead capture.

## 2. Folder Structure

```
shineoneestate-inspection/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│       ├── migration_lock.toml
│       └── 20250101000000_init/migration.sql
├── public/
│   └── sample-report.pdf            # clearly marked SAMPLE, no real data
├── src/
│   ├── app/
│   │   ├── layout.tsx               # fonts, metadata, JSON-LD, nav/footer/whatsapp
│   │   ├── page.tsx                 # home (10 sections in order)
│   │   ├── globals.css
│   │   ├── book-inspection/page.tsx
│   │   ├── thank-you/page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/inspection/submit/route.ts
│   ├── components/
│   │   ├── home/ (Hero, WhyChooseUs, WhatWeInspect, CommonIssues,
│   │   │          InspectionProcess, IncludedInReport, SampleReport,
│   │   │          Testimonials, FAQ, ContactCTA)
│   │   ├── layout/ (Navbar, Footer)
│   │   ├── booking/ (BookingForm)
│   │   └── shared/ (GlassCard, GoldDivider, SectionHeading, Reveal, WhatsAppButton)
│   ├── lib/ (prisma, email, validations, seo)
│   └── data/ (content.ts)
├── tailwind.config.ts   next.config.mjs   postcss.config.mjs
├── tsconfig.json   .env.example   .gitignore   package.json
```

## 3. Getting Started (local)

```bash
npm install
cp .env.example .env          # fill in real values
npx prisma migrate dev        # creates tables in your dev DB
npm run dev                   # http://localhost:3000
```

> Note: `prisma generate` downloads a query-engine binary on first install. This requires
> outbound access to `binaries.prisma.sh`; it runs automatically via `postinstall`.

## 4. Environment Variables

All secrets come from the environment — **never hardcoded**. See `.env.example`.

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Neon preferred / Railway alternative) |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (465 = secure, 587 = STARTTLS) |
| `SMTP_USER` | SMTP username / from-address |
| `SMTP_PASS` | SMTP password |
| `ADMIN_EMAIL` | Inbox that receives inspection requests (parveen@shineoneestate.co.in) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits only, intl format (e.g. 919876543210) |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, no trailing slash |

## 5. Database

Prisma model `InspectionRequest` → table `inspection_requests`:
`id, name, mobile, email, propertyLocation, preferredDate, preferredTime, createdAt`.
A baseline migration ships in `prisma/migrations`. Apply in production with:

```bash
npx prisma migrate deploy
```

## 6. Email System

`src/lib/email.ts` sends an admin notification on each submission:

- **To:** `ADMIN_EMAIL` (parveen@shineoneestate.co.in)
- **Subject:** `New Inspection Request — {Name} — {Property Location}`
- **Body:** Name, Mobile, Email, Property, Preferred Date, Preferred Time, and the
  submission **timestamp in IST** (`Asia/Kolkata`). HTML is escaped to prevent injection.

## 7. SEO

- Per-page `Metadata` via `buildMetadata()` (title, description, keywords, canonical,
  OpenGraph, Twitter cards, `metadataBase`).
- `LocalBusiness` + `Service` JSON-LD injected in the root layout.
- Generated `sitemap.xml` and `robots.txt`.
- Target keywords are wired into `src/lib/seo.ts`.

## 8. Deployment (Vercel + Neon)

1. Push to a **private** GitHub repo named `shineoneestate-inspection` with `main` + `dev` branches.
2. Create a **Neon** PostgreSQL database; copy the pooled connection string into `DATABASE_URL`.
3. Import the repo into **Vercel**; add all env vars from the table above.
4. Build command `npm run build` (runs `prisma generate` then `next build`).
5. Run `npx prisma migrate deploy` against the production DB (Vercel build step or one-off).
6. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## 9. QA Checklist

- [ ] **Form validation** — each field shows the correct error; past dates rejected; non-Indian mobiles rejected.
- [ ] **Database save** — row appears in `inspection_requests` after submit.
- [ ] **Email delivery** — admin receives correctly-formatted email with IST timestamp.
- [ ] **Responsive design** — verify 360px, 768px, 1024px, 1440px.
- [ ] **Cross-browser** — Chrome, Safari, Firefox, Edge; iOS Safari + Android Chrome.
- [ ] **Accessibility** — keyboard-only nav, visible focus, labels, `aria-live` toast, alt text, contrast.
- [ ] **Performance** — Lighthouse Performance/A11y/Best-Practices > 95, SEO = 100.
- [ ] **WhatsApp** — floating button on every page; opens chat with the prefilled message.
- [ ] **SEO** — metadata, OG/Twitter, canonical, sitemap, robots, JSON-LD validate.
- [ ] **Error handling** — API returns 422 on bad input, 500 on server error; UI shows error toast.
- [ ] **Pricing rule** — no price appears anywhere; only the approved sentence is shown.

## 10. Production Readiness Checklist

- [ ] All env vars set in Vercel (no hardcoded secrets).
- [ ] `prisma migrate deploy` run against production DB.
- [ ] Real OG image at `/public/og-image.jpg` (1200×630).
- [ ] Replace placeholder testimonials with **verified** client feedback.
- [ ] Confirm WhatsApp number and admin email are correct.
- [ ] Security headers verified (set in `next.config.mjs`).
- [ ] Custom domain + HTTPS configured on Vercel.

## 11. Security Review

- **Secrets** are environment-only; `.env` is git-ignored.
- **Input validation** on both client and server (Zod); the server never trusts the client.
- **Email injection** mitigated by HTML-escaping all user values.
- **Security headers** (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`) set globally; `poweredByHeader` disabled.
- **API surface** is a single POST endpoint; `/api/` is disallowed in robots.
- **PII** (name/mobile/email) is stored only in your own PostgreSQL instance.
- Consider adding rate-limiting / CAPTCHA before launch to deter spam submissions.

## 12. Requirement-by-Requirement Compliance

| PRD Requirement | Status | Location |
|---|---|---|
| Next.js 15 App Router, React 18, TS | ✅ | `package.json`, `src/app` |
| Tailwind, Framer Motion, RHF, Zod, Lucide | ✅ | `package.json`, components |
| Prisma + PostgreSQL + Nodemailer | ✅ | `prisma/`, `lib/email.ts` |
| Custom brand colors (shine-*) | ✅ | `tailwind.config.ts` |
| Typography (Cormorant/Playfair/DM Sans/Inter/Montserrat/Raleway), weights 300/400/600/700 | ✅ | `layout.tsx`, `tailwind.config.ts` |
| Glassmorphism, gold dividers, 8px radius, gradients, animations | ✅ | `shared/`, `tailwind.config.ts` |
| Routes `/`, `/book-inspection`, `/thank-you`, `/sitemap.xml`, `/robots.txt` | ✅ | `src/app` |
| Home sections 1–10 in exact order | ✅ | `app/page.tsx` |
| Hero headline/subheadline/CTAs, 70% navy overlay | ✅ | `home/Hero.tsx` |
| Why Choose (4 cards) | ✅ | `home/WhyChooseUs.tsx` |
| What We Inspect (exactly 14) | ✅ | `data/content.ts`, `home/WhatWeInspect.tsx` |
| Common Issues (exactly 6, interactive, imagery) | ✅ | `home/CommonIssues.tsx` |
| Inspection Process (4 steps) | ✅ | `home/InspectionProcess.tsx` |
| Included In Report (6 cards) | ✅ | `home/IncludedInReport.tsx` |
| Sample Report (preview + downloadable PDF, marked SAMPLE, no real data) | ✅ | `home/SampleReport.tsx`, `public/sample-report.pdf` |
| Testimonials (placeholders, marked, never fabricated) | ✅ | `home/Testimonials.tsx` |
| FAQ (6 required questions) | ✅ | `home/FAQ.tsx` |
| Contact CTA banner (Book + WhatsApp) | ✅ | `home/ContactCTA.tsx` |
| Booking fields + validation rules | ✅ | `booking/BookingForm.tsx`, `lib/validations.ts` |
| Pricing rule — never shown; only approved sentence | ✅ | verified by scan |
| Form workflow (submit→validate→POST→validate→save→email→redirect→toast) | ✅ | `BookingForm.tsx`, `api/.../route.ts` |
| Prisma schema + migration | ✅ | `prisma/` |
| Email to admin, subject + fields + IST timestamp | ✅ | `lib/email.ts` |
| SMTP via ENV only | ✅ | `lib/email.ts`, `.env.example` |
| WhatsApp floating button on all pages, bottom-right, green, prefilled msg, ENV number | ✅ | `shared/WhatsAppButton.tsx` |
| SEO: metadata, OG, Twitter, canonical, sitemap, robots, structured data | ✅ | `lib/seo.ts`, layout, routes |
| Target keywords | ✅ | `lib/seo.ts` |
| Accessibility (WCAG AA): keyboard, focus, labels, aria-live, semantic, alt, contrast | ✅ | throughout |
| Image rules: next/image, hero priority, webp/avif, lazy below fold | ✅ | `next.config.mjs`, components |
| Legal: allowed terms used, prohibited terms absent | ✅ | verified by scan |
| Deployment guide, env guide, QA, production, security | ✅ | this README |

### Notes / things to finalise before launch
- Hero & "Common Issues" images use Unsplash URLs for demonstration; swap for licensed,
  owned imagery and add `/public/og-image.jpg`.
- Replace the three placeholder testimonials with verified client feedback only.
- Lighthouse targets depend on final images/hosting; the code is structured to meet them
  (RSC, next/image, font-display swap, minimal client JS).
