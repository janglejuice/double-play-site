import Image from 'next/image'
import Link from 'next/link'
import type { Unit } from '@/data/units'

interface CompareContentProps {
  units: Unit[]
}

// JSON-LD structured data
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://doubleplaywrigley.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Compare',
      'item': 'https://doubleplaywrigley.com/compare'
    }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Are all three apartments in the same building?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. All three units are in the same building at 3601 N Sheffield Ave, directly across from Wrigley Field. Different floors, same front door, same incredible location.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Which apartment is closest to Wrigley Field?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'All three are about a 1-minute walk from the bleacher entrance — we\'re at 3601 N Sheffield Ave, directly across the street. They\'re three units in the same building, so closeness is identical. What varies is the floor: Garden Level, First Floor (up about 12 steps), and Top Floor.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can I book 2 or 3 apartments together?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Block bookings work great for wedding parties, family reunions, fantasy baseball trips, and corporate retreats. With all three booked, you can sleep up to 13 across the building. Message us to coordinate dates and pricing.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Are the apartments identical inside?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Same building, all 2-bedroom 1-bath, but each has its own layout based on the floor. The Catbird Seat (top floor) has 10-foot ceilings and corner-lot bay windows. The other two units have their own characters — full descriptions coming soon.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do all three include the same amenities?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'All three include full kitchens, fast WiFi, smart TVs, central AC, and smart-lock self check-in. Each unit has its own washer/dryer or shared in-building laundry. See each unit page for full amenity lists.'
      }
    }
  ]
}

export default function CompareContent({ units }: CompareContentProps) {
  const useCases = [
    {
      title: 'Best for groups of 5+',
      body: 'The Catbird Seat sleeps 5 in 900 sqft. For larger groups, book multiple units in the same building — we coordinate, and the building can sleep up to 13 across all three apartments.'
    },
    {
      title: 'Best for the view from inside',
      body: 'The Catbird Seat. Corner-lot location with huge bay-style windows in the living room and wraparound windows in the dining area. You watch the Wrigleyville scene from your couch.'
    },
    {
      title: 'Best for couples (or a couple plus friends)',
      body: 'The Catbird Seat. Top floor of the building (quieter, brighter), 10-foot ceilings, soundproofed bedrooms, and enough space for a third or fourth guest if you want company.'
    },
    {
      title: 'Best for Cubs playoffs',
      body: 'All three apartments book fast for postseason — same building, same 1-minute walk to the bleacher entrance. Book early.'
    },
    {
      title: 'Best for remote work',
      body: 'The Catbird Seat has 300 Mbps WiFi and a dedicated workspace. Fast enough for video calls and a real desk if you need one.'
    },
    {
      title: 'Best for skipping the rental car',
      body: 'All three. The Addison Red Line is literally next door — Loop in 15-20 minutes, both airports reachable on CTA. We always recommend skipping the car.'
    }
  ]

  const faqs = [
    {
      q: 'Are all three apartments in the same building?',
      a: 'Yes. All three units are in the same building at 3601 N Sheffield Ave, directly across from Wrigley Field. Different floors, same front door, same incredible location.'
    },
    {
      q: 'Which apartment is closest to Wrigley Field?',
      a: 'All three are about a 1-minute walk from the bleacher entrance — we\'re at 3601 N Sheffield Ave, directly across the street. They\'re three units in the same building, so closeness is identical. What varies is the floor: Garden Level, First Floor (up about 12 steps), and Top Floor.'
    },
    {
      q: 'Can I book 2 or 3 apartments together?',
      a: 'Yes. Block bookings work great for wedding parties, family reunions, fantasy baseball trips, and corporate retreats. With all three booked, you can sleep up to 13 across the building. Message us to coordinate dates and pricing.'
    },
    {
      q: 'Are the apartments identical inside?',
      a: 'Same building, all 2-bedroom 1-bath, but each has its own layout based on the floor. The Catbird Seat (top floor) has 10-foot ceilings and corner-lot bay windows. The other two units have their own characters — full descriptions coming soon.'
    },
    {
      q: 'Do all three include the same amenities?',
      a: 'All three include full kitchens, fast WiFi, smart TVs, central AC, and smart-lock self check-in. Each unit has its own washer/dryer or shared in-building laundry. See each unit page for full amenity lists.'
    }
  ]

  // Mapping for comparison table data
  const comparisonData: Record<string, { bestFor: string; keyFeature: string }> = {
    'sluggers-suite': {
      bestFor: 'Groups who want the closest-to-street energy',
      keyFeature: 'Garden-level entry'
    },
    'bleacher-balcony-flat': {
      bestFor: 'Groups who want the elevated first-floor feel',
      keyFeature: 'First floor, up ~12 steps'
    },
    'catbird-seat': {
      bestFor: 'Groups of up to 5 who want the brightest, quietest unit',
      keyFeature: 'Top floor · 10-ft ceilings · corner-lot bay windows'
    }
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      {/* Hero Section */}
      <section className="bg-primary text-white pt-60 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-widest uppercase mb-6 text-accent font-bold">
            Compare Our 3 Apartments
          </div>
          <h1 className="font-serif text-5xl md:text-6xl mb-8 tracking-tight">
            Which apartment is right for you?
          </h1>
          <p className="text-lg opacity-85 max-w-2xl mx-auto leading-relaxed">
            All three of our apartments are in the same building, directly across from Wrigley Field. Each has its own personality. Here's how to choose.
          </p>
        </div>
      </section>

      {/* 3-Card Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {units.map((unit) => (
              <div key={unit.slug} className="bg-white border border-line shadow-card">
                <div className="relative aspect-video">
                  <Image src={unit.photos[0]} alt={unit.name} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="text-xs text-muted uppercase tracking-widest mb-2">{unit.floor}</div>
                  <div className="text-2xl font-black text-primary mb-2">{unit.name}</div>
                  <div className="text-sm text-ink mb-6 leading-relaxed">{unit.highlight}</div>
                  <div className="text-sm text-muted mb-6">
                    {unit.beds} bed · {unit.baths} bath · Sleeps {unit.sleeps}
                  </div>
                  <ul className="mb-8 space-y-2">
                    {unit.amenities.slice(0, 4).map(a => (
                      <li key={a} className="text-sm text-ink flex gap-3">
                        <span className="text-accent flex-shrink-0">✓</span>{a}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/units/${unit.slug}`}
                    className="block text-center bg-accent text-white text-sm font-bold tracking-widest py-3 hover:opacity-90 transition-opacity"
                  >
                    View & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-bg-soft py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-primary mb-16 text-center">Side-by-side comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary">
                  <th className="text-left text-white font-bold px-5 py-4 text-sm">&nbsp;</th>
                  {units.map(unit => (
                    <th key={unit.slug} className="text-left text-white font-bold px-5 py-4 text-sm">
                      {unit.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Floor', key: 'floor' },
                  { label: 'View', key: 'highlight' },
                  { label: 'Sleeps', key: 'sleeps' },
                  { label: 'Bedrooms', key: 'beds' },
                  { label: 'Bathrooms', key: 'baths' },
                  { label: 'Price per night', key: 'price' },
                  { label: 'Best for', key: 'bestFor' },
                  { label: 'Key feature', key: 'keyFeature' }
                ].map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-bg-soft'}>
                    <td className="font-bold text-ink px-5 py-4 text-sm text-primary">{row.label}</td>
                    {units.map(unit => (
                      <td key={unit.slug} className="px-5 py-4 text-sm text-ink">
                        {row.key === 'price' && (unit.pricePerNight ? `$${unit.pricePerNight}/night` : 'Check availability')}
                        {row.key === 'bestFor' && (comparisonData[unit.slug]?.bestFor || '—')}
                        {row.key === 'keyFeature' && (comparisonData[unit.slug]?.keyFeature || '—')}
                        {row.key === 'floor' && unit.floor}
                        {row.key === 'highlight' && unit.highlight}
                        {row.key === 'sleeps' && unit.sleeps}
                        {row.key === 'beds' && unit.beds}
                        {row.key === 'baths' && unit.baths}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Find Your Fit */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">Find your fit</h2>
            <p className="text-lg text-muted">Quick recommendations based on the most common questions we get.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="p-8 border border-line">
                <h3 className="font-bold text-primary text-lg mb-3">{useCase.title}</h3>
                <p className="text-ink leading-relaxed">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Bookings Callout */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto bg-bg-warm border-2 border-line p-8 md:p-12">
          <h2 className="font-serif text-3xl text-primary mb-4">Booking multiple units for a bigger group?</h2>
          <p className="text-ink text-lg leading-relaxed mb-8">
            We absolutely host larger groups by booking all 3 apartments together — sleeps up to 12. Message us directly and we'll coordinate dates, pricing, and any group requests. Block bookings often get a small direct-booking discount.
          </p>
          <a
            href="mailto:stay@doubleplaywrigley.com"
            className="inline-block bg-accent text-white font-bold px-8 py-3 text-sm tracking-widest hover:opacity-90 transition-opacity"
          >
            Message Us
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bg-soft py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-primary mb-16 text-center">Common questions when choosing</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 border border-line">
                <h3 className="font-bold text-primary text-lg mb-3">{faq.q}</h3>
                <p className="text-ink leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-4">Still not sure? We can help.</h2>
          <p className="text-lg opacity-85 mb-10 leading-relaxed">
            Tell us about your trip and we'll recommend the unit that's right for you. We answer messages within an hour, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:stay@doubleplaywrigley.com"
              className="inline-block bg-accent text-white font-bold px-8 py-3 text-sm tracking-widest hover:opacity-90 transition-opacity"
            >
              Message Us
            </a>
            <a
              href="/#booking"
              className="inline-block border-2 border-white text-white font-bold px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-primary transition-colors"
            >
              Check Availability →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
