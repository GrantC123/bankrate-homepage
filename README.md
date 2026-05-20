# Bankrate Homepage — Next.js

Built with **Next.js 16**, **React 19**, **Tailwind v4**, and the **Ledger design system**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Install Ledger components

Once you have network access to `ledger.bankrate.com`, install the theme first (required),
then any components you need:

```bash
# 1. Theme — writes all CSS variables into globals.css
npx shadcn@latest add @bankrate-ledger/theme

# 2. Individual components
npx shadcn@latest add @bankrate-ledger/button
npx shadcn@latest add @bankrate-ledger/top-nav
npx shadcn@latest add @bankrate-ledger/rate-table

# 3. Or multiple at once
npx shadcn@latest add @bankrate-ledger/button @bankrate-ledger/card @bankrate-ledger/dialog -y
```

### After installing `@bankrate-ledger/button`

Replace the placeholder import in any component:

```diff
- import { Button } from "@/components/ui/button"
+ import { Button } from "@/components/ui/button"   // now points to Ledger
```

The file at `components/ui/button.tsx` will be overwritten by the Ledger version.
All call-sites use the same `variant` / `size` API so **no other changes are needed**.

### After installing `@bankrate-ledger/theme`

The `@bankrate-ledger/theme` installer will write its own `@theme` block and CSS variables
into `app/globals.css`. The placeholder tokens already in that file will be superseded —
you can delete the `/* Ledger Rebrand Design Tokens */` block at that point.

---

## Project structure

```
app/
  globals.css          ← Ledger tokens (placeholder until theme install)
  layout.tsx           ← next/font for RecifeText + Instrument Sans
  page.tsx             ← Assembles all sections

components/
  ui/
    button.tsx         ← Placeholder Button (swap with @bankrate-ledger/button)
  sections/
    nav.tsx
    hero.tsx
    proof-banner.tsx
    identity-statement.tsx
    audience-pathing.tsx
    member-experience.tsx
    rates-and-calculator.tsx
    editorial.tsx
    misc-sections.tsx  ← ExpertTeam, Products, B2BEndcap, Footer

public/
  fonts/
    RecifeText-SemiBold.ttf

lib/
  utils.ts             ← cn() helper

components.json        ← shadcn config with @bankrate-ledger registry
```

---

## Compliance notes (from brief)

All statistical claims in copy require footnotes + source citations at launch:
- 9 out of 10 / $3,890/yr — Bankrate Research, HHT 2026
- 89% / $4,167/yr — Bankrate Research, HHT 2026, HMDA data
- 79% — Bankrate Research, HHT 2026, HMDA data
- 99.7% / $73k — Bankrate internal 2025 data; methodology page required
- "Under 0.5%" / "10×" savings claim — verify against FDIC national avg at launch

NMLS IDs are hardcoded in `<Footer />` per requirement:
`Bankrate, LLC NMLS ID# 1427381 · BR Tech Services, Inc. NMLS ID# 1743443`
