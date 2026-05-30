---
target: homepage
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-05-29T18-08-28Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Booking form confirms instantly; no live availability hint before search |
| 2 | Match System / Real World | 4 | Strong local language, real floor names, host voice |
| 3 | User Control and Freedom | 3 | Clear nav; date fields clearable |
| 4 | Consistency and Standards | 4 | Tight, committed design system (navy/orange, two typefaces) |
| 5 | Error Prevention | 3 | Checkout>checkin date validation present |
| 6 | Recognition Rather Than Recall | 3 | Labels clear; floor badges aid orientation |
| 7 | Flexibility and Efficiency | 3 | Direct search + per-unit paths |
| 8 | Aesthetic and Minimalist Design | 3 | Strong, but page leans on stacked card grids |
| 9 | Error Recovery | 3 | Minimal error surface on homepage |
| 10 | Help and Documentation | 3 | FAQ + contact reachable |
| **Total** | | **32/40** | **Strong (above average)** |

## Anti-Patterns Verdict

LLM assessment: Does NOT read as obviously AI-generated. The committed navy+orange identity, real apartment photos, specific local copy, and DM Serif/Manrope pairing push it well above generic SaaS-cream. Main slop risks: the homepage stacks four near-identical card grids (units, events, reviews, guide tiles), and the three hero trust pills edge toward the hero-metric template.

Deterministic scan: UNAVAILABLE. detect.mjs crashed with "bundled detector not found" after a real attempt. No overlay injected.

## Overall Impression
Confident, on-brand, trustworthy. The biggest opportunity is breaking the card-grid monotony: unit → event → review → guide sections all repeat the same card rhythm, which is the one thing that drifts toward the Airbnb/VRBO listing energy the brand explicitly rejects.

## What's Working
1. Committed two-color identity with disciplined orange-for-action rule.
2. Real photos + specific host-voice copy build genuine trust.
3. Background cycling (white/gray/cream/navy) gives the scroll a narrative.

## Priority Issues

- [P1] Card-grid monotony across the page. Units, events, reviews, and guide all use same-rhythm card grids. Why it matters: repetition reads as catalog/platform energy, the exact anti-reference. Fix: differentiate at least one section (feature the flagship Marquee larger, or make reviews an editorial pull-quote layout instead of a 4-up grid). Command: layout.
- [P1] Orange text fails WCAG AA contrast. New #E85A2C text on white/light-orange chips and floor badges is ~3.3:1, below 4.5:1 for small text. Why it matters: PRODUCT.md mandates AA; small orange labels are hard to read. Fix: use navy text with an orange dot, or darken to accent-dark #d04a1f and bump weight/size. Command: colorize.
- [P2] Flat subheads. "Real testimonials from booked guests" restates the "Guest Reviews" heading in platform voice. Fix: host-voice line ("What guests tell us after a Cubs weekend"). Command: clarify.
- [P2] Trust pills feel generic. Three equal pills approximate the hero-metric template. Fix: integrate 4.71/236 into one distinctive line rather than three identical capsules. Command: layout.

## Persona Red Flags

Cubs-fan traveler (first-timer): lands excited, hero is clear, but must scroll past four card grids to feel the neighborhood; the "why here over a hotel" emotional hook competes with repeated layouts.

Group organizer (booking 2-3 units): no single "book the whole building" affordance on the homepage; the FAQ mentions it but the hero/cards don't surface it.

## Minor Observations
- "Save $200+ vs. Airbnb" is effective but verify the figure holds at typical nightly rates.
- Events grid date tiles are good; the one place the serif numeral earns its keep.

## Questions to Consider
- What if one section broke the grid rhythm entirely?
- Does the homepage need both a reviews grid AND a theme-card row?
- What would surface the "book all three" group play earlier?
