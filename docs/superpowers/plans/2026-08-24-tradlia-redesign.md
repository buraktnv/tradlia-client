# Tradlia Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Medifoni-rebranded medical demo into a polished, neutral-B2B "Tradlia" marketplace that is portfolio-worthy for recruiters and freelance clients.

**Architecture:** Centralized groundwork first (checkpoint commit, brand sweep, neutral catalog, design-token sheet), then six non-overlapping parallel agent workstreams restyle all components against the token constitution, followed by an integration sweep and quality gates.

**Tech Stack:** Next.js 15 (Pages Router), React 19, TypeScript 5, Tailwind CSS 4 (`@config` linked), Sass modules, next/font, Playwright CLI (screenshots only).

## Global Constraints

- Brand name is **Tradlia** everywhere; zero case-insensitive `medifoni` matches in source after Task 2.
- Catalog is neutral B2B; zero matches for: PharmaDirect, MediSupply, HealthHub, PharmaDepot, Wound Care, NatureMed, MediNeed, healthcare, clinic, hospital, dentist, veterinarian, surgical, medicine (in source under `pages/ components/ helpers/ types/ scripts/ public/`).
- Anchor brand color stays `#4CBEC5`. No hex colors in components outside the token sheet palette.
- Every task ends with `npm run lint` passing and functionality preserved (props contracts unchanged).
- No new runtime dependencies except `next/font` (built into Next).
- Verification cycle per task: targeted grep gates + `npm run lint` + spot-check via dev server screenshot where visual.
- Do not rename the repository folder. Do not introduce a test framework. Do not restructure data flow in dashboard tables.
- Windows/bash environment; dev server runs via `npm run dev > log 2>&1 & sleep 12` before curl/screenshot checks.

---

### Task 1: Safety checkpoint commit + redesign branch

**Files:** none created (git state only)

**Interfaces:**
- Produces: branch `redesign/tradlia` containing all current WIP; later tasks commit onto it.

- [ ] **Step 1: Commit all pending WIP**

```bash
git add -A
git commit -m "wip: medifoni rebrand checkpoint before tradlia redesign"
```

- [ ] **Step 2: Create and switch to redesign branch**

```bash
git checkout -b redesign/tradlia
git branch --show-current
```

Expected output: `redesign/tradlia`

---

### Task 2: Tradlia naming sweep (Medifoni → Tradlia)

**Files:**
- Modify: `pages/search/index.tsx:11`
- Modify: `package.json` (name field)
- Delete: `emil-skills/` (leftover clone in repo root, untracked)
- Modify: `README.md`, `package-lock.json` regenerated not required — hand-edit name fields only

**Interfaces:**
- Produces: zero case-insensitive `medifoni` matches under source dirs; localStorage key `tradliaRecentSearches`.

- [ ] **Step 1: Remove leftover clone**

```bash
rm -rf emil-skills
```

- [ ] **Step 2: Rename localStorage key**

In `pages/search/index.tsx:11` change:

```ts
const RECENT_SEARCHES_KEY = "tradliaRecentSearches";
```

- [ ] **Step 3: Update package.json name**

Set `"name": "tradlia-client"`.

- [ ] **Step 4: Sweep remaining matches**

```bash
grep -rin "medifoni" pages components helpers types scripts styles public 2>/dev/null
```

Expected: no output. If hits, fix each manually (they may live in svg titles/metadata).

- [ ] **Step 5: Verify and commit**

```bash
npm run lint
git add -A && git commit -m "chore: complete tradlia naming, remove stray clone"
```

---

### Task 3: Neutral B2B catalog + taxonomy + info slugs

**Files:**
- Modify: `helpers/categories.ts` (full taxonomy replacement, keep `ICategory`/`ISubCategory` interfaces)
- Modify: `helpers/svgs/category.tsx` (rename 8 icon exports + redraw as neutral glyphs, keep `{ isActive }` prop contract)
- Modify: `helpers/productCatalog.ts` (16 products, same image paths)
- Modify: `pages/info/[slug].tsx` (replace 5 medical slugs, adjust intros)
- Rename: `public/images/filter-healthhub.svg` → `filter-toolworks.svg`, `filter-medineed.svg` → `filter-packpro.svg`, `filter-medisupply.svg` → `filter-supplyhub.svg`, `filter-naturemed.svg` → `filter-greenline.svg`, `filter-pharmadepot.svg` → `filter-partshub.svg`, `filter-pharmadirect.svg` → `filter-tradedirect.svg`, `filter-wound-care.svg` → `filter-safetymart.svg`
- Modify: every file importing renamed filter svgs or old category ids (grep-driven): `components/home/FilterSelection.tsx`, `components/home/Stories.tsx`, `components/home/DiscoverCategory*.tsx`, `components/home/AltCategories.tsx`, `pages/category/index.tsx`

**Interfaces:**
- Produces category ids consumed by `productCatalog.categoryId` and `/category?cat=` links:
  `packaging | fasteners | electronics | safety | tools | electrical | lab | office`
- Icon exports (same props `(FC<any>)({ isActive })`):
  `SvgPackaging, SvgFasteners, SvgElectronics, SvgSafety, SvgTools, SvgElectrical, SvgLab, SvgOffice`

New taxonomy (id → name, subtitle, subs):

| id | name | subtitle | subcategories |
|---|---|---|---|
| packaging | Packaging | & Shipping | Boxes, Pallet Wrap, Mailers, Labels |
| fasteners | Fasteners | & Fixings | Screws, Bolts, Anchors, Rivets |
| electronics | Electronics | Components | Cables, Connectors, Sensors, Power Supplies |
| safety | Safety Gear | & Workwear | Helmets, Gloves, Goggles, Hi-Vis Vests |
| tools | Power Tools | & Accessories | Drills, Grinders, Saws, Bits & Blades |
| electrical | Electrical | Supplies | Wiring, Breakers, Lighting, Conduit |
| lab | Lab & Measurement | Precision | Multimeters, Calipers, Microscopes, Test Kits |
| office | Office | & Facility | Paper, Printing, Cleaning, Breakroom |

New catalog (id/name/price/categoryId/image — images unchanged):

| id | name | price | cat |
|---|---|---|---|
| 1 | StackSafe Double-Wall Boxes 50 pcs | 18.5 | packaging |
| 2 | GripTight Pallet Wrap 20 µm | 45.5 | packaging |
| 3 | TorqueMax Wood Screws 4×40 (500) | 36.5 | fasteners |
| 4 | BoltCore Hex Bolts M8 (200) | 9.9 | fasteners |
| 5 | LinkPro CAT6 Cable 305 m | 12.75 | electronics |
| 6 | SenseIt Temp Sensor Module | 6.4 | electronics |
| 7 | HardHat Pro EN397 Helmet | 27.9 | safety |
| 8 | SafeGrip Cut-Resistant Gloves | 19.49 | safety |
| 9 | DrillMaster 18V Combi Drill | 23.5 | tools |
| 10 | AnglePro 115 mm Grinder | 54.0 | tools |
| 11 | VoltLine Circuit Breaker 16A | 21.9 | electrical |
| 12 | BrightWork LED High Bay 150W | 14.25 | electrical |
| 13 | PreciScale Digital Caliper 150 mm | 8.44 | lab |
| 14 | MultiCheck TRMS Multimeter | 32.6 | lab |
| 15 | ClearOffice A4 Paper 500 sheets | 11.2 | office |
| 16 | WriteWell Gel Pens Blue 10 pcs | 7.85 | office |

Info slug replacements in `pages/info/[slug].tsx`:

| old slug | new slug | title | intro |
|---|---|---|---|
| medicals | industrial-supplies | Industrial Supplies | A category overview for workshops and manufacturers sourcing supplies on Tradlia. |
| family-medicine | facility-management | Facility Management | Products and equipment tailored to facility teams. |
| dentists | workshop-tools | Workshop Tools | Tools, consumables and equipment for modern workshops. |
| veterinarians | warehouse-logistics | Warehouse & Logistics | Storage, handling and shipping equipment for warehouses. |
| healthcare-providers | procurement-teams | Procurement Teams | How purchasing teams procure through Tradlia. |

Also update `who-can-join` intro to: "Tradlia is open to verified businesses, tradespeople and individual buyers." Keep footer/link arrays consistent if they reference old slugs (grep `medicals\|dentists\|veterinarians\|family-medicine\|healthcare-providers`).

Icon redraw guidance (keep simple flat two-tone style, 24–28px viewBox consistent with existing file): box/cube for Packaging, screw/bolt head for Fasteners, chip/pin for Electronics, hard hat for Safety, drill silhouette for Tools, bolt/lightning for Electrical, flask/caliper for Lab, document/print for Office.

- [ ] **Step 1: Rewrite `helpers/categories.ts`** with table above; keep interface exports identical.
- [ ] **Step 2: Rewrite `helpers/svgs/category.tsx`** exports per names above; delete old exports only after Step 3 compiles.
- [ ] **Step 3: Rewrite `helpers/productCatalog.ts`** rows per table above.
- [ ] **Step 4: Update `pages/info/[slug].tsx`** slug map; grep and update all links to changed slugs.
- [ ] **Step 5: Rename filter SVGs** (`git mv`) and update referencing imports (grep old filenames).
- [ ] **Step 6: Verify gates**

```bash
grep -rin "PharmaDirect\|MediSupply\|HealthHub\|PharmaDepot\|Wound Care\|NatureMed\|MediNeed\|healthcare\|dentist\|veterinarian\|surgical\|clinic\|hospital" pages components helpers types scripts 2>/dev/null
```

Expected: no output. Then:

```bash
curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/category?cat=packaging"
```

(dev server restarted if needed) Expected: 200.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: neutral b2b catalog, taxonomy and info pages"
```

---

### Task 4: Design token sheet (the constitution)

**Files:**
- Modify: `tailwind.config.js` (palette, type scale, radius, shadows)
- Create: `styles/tokens.css` (motion + z-index variables), imported from `styles/globals.css` top
- Modify: `pages/_document.tsx` (remove Google Fonts `<link>`)
- Modify: `pages/_app.tsx` (next/font imports, CSS variable wiring, remove hardcoded console color)
- Modify: `styles/globals.css` (font-family fallbacks reference next/font vars; body background uses canvas)

**Interfaces:**
- Consumes: nothing new.
- Produces (every later task depends on these exact names):
  - Tailwind colors: `brand.{50..900}`, `ink.DEFAULT`, `ink.soft`, `ink.muted`, `canvas`, `surface`, `line`, `amber.{400,500}`, `success`, `danger`
  - Tailwind fontFamily: `display` (Space Grotesk var), `body` (Instrument Sans var)
  - Tailwind borderRadius: `card` (14px), `pill`
  - Tailwind boxShadow: `card`, `pop`, `modal`
  - CSS vars: `--dur-fast:150ms; --dur-med:250ms; --dur-slow:450ms; --ease-out-soft:cubic-bezier(0.22,1,0.36,1); --z-nav:100; --z-modal:200; --z-toast:300`
  - Signature element: **order pulse** — `.pulse-dot` utility (defined once in globals.css) used for stock badges + order lifecycle chips

Exact palette:

| token | hex |
|---|---|
| brand-50 | #EAF9F8 |
| brand-100 | #D2F2F0 |
| brand-200 | #A5E5E1 |
| brand-300 | #78D8D3 |
| brand-400 (anchor) | #4CBEC5 |
| brand-500 | #2FA8AD |
| brand-600 | #1F8B92 |
| brand-700 | #186E74 |
| brand-800 | #145459 |
| brand-900 | #0F3D41 |
| ink | #16232B |
| ink-soft | #51646E |
| ink-muted | #8FA0AA |
| canvas | #F4F8F9 |
| surface | #FFFFFF |
| line | #E3EBEE |
| amber-400 | #FFC53D |
| amber-500 | #F5A623 |
| success | #2FB67C |
| danger | #E2574C |

Fonts (Google Fonts via next/font): display **Space Grotesk** (weights 500,600,700), body **Instrument Sans** (weights 400,500,600,700). Variables `--font-display`, `--font-body`.

`.pulse-dot` definition (globals.css):

```css
.pulse-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
}
.pulse-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  animation: pulse-ring var(--dur-slow) var(--ease-out-soft) infinite;
}
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  70% { transform: scale(2.4); opacity: 0; }
  100% { transform: scale(2.4); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .pulse-dot::after { animation: none; }
}
```

- [ ] **Step 1: Write `tailwind.config.js` theme extension** exactly per tables above (colors as nested object, fontFamily vars wired to `var(--font-display)` / `var(--font-body)`).
- [ ] **Step 2: Create `styles/tokens.css`** with the CSS vars above; add `@import "./tokens.css";` at top of `styles/globals.css` (after tailwindcss import).
- [ ] **Step 3: Wire next/font** in `pages/_app.tsx`:

```ts
import { Space_Grotesk, Instrument_Sans } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
```

Apply `display.variable + body.variable` classes on the outermost wrapper div inside `MyApp`; remove the Google Fonts link from `_document.tsx`; change the hire-me console.log color to `brand-600` value `#1F8B92`.
- [ ] **Step 4: Add `.pulse-dot`** block to `styles/globals.css`; set `body { @apply bg-canvas text-ink; }` inside `@layer base`.
- [ ] **Step 5: Verify**

```bash
npm run lint
curl -s http://localhost:3000 | grep -o "__variable_[a-z0-9]*" | head -2
```

Screenshot home: fonts visibly different from Ubuntu; no layout explosion.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: design token sheet, typography pairing, order-pulse signature"
```

---

### Task 5: Pre-blitz bug fixes (UI_FIXES_PLAN items, centralized)

**Files:**
- Modify: `components/home/Slider.tsx:95,122,126` (index arithmetic)
- Modify: `components/shared/navbar/NavbarMobile.tsx:57,68,86,93,112,119,138,148` (per-route highlighting)
- Modify: `components/shared/navbar/Navbar.tsx:170` (Turkish character comment → English; fix the TODO by wrapping Image in Link > A > Image)
- Global: replace every `#4BBEC5` with `#4CBEC5` (grep-driven; expected in Slider, NavbarMobile, ProductCard variants)
- Delete: `UI_FIXES_PLAN.md` (all items now assigned)

**Interfaces:**
- Produces: correct slider navigation/auto-rotation bounds; nav items highlight their own routes; zero `#4BBEC5`.

- [ ] **Step 1: Fix color typo globally**

```bash
grep -rl "#4BBEC5" components pages styles | xargs sed -i "s/#4BBEC5/#4CBEC5/g"
grep -rn "4BBEC5" components pages styles
```

Expected second command: no output.

- [ ] **Step 2: Fix Slider indexing** — read lines 85–135; ensure `activeIndex` wraps modulo slide count and both arrow handlers and auto-rotate interval share one `setActive((i) => (i + dir + n) % n)` helper; touch swipe uses same helper.
- [ ] **Step 3: Fix NavbarMobile routes** — each NavItem receives its own `route` prop and compares `router.asPath.split("?")[0] === route` (or `router.pathname`) instead of hardcoded `"/basket"` for all.
- [ ] **Step 4: Navbar cleanup** — translate the Turkish comment to English; restructure logo as `<Link><a><Image …/></a></Link>` removing the TODO.
- [ ] **Step 5: Verify visually + commit**

```bash
npx playwright screenshot --viewport-size=1440,900 --wait-for-timeout=8000 http://localhost:3000 /c/Users/user/AppData/Local/Temp/opencode/task5-home.png
npx playwright screenshot --viewport-size=390,844 --wait-for-timeout=8000 http://localhost:3000 /c/Users/user/AppData/Local/Temp/opencode/task5-mobile.png
git rm UI_FIXES_PLAN.md
git add -A && git commit -m "fix: slider bounds, mobile nav routing, color typos, navbar logo semantics"
```

---

### Task 6: Wave 1a — Storefront shell agent

Dispatch ONE general subagent with this brief:

> Redesign `components/shared/**` (navbar incl. DashboardNavigation/Messages/Notification/Profile/SearchInput/HeaderMobile/NavbarMobile/Footer/MobileFooter) and `components/home/{Slider,Stories,TopCategories,AltCategories,DiscoverCategory,DiscoverCategoryMobile}.tsx` against the token constitution in `tailwind.config.js`, `styles/tokens.css`, `styles/globals.css` (.pulse-dot exists).
>
> Rules:
> 1. Colors ONLY from token palette (brand ramp, ink ramp, canvas/surface/line, amber, success, danger). Replace ALL raw hexes like `text-[#4CBEC5]`, `text-[#7E8096]` with token utilities (`text-brand-400`, `text-ink-soft`, …). Background hexes → `bg-canvas`, `bg-surface`, `border-line`.
> 2. Headings/eyebrows/prices/logo wordmark use `font-display`; everything else `font-body` (body is default via globals).
> 3. Apply the signature: notification/messages/profile indicators use `.pulse-dot` with `bg-danger`/`bg-success`; slider progress indicator uses brand-400 dot + ink-muted inactive dots.
> 4. Radii/shadows: cards `rounded-card shadow-card`; dropdowns/popovers `rounded-card shadow-pop`; modals `shadow-modal`. No arbitrary shadow/radius values.
> 5. Motion: hovers/focus transitions use `duration-200 ease-[var(--ease-out-soft)]` pattern; respect prefers-reduced-motion (Tailwind class `motion-reduce:transition-none` on animated elements).
> 6. Accessibility floor: every icon-only button gets aria-label; focus-visible ring `focus-visible:ring-2 ring-brand-400`; decorative svgs `aria-hidden`.
> 7. Preserve all props, context usage, routing, localStorage behavior. No restructuring of data flow.
> 8. Fix any `#4BBEC5` stragglers you encounter.
>
> Verify: `npm run lint` clean; `npx playwright screenshot --viewport-size=1440,900 --wait-for-timeout=8000 http://localhost:3000 <tmp>/wave1a.png` shows redesigned navbar/footer/slider with no broken layout; then `git add -A && git commit -m "feat(ui): storefront shell redesign"`.

- [ ] **Step 1: Dispatch agent, review its diff** (spot-check: no raw hexes remain in its files, pulse-dot used, lint passed)
- [ ] **Step 2: Screenshot gate**: home desktop + 390px mobile look coherent

```bash
grep -rn "#[0-9A-Fa-f]\{6\}" components/shared components/home --include="*.tsx" | grep -v "//.*#" | head
```

Expected: only intentional svg fill attributes, none in className strings.

---

### Task 7: Wave 1b — Catalog surfaces agent

Same brief skeleton as Task 6, files instead:

> `components/home/ProductCard.tsx`, `components/home/PopularProducts.tsx`, `components/home/FilterSelection.tsx`, `components/home/DealOfTheDay*` (if present), `components/home/ProductCardBase.tsx`, `components/category/**`, `pages/search/**`, `pages/category/index.tsx`.
>
> Extra rules beyond Task 6 brief:
> - ProductCard: price in `font-display font-semibold text-ink`; discount strike in `text-ink-muted`; free-shipping badge `bg-brand-50 text-brand-700 rounded-pill px-2 py-0.5`; favourite heart toggles `text-danger`; campaign ribbon uses `bg-amber-400 text-ink`.
> - Stock badge becomes signature usage: `<span className="pulse-dot bg-success inline-block" />` + label.
> - Filter sidebar: active filter state `border-brand-400 bg-brand-50 text-brand-700`; checkbox accents `accent-brand-400` (wait — accent-color utility: use `accent-[color:var(--twBrand400)]` NOT needed; simply `accent-brand-400` if supported by config else style via appearance-none + checked:bg-brand-400).
> - Search page: recent-searches chips `bg-canvas border-line rounded-pill hover:border-brand-300 transition-colors duration-200`.

Verify: screenshot `/category?cat=packaging` and `/search?q=box`; lint clean; commit `"feat(ui): catalog surfaces redesign"`.

- [ ] **Step 1: Dispatch, review diff**
- [ ] **Step 2: Visual gate on category + search screenshots**

---

### Task 8: Wave 1c — Product & seller pages agent

Brief = Task 6 skeleton, files:

> `components/product/**`, `components/seller/**`, `components/sellerModal/**`, `pages/product/**`, `pages/seller/**`.
>
> Extra rules:
> - Price block: `font-display text-3xl font-bold text-ink`; installment/campaign notes `text-ink-muted text-sm`.
> - Seller rating stars: filled `fill-amber-400`, empty `fill-line`.
> - Reviews list: avatars `bg-brand-100 text-brand-700 font-display`; verified-buyer chip uses success color + `.pulse-dot`.
> - Breadcrumbs `text-ink-muted hover:text-brand-600`.
> - Quantity stepper buttons: `border-line hover:border-brand-300 focus-visible:ring-brand-400`.

Verify: screenshot one product detail URL (resolve via homepage click-through or `pages/product/index.tsx` query param) + seller page; lint; commit `"feat(ui): product and seller redesign"`.

- [ ] **Step 1: Dispatch, review diff**
- [ ] **Step 2: Visual gate**

---

### Task 9: Wave 2a — Dashboard chrome agent

Brief = Task 6 skeleton, files:

> `components/profile/Sidebar.tsx`, `components/shared/navbar/DashboardNavigation.tsx`, `pages/profile/index.tsx` (chrome only), `pages/hire-me.tsx`.
>
> Extra rules:
> - Active dashboard item: `bg-brand-50 text-brand-700 border-l-2 border-brand-400`; inactive `text-ink-soft hover:text-ink`.
> - Sidebar section labels: eyebrow style `font-display text-xs uppercase tracking-wider text-ink-muted`.
> - Wallet balance card: `bg-gradient-to-br from-brand-500 to-brand-700 text-white rounded-card shadow-pop` with balance in `font-display`.
> - hire-me page copy stays; restyle buttons to primary `bg-brand-400 hover:bg-brand-500 text-white` / secondary `border border-line text-ink-soft hover:border-brand-300`.

Verify: screenshot `/profile`; lint; commit `"feat(ui): dashboard chrome redesign"`.

- [ ] **Step 1: Dispatch, review diff**
- [ ] **Step 2: Visual gate**

---

### Task 10: Wave 2b — Dashboard tables/lists agent

Brief = Task 6 skeleton, files: `components/profile/adverts/**`, `bought/**`, `sold/**`, `favourites/**`, `feedback/**`, `messages/**`, `receipts/**`, `report/**`, `support/**`, `integrator/**`, `pages/profile/{orders,favourites,feedback,messages,receipts,report,support,wallet,integrators,settings,adverts}*.tsx`, plus `pages/notifications/**`, `pages/404.tsx`, `pages/info/[slug].tsx` styling only.

Extra rules:
> - Tables/list rows: header row `text-ink-muted font-medium text-sm bg-canvas`; body rows `border-b border-line hover:bg-brand-50/40 transition-colors duration-200`; numeric cells `tabular-nums`.
> - Order lifecycle chips (bought/sold tabs) are THE signature surface: status chip = `.pulse-dot` colored by state (success=delivered/completed, amber-500=in transit/waiting, brand-400=new/approved, danger=canceled/returned) + `rounded-pill px-2.5 py-1 text-xs font-medium bg-{color}-tint` where tint = brand-50/amber-400/10/success/10/danger/10 equivalents using existing palette (use `bg-opacity-*` or explicit tint hexes from brand-50 only; for amber/success/danger tints use `style={{ backgroundColor: "rgba(...)" }}` NO — instead extend config with fixed tints `successTint #E6F7EF`, `dangerTint #FBEAE8`, `amberTint #FFF4DC` — ADD these three to tailwind.config.js colors in this task only).
> - Charts (Recharts): stroke `#1F8B92`, grid `#E3EBEE`, tooltip `bg-surface shadow-pop rounded-card border-line`; legend labels `text-ink-muted`.
> - Empty states use `HIRE_ME_COPY` from `helpers/config.ts` unchanged, rendered with `text-ink-muted` + icon in `text-brand-300`.
> - PrintInvoice/PrintShippingLabel keep print CSS intact; only screen-side styling changes.

Verify: screenshots of `/profile/orders/bought`, `/profile/report`, `/profile/receipts`; lint; commit `"feat(ui): dashboard tables and lists redesign"`.

- [ ] **Step 1: Dispatch, review diff** (check the three tint additions exist in tailwind.config.js)
- [ ] **Step 2: Visual gate on the three screenshots**

---

### Task 11: Wave 2c — Basket flow agent

Brief = Task 6 skeleton, files: `components/basket/**`, `pages/basket/**`, basket-related toasts styling hooks if any.

Extra rules:
> - Summary card `bg-surface rounded-card shadow-card p-6 sticky top-6`; total row `font-display text-xl font-bold`.
> - Primary checkout button full-width `bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white rounded-pill py-3 font-semibold disabled:opacity-50 transition-colors duration-200`.
> - Smart Basket page: match-ratio meter uses brand ramp (track `bg-line`, fill gradient brand-400→brand-600).
> - Payment inputs: `border-line focus:border-brand-400 focus-visible:ring-2 ring-brand-400/30 rounded-card`.

Verify: screenshot `/basket` with an item added programmatically if needed (localStorage seed); lint; commit `"feat(ui): basket flow redesign"`.

- [ ] **Step 1: Dispatch, review diff**
- [ ] **Step 2: Visual gate**

---

### Task 12: Integration sweep (single agent)

Dispatch ONE general subagent:

> Cross-component consistency pass over ALL of `components/ pages/`: hunt spacing rhythm breaks (section paddings should be multiples of 4px scale), inconsistent radius/shadow usage vs tokens, leftover raw hexes in classNames anywhere, mixed font applications, missing focus-visible rings, missing aria-labels on icon buttons. Fix in place without changing layouts established in Tasks 6–11.

- [ ] **Step 1: Full-route screenshot sweep**

```bash
for r in "" "category?cat=safety" "search?q=drill" "basket" "profile" "profile/orders/bought" "profile/report" "info/faq" "404-test-nonexistent"; do
  npx playwright screenshot --viewport-size=1440,900 --wait-for-timeout=6000 "http://localhost:3000/$r" "/c/Users/user/AppData/Local/Temp/opencode/sweep-$r.png" 2>&1 | tail -1
done
```

Review each for broken layouts/unstyled corners; fix.
- [ ] **Step 2: Raw-hex gate**

```bash
grep -rEn "className=\"[^\"]*#[0-9A-Fa-f]{6}" components pages --include="*.tsx"
```

Expected: no output.
- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "refactor(ui): integration consistency sweep"
```

---

### Task 13: Quality gates

- [ ] **Step 1: web-design-guidelines audit** — load the `web-design-guidelines` skill and audit key screens (home, category, product, profile, basket); fix all critical/high findings.
- [ ] **Step 2: Accessibility pass** — keyboard-walk navbar → product → basket in Playwright script asserting visible focus; check contrast of `text-ink-muted on bg-canvas` (must pass AA for normal text; darken ink-muted if it fails); confirm reduced-motion kills pulse animation.
- [ ] **Step 3: Cleanliness gate**

```bash
npm run lint && npm run build
grep -rn "TODO\|FIXME\|console\.log" --include="*.tsx" --include="*.ts" components pages helpers | grep -v "_app.tsx"
grep -rin "medifoni" pages components helpers types scripts styles public | grep -vi "Binary"
```

Expected: build passes; only the intentional _app.tsx hire-me console.log remains; no medifoni hits.
- [ ] **Step 4: README rewrite** — Tradlia branding, feature table (storefront + dashboard sections), tech stack, screenshots section referencing `docs/screenshots/`, getting-started, fictional-data disclaimer, credit line to DEV config.
- [ ] **Step 5: Screenshots deliverable**

```bash
mkdir -p docs/screenshots
# regenerate the best 6 shots (home, category, product, profile, report, basket) at 1440x900 into docs/screenshots/
```

- [ ] **Step 6: Final commit**

```bash
git add -A && git commit -m "docs: readme rewrite, screenshots, quality gates passed"
```

---

## Self-Review Notes

- Spec coverage: Phase 0→Task 1; Phase 1→Tasks 2–3; Phase 2→Task 4; Phase 3→Tasks 5–11; Phase 4→Task 12; Phase 5→Task 13. Risks covered: drift (token constitution + per-wave diffs reviewed), rebrand regressions (grep gates Tasks 2/3/13), scope creep (explicit no-data-flow-restructure rule).
- Type consistency: category ids and icon export names defined once (Task 3) and referenced identically later; token names defined once (Task 4) and used verbatim in wave briefs; three extra tints added only in Task 10 with exact hexes.
- Placeholders: none — deferred aesthetic judgment happens inside bounded agent briefs with explicit rules, not "TBD".
