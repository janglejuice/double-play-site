export type Spot = {
  name: string
  category: 'bar' | 'restaurant' | 'coffee' | 'transit' | 'other'
  distance: string
  description: string
}

export const spots: Spot[] = [
  { name: "Murphy's Bleachers", category: 'bar', distance: '1 min walk', description: 'The classic Wrigley pregame bar. Cold beer, loud crowds, right outside the bleacher entrance.' },
  { name: 'Goose Island Wrigleyville', category: 'bar', distance: '3 min walk', description: 'Chicago craft beer institution. Great taps and a lively game-day crowd.' },
  { name: 'Smoke Daddy', category: 'restaurant', distance: '4 min walk', description: 'BBQ and live music. Great for a post-game meal.' },
  { name: 'Mia Francesca', category: 'restaurant', distance: '5 min walk', description: 'Neighborhood Italian. Good for a pre-game dinner that is not a sports bar.' },
  { name: 'Intelligentsia Coffee', category: 'coffee', distance: '6 min walk', description: 'Serious coffee shop on Broadway. Good for slow mornings.' },
  { name: 'Addison Red Line Station', category: 'transit', distance: '3 min walk', description: 'Direct Red Line access to the Loop, O\'Hare, and Midway.' },
  { name: 'Clark/Division (Bus)', category: 'transit', distance: '4 min walk', description: 'Multiple bus routes connecting to the rest of Chicago.' },
]
