# Tradlia Portfolio Redesign — Design Doc

Date: 2026-08-24
Status: Approved

## Goal

Make the Tradlia B2B marketplace demo portfolio-worthy for two audiences:
recruiters/hiring managers (visual polish) and freelance clients (real-client-work
quality plus demonstrable engineering practices).

## Decisions (from brainstorming session)

| Question | Decision |
|---|---|
| Audience | Recruiters + freelance clients equally |
| Ambition | Full redesign |
| Brand | **Tradlia** (revert Medifoni naming; repo folder name unchanged) |
| Catalog content | Neutral B2B (packaging, fasteners, electronics, safety, lab, logistics) — de-medicalized |
| Priority | Storefront and dashboard get equal weight |
| Aesthetic | Keep teal `#4CBEC5` as anchor; build a bolder system around it |
| Effort | Thorough, multi-session |
| Approach | Parallel agent blitz, constrained by a centrally authored token sheet |

## Phase 0 — Safety checkpoint

- Commit all pending work (88 modified + 47 untracked files) as
  `wip: medifoni rebrand checkpoint` on current branch.
- Create branch `redesign/tradlia` from that commit.
- `UI_FIXES_PLAN.md` bugs are folded into agent briefs in Phase 3; the file is
  deleted once all its items are verified fixed.

## Phase 1 — Brand & content consolidation (centralized)

Must complete before any parallel work.

1. Naming sweep: replace Medifoni references with Tradlia:
   - localStorage keys (`medifoniRecentSearches` → `tradliaRecentSearches`)
   - document metadata, page titles, footer text
   - logo SVG text content
   - `package.json` name → `tradlia-client`
2. Content de-medicalization:
   - Seller names: PharmaDirect → TradeDirect-style neutral names; same treatment
     for MediSupply, HealthHub, PharmaDepot, Wound Care, NatureMed, WholesaleX,
     Pharmadirect, Best Sellers filter art (`public/images/filter-*.svg`).
   - Category taxonomy regenerated via `scripts/generate-products.mjs` with a
     neutral B2B taxonomy (e.g., Packaging, Fasteners, Electronics, Safety Gear,
     Lab Equipment, Logistics Supplies).
3. Delete `emil-skills/` if it was accidentally cloned into the project root
   during earlier sessions (verify before deleting).

## Phase 2 — Minimal token sheet (single author)

One pass, produces the constitution every blitz agent receives:

1. `tailwind.config.js`: extended palette anchored on `#4CBEC5`
   - ink / surface / muted / accent ramps + semantic colors (success, warning,
     danger), type scale, radius tiers, shadow tiers.
2. `styles/tokens.css`: CSS variables for motion durations/easings and z-index
   scale (what Tailwind config cannot express cleanly).
3. Typography: replace Ubuntu with a distinctive Google Fonts pairing
   (characterful display used with restraint + highly readable body face),
   self-hosted via `next/font`. Final pairing chosen during implementation with
   the frontend-design skill's guidance; must avoid the generic AI-default looks
   (cream+serif+terracotta, near-black+acid-green, broadsheet hairlines).
4. Signature element: one memorable, justified device (candidate: the "order
   pulse" — a shared live-status visual language across storefront badges and
   dashboard order lifecycles). Final choice made in Phase 2, applied everywhere.

## Phase 3 — Parallel agent blitz

Each agent receives: token sheet paths, rules brief (tokens only, fix assigned
UI_FIXES_PLAN items, preserve functionality, `npm run lint` clean), and a strict
non-overlapping file list. Waves are sequential; agents within a wave parallel.

| Wave | Workstream | Files |
|---|---|---|
| 1a | Storefront shell | `components/shared/`, `components/home/` |
| 1b | Catalog surfaces | `components/home/ProductCard*`, `components/category/`, `pages/search/` |
| 1c | Product & seller pages | `components/product/`, `components/seller*/`, `pages/seller/` |
| 2a | Dashboard chrome | `components/profile/Sidebar*`, `components/shared/navbar/Dashboard*` |
| 2b | Dashboard tables/lists | `components/profile/**` (rest) |
| 2c | Basket flow | `components/basket/`, `pages/basket/` |

Agent rules:
- Use only token-sheet values; no new hex codes outside the palette.
- Fix assigned UI_FIXES_PLAN bugs (slider indexing, nav highlighting, color
  typos, import paths, Turkish character issue).
- Preserve all functionality and props contracts.
- Accessibility floor: visible focus states, aria-labels on icon buttons, alt
  text, `prefers-reduced-motion` respected for any animation added.
- Pass `npm run lint` before reporting done.

## Phase 4 — Integration sweep (single agent)

Cross-component consistency: spacing rhythm audit, focus-state consistency,
Playwright full-route screenshot sweep to catch dark corners and broken layouts.

## Phase 5 — Quality gates

1. Run the `web-design-guidelines` skill audit; fix findings.
2. Accessibility pass (keyboard nav, contrast, reduced motion).
3. `npm run build` passes clean; zero console.log / TODO leftovers.
4. README rewritten for Tradlia: feature table, tech stack, screenshots,
   getting-started; states clearly it is a demo with fictional data.
5. Screenshot/GIF set generated into `docs/screenshots/`.

## Out of scope

Backend/API routes beyond existing mock data, auth, introducing a test
framework, renaming the repository folder, i18n work.

## Risks

- Agent drift → mitigated by token constitution + non-overlapping file sets +
  integration sweep.
- Rebrand regressions (missed medical strings) → final grep gate for medical
  terms and `medifoni` case-insensitive matches.
- Scope creep in dashboard tables → agents restyle, never restructure data flow.
