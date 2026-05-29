import { manualConcerts, type CalendarEvent } from '@/data/events'

// ─────────────────────────────────────────────────────────────────────────────
// Live "nearby calendar" feed for Wrigley Field events.
//
// Two sources, merged:
//   1. Cubs home games  → MLB Stats API (free, official, no key required, auto)
//   2. Concerts/events   → hand-maintained list in src/data/events.ts (manualConcerts)
//
// The MLB games fetch uses Next.js ISR (revalidate every 12h) so games stay current
// without a redeploy. Concerts are edited by hand a few times a year when Wrigley
// announces its lineup. Both always merge into one sorted calendar.
//
// Optional: if a TICKETMASTER_API_KEY env var is present, Ticketmaster concerts
// also merge in (deduped against the manual list). No key = manual list only, which
// is the intended default. No account or key required for the site to work.
// ─────────────────────────────────────────────────────────────────────────────

const CUBS_TEAM_ID = 112
const REVALIDATE_SECONDS = 43200 // 12 hours
const WRIGLEY_TM_VENUE_ID = process.env.TICKETMASTER_VENUE_ID || 'KovZpZA7AAEA'

function fmtDate(d: Date): string {
  return d.toISOString().split('T')[0]
}

function dayAbbrev(dateStr: string): string {
  // Parse at local noon to avoid timezone date-rollover.
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { weekday: 'short' })
}

// ── Cubs home games via MLB Stats API ─────────────────────────────────────────
async function fetchCubsHomeGames(): Promise<CalendarEvent[]> {
  const today = new Date()
  const end = new Date()
  end.setFullYear(end.getFullYear() + 1)

  const url =
    `https://statsapi.mlb.com/api/v1/schedule` +
    `?sportId=1&teamId=${CUBS_TEAM_ID}` +
    `&startDate=${fmtDate(today)}&endDate=${fmtDate(end)}` +
    `&gameType=R&hydrate=team`

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    if (!res.ok) return []
    const data = await res.json()

    const out: CalendarEvent[] = []
    for (const dateEntry of data?.dates ?? []) {
      for (const game of dateEntry?.games ?? []) {
        // Home games only.
        if (game?.teams?.home?.team?.id !== CUBS_TEAM_ID) continue
        const away = game?.teams?.away?.team
        const opponent = away?.teamName || away?.name || 'TBD'
        out.push({
          date: dateEntry.date,
          day: dayAbbrev(dateEntry.date),
          title: `Cubs vs. ${opponent}`,
          type: 'game',
          logo: away?.id ? `https://www.mlbstatic.com/team-logos/${away.id}.svg` : undefined,
        })
      }
    }
    return out
  } catch {
    return []
  }
}

// ── Concerts/events via Ticketmaster Discovery API ────────────────────────────
async function fetchWrigleyConcerts(): Promise<CalendarEvent[]> {
  const key = process.env.TICKETMASTER_API_KEY
  if (!key) return [] // No key configured → skip; games still load.

  const url =
    `https://app.ticketmaster.com/discovery/v2/events.json` +
    `?apikey=${key}&venueId=${WRIGLEY_TM_VENUE_ID}` +
    `&classificationName=Music&size=50&sort=date,asc`

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } })
    if (!res.ok) return []
    const data = await res.json()

    const out: CalendarEvent[] = []
    for (const ev of data?._embedded?.events ?? []) {
      const date = ev?.dates?.start?.localDate
      if (!date) continue
      out.push({
        date,
        day: dayAbbrev(date),
        title: ev?.name ?? 'Concert at Wrigley',
        type: 'concert',
        url: ev?.url, // deep link to the Ticketmaster listing
      })
    }
    return out
  } catch {
    return []
  }
}

// ── Public: merged, sorted, upcoming-only feed ────────────────────────────────
export async function getUpcomingEvents(): Promise<CalendarEvent[]> {
  const today = fmtDate(new Date())

  // Games are live; concerts come from the hand-maintained list (+ optional TM).
  const [games, tmConcerts] = await Promise.all([fetchCubsHomeGames(), fetchWrigleyConcerts()])

  // Merge manual concerts with any Ticketmaster ones, deduped by date + title.
  const concertKey = (e: CalendarEvent) => `${e.date}::${e.title.toLowerCase().trim()}`
  const concertMap = new Map<string, CalendarEvent>()
  for (const c of [...manualConcerts, ...tmConcerts]) concertMap.set(concertKey(c), c)
  const concerts = Array.from(concertMap.values())

  return [...games, ...concerts]
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
}

// ── Series grouping (collapse consecutive same-opponent games) ────────────────
export type EventSeries = {
  title: string
  opponent: string
  type: 'game' | 'concert'
  startDate: string
  endDate: string
  checkout: string // sensible checkout = day after the last event
  count: number
  url?: string
  logo?: string
}

function addDays(dateStr: string, n: number): string {
  const d = new Date(`${dateStr}T12:00:00`)
  d.setDate(d.getDate() + n)
  return fmtDate(d)
}

/** Collapse a sorted event list into series: consecutive same-title events within ~1 day. */
export function groupIntoSeries(list: CalendarEvent[]): EventSeries[] {
  const out: EventSeries[] = []
  for (const ev of list) {
    const last = out[out.length - 1]
    const gapDays = last
      ? (new Date(`${ev.date}T12:00:00`).getTime() - new Date(`${last.endDate}T12:00:00`).getTime()) / 86400000
      : Infinity
    if (last && last.title === ev.title && last.type === ev.type && gapDays <= 1.5) {
      last.endDate = ev.date
      last.checkout = addDays(ev.date, 1)
      last.count += 1
    } else {
      out.push({
        title: ev.title,
        opponent: ev.title.replace(/^Cubs vs\.\s*/, ''),
        type: ev.type,
        startDate: ev.date,
        endDate: ev.date,
        checkout: addDays(ev.date, 1),
        count: 1,
        url: ev.url,
        logo: ev.logo,
      })
    }
  }
  return out
}
