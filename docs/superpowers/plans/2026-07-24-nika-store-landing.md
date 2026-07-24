# NiKa Store Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, SEO-first single-page Next.js landing for the upcoming opening of NiKa Store in Sambuceto.

**Architecture:** Use Next.js App Router with a statically prerendered server page and small client islands for the sticky header, mobile menu, and reveal-on-scroll behavior. Keep store content and outbound links in one typed content module, while focused presentational components render semantic sections from that data.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules/global CSS, `next/font`, `next/image`, Vitest, Testing Library, Playwright, Vercel.

## Global Constraints

- The site is a single-page showcase, not an e-commerce application.
- The shop is “prossima apertura” with no opening date and no countdown.
- Audience: adult women and men, approximately 20–55; no children’s clothing.
- Positioning: casual, everyday, affordable clothing.
- Production deployment target: Vercel.
- WhatsApp: `https://wa.me/393495627208`.
- TikTok: `https://www.tiktok.com/@nikastore.sambuceto`.
- Address: Corso Italia, 121, 66020 Sambuceto (CH).
- Coordinates: 42.4220999, 14.1876715.
- No analytics, non-technical cookies, CMS, backend, contact form, or embedded map.
- Animation uses CSS and Intersection Observer only and must honor `prefers-reduced-motion`.
- Stock photography is indicative and must be replaceable through centralized content.
- Core content must be present in prerendered HTML.

---

## Planned File Structure

```text
app/
  globals.css                 Global tokens, typography, animation, responsive rules
  icon.tsx                    Generated favicon based on the NiKa mark
  layout.tsx                  Fonts, global metadata, viewport, root layout
  manifest.ts                 Web app manifest
  page.tsx                    Semantic composition and JSON-LD
  robots.ts                   Crawler rules
  sitemap.ts                  Single canonical URL entry
components/
  Brand.tsx                   Desktop/mobile brand treatment
  Header.tsx                  Sticky header and accessible mobile navigation
  Hero.tsx                    Hero content, image, and primary calls to action
  Icon.tsx                    Small inline SVG icon set
  Reveal.tsx                  Intersection Observer enhancement
  StoreSections.tsx           Manifesto, audience, benefits, opening, location, footer
  WhatsAppButton.tsx          Floating WhatsApp action
data/
  site.ts                     Typed canonical store content and image references
lib/
  jsonLd.ts                   ClothingStore structured-data builder
public/
  images/logo-original.jpeg   User-provided logo
  images/store-exterior.jpeg  User-provided storefront
  images/editorial-*.jpg      Replaceable licensed stock photography
tests/
  setup.ts                    DOM test environment
  site-content.test.ts        Content and outbound-link invariants
  json-ld.test.ts             Structured-data invariants
  header.test.tsx             Navigation behavior
  page.test.tsx               Critical content and semantics
e2e/
  landing.spec.ts             Desktop/mobile navigation and reduced motion
```

### Task 1: Scaffold the Next.js and test runtime

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`
- Create: `tests/smoke.test.ts`

**Interfaces:**
- Produces: npm scripts `dev`, `build`, `start`, `lint`, `test`, `test:run`, and `test:e2e`.
- Produces: `@/*` path alias mapped to the project root.

- [ ] **Step 1: Initialize the package and install runtime dependencies**

Run:

```bash
npm init -y
npm install next@latest react@latest react-dom@latest
npm install -D typescript@latest @types/node@latest @types/react@latest @types/react-dom@latest eslint@latest eslint-config-next@latest vitest@latest jsdom@latest @vitejs/plugin-react@latest @testing-library/react@latest @testing-library/jest-dom@latest @testing-library/user-event@latest @playwright/test@latest
```

Expected: dependencies install successfully and `package-lock.json` is created.

- [ ] **Step 2: Configure scripts and framework files**

Set `package.json` scripts to:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "test": "vitest",
  "test:run": "vitest run",
  "test:e2e": "playwright test"
}
```

Use strict TypeScript, the `@/*` alias, React plugin for Vitest, `jsdom`, and `tests/setup.ts` importing `@testing-library/jest-dom/vitest`. Set `images.formats` to AVIF and WebP in `next.config.ts`.

- [ ] **Step 3: Verify the test runner starts**

Create:

```ts
import { describe, expect, it } from "vitest";

describe("test runtime", () => {
  it("runs TypeScript tests", () => {
    expect(true).toBe(true);
  });
});
```

Run: `npm run test:run`

Expected: one test passes.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts next-env.d.ts eslint.config.mjs vitest.config.ts tests/setup.ts tests/smoke.test.ts
git commit -m "chore: scaffold Next.js landing"
```

### Task 2: Centralize verified store content and assets

**Files:**
- Create: `data/site.ts`
- Create: `tests/site-content.test.ts`
- Create: `public/images/logo-original.jpeg`
- Create: `public/images/store-exterior.jpeg`
- Create: `public/images/editorial-women.jpg`
- Create: `public/images/editorial-men.jpg`
- Create: `public/images/editorial-hero.jpg`
- Modify: `README.md`

**Interfaces:**
- Produces: `siteConfig: SiteConfig`.
- Produces: `SiteConfig`, `AudienceCard`, and `Benefit` TypeScript types.
- Consumes: user-provided source images and three licensed stock photographs.

- [ ] **Step 1: Write failing content invariant tests**

Create tests asserting:

```ts
expect(siteConfig.contact.whatsappHref).toBe("https://wa.me/393495627208");
expect(siteConfig.social.tiktok).toBe("https://www.tiktok.com/@nikastore.sambuceto");
expect(siteConfig.location.postalCode).toBe("66020");
expect(siteConfig.audiences.map((item) => item.slug)).toEqual(["donna", "uomo"]);
expect(siteConfig.opening.date).toBeNull();
```

- [ ] **Step 2: Run the focused test and verify failure**

Run: `npm run test:run -- tests/site-content.test.ts`

Expected: FAIL because `@/data/site` does not exist.

- [ ] **Step 3: Implement typed content**

Create `data/site.ts` with:

```ts
export type AudienceCard = {
  slug: "donna" | "uomo";
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export type Benefit = {
  number: string;
  title: string;
  copy: string;
};

export const siteConfig = {
  name: "NiKa Store",
  opening: { label: "Prossima apertura", date: null },
  contact: {
    phoneDisplay: "+39 349 562 7208",
    phoneE164: "+393495627208",
    whatsappHref: "https://wa.me/393495627208",
  },
  social: { tiktok: "https://www.tiktok.com/@nikastore.sambuceto" },
  location: {
    street: "Corso Italia, 121",
    postalCode: "66020",
    city: "Sambuceto",
    province: "CH",
    latitude: 42.4220999,
    longitude: 14.1876715,
    mapsHref: "https://www.google.com/maps/place/NiKa+Store/@42.4221038,14.1850912,17z/data=!3m1!4b1!4m6!3m5!1s0x1331afa08df1dfbd:0x8bce4cdc180049ee!8m2!3d42.4220999!4d14.1876715!16s%2Fg%2F11nr54ysq8?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D",
  },
  audiences: [
    {
      slug: "donna",
      title: "Stile donna",
      copy: "Linee versatili e dettagli contemporanei per accompagnarti ogni giorno.",
      image: "/images/editorial-women.jpg",
      imageAlt: "Look casual da donna in stile contemporaneo",
    },
    {
      slug: "uomo",
      title: "Stile uomo",
      copy: "Capi essenziali, comodi e facili da abbinare per un guardaroba quotidiano.",
      image: "/images/editorial-men.jpg",
      imageAlt: "Look casual da uomo in stile contemporaneo",
    },
  ] satisfies AudienceCard[],
} as const;
```

Add the four approved benefits and navigation labels in this module.

- [ ] **Step 4: Add and document assets**

Copy the two user-provided JPEGs into `public/images/`. Select three royalty-free stock photographs that represent adult casual womenswear, menswear, and a mixed editorial hero; store them locally. Add a README table with source page, photographer, license source, local filename, intended replacement, and note that the images are indicative.

- [ ] **Step 5: Run the test**

Run: `npm run test:run -- tests/site-content.test.ts`

Expected: all content invariants pass.

- [ ] **Step 6: Commit**

```bash
git add data tests/site-content.test.ts public/images README.md
git commit -m "feat: add NiKa content and visual assets"
```

### Task 3: Implement metadata and local-business structured data

**Files:**
- Create: `lib/jsonLd.ts`
- Create: `tests/json-ld.test.ts`
- Create: `app/layout.tsx`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Create: `app/manifest.ts`
- Create: `app/icon.tsx`

**Interfaces:**
- Consumes: `siteConfig`.
- Produces: `buildStoreJsonLd(siteUrl: string): Record<string, unknown>`.
- Produces: static Next.js metadata routes.

- [ ] **Step 1: Write the failing JSON-LD test**

Assert that `buildStoreJsonLd("https://nikastore.test")` returns:

```ts
expect(result["@type"]).toBe("ClothingStore");
expect(result.telephone).toBe("+393495627208");
expect(result.address).toMatchObject({
  "@type": "PostalAddress",
  streetAddress: "Corso Italia, 121",
  postalCode: "66020",
  addressLocality: "Sambuceto",
  addressRegion: "CH",
  addressCountry: "IT",
});
expect(result.sameAs).toContain("https://www.tiktok.com/@nikastore.sambuceto");
```

- [ ] **Step 2: Verify the test fails**

Run: `npm run test:run -- tests/json-ld.test.ts`

Expected: FAIL because `buildStoreJsonLd` does not exist.

- [ ] **Step 3: Implement structured data and global metadata**

Build a schema.org `ClothingStore` object from `siteConfig`. Configure:

```ts
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
```

Set an Italian title, local meta description, canonical, Open Graph, robots, authorship as NiKa Store, and geo metadata. Use Cormorant Garamond and Manrope via `next/font/google`.

- [ ] **Step 4: Add crawler and manifest routes**

`robots.ts` allows `/` and points to `${siteUrl}/sitemap.xml`. `sitemap.ts` returns the canonical homepage. `manifest.ts` defines name, short name, theme/background colors, and `/`. `icon.tsx` renders a simple “N” mark using `ImageResponse`.

- [ ] **Step 5: Run the focused test**

Run: `npm run test:run -- tests/json-ld.test.ts`

Expected: all JSON-LD assertions pass.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/robots.ts app/sitemap.ts app/manifest.ts app/icon.tsx lib/jsonLd.ts tests/json-ld.test.ts
git commit -m "feat: add local SEO metadata"
```

### Task 4: Build the semantic page and editorial sections

**Files:**
- Create: `app/page.tsx`
- Create: `components/Brand.tsx`
- Create: `components/Hero.tsx`
- Create: `components/Icon.tsx`
- Create: `components/StoreSections.tsx`
- Create: `components/WhatsAppButton.tsx`
- Create: `tests/page.test.tsx`

**Interfaces:**
- Consumes: `siteConfig`, `buildStoreJsonLd`.
- Produces: static semantic page sections with IDs `stile`, `novita`, `negozio`, and `contatti`.
- Produces: `WhatsAppButton()` with the approved URL and accessible name.

- [ ] **Step 1: Write failing semantic page tests**

Render `Page()` and assert:

```ts
expect(screen.getByRole("heading", { level: 1, name: /il tuo stile, ogni giorno/i })).toBeInTheDocument();
expect(screen.getByText(/prossima apertura/i)).toBeInTheDocument();
expect(screen.getByRole("link", { name: /scrivici su whatsapp/i })).toHaveAttribute(
  "href",
  "https://wa.me/393495627208",
);
expect(screen.getByText(/immagini indicative/i)).toBeInTheDocument();
expect(document.querySelectorAll("h1")).toHaveLength(1);
```

- [ ] **Step 2: Verify the test fails**

Run: `npm run test:run -- tests/page.test.tsx`

Expected: FAIL because the page components do not exist.

- [ ] **Step 3: Implement the page sections**

Compose semantic server components for hero, manifesto, woman/man selection, four benefits, opening CTA, storefront/location, and footer. Insert JSON-LD using:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStoreJsonLd(siteUrl)).replace(/</g, "\\u003c") }}
/>
```

Use `next/image` with explicit responsive `sizes`, priority only for the hero, and user-provided exterior in the location section.

- [ ] **Step 4: Implement inline icons and WhatsApp action**

Use focused inline SVG components for arrow, menu, close, TikTok, pin, and WhatsApp. The floating WhatsApp link must include `aria-label="Scrivici su WhatsApp"` and `target="_blank"` with `rel="noreferrer"`.

- [ ] **Step 5: Run the focused tests**

Run: `npm run test:run -- tests/page.test.tsx`

Expected: semantic content and CTA tests pass.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx components tests/page.test.tsx
git commit -m "feat: build NiKa landing content"
```

### Task 5: Add the sticky header and accessible mobile navigation

**Files:**
- Create: `components/Header.tsx`
- Create: `tests/header.test.tsx`

**Interfaces:**
- Consumes: navigation items and WhatsApp URL from `siteConfig`.
- Produces: `Header()` client component.

- [ ] **Step 1: Write failing interaction tests**

Test that:

```ts
expect(screen.getByRole("button", { name: /apri il menu/i })).toHaveAttribute("aria-expanded", "false");
await user.click(screen.getByRole("button", { name: /apri il menu/i }));
expect(screen.getByRole("button", { name: /chiudi il menu/i })).toHaveAttribute("aria-expanded", "true");
expect(screen.getByRole("navigation", { name: /navigazione principale/i })).toBeVisible();
```

Also assert Escape closes the menu and selecting an anchor closes it.

- [ ] **Step 2: Verify the test fails**

Run: `npm run test:run -- tests/header.test.tsx`

Expected: FAIL because `Header` does not exist.

- [ ] **Step 3: Implement header behavior**

Use a passive scroll listener to set `data-scrolled` after 24 px. Lock body scroll while the menu is open, close on Escape, return focus to the trigger, and keep the desktop CTA visible. Render desktop brand words around the mark and mobile mark only through CSS.

- [ ] **Step 4: Run focused tests**

Run: `npm run test:run -- tests/header.test.tsx`

Expected: menu and keyboard interaction tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/Header.tsx tests/header.test.tsx
git commit -m "feat: add responsive sticky navigation"
```

### Task 6: Implement the editorial visual system and motion

**Files:**
- Create: `app/globals.css`
- Create: `components/Reveal.tsx`
- Modify: `app/page.tsx`
- Modify: section components to apply reveal classes

**Interfaces:**
- Produces: design tokens, page layout, component states, and responsive rules.
- Produces: `Reveal({ children, className?, delay? })`.

- [ ] **Step 1: Add a failing reduced-motion end-to-end assertion**

In `e2e/landing.spec.ts`, emulate reduced motion and assert the page root exposes reduced-motion-safe rendering:

```ts
test.use({ reducedMotion: "reduce" });
await page.goto("/");
await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
await expect(page.locator("[data-reveal]").first()).toHaveCSS("opacity", "1");
```

- [ ] **Step 2: Implement visual tokens and responsive layouts**

Define exact custom properties for forest, ivory, sage, accent, text, borders, type scale, spacing, radii, and shadows. Build the approved asymmetrical editorial hero, alternating audience cards, oversized section numerals, dark opening section, framed storefront section, and desktop/mobile header variants.

- [ ] **Step 3: Implement reveal behavior**

`Reveal` adds `data-reveal` and uses one shared Intersection Observer configuration with `threshold: 0.14`; visible elements receive `data-visible="true"`. CSS sets reveal transforms only after enhancement is active so content remains visible if JavaScript fails.

- [ ] **Step 4: Add motion safeguards**

Under `@media (prefers-reduced-motion: reduce)`, remove smooth scrolling, transforms, transitions, ticker motion, and reveal opacity changes. Avoid layout-affecting animations.

- [ ] **Step 5: Run unit tests and start the production server**

Run:

```bash
npm run test:run
npm run build
npm start
```

Expected: all unit tests pass, production build succeeds, and the server listens on port 3000.

- [ ] **Step 6: Run Playwright checks**

Run: `npm run test:e2e`

Expected: reduced-motion and critical navigation checks pass in Chromium.

- [ ] **Step 7: Commit**

```bash
git add app/globals.css app/page.tsx components/Reveal.tsx components e2e
git commit -m "feat: add editorial styling and motion"
```

### Task 7: Verify production quality and Vercel readiness

**Files:**
- Create: `playwright.config.ts`
- Modify: `e2e/landing.spec.ts`
- Modify: `README.md`
- Modify: implementation files only if verification reveals defects

**Interfaces:**
- Consumes: completed production site.
- Produces: documented local and Vercel deployment workflow.

- [ ] **Step 1: Expand production browser tests**

Cover desktop and mobile viewports, one H1, sticky header, working anchor links, menu keyboard behavior, exact external URLs, visible floating WhatsApp control, no horizontal overflow, and availability of `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest`.

- [ ] **Step 2: Run full automated verification**

Run:

```bash
npm run lint
npm run test:run
npm run build
npm run test:e2e
```

Expected: every command exits 0.

- [ ] **Step 3: Inspect prerendered output**

Run:

```bash
rg -n "Il tuo stile, ogni giorno|ClothingStore|Corso Italia, 121|wa.me/393495627208" .next/server/app/index.html
```

Expected: all critical copy, structured data, address, and WhatsApp URL occur in prerendered HTML.

- [ ] **Step 4: Perform visual QA**

Capture desktop and mobile screenshots through Playwright. Inspect hero crop, header state, section rhythm, storefront image, floating WhatsApp overlap, footer, keyboard focus, and reduced-motion rendering. Fix and repeat until no clipping, overlap, unreadable text, or horizontal scroll remains.

- [ ] **Step 5: Document deployment**

Document:

```text
Framework preset: Next.js
Build command: next build
Install command: npm install
Environment variable: NEXT_PUBLIC_SITE_URL must equal the final custom production URL; leave it unset for Vercel preview builds
Node.js: current Vercel-supported LTS
```

State that `NEXT_PUBLIC_SITE_URL` must be replaced with the final production domain before indexing.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "chore: verify Vercel-ready landing"
```
