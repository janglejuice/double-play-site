export type Review = {
  name: string
  initials: string
  date: string
  rating: number
  text: string
  unit: string
  source: 'Airbnb' | 'VRBO' | 'Direct'
}

export const reviews: Review[] = [
  {
    name: 'Jorn Corara',
    initials: 'JC',
    date: 'October 2024',
    rating: 5,
    text: 'Location is unreal. We walked out the front door and were in our seats in four minutes flat. Skipping the platform fees made it cheaper than the hotel a block over.',
    unit: "Slugger's Suite",
    source: 'Airbnb',
  },
  {
    name: 'Jane Cenare',
    initials: 'JC',
    date: 'August 2024',
    rating: 5,
    text: 'Booking direct was easy. Confirmation came through in seconds and there were no surprise fees at checkout. The balcony view during the seventh-inning stretch was unreal.',
    unit: 'Bleacher Balcony Flat',
    source: 'Airbnb',
  },
  {
    name: 'Jonn Neviar',
    initials: 'JN',
    date: 'July 2024',
    rating: 5,
    text: 'Came in for a concert weekend. Spotless apartment, easy keypad entry, and great recommendations from the host for the best deep dish nearby. We will be back.',
    unit: 'The Catbird Seat',
    source: 'VRBO',
  },
  {
    name: 'Fernanda Ruiz',
    initials: 'FR',
    date: 'June 2024',
    rating: 5,
    text: 'Three couples, two bedrooms, one big living room. Perfect for a weekend in Wrigleyville. Comparing the direct rate to the listing apps literally saved us $214 over three nights.',
    unit: "Slugger's Suite",
    source: 'Airbnb',
  },
]
