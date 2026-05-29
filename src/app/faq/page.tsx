import type { Metadata } from 'next'
import { faqItems } from '@/data/faq'
import FaqInteractive from './FaqInteractive'

export const metadata: Metadata = {
  title: 'FAQ — Double Play at Wrigley | Wrigleyville Vacation Rental Apartments Chicago',
  description:
    'Answers to every question about staying at Double Play at Wrigley. Check-in at 4 PM, self check-in via keypad, all three units allow pets, no parties. Three 2-bedroom apartments at the corner of Wilton Avenue and Addison Street, directly across from Wrigley Field in Chicago.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doubleplaywrigley.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ',  item: 'https://doubleplaywrigley.com/faq' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqInteractive />
    </>
  )
}
