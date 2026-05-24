import { faqItems, type FAQItem } from '@/data/faq'

export const metadata = {
  title: 'FAQ — Double Play Wrigleyville',
  description: 'Answers to common questions about staying at Double Play at Wrigley, a 3-apartment vacation rental directly across from Wrigley Field in Chicago.',
}

const categories: Array<FAQItem['category']> = [
  'Booking',
  'Check-in',
  'The Apartments',
  'Groups & Stays',
  'Local & Logistics',
  'Game Day',
]

export default function FAQPage() {
  // Group FAQs by category
  const groupedFAQs = categories.map((cat) => ({
    category: cat,
    items: faqItems.filter((item) => item.category === cat),
  }))

  // Generate FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://doubleplaywrigley.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: 'https://doubleplaywrigley.com/faq',
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="w-full">
        {/* Hero Section */}
        <div className="w-full pt-60 pb-20 px-8" style={{ backgroundColor: '#15375c' }}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-serif text-white mb-6" style={{ fontFamily: "'DM Serif Display'" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white text-opacity-90 leading-relaxed">
              We've hosted hundreds of guests at Double Play. These are the answers to everything you might want to know — booking, check-in, the apartments, getting around, and what to expect on game days.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="w-full bg-white pt-16 pb-20">
          <div className="max-w-2xl mx-auto px-8">
            {groupedFAQs.map((group) => (
              <div key={group.category} className="mb-20">
                {/* Category Heading */}
                <h2
                  className="text-2xl font-serif mb-8 pb-4 border-b"
                  style={{
                    fontFamily: "'DM Serif Display'",
                    color: '#15375c',
                    borderColor: '#e6e8ec',
                  }}
                >
                  {group.category}
                </h2>

                {/* FAQ Items */}
                <div className="space-y-8">
                  {group.items.map((item, idx) => (
                    <div key={idx}>
                      <h3
                        className="text-base font-bold mb-3 leading-relaxed"
                        style={{ color: '#15375c' }}
                      >
                        {item.question}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: '#1c2433' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div
              className="mt-24 pt-16 border-t text-center"
              style={{ borderColor: '#e6e8ec' }}
            >
              <h2
                className="text-2xl font-serif mb-4"
                style={{
                  fontFamily: "'DM Serif Display'",
                  color: '#15375c',
                }}
              >
                Still have questions?
              </h2>
              <p className="text-base mb-6" style={{ color: '#6b7585' }}>
                Message us and we'll get back to you within an hour.
              </p>
              <a
                href="mailto:stay@doubleplaywrigley.com"
                className="inline-block px-8 py-3 text-white text-base font-semibold rounded"
                style={{ backgroundColor: '#E85A2C' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
