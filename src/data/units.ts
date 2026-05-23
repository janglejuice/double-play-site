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
  pricePerNight: number
  parking: string
  hospitable_widget_id: string
}

export const units: Unit[] = [
  {
    slug: 'sluggers-suite',
    name: "The Slugger's Suite",
    tagline: 'Second Floor, 2 Bedrooms, Sleeps 4, Direct Field View from Window.',
    floor: 'Second Floor',
    highlight: 'Direct Field View from Window',
    description: "The Slugger's Suite sits on the second floor directly across from Wrigley Field. Two bedrooms, sleeps four, with a direct field view from the living room window. Fully equipped kitchen, fast WiFi, and self check-in.",
    amenities: ['Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/sluggers-suite.jpg'],
    beds: 2,
    baths: 1,
    sleeps: 4,
    pricePerNight: 300,
    parking: 'Street parking · Garage 2 min walk',
    hospitable_widget_id: 'FILL_IN',
  },
  {
    slug: 'bleacher-balcony-flat',
    name: 'Bleacher Balcony Flat',
    tagline: 'First Floor, 2 Bedrooms, Sleeps 4, Partial Field View with Private Balcony.',
    floor: 'First Floor',
    highlight: 'Private Balcony with Partial Field View',
    description: 'The Bleacher Balcony Flat is on the first floor with a private balcony and partial field view. Two bedrooms, sleeps four. Walk out your door and be at the gates in under two minutes.',
    amenities: ['Private balcony', 'Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Self check-in'],
    photos: ['/bleacher-balcony-flat.png'],
    beds: 2,
    baths: 1,
    sleeps: 4,
    pricePerNight: 175,
    parking: 'Street parking · Garage 2 min walk',
    hospitable_widget_id: 'FILL_IN',
  },
  {
    slug: 'field-view-loft',
    name: 'Field View Loft',
    tagline: 'Third Floor, 2 Bedrooms, Sleeps 4, Panoramic Field and City View.',
    floor: 'Third Floor',
    highlight: 'Panoramic Field and City View',
    description: 'The Field View Loft is the top-floor apartment with panoramic views of Wrigley Field and the Chicago skyline. Two bedrooms, sleeps four, and the best vantage point of all three units.',
    amenities: ['Panoramic views', 'Full kitchen', 'Fast WiFi', 'Smart TV', 'Central A/C', 'Washer/Dryer', 'Self check-in'],
    photos: ['/field-view-loft.png'],
    beds: 2,
    baths: 1,
    sleeps: 4,
    pricePerNight: 200,
    parking: 'Street parking · Garage 2 min walk',
    hospitable_widget_id: 'FILL_IN',
  },
]

export function getUnit(slug: string): Unit | undefined {
  return units.find(u => u.slug === slug)
}
