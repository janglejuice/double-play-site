// Hospitable booking widget — site ID is shared across all units in this account
export const HOSPITABLE_SITE_ID = 'a1d82a3d-16d4-4e5e-9793-6fb5e07758dd'

// Hospitable multi-property search widget identifier
export const HOSPITABLE_SEARCH_IDENTIFIER = '082b3ef6-da76-4027-b7e9-a9c809c82f98'

// Search widget script (loaded once globally)
export const HOSPITABLE_SEARCH_SCRIPT =
  'https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js'

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
    slug: 'the-ivy',
    name: 'The Ivy',
    tagline: 'Half-Basement · 2 BR · Sleeps 4 · 850 sqft · Pet-friendly',
    floor: 'Garden Level (half-basement)',
    highlight: 'Cozy half-basement, soundproofed bedrooms, Walk Score 98',
    description: "The Ivy is the half-basement apartment in our 3-unit building, a 1-minute walk from Wrigley Field in Wrigleyville. Two bedrooms, sleeps four, 850 sqft. Fully equipped kitchen with dishwasher, 300 Mbps WiFi, Smart TV with Live TV, central air conditioning and heat, keypad self check-in, and pets are welcome. Bedrooms have double-pane windows for soundproofing.",
    amenities: [
      'Full kitchen with dishwasher',
      '300 Mbps WiFi',
      'Smart TV with Live TV',
      'Central air conditioning and heat',
      'Keypad self check-in',
      'Hair dryer, shampoo, conditioner, body wash',
      'Iron',
      'Pets welcome',
    ],
    photos: [
      '/The%20Ivy/download%20(3).png',
      '/The%20Ivy/download%20(1).png',
      '/The%20Ivy/download%20(2).png',
      '/The%20Ivy/download%20(4).png',
      '/The%20Ivy/download%20(5).png',
      '/The%20Ivy/download%20(6).png',
      '/The%20Ivy/download%20(7).png',
      '/The%20Ivy/download%20(8).png',
      '/The%20Ivy/download%20(9).png',
      '/The%20Ivy/download%20(10).png',
      '/The%20Ivy/download.png',
      '/The%20Ivy/download.png12.png',
    ],
    beds: 2,
    baths: 1,
    sleeps: 4,
    maxGuests: 4,
    sqft: 850,
    parking: 'Free residential street-parking pass provided (1 per night, not guaranteed)',
    hospitable_property_id: '1932030',
  },
  {
    // Unit 2 — first floor (middle apartment, up about 12 steps from sidewalk since Unit 1 is half-basement). Real listing copy from owner.
    slug: 'the-addison',
    name: 'The Addison',
    tagline: 'First Floor (middle) · 2 BR · Sleeps 5 · 850 sqft · Pet-friendly',
    floor: 'First Floor (middle apartment)',
    highlight: 'Bay windows, central AC, pet-friendly',
    description:
      "The First Floor unit, the middle apartment in our 3-unit building in Wrigleyville, a 1-minute walk from Wrigley Field. The living room has the same tall 10-foot ceilings and huge bay-like windows as the Top Floor, with large windows wrapping the dining area at the corner. New floors went in across the living and dining rooms in 2022. Central air and central heat (not window units). Sleeps 5 with two queen beds, a roll-out twin, and a convertible sleeper couch. 850 sqft. Smart-lock keyless entry, Walk Score 98, and pets are welcome (pet fee applies).",
    amenities: [
      'Full kitchen with dishwasher',
      '300 Mbps WiFi',
      '4K Smart TV with cable',
      'Central A/C and heat',
      'Self check-in (smart lock)',
      'Pets welcome',
      'Free street parking pass',
    ],
    photos: [
      '/The%20Addison/download.png',
      '/The%20Addison/download%20(4).png',
      '/The%20Addison/download%20(5).png',
      '/The%20Addison/download%20(2).png',
      '/The%20Addison/download%20(8).png',
      '/The%20Addison/download%20(1).png',
      '/The%20Addison/download%20(3).png',
      '/The%20Addison/download%20(6).png',
      '/The%20Addison/download%20(7).png',
      '/The%20Addison/download%20(9).png',
      '/The%20Addison/download%20(10).png',
      '/The%20Addison/download%20(11).png',
      '/The%20Addison/download%20(12).png',
      '/The%20Addison/un1it%202.jpg',
    ],
    beds: 2,
    baths: 1,
    sleeps: 5,
    maxGuests: 5,
    sqft: 850,
    parking: 'Free residential street-parking pass provided (1 per night, not guaranteed)',
    hospitable_property_id: '560742', // Bleacher (First Floor / middle unit) Hospitable widget
  },
  {
    // Unit 3 — top floor (2nd floor). Real listing copy from owner.
    slug: 'the-marquee',
    name: 'The Marquee',
    tagline: 'Top Floor · 2 BR / 1 BA · Sleeps 5 · 900 sqft · 1-min walk to Wrigley',
    floor: 'Top Floor (2nd)',
    highlight: 'Corner-lot bay windows · 10-ft ceilings · Walk Score 98',
    description:
      "The Marquee is the top-floor apartment in our 3-unit building in Wrigleyville, a 1-minute walk from Wrigley Field. The living room has huge bay-like windows and the dining area wraps the corner with more large windows, so you get the full Wrigleyville scene from inside the apartment. 10-foot ceilings, two bedrooms with soundproofed double-pane windows for sleep, and roughly 900 sqft that sleeps 5 comfortably. The Addison Red Line and a bus stop are literally next to the building. Smart-lock keyless entry with your own personal code, Walk Score 98. Pets welcome.",
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
      'Pets welcome',
    ],
    photos: [
      '/The%20Marquee/3558%20N%20Wilton%202_001.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_004.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_009.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_015.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_003.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_002.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_005.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_006.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_007.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_008.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_010.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_011.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_012.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_013.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_014.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_016.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_017.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_018.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_019.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_020.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_021.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_022.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_023.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_024.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_025.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_026.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_027.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_028.jpg',
      '/The%20Marquee/3558%20N%20Wilton%202_029.jpg',
    ],
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
