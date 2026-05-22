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
  {
    name: 'Sarah K.',
    date: 'August 2024',
    rating: 5,
    text: 'Clean, well-equipped, and the location cannot be beaten. We were at Wrigley in under two minutes. Will absolutely be back.',
    unit: 'Unit 1',
    source: 'Airbnb',
  },
  {
    name: 'James R.',
    date: 'July 2024',
    rating: 5,
    text: 'Top floor unit was quiet and had the best views of the neighborhood. Host was responsive and check-in was seamless.',
    unit: 'Unit 3',
    source: 'VRBO',
  },
  {
    name: 'Carla M.',
    date: 'June 2024',
    rating: 5,
    text: 'We went for a Cubs series and the apartment was perfect for our group of four. Full kitchen, great beds, and everything was spotless.',
    unit: 'Unit 2',
    source: 'Airbnb',
  },
]
