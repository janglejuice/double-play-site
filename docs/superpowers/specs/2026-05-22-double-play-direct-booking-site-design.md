# Double Play — Direct Booking Site Design Spec

**Date:** 2026-05-22  
**Status:** Approved  

---

## 1. Overview

A custom direct booking website for **Double Play** — three 2-bedroom/1-bathroom apartments located directly across from Wrigley Field in Chicago's Wrigleyville neighborhood. The site drives traffic via Google Vacation Rentals, event-specific SEO, and Google Maps, capturing guests who would otherwise book through Airbnb or VRBO and pay platform fees.

**Primary goals:**
1. Get listed on Google Vacation Rentals (GVR)
2. Convert high-intent event-driven searches into direct bookings
3. Eliminate Airbnb/VRBO service fees for guests (and host commissions) on direct bookings
4. Capture repeat guests via email for future direct marketing

---

## 2. Target Guests

- Cubs fans and sports travelers (primary)
- Concert-goers at Wrigley Field
- General Chicago tourists
- Not targeting business/extended stay

---

## 3. Brand

- **Name:** Double Play
- **Domain:** TBD (e.g. doubleplaywrigley.com or doubleplaychicago.com)
- **Visual style:** Near-black background (#0d0d0d), bold geometric sans-serif (no serifs), wide letter-spacing, minimal sports wording, location-forward copy. Athletic and confident — sports identity comes through in feel, not in explicit sports language.
- **Accent color:** TBD — to be finalized in visual refinement phase (Claude Design)
- **Tone:** Direct, confident, location-proud. No "game day" language, no forced fan-speak.

---

## 4. Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Frontend | Next.js 14 (App Router) | SSG for event/neighborhood pages, SSR for booking |
| Booking engine | Hospitable Direct Premium (7%) | Real-time booking, GVR feed, tax collection + remittance, chargeback protection, $5M damage protection, fraud screening |
| Dynamic pricing | PriceLabs | Continues as-is; Hospitable reads PriceLabs rates |
| Guest automation | Hospitable | Continues as-is for messaging automation; iCal sync keeps Airbnb/VRBO calendars in sync so existing OTA listings remain active |
| Travel insurance upsell | Rental Guardian | Embedded on confirmation page, commission-based |
| Hosting | Vercel | Free tier |
| Domain | Registrar TBD | ~$12/year |

**Why Hospitable Direct Premium over Beds24:**
- Already integrated with existing properties
- Auto tax calculation + remittance (Chicago has stacked city/county/state lodging taxes)
- Built-in chargeback protection, fraud screening, $5M damage protection — no separate tools needed
- GVR certified
- 7% fee on direct bookings only; at ~$40k/year direct bookings ≈ $2,800/year all-in

---

## 5. Site Structure

| Page | Route | Purpose |
|---|---|---|
| Homepage | `/` | Hero + booking panel, unit strip, events, reviews, neighborhood teaser |
| Unit 1 | `/units/unit-1` | Full listing page — photos, description, book button, cross-compare link |
| Unit 2 | `/units/unit-2` | Same |
| Unit 3 | `/units/unit-3` | Same |
| Compare | `/compare` | All 3 units side-by-side |
| Events | `/events` | Cubs schedule + Wrigley concerts with "Book for this date" CTAs |
| Neighborhood | `/neighborhood` | Local guide — bars, restaurants, transit, things to do |
| Reviews | `/reviews` | Aggregated guest reviews |
| FAQ | `/faq` | Check-in, parking, house rules, policies |
| Booking Confirm | `/booking/confirm` | Post-booking confirmation + Rental Guardian insurance upsell |

---

## 6. Homepage Layout

**Above the fold (full viewport height):**
- Near-black background
- Left side (60%): Small spaced-caps location label → large bold headline (location-forward, no sports jargon) → unit photo strip along the bottom edge (3 clickable cards, one per unit)
- Right side (40%): Compact Hospitable Direct booking panel — check-in date, check-out date, unit selector, search button, "No service fees" note below button

**Below the fold (scroll sections):**
1. "Three apartments, one address" — unit overview cards with brief differentiators, links to unit pages
2. Events strip — next 5 upcoming Cubs games + Wrigley concerts, each with "Book for this date" CTA
3. Reviews — 3 featured guest reviews
4. Neighborhood teaser — 4 nearby spots with link to full neighborhood guide
5. Footer — address, contact, all page links, "Book direct and save" badge

---

## 7. Unit Pages

Each of the 3 unit pages includes:
- Full-width photo gallery (professional photos)
- Unit name, floor, and key differentiators (e.g. corner unit, top floor, Wrigley view)
- Hospitable Direct booking widget
- Amenities list
- House rules summary
- Link to Compare page showing all 3 units
- Thumbnail previews of the other 2 units with links

Units are slightly different (floor level, view, layout). Each gets its own page for SEO and to give guests a meaningful choice.

---

## 8. Compare Page

Side-by-side table of all 3 units:
- Photo
- Floor / view
- Key differentiators
- Price (live from Hospitable)
- "Book this unit" button

---

## 9. Events Calendar Page (`/events`)

- Cubs 2025/2026 home game schedule (static JSON file, updated at the start of each season)
- Wrigley Field concerts (manually maintained, updated seasonally)
- Each event shows date, opponent/artist, and a "Book for this weekend" CTA that pre-fills the date picker
- This page is the primary SEO driver for high-intent event searches (e.g. "apartments near Wrigley Cubs June 14")
- Statically generated, revalidated weekly

---

## 10. Neighborhood Guide (`/neighborhood`)

- 8–12 curated spots: bars, restaurants, coffee, transit
- Walking distance noted for each
- Brief description per spot
- Static page, updated manually as needed
- SEO value: ranks for "Wrigleyville neighborhood guide", "things to do near Wrigley Field"

---

## 11. Reviews Page (`/reviews`)

- Manually curated guest reviews (pulled from Airbnb/VRBO for launch, updated as direct reviews come in)
- Star rating, guest name (first name only), review text, date, platform source
- Optionally: Hospitable review aggregation if available

---

## 12. FAQ Page (`/faq`)

Standard accordion FAQ covering:
- Check-in / check-out times and process
- Parking near Wrigley Field
- House rules (noise, guests, pets)
- Cancellation policy
- What's included (linens, kitchen, etc.)
- How to contact host

---

## 13. Checkout & Confirmation Flow

1. Guest selects dates + unit on site → Hospitable Direct booking widget handles payment, tax collection, damage protection, fraud screening
2. On confirmation (`/booking/confirm`): thank-you message + Rental Guardian travel insurance upsell (opt-in, commission to host)
3. Hospitable automation handles all post-booking messaging (check-in instructions, reminders, check-out, review requests)

---

## 14. SEO Strategy

**Structured data:**
- `LodgingBusiness` schema on homepage
- `VacationRental` schema on each unit page
- `Event` schema on events page (linked to Cubs/concert dates)

**GVR listing:** Via Hospitable Direct Premium — Hospitable submits the feed to Google on the host's behalf.

**Google My Business:** Register Double Play at the property address. Shows in Maps for Wrigleyville area searches.

**Google Search Console:** Submit sitemap on launch.

**Key target keywords:**
- "apartments near Wrigley Field" / "Wrigleyville apartments rental"
- "Cubs game rental Chicago" / "rent near Wrigley Cubs [date]"
- "[artist] concert Wrigley Field rental"
- "direct booking Wrigleyville" / "no fees Wrigley rental"

**Content SEO:** Events page updated with each season's schedule. Neighborhood guide targets evergreen local searches.

---

## 15. Traffic Sources

| Source | How |
|---|---|
| Google Vacation Rentals | Hospitable Direct Premium feed |
| Google Search (organic) | SEO — event-specific + neighborhood content |
| Google Maps | Google My Business listing |
| Direct / repeat guests | Email capture at booking, "Book direct & save" messaging |
| Social (optional) | Instagram/TikTok linking to site for game-day content |
| Existing OTA traffic | Airbnb/VRBO listings remain active; direct site captures guests researching independently |

---

## 16. Visual Refinement

Basic layout and structure is defined in this spec. Full visual design — typography scale, exact color palette, spacing, animation, component polish — will be handled separately in Claude Design after site structure is built.

Design direction: **Style B (Athletic & Minimal)** — near-black, bold geometric sans-serif, location-forward copy, no explicit sports language, wide letter-spacing, strong contrast.

---

## 17. Out of Scope

- Mobile app
- Multi-language support (English only for launch)
- Blog / content marketing (consider post-launch)
- Affiliate/referral program
- Owner dashboard beyond what Hospitable provides

---

## 18. Open Items (Pre-Build)

- [ ] Register domain
- [ ] Choose Hospitable Direct Premium plan and enable on all 3 units
- [ ] Sign up for Rental Guardian and get affiliate link/widget
- [ ] Register Google My Business for the property address
- [ ] Confirm unit names/differentiators for Unit 1, 2, 3
- [ ] Provide professional photos

---

## 19. Cost Summary

| Item | Cost |
|---|---|
| Hospitable Direct Premium | 7% of direct booking revenue |
| Rental Guardian | $0 (commission only) |
| Vercel hosting | $0 |
| Domain | ~$12/year |
| PriceLabs | Already paying |
| Hospitable (base) | Already paying |
| **At $40k/yr direct bookings** | **~$2,812/year new spend** |
