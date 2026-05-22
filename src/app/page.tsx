import Link from 'next/link'
import Image from 'next/image'
import BookingWidget from '@/components/BookingWidget'
import UnitCard from '@/components/UnitCard'
import EventCard from '@/components/EventCard'
import ReviewCard from '@/components/ReviewCard'
import { units } from '@/data/units'
import { events } from '@/data/events'
import { reviews } from '@/data/reviews'
import { spots } from '@/data/neighborhood'

export default function HomePage() {
  const upcomingEvents = events.slice(0, 5)
  const featuredReviews = reviews.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex" id="booking">
        {/* Left: Brand + unit strip */}
        <div className="flex-1 flex flex-col justify-between p-10 md:p-16">
          <div className="text-xs tracking-widest text-muted uppercase">
            Wrigleyville · Chicago, IL
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-primary mb-4">
              STEPS FROM<br />THE FIELD.
            </h1>
            <p className="text-secondary text-sm tracking-wide">
              Three private apartments. Zero service fees.
            </p>
          </div>

          {/* Unit photo strip */}
          <div className="grid grid-cols-3 gap-3">
            {units.map((unit) => (
              <Link key={unit.slug} href={`/units/${unit.slug}`} className="group relative aspect-video overflow-hidden bg-surface">
                <Image src={unit.photos[0]} alt={unit.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-xs font-bold text-primary">{unit.name}</div>
                  <div className="text-xs text-secondary">{unit.floor}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Booking panel */}
        <div className="w-72 bg-surface border-l border-border flex-col justify-center p-6 hidden md:flex">
          <div className="text-xs tracking-widest text-muted uppercase mb-6">Book Direct</div>
          <BookingWidget compact />
          <p className="text-xs text-muted text-center mt-4">No service fees · Instant confirmation</p>
        </div>
      </section>

      {/* Units overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-xs tracking-widest text-muted uppercase mb-8">Three Apartments</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {units.map((unit) => (
            <UnitCard key={unit.slug} unit={unit} showCompareLink />
          ))}
        </div>
      </section>

      {/* Events strip */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">Upcoming at Wrigley</div>
          <Link href="/events" className="text-xs text-secondary hover:text-primary transition-colors">
            Full schedule →
          </Link>
        </div>
        <div>
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">Guest Reviews</div>
          <Link href="/reviews" className="text-xs text-secondary hover:text-primary transition-colors">
            All reviews →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </section>

      {/* Neighborhood teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xs tracking-widest text-muted uppercase">The Neighborhood</div>
          <Link href="/neighborhood" className="text-xs text-secondary hover:text-primary transition-colors">
            Full guide →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {spots.slice(0, 4).map((spot, i) => (
            <div key={i} className="bg-surface border border-border p-4">
              <div className="text-xs text-muted uppercase tracking-widest mb-1">{spot.category}</div>
              <div className="text-sm font-bold text-primary mb-1">{spot.name}</div>
              <div className="text-xs text-muted">{spot.distance}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
