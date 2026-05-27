---
timestamp: 2026-05-27T19-04-17Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | 7+ second widget load shows "Loading search…" gray box only; no booking details on confirm page |
| 2 | Match System / Real World | 3 | "Search & Book" conflates two distinct steps; otherwise language is strong |
| 3 | User Control and Freedom | 2 | No way to modify dates on /search without returning to homepage; /search has no "edit search" |
| 4 | Consistency and Standards | 2 | booking/confirm uses Tailwind class tokens (bg-surface, text-primary) that are undefined — renders as unstyled HTML |
| 5 | Error Prevention | 2 | No check-out before check-in validation; no past-date blocking; placeholder affiliate URL ships to production |
| 6 | Recognition Rather Than Recall | 3 | /search page doesn't echo the user's chosen dates back |
| 7 | Flexibility and Efficiency | 1 | No repeat-guest shortcuts; deep URL scheme exists but isn't surfaced |
| 8 | Aesthetic and Minimalist Design | 3 | "Why Book Direct" section is an identical-card-grid with icon circles — DESIGN.md's own ban |
| 9 | Error Recovery | 1 | Widget auto-population failures are silent; broken affiliate placeholder; no form error styling |
| 10 | Help and Documentation | 3 | FAQ and /compare pages are strong; no contextual help within booking flow |
| **Total** | | **22/40** | **Acceptable** |

## Anti-Patterns Verdict

The homepage mostly passes the AI-slop test — copy specificity and neighborhood voice carry the design. One exception: the "Why Book Direct" section is a textbook identical card grid (icon circle + heading + paragraph × 3). The Unicode characters ($, ✉, ✓) inside orange circles are the specific pattern brand.md flags as "screams template." DM Serif Display is on the brand register's reflex-reject list but is grandfathered as established identity.

## Overall Impression

Strong copy and personality throughout. The booking flow's last 20% (confirmation page) is a P0 showstopper — it renders as unstyled HTML because it uses Tailwind utility tokens not defined in this project. Trust built over the entire homepage journey gets destroyed at the moment of conversion.

## What's Working

1. Copy voice is the real differentiator — host-not-platform language throughout.
2. Section rhythm and background cycling (white / gray / cream / navy) creates a genuine scroll narrative.
3. The hero booking panel is well-executed — navy header, labeled inputs, green status dot, clear CTA.

## Priority Issues

**[P0] booking/confirm page is visually unstyled**
- Location: src/app/booking/confirm/page.tsx — uses Tailwind classes (text-primary, bg-surface, border-border, text-secondary, text-muted) not defined in this project
- Impact: Renders as plain HTML at the highest-trust moment of the flow
- Fix: Rewrite using inline styles matching the rest of the site's token system
- Suggested command: /impeccable harden booking/confirm

**[P1] Broken affiliate URL ships to production**
- Location: src/app/booking/confirm/page.tsx line 24 — href="https://rentalguardian.com/AFFILIATE_ID"
- Impact: Any guest clicking "Get Travel Insurance" hits a broken URL; erodes post-booking trust
- Fix: Replace with real affiliate URL or remove CTA until affiliate account is set up

**[P1] /search gives no feedback during 7-second widget load**
- Location: src/components/HospitableSearch.tsx — "Loading search…" in a 120px gray div for up to 7.5+ seconds
- Impact: Users back out thinking the site is broken; highest-anxiety moment of the funnel
- Fix: Show the dates/guests from URL params in the loading state: "Finding availability for Aug 14–17, 2 guests…" with animated indicator

**[P1] Hero booking form breaks on mobile**
- Location: src/app/page.tsx line 59 — gridTemplateColumns: '1fr 380px' with no responsive class or media query
- Impact: Horizontal scroll or crushed headline on mobile; Cubs game searches are frequently mobile
- Fix: Add class name to grid, add media query in globals.css collapsing to single column at ≤680px

**[P2] "Why Book Direct" section is an identical card grid**
- Location: src/app/page.tsx lines 276-307 — three white cards, orange icon circle, heading, paragraph
- Impact: Most generic-looking section on the page; violates DESIGN.md's absolute ban on identical card grids
- Fix: Break grid structure. Consider numbered list treatment or asymmetric layout with actual cost comparison

## Persona Red Flags

**Jordan (First-Timer):** Double-search confusion (/search prompt banner after auto-fill), 7-second loading opacity, confirmation page provides zero reassurance (no dates, no unit name, no price).

**Casey (Mobile User):** Hero booking panel column doesn't collapse on mobile. Events and reviews grids may be unreadable at small viewports.

**Cubs Season Ticket Holder (project-specific):** Must re-enter all details every visit. No shareable deeplinks surfaced. No repeat-guest efficiency path for highest-LTV customer segment.

## Minor Observations

- Events subtitle "Direct Booking, No Service Fees." is wrong content for that section
- No empty state for events section when there are no upcoming events
- Confirmation page checkmark (Unicode ✓) is underwhelming for the highest-stakes emotional moment
- Local color constants in search/page.tsx duplicate globals — maintenance risk
- Hero paddingTop: 140 assumes fixed NavBar height
- Help callout border #f3d6c4 is a one-off, not the --color-line token

## Questions to Consider

- "What would a guest feel if they booked on a phone at the stadium and the confirmation page looked like a Terms of Service printout?"
- "Why Book Direct is doing the hardest sales job on the page — does it feel like someone who believes it, or like every other SaaS benefits grid?"
- "Repeat Cubs fans are your highest-LTV guests — what would the site look like if it was optimized for their second visit, not just their first?"
