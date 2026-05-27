# Neighborhood Guide Page

_Started 2026-05-23 21:37 UTC_

---

## User

create a design mock up of a neighborhood / Guide page in html. this is what i have now too plain. research what makes a good page and create a good mock up page that i can show claude  code to implement

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: update_todos]_

I have everything I need from the existing design system. Let me build this now.

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: update_todos]_

Here's what's new compared to the plain version:

**Structure upgrades:**
- **Sticky category nav** — jumps to any section and auto-highlights as you scroll
- **Stats panel** in the hero — location facts at a glance (train, bike share, airport, etc.)
- **Quick facts sidebar** — sticky panel in the overview section with the key info guests need
- **Numbered host tips** — the 3 pieces of advice are now scannable cards, not a buried list

**Place cards** — each entry now has:
- Photo placeholder (ready for real images)
- Distance pill + price tier at a glance
- 2-sentence description in host voice
- **"Host Tip"** callout in italic — the local insight that makes it feel personal
- **"Host Pick" badge** on the top recommendations

**Section design:**
- Bars, Restaurants, Coffee, Explore, and Transit are distinct sections with their own headers
- The transit section is a dark navy break — visually signals "this is the practical stuff"
- Gallagher Way gets a featured wide card since it's the most underrated thing nearby

**For Claude Code handoff:** the design is all vanilla HTML/CSS — no frameworks, clean class names, fully commented. Every placeholder is labeled (e.g. `photo · Murphy's Bleachers patio`) so your dev knows exactly what image goes where.

## User

now design a comparison page that customers make a decision between 3 units we have if you have any questions ask

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: update_todos]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: write_file]_

Good — I have everything I need. Let me build it now.

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: update_todos]_

Here's what the comparison page includes:

**Decision helper bar** (sticky, below the header)
- "I want the…" filter buttons — Best View, Outdoor Space, Best Value, Lowest Price — highlight the relevant unit card with an orange ring

**Three unit cards** with real photos, each showing:
- Floor level, view quality dots (●●● / ●●○), stat pills, price, per-guest rate, and a "Best For" persona callout
- Badges: **Best View** (Slugger's), **Best Price** (Bleacher Balcony), **Best Value** (Field View Loft — highlighted as recommended)

**Full comparison table** with sticky header row (unit photos + prices + Book CTAs float as you scroll) across these groups:
- Pricing (nightly, per guest, 3-night total)
- The View (quality dots, description, balcony, outdoor space)
- The Space (floor, bedrooms, guests, kitchen)
- Building & Access (stairs, noise level bars, keypad entry)
- Booking (instant confirm, no fees, min stay)

**Shared amenities** grid — 8 items every unit includes, so guests don't wonder

**Final CTA section** — dark navy, three book buttons, Field View Loft highlighted in orange as the recommendation

---

**Next steps for Claude Code:**
- Wire the "Book Now" buttons to your actual booking flow
- The `data-highlight` attribute on `#cardsGrid` drives the filter highlight — easy to extend
- The table's `rec-col` class marks the recommended column — swap it to whichever unit you want featured

## User

now design one of the apartment units page

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- unit: Slugger's Suite (2nd floor, direct field view, $300/night)
- booking_widget: Both — sidebar on desktop, inline on mobile
- gallery_style: Full-bleed hero + 2×2 grid beside it (Airbnb-style)
- cross_sell: Yes — cards for the other two units
- reviews: Yes — but placeholder quotes for now
- booking_system: Hospitable (your current system)
- extra_sections: House rules, Check-in / check-out instructions, Cancellation policy, FAQ for this unit
- tone: Warm and personal — host voice, storytelling

## User

go

## User

go

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: update_todos]_

Here's what's on the Slugger's Suite page:

**Top of page**
- Sticky breadcrumb bar with Share / Save / Compare all three actions
- Airbnb-style photo gallery — real hero photo left, 4 labeled placeholder panels right, "Show all 14 photos" button overlaid

**Two-column layout**
- **Left (content):** scrolls naturally through all the detail
- **Right (booking card):** sticky — stays in view as you read

**Content sections, in order:**
1. Unit name + meta row (beds, sleeps, bath, 5.0★ rating)
2. Host intro card (Superhost badge, host-voice copy in 3 paragraphs)
3. **"The View" feature panel** — dark navy callout with the marquee story + 3 quick stats
4. Amenities in 4 groups (Bedroom, Kitchen, Entertainment, Building) with dim rows for what's *not* included (honest)
5. House rules (2 cards)
6. Check-in / check-out strip (3-cell grid)
7. Cancellation policy card (Moderate, free up to 5 days)
8. FAQ — 5 questions using `<details>` accordion, no JS needed
9. Reviews — 5★ aggregate, 3 review cards in a 2-col grid

**Booking card**
- Price + rating, date/guest inputs (Hospitable-ready), "Check Availability" CTA, contact host link, 3-night breakdown, **"Save ~$180 by booking direct"** green callout, trust signals

**Mobile** — booking card moves inline above content; fixed bottom bar with price + CTA persists while scrolling

**Cross-sell** — Bleacher Balcony + Field View Loft cards at the bottom

---

**For Claude Code:** the Bleacher Balcony and Field View Loft pages follow the exact same template — just swap unit name, floor, price, photo, and the "not included" amenity rows.

