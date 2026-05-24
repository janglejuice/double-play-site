import { notFound } from 'next/navigation'
import { units, getUnit } from '@/data/units'
import { unitDetails, getUnitDetail } from '@/data/unit-details'
import PhotoGallery from '@/components/PhotoGallery'
import BookingWidget from '@/components/BookingWidget'
import UnitCard from '@/components/UnitCard'
import Link from 'next/link'
import { getVacationRentalSchema } from '@/lib/schema'

export function generateStaticParams() {
  return units.map(u => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const unit = getUnit(slug)
  if (!unit) return {}
  return {
    title: `${unit.name} — Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default async function UnitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const unit = getUnit(slug)
  if (!unit) notFound()

  const detail = getUnitDetail(slug)
  if (!detail) notFound()

  const otherUnits = units.filter(u => u.slug !== unit.slug)

  // SEO schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yourdomain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Apartments',
        item: 'https://yourdomain.com/units',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: unit.name,
        item: `https://yourdomain.com/units/${slug}`,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.unitFAQ.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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
      streetAddress: '3601 N Sheffield Ave',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60613',
      addressCountry: 'US',
    },
    telephone: '+1-xxx-xxx-xxxx',
    priceRange: `$${unit.pricePerNight}`,
    amenityFeature: unit.amenities.map(a => ({
      '@type': 'Text',
      name: a,
    })),
    numberOfRooms: unit.beds,
    maxOccupancy: unit.sleeps,
    petsAllowed: false,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema(unit)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />

      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: '#15375c',
          color: '#ffffff',
          paddingTop: '240px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '880px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              opacity: 0.7,
            }}
          >
            {unit.floor}
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '56px',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {detail.heroHeadline}
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: '600px',
            }}
          >
            {detail.heroSubhead}
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY + BOOKING SIDEBAR */}
      <section
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '60px',
          paddingBottom: '80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
        }}
      >
        <div style={{ gridColumn: 'span 1' }}>
          <PhotoGallery photos={unit.photos} name={unit.name} />
        </div>
        <div style={{ gridColumn: 'span 1' }}>
          <p
            style={{
              fontSize: '16px',
              color: '#1c2433',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            {unit.description}
          </p>
          <BookingWidget unitId={unit.hospitable_widget_id} />
          <Link
            href="/compare"
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '12px',
              color: '#6b7585',
              marginTop: '24px',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Compare all three units →
          </Link>
        </div>
      </section>

      {/* WHAT YOU'LL LOVE */}
      <section
        style={{
          backgroundColor: '#fdf6f1',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              color: '#15375c',
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            What you'll love about this unit
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '48px',
            }}
          >
            {detail.whatYouLove.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '32px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 2px rgba(15,42,72,.04), 0 12px 28px -12px rgba(15,42,72,.18)',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#15375c',
                    marginBottom: '12px',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#1c2433',
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section
        style={{
          backgroundColor: '#15375c',
          color: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            This apartment is perfect for
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
            }}
          >
            {detail.idealFor.map((tag, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 24px',
                  border: '2px solid #E85A2C',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#E85A2C',
                  backgroundColor: 'transparent',
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              color: '#15375c',
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            What's in the apartment
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '48px',
            }}
          >
            {detail.amenityGroups.map((group, idx) => (
              <div key={idx}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#15375c',
                    marginBottom: '16px',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {group.category}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={{
                        fontSize: '14px',
                        color: '#1c2433',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: '#E85A2C', fontWeight: 'bold', marginTop: '2px' }}>•</span>
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
      <section
        style={{
          backgroundColor: '#f5f6f8',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '880px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              color: '#15375c',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            The layout
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#1c2433',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}
          >
            {detail.floorPlan}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#6b7585',
              fontStyle: 'italic',
            }}
          >
            Detailed floor plan available on request — message us anytime.
          </p>
        </div>
      </section>

      {/* PROXIMITY */}
      <section
        style={{
          backgroundColor: '#0b1f36',
          color: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            From your front door
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px',
            }}
          >
            {detail.localProximity.map((loc, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {loc.name}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    opacity: 0.8,
                  }}
                >
                  {loc.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THIS COMPARES */}
      <section
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              color: '#15375c',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            How this unit compares
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#1c2433',
              lineHeight: 1.7,
              marginBottom: '60px',
              textAlign: 'center',
              maxWidth: '880px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {detail.versusOthers}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
            }}
          >
            {otherUnits.map(u => (
              <div key={u.slug}>
                <UnitCard unit={u} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          backgroundColor: '#fdf6f1',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '880px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              color: '#15375c',
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            Questions answered
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {detail.unitFAQ.map((faq, idx) => (
              <div key={idx}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#15375c',
                    marginBottom: '12px',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#1c2433',
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        style={{
          backgroundColor: '#15375c',
          color: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '40px',
              fontWeight: 400,
              marginBottom: '32px',
            }}
          >
            Ready to book this unit?
          </h2>
          <Link
            href="/#booking"
            style={{
              display: 'inline-block',
              backgroundColor: '#E85A2C',
              color: '#ffffff',
              padding: '16px 48px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Check Availability
          </Link>
        </div>
      </section>
    </>
  )
}
