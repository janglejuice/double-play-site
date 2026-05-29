export type CalendarEvent = {
  date: string
  day: string
  title: string
  type: 'game' | 'concert'
  url?: string
  logo?: string // opponent team logo URL (games only)
}

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL CONCERTS & EVENTS at Wrigley Field.
//
// Cubs home games come live from the MLB Stats API (see src/lib/schedule.ts).
// Concerts/comedy/special events have no good keyless API, so we maintain them
// by hand here. Wrigley announces its lineup in batches each spring — when a new
// tour drops, add a row below. Multi-night runs: add one row per date with the
// SAME title; the series grouping collapses them into one card automatically.
//
// Source: mlb.com/cubs/tickets/concerts
// ─────────────────────────────────────────────────────────────────────────────
export const manualConcerts: CalendarEvent[] = [
  { date: '2026-06-11', day: 'Thu', title: 'Mumford & Sons',      type: 'concert' },
  { date: '2026-06-12', day: 'Fri', title: 'RÜFÜS DU SOL',         type: 'concert' },
  { date: '2026-07-11', day: 'Sat', title: 'John Mulaney',         type: 'concert' },
  { date: '2026-07-12', day: 'Sun', title: 'Tyler Childers',       type: 'concert' },
  { date: '2026-07-14', day: 'Tue', title: 'Noah Kahan',           type: 'concert' },
  { date: '2026-07-15', day: 'Wed', title: 'Noah Kahan',           type: 'concert' },
  { date: '2026-07-24', day: 'Fri', title: 'The Savannah Bananas', type: 'concert' },
  { date: '2026-07-25', day: 'Sat', title: 'The Savannah Bananas', type: 'concert' },
  { date: '2026-07-26', day: 'Sun', title: 'The Savannah Bananas', type: 'concert' },
]

// Kept for backwards-compat / fallback seed. Concerts now live in manualConcerts.
export const events: CalendarEvent[] = [...manualConcerts]
