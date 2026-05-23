export type CalendarEvent = {
  date: string
  day: string
  title: string
  type: 'game' | 'concert'
  url?: string
}

export const events: CalendarEvent[] = [
  { date: '2026-05-29', day: 'Fri', title: 'Cubs vs. Reds', type: 'game' },
  { date: '2026-05-30', day: 'Sat', title: 'Cubs vs. Reds', type: 'game' },
  { date: '2026-05-31', day: 'Sun', title: 'Cubs vs. Reds', type: 'game' },
  { date: '2026-06-12', day: 'Fri', title: 'Cubs vs. Cardinals', type: 'game' },
  { date: '2026-06-13', day: 'Sat', title: 'Cubs vs. Cardinals', type: 'game' },
  { date: '2026-06-14', day: 'Sun', title: 'Cubs vs. Cardinals', type: 'game' },
  { date: '2026-07-03', day: 'Fri', title: 'Cubs vs. Brewers', type: 'game' },
  { date: '2026-07-04', day: 'Sat', title: 'Cubs vs. Brewers — July 4th', type: 'game' },
  { date: '2026-07-17', day: 'Fri', title: 'Foo Fighters at Wrigley', type: 'concert' },
  { date: '2026-07-18', day: 'Sat', title: 'Foo Fighters at Wrigley', type: 'concert' },
  { date: '2026-08-14', day: 'Fri', title: 'Cubs vs. White Sox (Crosstown Classic)', type: 'game' },
  { date: '2026-08-15', day: 'Sat', title: 'Cubs vs. White Sox (Crosstown Classic)', type: 'game' },
  { date: '2026-09-04', day: 'Fri', title: 'Pearl Jam at Wrigley', type: 'concert' },
  { date: '2026-09-05', day: 'Sat', title: 'Pearl Jam at Wrigley', type: 'concert' },
]
