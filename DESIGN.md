---
name: Double Play at Wrigley
description: Direct booking site for three Wrigleyville vacation rental apartments across the street from Wrigley Field.
colors:
  navy: "#15375c"
  navy-deep: "#0f2a48"
  navy-ink: "#0b1f36"
  accent: "#E85A2C"
  accent-dark: "#d04a1f"
  ink: "#1c2433"
  muted: "#6b7585"
  line: "#e6e8ec"
  bg: "#ffffff"
  bg-soft: "#f5f6f8"
  bg-warm: "#fdf6f1"
  confirm-green: "#23a06b"
typography:
  display:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Manrope', system-ui, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Manrope', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Manrope', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "'Manrope', system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "17px 16px"
  button-outline-accent:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  card:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "28px"
  card-lg:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.xl}"
    padding: "26px 24px"
  input:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "0 14px"
    height: "48px"
---

# Design System: Double Play at Wrigley

## 1. Overview

**Creative North Star: "The Local's Matchbook"**

Worn, specific, trustworthy. The design feels like something a neighborhood regular hands you with a recommendation scrawled on the back. Not polished to a corporation's shine. Not rustic for rustic's sake. Just confident, genuine, and earned. Every element has a reason to be there — like a sign above a bar that's been in the same spot for 40 years.

The palette pairs deep Wrigley Night Navy against a live Game Day Orange. Two colors that carry the neighborhood. The serif display type (DM Serif Display) shows up at headline scale only — a guest reading the hero before they've even booked. Manrope handles everything else: labels, body, buttons, all in one voice. The system avoids complexity: same two typefaces, same shadow vocabulary, same orange-or-navy button decision, every time.

This system explicitly rejects: corporate hotel chain sterility, Airbnb/VRBO listing-card blankness, cheap vacation rental clutter, and the trendy startup aesthetic (gradient blobs, glassmorphism, tech-bro energy that has nothing to do with a back porch two blocks from an 110-year-old ballpark).

**Key Characteristics:**
- Two typefaces, no exceptions: DM Serif Display (display only) and Manrope (everything else)
- Navy as the dominant brand color; orange reserved for action and emphasis
- Ambient navy-tinted shadows — every surface lifts from the page the same way
- Eyebrow labels in orange uppercase: the system's most recognizable punctuation
- Background cycling: white, bg-soft (#f5f6f8), bg-warm (#fdf6f1), and full navy — each section tells you where you are in the story

## 2. Colors: The Wrigleyville Palette

Two anchors and their supporting cast. Navy owns the brand; orange earns its keep.

### Primary
- **Wrigley Night Navy** (`#15375c`): The brand primary. Section backgrounds, card headings, nav backgrounds, any surface that needs to feel authoritative. The color of the stadium at dusk.
- **Ivy Wall Deep** (`#0f2a48`): One step darker. Used for hover states on navy elements and as a depth variant.
- **Wrigleyville Ink** (`#0b1f36`): The deepest navy. Hero gradient overlays and photo scrims only.

### Secondary
- **Game Day Orange** (`#E85A2C`): The action color. CTAs, eyebrow labels, star icons, badge accents, icon backgrounds, the "Book" button. Never decorative. When orange appears, something is clickable or worth noticing.
- **Dugout Orange** (`#d04a1f`): The hover state for orange elements. Not a new color — just the same orange with the lights on it.

### Tertiary
- **First-Base Green** (`#23a06b`): Used exclusively for live-status indicators (online dot, instant confirmation). One job. Never used for decoration.

### Neutral
- **Night Game Ink** (`#1c2433`): Body text. Warm-black, never pure black.
- **Chalk Line Muted** (`#6b7585`): Secondary text, meta labels, supporting information.
- **Foul Line** (`#e6e8ec`): Borders and dividers. Light, structural.
- **Stadium White** (`#ffffff`): Primary surface. Cards, panels, the booking form.
- **Bleacher Gray** (`#f5f6f8`): Alternating section background. Gives white sections a sibling they can rest against.
- **Postgame Cream** (`#fdf6f1`): Warm-toned background for host-voice callout sections (Why Book Direct). Signals "the host is talking."

### Named Rules
**The One Action Rule.** Orange is the site's action color. It appears on booking buttons, eyebrow labels, and call-to-action links. It does not appear on decorative elements. If a surface is orange and nothing happens when you click it, that's a bug.

**The Navy Background Rule.** When a full-bleed section uses navy as its background, body text becomes white and secondary text becomes `rgba(255,255,255,0.9)`. Orange still means action. The system does not invert to a "dark mode" — the navy section is a deliberate chapter break.

## 3. Typography

**Display Font:** DM Serif Display (with Georgia, serif fallback)
**Body Font:** Manrope (with system-ui, -apple-system, sans-serif fallback)

**Character:** DM Serif Display brings editorial gravitas to hero moments — it's the first impression. Manrope carries everything else with geometric confidence and a slightly warm humanist edge. Together they feel like a neighborhood newspaper that takes design seriously.

### Hierarchy
- **Display** (400 weight, ~64px on desktop / clamp 40-64px, line-height 1.05, letter-spacing -0.01em): Hero section headlines only. The serif is a guest, not a resident — it earns its appearance at the top of the page.
- **Headline** (Manrope 700, 34-40px, line-height 1.2, letter-spacing -0.015em): Section headings and unit names. Tight and confident.
- **Title** (Manrope 700, 18-24px, line-height 1.3, letter-spacing -0.01em): Card titles, event headings, booking panel headers.
- **Body** (Manrope 400-500, 16-17px, line-height 1.55-1.7): All running prose. 65-75ch max-width on containers. Line height 1.7 for longer passages.
- **Label** (Manrope 700-800, 11-13px, letter-spacing 0.16-0.22em, all-caps): Eyebrow labels above section headings, form field labels, trust badge text, booking confirmations. Always uppercase. Orange when it introduces a new section; navy when it labels a form field.

### Named Rules
**The Serif Guest Rule.** DM Serif Display appears at display scale (hero h1, large section callout quotes) and on isolated date numerals in the events section. It does not appear at body or label sizes. No bold weight, no regular body text, no UI labels in the serif.

**The Tight Heading Rule.** All Manrope headings use negative letter-spacing (`-0.01em` to `-0.015em`). Headings that feel loose or default feel like placeholders.

## 4. Elevation

This system uses a single ambient shadow vocabulary, tinted toward the navy brand hue. Shadows are never pure-black drops; they carry the color of the space. Surfaces are flat at rest and lift only when they're interactive containers (cards, panels, tiles) — not for decoration.

### Shadow Vocabulary
- **Shadow Card** (`0 1px 2px rgba(15,42,72,0.04), 0 12px 28px -12px rgba(15,42,72,0.18)`): Used on unit cards, event cards, neighborhood tiles. The primary container shadow. Soft ambient lift.
- **Shadow Panel** (`0 1px 2px rgba(15,42,72,0.06), 0 24px 48px -20px rgba(15,42,72,0.35)`): Used on the hero booking panel and "Save $200+" callout. Heavier directional lift for focal-point containers that need to float above their background.

### Named Rules
**The Navy-Tinted Shadow Rule.** All box-shadows use `rgba(15,42,72,...)` as their color. `rgba(0,0,0,...)` shadows are forbidden. The shadow color is a diluted version of Wrigleyville Ink. If a shadow doesn't read as navy, it's wrong.

**The Two-Shadow Rule.** Every shadow consists of exactly two layers: a tight ambient layer (1-2px spread, very low opacity) and a larger directional layer (negative spread, moderate opacity). Never a single-layer shadow. Never more than two layers.

## 5. Components

### Buttons
Buttons come in two primary roles: the action (orange, for booking and CTAs) and the navigation (navy, for "View Apartment" and secondary actions). A third variant — outline-accent — for secondary CTAs that live adjacent to primary orange buttons.

- **Shape:** Gently curved edges. Primary CTA: 8px radius. Form submit button: 6px radius. Inline outline: 6px radius.
- **Primary (Orange CTA):** Game Day Orange background (`#E85A2C`), white text, Manrope 700, 13-16px. Padding 16px/32px. Letter-spacing 0.005-0.1em depending on whether it's a quiet action or a full-width call to action.
- **Primary Hover:** Dugout Orange (`#d04a1f`). No scale transform — the color shift is the feedback.
- **Navy (Secondary Action):** Wrigley Night Navy background (`#15375c`), white text, Manrope 700, 15px. Used on unit cards' "View Apartment" links. Same feel as primary, different weight.
- **Outline Accent:** White background, Game Day Orange border (`1.5px solid #E85A2C`), orange text. Manrope 700, 14px. Used on "Book for this date" event CTAs when living near orange primary buttons would create too much orange.

### Cards / Containers
- **Unit Cards:** White background, 8px radius, `SHADOW_CARD`. 16/10 image ratio header. Internal padding 28px. Flex column with the CTA pinned to the bottom via `marginTop: auto`.
- **Event Cards:** White background, 14px radius, `SHADOW_CARD`, `1px solid #eef0f3` border. Internal padding 26px/24px. Date block at top uses a nested `#f1f4f9` rounded container.
- **Feature Cards (Why Book Direct):** White background, 14px radius, `1px solid #f0e8e2` border. Warm-cream section context. Icon circle: `rgba(232,90,44,0.12)` background, 24px radius.
- **Booking Panel:** White background, 14px radius, `SHADOW_PANEL`. Navy header bar. Never use `SHADOW_CARD` on the booking panel — it needs the heavier lift.
- **Trust Badge Pills:** White background, `1.5px solid #e6e8ec` border, 999px radius. Manrope 700, 13px, navy text with orange or green accent dot.

### Inputs / Fields
- **Style:** White background, `1.5px solid #e6e8ec` border, 6px radius, 48px height, 14px horizontal padding.
- **Focus:** Border color shifts to navy (`#15375c`). No glow, no shadow — the border color change is the focus indicator.
- **Text:** Manrope 600, 15px, `#1c2433`. Labels above: 11px, 700, 0.16em letter-spacing, uppercase, navy.

### Navigation
- **Background:** Wrigley Night Navy (`#15375c`), full-width.
- **Logo:** Wordmark with `logo-mark.png`. "Double Play" in white Manrope, "at Wrigley" below in DM Serif Display italic.
- **Links:** White, Manrope 600, 15px. Hover: Game Day Orange. Active: Game Day Orange.
- **Mobile:** Collapses to hamburger. Same navy background.

### Eyebrow Labels
The system's most distinctive punctuation. A short uppercase label in orange or navy that precedes a section headline, contextualizing the section before the visitor reads the heading.

- **Style:** Manrope 700-800, 11-13px, letter-spacing 0.18-0.22em, uppercase.
- **Color:** Game Day Orange when introducing a branded section. Navy when it's a functional label (form field, booking panel).
- **Position:** Always above the section headline, margin-bottom 14px.

### Date Display (Events)
A distinctive calendar-tile component using DM Serif Display for the day numeral.

- **Container:** `#f1f4f9` background, 10px radius, centered text, 14px padding.
- **Day-of-week:** Orange, 11px, 800 weight, 0.2em letter-spacing, uppercase.
- **Day numeral:** DM Serif Display, 46px, line-height 1. The one place the serif appears inside a card.
- **Month:** Navy, 11px, 800 weight, 0.2em letter-spacing, uppercase.

### Background Sections (Full-Bleed)
The page cycles through four background registers as guests scroll, each signaling a different chapter:

1. **Stadium White** (`#ffffff`): Default. Primary information.
2. **Bleacher Gray** (`#f5f6f8`): Secondary information, events, neighborhood.
3. **Postgame Cream** (`#fdf6f1`): Host-voice content, "Why Book Direct."
4. **Wrigley Night Navy** (`#15375c`): The city beyond — the "Beyond the Ballpark" moment. Full bleed, white text.

## 6. Do's and Don'ts

### Do:
- **Do** use `SHADOW_CARD` on all card-level containers and `SHADOW_PANEL` on the booking panel. Never swap them.
- **Do** use Game Day Orange for all primary booking CTAs. Every "Book," "Check Availability," "Search," and "Reserve" button is orange.
- **Do** tint all box-shadows with `rgba(15,42,72,...)`. Never pure-black shadows.
- **Do** use DM Serif Display only at display scale (hero headlines, section callouts, date numerals in the events component). Nowhere else.
- **Do** use orange eyebrow labels to open sections. "Why Book Direct," "Beyond the Ballpark," "Upcoming Events" — each gets its label line before the headline.
- **Do** apply negative letter-spacing to all Manrope headings (`-0.01em` to `-0.015em`).
- **Do** write in first-person plural ("we," "our") throughout UI copy. The site speaks as a host, not a platform.
- **Do** cap body text containers at 65-75ch for readability on wide screens.
- **Do** respect `prefers-reduced-motion`: no transitions or animations should fire when this media query is active.
- **Do** use the full-navy section as a deliberate break — the "Beyond the Ballpark" chapter. Don't use it for decorative panels or small UI blocks.

### Don't:
- **Don't** use gradient text (`background-clip: text`). Use a solid color. Emphasis via weight or size only.
- **Don't** use glassmorphism, backdrop-filter, or blurred card effects. The hero background uses a subtle blur behind the image, not behind UI elements.
- **Don't** use `rgba(0,0,0,...)` or pure `#000` in any shadow. All shadows are navy-tinted.
- **Don't** make orange decorative. If an element is orange and not interactive or an eyebrow label, it's wrong.
- **Don't** use the serif typeface at body, label, or UI sizes. DM Serif Display is a headline-only guest.
- **Don't** build side-stripe borders (colored `border-left` wider than 1px used as an accent). If you need to call out a block of content, use background tint or a full border.
- **Don't** create identical card grids. Unit cards, event cards, and "Why Book Direct" cards all have distinct internal structures on purpose.
- **Don't** design like a corporate hotel chain (stiff, interchangeable, no voice). Every section should feel authored by a person who knows the neighborhood.
- **Don't** design like a cheap vacation rental site (discount badge energy, clutter, low-trust feel). Price messaging is honest and specific, never promotional-banner loud.
- **Don't** use trendy startup aesthetics (gradient blobs, neon accents, tech-bro motion effects). The design is warm and direct, not aspirationally cool.
- **Don't** use Airbnb/VRBO platform conventions (listing-card grid, star-rating everywhere, faceless layout). The site's whole reason for existing is to be different from those platforms.
- **Don't** add new typefaces. Manrope and DM Serif Display. No others.
- **Don't** use `border-left` as a colored stripe on callout cards or alert components. Rewrite with full border, background tint, or a leading icon/number.
