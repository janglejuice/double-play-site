export type CalendarEvent = {
  date: string
  day: string
  title: string
  type: 'game' | 'concert'
  url?: string
}

export const events: CalendarEvent[] = [
  { date: '2026-06-12', day: 'Fri', title: 'Cubs vs. White Sox', type: 'game' },
  { date: '2026-06-13', day: 'Sat', title: 'Cubs vs. White Sox', type: 'game' },
  { date: '2026-06-14', day: 'Sun', title: 'Cubs vs. White Sox', type: 'game' },
  { date: '2026-07-04', day: 'Sat', title: 'Cubs vs. Cardinals', type: 'game' },
  { date: '2026-07-05', day: 'Sun', title: 'Cubs vs. Cardinals', type: 'game' },
  { date: '2026-08-14', day: 'Fri', title: 'Billy Joel at Wrigley', type: 'concert' },
  { date: '2026-08-15', day: 'Sat', title: 'Billy Joel at Wrigley', type: 'concert' },
  { date: '2026-09-25', day: 'Fri', title: 'Cubs vs. Brewers', type: 'game' },
  { date: '2026-09-26', day: 'Sat', title: 'Cubs vs. Brewers', type: 'game' },
  { date: '2026-09-27', day: 'Sun', title: 'Cubs vs. Brewers', type: 'game' },
]
