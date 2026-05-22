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
  hospitable_widget_id: string
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
