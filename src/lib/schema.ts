import { Unit } from '@/data/units'

const SITE_URL = 'https://yourdomain.com'

export function getLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Double Play',
    description: 'Three private 2-bedroom apartments directly across from Wrigley Field in Chicago.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3601 N Sheffield Ave',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60613',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9484,
      longitude: -87.6553,
    },
    numberOfRooms: 3,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Full kitchen', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Washer/Dryer', value: true },
    ],
  }
}

export function getVacationRentalSchema(unit: Unit) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: `Double Play — ${unit.name}`,
    description: unit.description,
    url: `${SITE_URL}/units/${unit.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3601 N Sheffield Ave',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60613',
      addressCountry: 'US',
    },
    numberOfRooms: unit.beds,
    amenityFeature: unit.amenities.map(a => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
  }
}
