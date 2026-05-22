# Double Play Direct Booking Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a custom Next.js direct booking site for Double Play — 3 Wrigleyville apartments — with Hospitable Direct booking widget, GVR exposure, event-driven SEO, and Rental Guardian upsell.

**Architecture:** Next.js 14 App Router with static generation for content pages (events, neighborhood, FAQ) and a Hospitable Direct embedded widget for real-time booking. All content is driven from static data files — no database needed.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Hospitable Direct widget (embed script), next/metadata for SEO

**Design direction:** Near-black (#0d0d0d) background, bold geometric sans-serif (e.g. Inter or Geist), wide letter-spacing, white/light gray text, single accent color TBD in design phase.

---

## File Map

```
src/
  app/
    layout.tsx                  # Root layout: nav, footer, global font
    page.tsx                    # Homepage
    units/[slug]/page.tsx       # Dynamic unit page (unit-1, unit-2, unit-3)
    compare/page.tsx            # Side-by-side unit comparison
    events/page.tsx             # Cubs schedule + Wrigley concerts
    neighborhood/page.tsx       # Local guide
    reviews/page.tsx            # Guest reviews
    faq/page.tsx                # FAQ accordion
    booking/confirm/page.tsx    # Post-booking confirmation + Rental Guardian
  components/
    NavBar.tsx                  # Site navigation
    Footer.tsx                  # Footer with links + book direct badge
    BookingWidget.tsx           # Hospitable Direct embed wrapper
    UnitCard.tsx                # Unit preview card (photo + key details + CTA)
    EventCard.tsx               # Event row with date, name, book CTA
    ReviewCard.tsx              # Single guest review
    FAQAccordion.tsx            # Accordion item
    PhotoGallery.tsx            # Unit photo gallery
  data/
    units.ts                    # Unit names, descriptions, photo paths, differentiators
    events.ts                   # Static Cubs schedule + concerts JSON
    neighborhood.ts             # Local spots (name, category, distance, description)
    reviews.ts                  # Curated guest reviews
    faq.ts                      # FAQ items (question + answer)
  lib/
    schema.ts                   # JSON-LD schema helpers (LodgingBusiness, VacationRental, Event)
  styles/
    globals.css                 # Tailwind base + custom CSS vars
public/
  images/                       # Property photos (provided by owner)
```

---

## Task 1: Project Scaffold

**Files:** Create all root config files

- [ ] **Scaffold Next.js app**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

- [ ] **Install additional dependencies**

```bash
npm install clsx
```

- [ ] **Set up global CSS variables** in `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0d0d0d;
  --bg-surface: #141414;
  --bg-border: #1f1f1f;
  --text-primary: #f5f5f5;
  --text-secondary: #888888;
  --text-muted: #444444;
  --accent: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
}
```

- [ ] **Update `tailwind.config.ts`** to expose CSS vars as Tailwind colors

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--bg-surface)',
        border: 'var(--bg-border)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Verify build works**

```bash
npm run dev
```

Expected: Site loads at localhost:3000 with default Next.js page.

- [ ] **Commit**

```bash
git init && git add -A && git commit -m "chore: scaffold Next.js project"
```

---

## Task 2: Static Data Files

**Files:** Create `src/data/units.ts`, `events.ts`, `neighborhood.ts`, `reviews.ts`, `faq.ts`

- [ ] **Create `src/data/units.ts`**

```ts
export type Unit = {
  slug: string
  name: string
  tagline: string
  floor: string
  highlight: string
  description: string
  amenities: string[]
  photos: string[]  // paths relative to /public/images/
  beds: number
  baths: number
  hospitable_widget_id: string  // fill in after Hospitable setup
}

export const units: Unit[] = [
  {
    slug: 'unit-1',
    name: 'Unit 1',
    tagline: 'Second floor. Street-level energy.',
    floor: 'Floor 2',
    highlight: 'Closest to the action',
    description: 'A two-bedroom apartment steps from Wrigley Field. Street-level views of the neighborhood, fully equipped kitchen, and everything you need for a game day or a long Chicago weekend.',
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/images/unit1-1.jpg', '/images/unit1-2.jpg', '/images/unit1-3.jpg'],
    beds: 2,
    baths: 1,
    hospitable_widget_id: 'FILL_IN',
  },
  {
    slug: 'unit-2',
    name: 'Unit 2',
    tagline: 'Third floor corner. Extra light, extra space.',
    floor: 'Floor 3',
    highlight: 'Corner unit — windows on two sides',
    description: 'The corner unit on the third floor gets natural light from two directions. Two bedrooms, a full kitchen, and a layout that gives everyone their own space.',
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/images/unit2-1.jpg', '/images/unit2-2.jpg', '/images/unit2-3.jpg'],
    beds: 2,
    baths: 1,
    hospitable_widget_id: 'FILL_IN',
  },
  {
    slug: 'unit-3',
    name: 'Unit 3',
    tagline: 'Top floor. Quieter. Higher up.',
    floor: 'Floor 4',
    highlight: 'Top floor — best views',
    description: 'The top-floor apartment is the quietest of the three and has the best sight lines over the neighborhood. Two bedrooms, full kitchen, all the essentials.',
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/images/unit3-1.jpg', '/images/unit3-2.jpg', '/images/unit3-3.jpg'],
    beds: 2,
    baths: 1,
    hospitable_widget_id: 'FILL_IN',
  },
]

export function getUnit(slug: string): Unit | undefined {
  return units.find(u => u.slug === slug)
}
```

- [ ] **Create `src/data/events.ts`**

```ts
export type CalendarEvent = {
  date: string        // ISO format: "2026-06-14"
  day: string         // "Sat"
  title: string       // "Cubs vs. Cardinals"
  type: 'game' | 'concert'
  url?: string        // optional link to tickets
}

export const events: CalendarEvent[] = [
  { date: '2026-06-12', day: 'Fri', title: 'Cubs vs. White Sox', type: 'game' },
  { date: '2026-06-13', day: 'Sat', title: 'Cubs vs. White Sox', type: 'game' },
  { date: '2026-06-14', day: 'Sun', title: 'Cubs vs. White Sox', type: 'game' },
  // Add full season — update each spring
]
```

- [ ] **Create `src/data/neighborhood.ts`**

```ts
export type Spot = {
  name: string
  category: 'bar' | 'restaurant' | 'coffee' | 'transit' | 'other'
  distance: string   // e.g. "2 min walk"
  description: string
}

export const spots: Spot[] = [
  { name: 'Murphy\'s Bleachers', category: 'bar', distance: '1 min walk', description: 'The classic Wrigley pregame bar. Cold beer, loud crowds, right outside the bleacher entrance.' },
  { name: 'Smoke Daddy', category: 'restaurant', distance: '4 min walk', description: 'BBQ and live music. Great for a post-game meal.' },
  { name: 'Intelligentsia Coffee', category: 'coffee', distance: '6 min walk', description: 'Serious coffee shop on Broadway. Good for slow mornings.' },
  { name: 'Addison Red Line Station', category: 'transit', distance: '3 min walk', description: 'Direct Red Line access to the Loop, O\'Hare, and Midway.' },
]
```

- [ ] **Create `src/data/reviews.ts`**

```ts
export type Review = {
  name: string
  date: string
  rating: number
  text: string
  unit?: string
  source: 'Airbnb' | 'VRBO' | 'Direct'
}

export const reviews: Review[] = [
  {
    name: 'Mike T.',
    date: 'October 2024',
    rating: 5,
    text: 'Incredible location. Walked to every game, came back and could hear the crowd from the apartment. Exactly what we needed for the series.',
    unit: 'Unit 2',
    source: 'Airbnb',
  },
  // Add more reviews
]
```

- [ ] **Create `src/data/faq.ts`**

```ts
export type FAQItem = {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available — message us in advance.',
  },
  {
    question: 'Is parking available near the property?',
    answer: 'Street parking in Wrigleyville is very limited on game days. We recommend using the Addison Red Line station (3 min walk) or booking a spot at one of the nearby parking garages in advance.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Full refund if cancelled more than 7 days before check-in. 50% refund if cancelled 3–7 days before. No refund within 3 days of check-in.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Sorry, no pets.',
  },
  {
    question: 'How do I check in?',
    answer: 'All three units have self check-in via a keypad lock. You\'ll receive the access code in your booking confirmation and a reminder message before arrival.',
  },
  {
    question: 'Is there a noise policy?',
    answer: 'We ask guests to keep noise levels down after 10 PM out of respect for neighbors. This is a residential building.',
  },
]
```

- [ ] **Commit**

```bash
git add src/data && git commit -m "feat: add static data layer for units, events, neighborhood, reviews, faq"
```

---

## Task 3: Shared Components

**Files:** `NavBar.tsx`, `Footer.tsx`, `UnitCard.tsx`, `EventCard.tsx`, `ReviewCard.tsx`, `FAQAccordion.tsx`, `PhotoGallery.tsx`, `BookingWidget.tsx`

- [ ] **Create `src/components/NavBar.tsx`**

```tsx
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-bg/90 backdrop-blur-sm border-b border-border">
      <Link href="/" className="text-sm font-black tracking-widest text-primary uppercase">
        Double Play
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-secondary uppercase">
        <Link href="/units/unit-1" className="hover:text-primary transition-colors">Units</Link>
        <Link href="/compare" className="hover:text-primary transition-colors">Compare</Link>
        <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
        <Link href="/neighborhood" className="hover:text-primary transition-colors">Neighborhood</Link>
        <Link href="/#booking" className="bg-primary text-bg px-4 py-2 text-xs font-bold tracking-widest hover:bg-primary/90 transition-colors">
          Book Direct
        </Link>
      </div>
    </nav>
  )
}
```

- [ ] **Create `src/components/Footer.tsx`**

```tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="text-sm font-black tracking-widest uppercase text-primary mb-2">Double Play</div>
          <div className="text-xs text-secondary">Wrigleyville · Chicago, IL</div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-secondary">
          <Link href="/units/unit-1" className="hover:text-primary transition-colors">Unit 1</Link>
          <Link href="/units/unit-2" className="hover:text-primary transition-colors">Unit 2</Link>
          <Link href="/units/unit-3" className="hover:text-primary transition-colors">Unit 3</Link>
          <Link href="/compare" className="hover:text-primary transition-colors">Compare All</Link>
        </div>
        <div className="flex flex-col gap-2 text-xs text-secondary">
          <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
          <Link href="/neighborhood" className="hover:text-primary transition-colors">Neighborhood</Link>
          <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <div className="text-xs text-secondary">
          <div className="border border-border px-4 py-2 text-primary tracking-widest text-xs uppercase">
            Book Direct · No Fees
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-xs text-muted">
        © {new Date().getFullYear()} Double Play Chicago. All rights reserved.
      </div>
    </footer>
  )
}
```

- [ ] **Create `src/components/BookingWidget.tsx`**

```tsx
'use client'

// Hospitable Direct embed — replace HOSPITABLE_SITE_ID with your actual ID from Hospitable dashboard
// Found under Direct Bookings > Widget Settings

interface BookingWidgetProps {
  unitId?: string   // optional: pre-select a specific unit
  compact?: boolean // compact mode for homepage panel
}

export default function BookingWidget({ unitId, compact = false }: BookingWidgetProps) {
  return (
    <div className={compact ? 'w-full' : 'w-full max-w-md'}>
      {/* Hospitable Direct iframe embed */}
      {/* Replace src with your actual Hospitable Direct booking URL */}
      <iframe
        src={`https://direct.hospitable.com/HOSPITABLE_SITE_ID${unitId ? `?property=${unitId}` : ''}`}
        width="100%"
        height={compact ? '320' : '480'}
        frameBorder="0"
        style={{ border: 'none', background: 'transparent' }}
        title="Book your stay"
      />
      {/* Note: Hospitable may also provide a JS widget — swap iframe for script embed if preferred */}
    </div>
  )
}
```

- [ ] **Create `src/components/UnitCard.tsx`**

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { Unit } from '@/data/units'

interface UnitCardProps {
  unit: Unit
  showCompareLink?: boolean
}

export default function UnitCard({ unit, showCompareLink = false }: UnitCardProps) {
  return (
    <div className="bg-surface border border-border group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={unit.photos[0]}
          alt={unit.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-xs tracking-widest text-secondary uppercase">{unit.floor}</div>
          <div className="text-sm font-bold text-primary">{unit.highlight}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs tracking-widest text-secondary uppercase mb-1">{unit.name}</div>
        <div className="text-base font-bold text-primary mb-2">{unit.tagline}</div>
        <div className="text-xs text-secondary mb-4">{unit.beds} bed · {unit.baths} bath</div>
        <Link
          href={`/units/${unit.slug}`}
          className="block text-center bg-primary text-bg text-xs font-bold tracking-widest py-3 hover:bg-primary/90 transition-colors"
        >
          View & Book
        </Link>
        {showCompareLink && (
          <Link href="/compare" className="block text-center text-xs text-muted mt-2 hover:text-secondary transition-colors">
            Compare all units
          </Link>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Create `src/components/EventCard.tsx`**

```tsx
import Link from 'next/link'
import { CalendarEvent } from '@/data/events'

interface EventCardProps {
  event: CalendarEvent
}

export default function EventCard({ event }: EventCardProps) {
  const bookingUrl = `/units/unit-1?checkin=${event.date}` // links to unit 1 as default

  return (
    <div className="flex items-center justify-between py-4 border-b border-border">
      <div className="flex items-center gap-6">
        <div className="text-center w-12">
          <div className="text-xs text-secondary uppercase tracking-widest">{event.day}</div>
          <div className="text-lg font-bold text-primary">{event.date.split('-')[2]}</div>
        </div>
        <div>
          <div className="text-xs text-secondary uppercase tracking-widest mb-0.5">
            {event.type === 'game' ? '⚾ Cubs Game' : '🎵 Concert'}
          </div>
          <div className="text-sm font-semibold text-primary">{event.title}</div>
        </div>
      </div>
      <Link
        href={bookingUrl}
        className="text-xs font-bold tracking-widest text-bg bg-primary px-4 py-2 hover:bg-primary/90 transition-colors whitespace-nowrap"
      >
        Book This Date
      </Link>
    </div>
  )
}
```

- [ ] **Create `src/components/ReviewCard.tsx`**

```tsx
import { Review } from '@/data/reviews'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-surface border border-border p-6">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-primary text-sm">★</span>
        ))}
      </div>
      <p className="text-sm text-secondary leading-relaxed mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold text-primary">{review.name}</div>
        <div className="text-xs text-muted">{review.date} · {review.source}</div>
      </div>
    </div>
  )
}
```

- [ ] **Create `src/components/FAQAccordion.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { FAQItem } from '@/data/faq'

export default function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold text-primary">{item.question}</span>
        <span className="text-secondary ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-sm text-secondary pb-5 leading-relaxed">{item.answer}</p>
      )}
    </div>
  )
}
```

- [ ] **Create `src/components/PhotoGallery.tsx`**

```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PhotoGallery({ photos, name }: { photos: string[], name: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden mb-2">
        <Image src={photos[active]} alt={name} fill className="object-cover" priority />
      </div>
      <div className="flex gap-2">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 aspect-video overflow-hidden border-2 transition-colors ${
              i === active ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Image src={photo} alt={`${name} photo ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/components && git commit -m "feat: add shared UI components"
```

---

## Task 4: Root Layout + Homepage

**Files:** `src/app/layout.tsx`, `src/app/page.tsx`

- [ ] **Create `src/app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Double Play | Wrigleyville Apartments — Direct Booking',
  description: 'Three private 2-bedroom apartments directly across from Wrigley Field in Chicago. Book direct and skip the service fees.',
  openGraph: {
    title: 'Double Play | Wrigleyville Apartments',
    description: 'Steps from Wrigley Field. Three private apartments, no service fees.',
    url: 'https://yourdomain.com',
    siteName: 'Double Play',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-bg text-primary antialiased">
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Create `src/app/page.tsx`** (Homepage)

```tsx
import Link from 'next/link'
import Image from 'next/image'
import BookingWidget from '@/components/BookingWidget'
import UnitCard from '@/components/UnitCard'
import EventCard from '@/components/EventCard'
import ReviewCard from '@/components/ReviewCard'
import { units } from '@/data/units'
import { events } from '@/data/events'
import { reviews } from '@/data/reviews'
import { spots } from '@/data/neighborhood'
import { getLodgingBusinessSchema } from '@/lib/schema'

export default function HomePage() {
  const upcomingEvents = events.slice(0, 5)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingBusinessSchema()) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex" id="booking">
        {/* Left: Brand + unit strip */}
        <div className="flex-1 flex flex-col justify-between p-10 md:p-16">
          <div className="text-xs tracking-widest text-muted uppercase">
            Wrigleyville · Chicago, IL
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-primary mb-4">
              STEPS FROM<br />THE FIELD.
            </h1>
            <p className="text-secondary text-sm tracking-wide">
              Three private apartments. Zero service fees.
            </p>
          </div>

          {/* Unit photo strip */}
          <div className="grid grid-cols-3 gap-3">
            {units.map((unit) => (
              <Link key={unit.slug} href={`/units/${unit.slug}`} className="group relative aspect-video overflow-hidden bg-surface">
                <Image src={unit.photos[0]} alt={unit.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-xs font-bold text-primary">{unit.name}</div>
                  <div className="text-xs text-secondary">{unit.floor}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Booking panel */}
        <div className="w-72 bg-surface border-l border-border flex flex-col justify-center p-6 hidden md:flex">
          <div className="text-xs tracking-widest text-muted uppercase mb-6">Book Direct</div>
          <BookingWidget compact />
          <p className="text-xs text-muted text-center mt-4">No service fees · Instant confirmation</p>
        </div>
      </section>

      {/* Units overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-xs tracking-widest text-muted uppercase mb-8">Three Apartments</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {units.map((unit) => (
            <UnitCard key={unit.slug} unit={unit} showCompareLink />
          ))}
        </div>
      </section>

      {/* Events strip */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">Upcoming at Wrigley</div>
          <Link href="/events" className="text-xs text-secondary hover:text-primary transition-colors">
            Full schedule →
          </Link>
        </div>
        <div>
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">Guest Reviews</div>
          <Link href="/reviews" className="text-xs text-secondary hover:text-primary transition-colors">
            All reviews →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </section>

      {/* Neighborhood teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">The Neighborhood</div>
          <Link href="/neighborhood" className="text-xs text-secondary hover:text-primary transition-colors">
            Full guide →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {spots.slice(0, 4).map((spot, i) => (
            <div key={i} className="bg-surface border border-border p-4">
              <div className="text-xs text-muted uppercase tracking-widest mb-1">{spot.category}</div>
              <div className="text-sm font-bold text-primary mb-1">{spot.name}</div>
              <div className="text-xs text-muted">{spot.distance}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
```

- [ ] **Verify homepage renders**

```bash
npm run dev
```

Open localhost:3000. Should see hero with left/right layout, unit strip, events, reviews, neighborhood sections.

- [ ] **Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx && git commit -m "feat: homepage with hero, booking panel, and content sections"
```

---

## Task 5: Unit Pages + Compare Page

**Files:** `src/app/units/[slug]/page.tsx`, `src/app/compare/page.tsx`, `src/lib/schema.ts`

- [ ] **Create `src/lib/schema.ts`**

```ts
import { units } from '@/data/units'
import { Unit } from '@/data/units'

const SITE_URL = 'https://yourdomain.com' // update with real domain

export function getLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Double Play',
    description: 'Three private 2-bedroom apartments directly across from Wrigley Field in Chicago.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'YOUR STREET ADDRESS',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60613',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9484,
      longitude: -87.6553,
    },
    numberOfRooms: 3,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Full kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Washer/Dryer', value: true },
    ],
  }
}

export function getVacationRentalSchema(unit: Unit) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: `Double Play — ${unit.name}`,
    description: unit.description,
    url: `${SITE_URL}/units/${unit.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'YOUR STREET ADDRESS',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60613',
      addressCountry: 'US',
    },
    numberOfRooms: unit.beds,
    amenityFeature: unit.amenities.map(a => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
  }
}
```

- [ ] **Create `src/app/units/[slug]/page.tsx`**

```tsx
import { notFound } from 'next/navigation'
import { units, getUnit } from '@/data/units'
import PhotoGallery from '@/components/PhotoGallery'
import BookingWidget from '@/components/BookingWidget'
import UnitCard from '@/components/UnitCard'
import Link from 'next/link'
import { getVacationRentalSchema } from '@/lib/schema'

export function generateStaticParams() {
  return units.map(u => ({ slug: u.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const unit = getUnit(params.slug)
  if (!unit) return {}
  return {
    title: `${unit.name} — Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function UnitPage({ params }: { params: { slug: string } }) {
  const unit = getUnit(params.slug)
  if (!unit) notFound()

  const otherUnits = units.filter(u => u.slug !== unit.slug)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema(unit)) }}
      />

      <div className="text-xs tracking-widest text-muted uppercase mb-4">{unit.floor}</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-2">{unit.name}</h1>
      <p className="text-secondary mb-10">{unit.tagline}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <PhotoGallery photos={unit.photos} name={unit.name} />
        <div>
          <p className="text-secondary text-sm leading-relaxed mb-8">{unit.description}</p>
          <div className="mb-8">
            <div className="text-xs tracking-widest text-muted uppercase mb-3">Amenities</div>
            <ul className="grid grid-cols-2 gap-2">
              {unit.amenities.map(a => (
                <li key={a} className="text-xs text-secondary flex items-center gap-2">
                  <span className="text-primary">✓</span> {a}
                </li>
              ))}
            </ul>
          </div>
          <BookingWidget unitId={unit.hospitable_widget_id} />
          <Link href="/compare" className="block text-center text-xs text-muted mt-4 hover:text-secondary transition-colors">
            Compare all three units →
          </Link>
        </div>
      </div>

      {/* Other units */}
      <div className="border-t border-border pt-12">
        <div className="text-xs tracking-widest text-muted uppercase mb-6">Other Units</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherUnits.map(u => <UnitCard key={u.slug} unit={u} />)}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Create `src/app/compare/page.tsx`**

```tsx
import { units } from '@/data/units'
import Image from 'next/image'
import Link from 'next/link'
import BookingWidget from '@/components/BookingWidget'

export const metadata = {
  title: 'Compare Units — Double Play Wrigleyville',
  description: 'Compare all three Double Play apartments side by side.',
}

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">All Units</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Compare</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {units.map((unit) => (
          <div key={unit.slug} className="bg-surface border border-border">
            <div className="relative aspect-video">
              <Image src={unit.photos[0]} alt={unit.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted uppercase tracking-widest mb-1">{unit.floor}</div>
              <div className="text-lg font-black text-primary mb-1">{unit.name}</div>
              <div className="text-xs text-secondary mb-4">{unit.highlight}</div>
              <div className="text-xs text-secondary mb-1">{unit.beds} bed · {unit.baths} bath</div>
              <ul className="mb-6 space-y-1">
                {unit.amenities.slice(0, 4).map(a => (
                  <li key={a} className="text-xs text-muted flex gap-2">
                    <span className="text-primary">✓</span>{a}
                  </li>
                ))}
              </ul>
              <Link
                href={`/units/${unit.slug}`}
                className="block text-center bg-primary text-bg text-xs font-bold tracking-widest py-3 hover:bg-primary/90 transition-colors"
              >
                View & Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Verify unit pages and compare page**

```bash
npm run dev
```

Visit localhost:3000/units/unit-1, /units/unit-2, /units/unit-3, /compare. All should render without errors.

- [ ] **Commit**

```bash
git add src/app/units src/app/compare src/lib && git commit -m "feat: unit pages and compare page with schema markup"
```

---

## Task 6: Content Pages (Events, Neighborhood, Reviews, FAQ)

**Files:** `src/app/events/page.tsx`, `src/app/neighborhood/page.tsx`, `src/app/reviews/page.tsx`, `src/app/faq/page.tsx`

- [ ] **Create `src/app/events/page.tsx`**

```tsx
import { events } from '@/data/events'
import EventCard from '@/components/EventCard'

export const metadata = {
  title: 'Events at Wrigley Field — Double Play Chicago',
  description: 'Cubs home games and Wrigley Field concerts. Book your apartment for any upcoming event.',
}

const games = events.filter(e => e.type === 'game')
const concerts = events.filter(e => e.type === 'concert')

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Wrigleyville</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Events at Wrigley</h1>

      {games.length > 0 && (
        <section className="mb-16">
          <div className="text-xs tracking-widest text-muted uppercase mb-4">⚾ Cubs Home Games</div>
          {games.map((event, i) => <EventCard key={i} event={event} />)}
        </section>
      )}

      {concerts.length > 0 && (
        <section>
          <div className="text-xs tracking-widest text-muted uppercase mb-4">🎵 Concerts</div>
          {concerts.map((event, i) => <EventCard key={i} event={event} />)}
        </section>
      )}
    </div>
  )
}
```

- [ ] **Create `src/app/neighborhood/page.tsx`**

```tsx
import { spots } from '@/data/neighborhood'

export const metadata = {
  title: 'Wrigleyville Neighborhood Guide — Double Play Chicago',
  description: 'The best bars, restaurants, coffee, and transit near Wrigley Field.',
}

const categories = ['bar', 'restaurant', 'coffee', 'transit', 'other'] as const

export default function NeighborhoodPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Chicago · Wrigleyville</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">The Neighborhood</h1>

      {categories.map(cat => {
        const catSpots = spots.filter(s => s.category === cat)
        if (catSpots.length === 0) return null
        return (
          <section key={cat} className="mb-12">
            <div className="text-xs tracking-widest text-muted uppercase mb-4 capitalize">{cat}s</div>
            <div className="space-y-4">
              {catSpots.map((spot, i) => (
                <div key={i} className="bg-surface border border-border p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-bold text-primary">{spot.name}</div>
                    <div className="text-xs text-muted">{spot.distance}</div>
                  </div>
                  <p className="text-xs text-secondary">{spot.description}</p>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
```

- [ ] **Create `src/app/reviews/page.tsx`**

```tsx
import { reviews } from '@/data/reviews'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Guest Reviews — Double Play Wrigleyville',
  description: 'Read what guests say about staying at Double Play, Chicago.',
}

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">From Guests</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
      </div>
    </div>
  )
}
```

- [ ] **Create `src/app/faq/page.tsx`**

```tsx
import { faqItems } from '@/data/faq'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'FAQ — Double Play Wrigleyville',
  description: 'Answers to common questions about staying at Double Play.',
}

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Got Questions</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">FAQ</h1>
      <div>
        {faqItems.map((item, i) => <FAQAccordion key={i} item={item} />)}
      </div>
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/app/events src/app/neighborhood src/app/reviews src/app/faq && git commit -m "feat: events, neighborhood, reviews, and faq pages"
```

---

## Task 7: Booking Confirmation Page

**Files:** `src/app/booking/confirm/page.tsx`

- [ ] **Create `src/app/booking/confirm/page.tsx`**

```tsx
import Link from 'next/link'

export const metadata = {
  title: 'Booking Confirmed — Double Play',
}

export default function BookingConfirmPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="text-4xl mb-6">✓</div>
      <h1 className="text-3xl font-black tracking-tight text-primary mb-4">You're booked.</h1>
      <p className="text-secondary mb-12">
        Check your email for confirmation details. You'll hear from us before check-in with everything you need.
      </p>

      {/* Rental Guardian travel insurance upsell */}
      <div className="bg-surface border border-border p-8 mb-12 text-left">
        <div className="text-xs tracking-widest text-muted uppercase mb-3">Optional Add-On</div>
        <div className="text-lg font-bold text-primary mb-2">Add Travel Insurance</div>
        <p className="text-sm text-secondary mb-6">
          Protect your trip against cancellations, emergencies, and unexpected delays. Starting from a few dollars per night.
        </p>
        {/*
          Replace href with your actual Rental Guardian affiliate link.
          Sign up at rentalguardian.com to get your affiliate link.
        */}
        <a
          href="https://rentalguardian.com/AFFILIATE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-bg text-xs font-bold tracking-widest px-6 py-3 hover:bg-primary/90 transition-colors"
        >
          Get Travel Insurance →
        </a>
        <p className="text-xs text-muted mt-3">Opens in a new tab. This is optional and separate from your booking.</p>
      </div>

      <Link href="/" className="text-xs text-muted hover:text-secondary transition-colors">
        ← Back to Double Play
      </Link>
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/app/booking && git commit -m "feat: booking confirmation page with Rental Guardian upsell"
```

---

## Task 8: Sitemap + robots.txt

**Files:** `src/app/sitemap.ts`, `src/app/robots.ts`

- [ ] **Create `src/app/sitemap.ts`**

```ts
import { MetadataRoute } from 'next'
import { units } from '@/data/units'

const SITE_URL = 'https://yourdomain.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const unitPages = units.map(u => ({
    url: `${SITE_URL}/units/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/neighborhood`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...unitPages,
  ]
}
```

- [ ] **Create `src/app/robots.ts`**

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

- [ ] **Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts && git commit -m "feat: sitemap and robots.txt"
```

---

## Task 9: Deploy to Vercel

- [ ] **Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/double-play-site.git
git branch -M main
git push -u origin main
```

- [ ] **Deploy on Vercel**
  1. Go to vercel.com → New Project → Import your GitHub repo
  2. Framework: Next.js (auto-detected)
  3. Click Deploy

- [ ] **Add domain**
  1. In Vercel dashboard → Settings → Domains → Add your domain
  2. In your domain registrar (Namecheap/Cloudflare): add the DNS records Vercel provides

- [ ] **Update SITE_URL** in `src/lib/schema.ts` and `src/app/sitemap.ts` with your real domain, commit and push

```bash
git add src/lib/schema.ts src/app/sitemap.ts
git commit -m "chore: set production domain URL"
git push
```

- [ ] **Submit to Google Search Console**
  1. Go to search.google.com/search-console
  2. Add property → URL prefix → enter your domain
  3. Verify via DNS TXT record (Vercel/Cloudflare makes this easy)
  4. Submit sitemap: `yourdomain.com/sitemap.xml`

---

## Open Items (Owner Actions Required Before Build)

- [ ] Register domain (e.g. doubleplaywrigley.com)
- [ ] Set up Hospitable Direct Premium on all 3 units — get widget embed IDs
- [ ] Sign up for Rental Guardian affiliate program — get affiliate link
- [ ] Provide professional photos (named per the paths in `units.ts`)
- [ ] Confirm actual street address (for schema markup)
- [ ] Fill in real Cubs 2026 schedule in `src/data/events.ts`
- [ ] Set up Google My Business at the property address
