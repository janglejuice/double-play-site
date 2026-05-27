import { notFound } from 'next/navigation'
import { units, getUnit, type Unit } from '@/data/units'
import { getUnitDetail } from '@/data/unit-details'
import PhotoGallery from '@/components/PhotoGallery'
import BookingWidget from '@/components/BookingWidget'
import UnitCard from '@/components/UnitCard'
import Link from 'next/link'
import { getVacationRentalSchema } from '@/lib/schema'

interface UnitDetailPageProps {
  slug: string
}

/**
 * Shared template for unit detail pages. Used by the 3 unit-specific page
 * files (sluggers-suite, bleacher-balcony-flat, catbird-seat). Each unit-
 * specific page can replace this with fully custom JSX if its design diverges.
 */
export default function UnitDetailPage({ slug }: UnitDetailPageProps) {
  const unit = getUnit(slug)
  if (!unit) notFound()

  const detail = getUnitDetail(slug)
  if (!detail) notFound()

  const otherUnits: Unit[] = units.filter(u => u.slug !== unit.slug)

  // ── SEO Schemas ──
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://yourdomain.com' },
      { '@type': 'ListItem', position: 2, name: 'Apartments', item: 'https://yourdomain.com/units' },
      { '@type': 'ListItem', position: 3, name: unit.name,    item: `https://yourdomain.com/units/${slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.unitFAQ.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const lodgingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: unit.name,
    description: unit.description,
    url: `https://yourdomain.com/units/${slug}`,
    image: unit.photos.map(p => `https://yourdomain.com${p}`),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    priceRange: unit.pricePerNight ? `$${unit.pricePerNight}` : '$$',
    amenityFeature: unit.amenities.map(a => ({ '@type': 'Text', name: a })),
    numberOfRooms: unit.beds,
    maxOccupancy: unit.sleeps,
    petsAllowed: false,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema(unit)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />

      {/* HERO */}
      <section style={{ backgroundColor: '#15375c', color: '#fff', paddingTop: 240, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.7 }}>
            {unit.floor}
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 56, fontWeight: 400, lineHeight: 1.2, marginBottom: 16, letterSpacing: '-0.02em' }}>
            {detail.heroHeadline}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.9, maxWidth: 600 }}>
            {detail.heroSubhead}
          </p>
        </div>
      </section>

      {/* GALLERY + BOOKING */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <PhotoGallery photos={unit.photos} name={unit.name} />
        </div>
        <div>
          <p style={{ fontSize: 16, color: '#1c2433', lineHeight: 1.7, marginBottom: 32 }}>
            {unit.description}
          </p>
          <BookingWidget propertyId={unit.hospitable_property_id} title={`Book ${unit.name}`} />
          <Link href="/compare" style={{ display: 'block', textAlign: 'center', fontSize: 12, color: '#6b7585', marginTop: 24, textDecoration: 'none' }}>
            Compare all three units →
          </Link>
        </div>
      </section>

      {/* WHAT YOU LOVE */}
      <section style={{ backgroundColor: '#fdf6f1', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, color: '#15375c', marginBottom: 60, textAlign: 'center' }}>
            What you&apos;ll love about this unit
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
            {detail.whatYouLove.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', padding: 32, borderRadius: 8, boxShadow: '0 1px 2px rgba(15,42,72,.04), 0 12px 28px -12px rgba(15,42,72,.18)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#15375c', marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: '#1c2433', lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section style={{ backgroundColor: '#15375c', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, marginBottom: 60, textAlign: 'center' }}>
            This apartment is perfect for
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {detail.idealFor.map((tag, idx) => (
              <div key={idx} style={{ padding: '12px 24px', border: '2px solid #E85A2C', borderRadius: 24, fontSize: 14, fontWeight: 500, color: '#E85A2C' }}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, color: '#15375c', marginBottom: 60, textAlign: 'center' }}>
            What&apos;s in the apartment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
            {detail.amenityGroups.map((group, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#15375c', marginBottom: 16 }}>
                  {group.category}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map((item, i) => (
                    <li key={i} style={{ fontSize: 14, color: '#1c2433', marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: '#E85A2C', fontWeight: 'bold', marginTop: 2 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLAN */}
      <section style={{ backgroundColor: '#f5f6f8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, color: '#15375c', marginBottom: 40, textAlign: 'center' }}>
            The layout
          </h2>
          <p style={{ fontSize: 16, color: '#1c2433', lineHeight: 1.7, marginBottom: 24 }}>
            {detail.floorPlan}
          </p>
          <p style={{ fontSize: 14, color: '#6b7585', fontStyle: 'italic' }}>
            Detailed floor plan available on request. Message us anytime.
          </p>
        </div>
      </section>

      {/* PROXIMITY */}
      <section style={{ backgroundColor: '#0b1f36', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, marginBottom: 60, textAlign: 'center' }}>
            From your front door
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {detail.localProximity.map((loc, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{loc.name}</div>
                <div style={{ fontSize: 13, opacity: 0.8 }}>{loc.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THIS COMPARES */}
      <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, color: '#15375c', marginBottom: 40, textAlign: 'center' }}>
            How this unit compares
          </h2>
          <p style={{ fontSize: 16, color: '#1c2433', lineHeight: 1.7, marginBottom: 60, textAlign: 'center', maxWidth: 880, margin: '0 auto 60px' }}>
            {detail.versusOthers}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {otherUnits.map(u => (
              <div key={u.slug}>
                <UnitCard unit={u} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#fdf6f1', padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, color: '#15375c', marginBottom: 60, textAlign: 'center' }}>
            Questions answered
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {detail.unitFAQ.map((faq, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#15375c', marginBottom: 12 }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: 15, color: '#1c2433', lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#15375c', color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 40, fontWeight: 400, marginBottom: 32 }}>
            Ready to book this unit?
          </h2>
          <Link href="/#booking" style={{ display: 'inline-block', backgroundColor: '#E85A2C', color: '#fff', padding: '16px 48px', borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Check Availability
          </Link>
        </div>
      </section>
    </>
  )
}
