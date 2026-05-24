# GEO/SEO Content Expansion Plan

> **Goal:** Densify every page on the site for AI search (GEO) and traditional SEO without bloating layout. Target long-tail keywords, add structured data, expand thin pages into substantive landing pages that AI engines can cite.

**Approach:** Plan → self-review → dispatch parallel subagents for independent tasks.

---

## Site Audit — Current State

| Page | Word count | GEO/SEO density | Action |
|---|---|---|---|
| `/` (homepage) | ~600 | Medium | **Expand** — beef up apartment cards, add "Why book direct" section, enhance Chicago appeal |
| `/units/sluggers-suite` | ~120 | **Very thin** | **Expand significantly** — view details, ideal-stay scenarios, location specifics, amenities deep-dive |
| `/units/bleacher-balcony-flat` | ~120 | **Very thin** | Same |
| `/units/field-view-loft` | ~120 | **Very thin** | Same |
| `/compare` | ~80 | **Very thin** | **Expand** — who-each-unit-is-for content, comparison reasoning |
| `/events` | ~150 | Thin | **Expand** — intro about Wrigley as concert venue, Cubs schedule context, FAQs |
| `/reviews` | ~400 | Medium | Keep, add review summary intro |
| `/faq` | ~600 | Medium | **Expand** — go from 8 questions to 20+ |
| `/neighborhood` | ~3,500 | **High** ✅ | Already strong, keep |
| `/booking/confirm` | ~80 | N/A | Keep |

---

## What Gets Added (Per Page)

### 1. Homepage (`/`)

**Add:**
- **Hero subtitle**: keep punchy, but add a second line/paragraph with target keywords ("Cubs game weekend rental Chicago", "Wrigley Field concert apartments")
- **"Why Book Direct" section** (NEW): 3-column section between Reviews and Chicago appeal — "No service fees", "Local hosts who answer", "Best rate guaranteed"
- **Enrich Chicago appeal section**: more detail on each Chicago destination
- **Apartment card descriptions**: from 1 line to 2-3 lines each with view specifics, target guest, amenity highlight
- **Footer bottom**: add a few lines of SEO-friendly meta text ("Wrigleyville vacation rentals · Chicago apartments near Wrigley Field · Direct booking · No service fees")

### 2. Unit Detail Pages (`/units/[slug]`) — biggest win

**Currently:** Photo gallery, 2-sentence description, amenities list, booking widget, "other units" cards.

**Add to each unit page:**
- **Hero with unit-specific headline + subhead** ("Second-floor 2-bedroom with direct Wrigley Field view")
- **"What you'll love" section** (3-4 specific selling points per unit, with photos)
- **"Ideal for" callouts** ("Cubs series weekends · 4-person groups · First-time Chicago visitors")
- **Detailed amenity breakdown** with explanations ("Full kitchen with gas range, Keurig, dishwasher")
- **Floor plan section** (text-based for now, placeholder for actual floor plan image)
- **"This unit vs. our other apartments"** — 2-sentence reasoning to compare
- **Unit-specific FAQ** (4-6 Q&As about this unit specifically: views, sleeping arrangements, what's nearby)
- **Local proximity** ("From this unit: Wrigley Field 30 sec · Murphy's 1 min · Red Line 3 min")
- **VacationRental schema** enhanced with full amenity list, geo, image, aggregateRating

### 3. Compare Page (`/compare`)

**Add:**
- **Intro paragraph**: "Comparing The Slugger's Suite, Bleacher Balcony Flat, and Field View Loft — which Wrigleyville apartment is right for your stay?"
- **Comparison table** (rows: floor, view, sleeps, beds, baths, price, ideal for, key feature)
- **"Best for..." section** below the cards: 4-5 use cases ("Best for groups", "Best for the view", "Best for budget", "Best for date weekends", "Best for Cubs playoffs")
- **FAQ section**: 4-5 Q&As about choosing between units

### 4. Events Page (`/events`)

**Add:**
- **Intro section**: paragraph about Wrigley Field as both ballpark and major concert venue, plus what it means for booking
- **"Why book early for Cubs weekends"** callout
- **"Concert at Wrigley?"** callout
- **Event schema (JSON-LD)** for each event in the calendar
- **Bottom FAQ section**: "When does Cubs season start?", "Do you need to book early for opening day?", "Are postseason games announced in advance?", "What concerts are at Wrigley this year?"

### 5. FAQ Page (`/faq`)

**Currently:** 8 generic questions about check-in/parking/cancellation.

**Add to bring it to 20+ questions:**
- "Are pets allowed?" (already there)
- New: "Can I book all 3 apartments for a group?"
- New: "Do you offer discounts for weekday stays?"
- New: "What's the minimum stay during Cubs season?"
- New: "Is early check-in available?"
- New: "Do you have luggage storage on game days?"
- New: "Is there elevator access?"
- New: "Are the apartments wheelchair accessible?"
- New: "Do you provide travel cribs or pack-and-plays?"
- New: "Can I get a refund if a Cubs game is cancelled?"
- New: "Do you offer airport pickup?"
- New: "What's the best apartment for [Cubs game / concert / family / couples]?"
- New: "Can I see Wrigley Field from any of the apartments?"
- New: "How loud is it on game nights?"
- New: "Is there air conditioning?"
- New: "Can I receive packages at the apartment?"
- **FAQPage JSON-LD schema**

### 6. Reviews Page (`/reviews`)

**Add:**
- **Intro paragraph**: "Real guest reviews from our Airbnb, VRBO, and direct-booking guests at Double Play at Wrigley"
- **Aggregate rating callout** (e.g. "4.96 ★ across 200+ stays")
- **Review schema (JSON-LD)** with aggregateRating + individual Reviews
- **Categorized review summary**: "What guests love most" — 3 themes (location, cleanliness, host responsiveness) with 2-3 sample quotes each

### 7. NEW: "Why Book Direct" section (homepage) — or standalone page if it gets long

Target: people searching "book direct vs Airbnb", "vacation rental without Airbnb fees", etc.

**Copy points:**
- No service fees (Airbnb takes 14%; you save it)
- Direct host relationship — we answer messages instantly
- Best rate guaranteed — same rate or lower than OTAs
- Custom requests welcome
- Local knowledge included

---

## Structured Data (Schema.org) Additions

All schemas to add (or upgrade):

| Schema | Where | Status |
|---|---|---|
| `LodgingBusiness` | Homepage | ✅ exists, enhance with `priceRange`, `image`, `aggregateRating` |
| `VacationRental` | Each unit page | ✅ exists, enhance significantly |
| `FAQPage` | `/faq`, `/neighborhood` | ✅ neighborhood done, add to /faq |
| `Event` | `/events` for each event | ❌ ADD |
| `BreadcrumbList` | All non-home pages | ❌ ADD |
| `AggregateRating` | Homepage + each unit | ❌ ADD |
| `Review` | `/reviews` (each review) | ❌ ADD |

---

## Independent Tasks for Parallel Dispatch

Tasks that can run in parallel (no shared file edits):

| # | Task | Files touched | Agent |
|---|---|---|---|
| A | Expand all 3 unit detail pages | `units/[slug]/page.tsx` + new data file `unit-details.ts` | 1 |
| B | Expand `/faq` page with 12+ new questions + FAQ schema | `faq/page.tsx`, `data/faq.ts` | 2 |
| C | Expand `/events` page (intro, callouts, Event schema, FAQ at bottom) | `events/page.tsx` | 3 |
| D | Expand `/compare` page with table, "best for" section, FAQ | `compare/page.tsx` | 4 |
| E | Expand `/reviews` with intro + aggregate rating + schema | `reviews/page.tsx` + `lib/schema.ts` | 5 |
| F | Add "Why Book Direct" section to homepage + enrich apartment cards + Chicago appeal | `app/page.tsx` | 6 |
| G | Add BreadcrumbList schema helper + apply to all pages | `lib/schema.ts` + each page's `<script>` block | 7 |

**Total: 7 parallel tasks.**

These don't conflict because each touches a distinct page file. The only shared file is `lib/schema.ts` (tasks E + G) — I'll run E and G sequentially.

---

## Execution Strategy

1. **Phase 1 (parallel, 6 agents):** A, B, C, D, F, G — these are fully independent
2. **Phase 2 (1 agent after G completes):** E — depends on G's schema helper additions
3. **Phase 3 (sequential, me):** Verify build, commit, push

---

## Self-Review Checklist (before dispatching)

- [ ] **Does it overlap?** Tasks D (compare) and A (unit pages) both add "this vs that" content — make sure tasks don't duplicate copy. Compare page handles holistic comparison; unit pages handle from-this-unit perspective. ✅ different angles.
- [ ] **Will it bloat?** ~50% content increase site-wide. Acceptable for SEO. Mitigated by editorial design with whitespace.
- [ ] **Will it cannibalize?** All new content targets different long-tail phrases. No two pages target identical queries.
- [ ] **Does it preserve the new design?** All additions go INTO existing layout containers, not new visual sections that break the design.
- [ ] **Is GEO copy authentic?** All copy uses "we" host voice, includes specific facts (distances, prices, times), Q&A formats. ✅
- [ ] **Are the schemas correct?** All schemas use Schema.org types Google recognizes. Need to verify EventSeries vs Event for recurring games.
- [ ] **Risk of breaking build?** Subagent prompts will include `npm run build` verification step + commit only on success.

**Open question to resolve before dispatch:** Should the "Why Book Direct" be a section on the homepage or a standalone page at `/book-direct`? Standalone gets its own keyword target but adds another page. **Decision: section on homepage for now, can split later if traffic warrants.**

---

## Out of Scope (for this round)

- Real interactive map (need API key)
- Actual photos (waiting on owner)
- MLB API auto-feed (separate task)
- Blog/article system (massive separate project)
- Multi-language

---

## Estimated Impact

- Page count: 9 → 9 (no new pages, just enriched)
- Total word count: ~5,500 → ~12,000-14,000
- Indexed unique keyword phrases (long-tail): ~30 → ~150+
- Schema.org coverage: 2 schemas → 7 schemas
- Expected GEO citation density increase: 3-5x
