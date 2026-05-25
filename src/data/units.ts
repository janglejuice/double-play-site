// Hospitable booking widget — site ID is shared across all units in this account
export const HOSPITABLE_SITE_ID = 'a1d82a3d-16d4-4e5e-9793-6fb5e07758dd'

export type Unit = {
  slug: string
  name: string
  tagline: string
  floor: string
  highlight: string
  description: string
  amenities: string[]
  photos: string[]
  beds: number
  baths: number
  sleeps: number
  maxGuests: number
  sqft?: number
  pricePerNight?: number  // optional — Hospitable widget will show real-time pricing
  parking: string
  /** Per-property Hospitable widget ID. `null` until owner sets it up for that unit. */
  hospitable_property_id: string | null
}

export const units: Unit[] = [
  {
    // Unit 1 — half-basement (garden level). Copy to be provided by owner — current values are placeholders.
    slug: 'sluggers-suite',
    name: "The Slugger's Suite",
    tagline: 'Garden Level, 2 Bedrooms, 2 BR · Sleeps 4',
    floor: 'Garden Level (half-basement)',
    highlight: 'Closest to the bleacher entrance',
    description: "The Slugger's Suite is the garden-level apartment in our 3-unit building directly across from Wrigley Field. Two bedrooms, sleeps four. Fully equipped kitchen, fast WiFi, and self check-in. (Full listing copy coming soon — message us for questions.)",
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/sluggers-suite.jpg'],
    beds: 2,
    baths: 1,
    sleeps: 4,
    maxGuests: 4,
    parking: 'Residential street-parking pass provided (max 1 per night)',
    hospitable_property_id: null, // Owner to provide
  },
  {
    // Unit 2 — first floor (up ~12 steps from sidewalk since Unit 1 is half-basement). Copy to be provided.
    slug: 'bleacher-balcony-flat',
    name: 'Bleacher Balcony Flat',
    tagline: 'First Floor (up ~12 steps), 2 BR · Sleeps 4',
    floor: 'First Floor (~12 steps up)',
    highlight: 'Raised first-floor with street-level energy',
    description: 'The Bleacher Balcony Flat is the first-floor unit — about 12 steps up from the sidewalk, since the garden-level apartment sits below. Two bedrooms, sleeps four. Walk out the front door and be at the bleacher entrance in about a minute. (Full listing copy coming soon — message us for questions.)',
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Self check-in'],
    photos: ['/bleacher-balcony-flat.png'],
    beds: 2,
    baths: 1,
    sleeps: 4,
    maxGuests: 4,
    parking: 'Residential street-parking pass provided (max 1 per night)',
    hospitable_property_id: null, // Owner to provide
  },
  {
    // Unit 3 — top floor (2nd floor). Real listing copy from owner.
    slug: 'catbird-seat',
    name: 'The Catbird Seat',
    tagline: 'Top Floor · 2 BR / 1 BA · Sleeps 5 · 900 sqft · 1-min walk to Wrigley',
    floor: 'Top Floor (2nd)',
    highlight: 'Corner-lot bay windows · 10-ft ceilings · Walk Score 98',
    description:
      "The Catbird Seat is the top-floor apartment in our 3-unit building — a 1-minute walk from Wrigley Field, on a corner lot at 3601 N Sheffield Ave. The living room has huge bay-style windows with the dining area windows wrapping the corner, so you get the full Wrigleyville game-day scene from inside the apartment. 10-foot ceilings, two bedrooms with soundproofed double-pane windows, sleeps five, ~900 sqft. Red Line and bus stop are literally next to the building. Smart-lock keyless entry with your own personal code.",
    amenities: [
      'Full kitchen with dishwasher',
      '300 Mbps WiFi',
      '4K HD Smart TV with live TV',
      'Central A/C + heating',
      'In-building washer/dryer',
      'Smart-lock keyless self check-in',
      'Multi-setting rainfall shower',
      'Shampoo, conditioner, body wash provided',
      '2 queen beds + roll-out twin + folding floor mattress',
      'Soundproofed double-pane bedroom windows',
      'Dedicated workspace',
      'Iron, hair dryer',
      'Bed linens, extra pillows & blankets, hangers',
      'Cooking basics (pots, pans, oil, salt, pepper)',
      'Dishes, silverware, cookware',
    ],
    photos: ['/field-view-loft.png'],
    beds: 2,
    baths: 1,
    sleeps: 5,
    maxGuests: 5,
    sqft: 900,
    // pricePerNight intentionally omitted — pricing varies daily, Hospitable widget shows real-time rate
    parking: 'Residential street-parking pass provided (max 1 per night, not guaranteed)',
    hospitable_property_id: '560744',
  },
]

export function getUnit(slug: string): Unit | undefined {
  return units.find(u => u.slug === slug)
}
