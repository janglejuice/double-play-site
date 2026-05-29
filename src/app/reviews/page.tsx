import { reviews } from '@/data/reviews'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Guest Reviews — Double Play Wrigleyville',
  description: 'Read what guests say about staying at Double Play, Chicago.',
}

// Theme card component
function ThemeCard({
  icon,
  title,
  text,
  quote,
  author,
}: {
  icon: string
  title: string
  text: string
  quote: string
  author: string
}) {
  return (
    <div className="space-y-4">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-accent">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold" style={{ color: '#1c2433' }} mb-2>{title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#1c2433' }}>{text}</p>
        <p className="text-sm italic" style={{ fontFamily: 'var(--font-serif)', color: '#1c2433' }}>
          "{quote}"
        </p>
        <p className="text-xs mt-2" style={{ color: '#6b7585' }}>— {author}</p>
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            reviews.map((r) => ({
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'LodgingBusiness',
                name: 'Double Play at Wrigley',
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: r.rating,
                bestRating: 5,
              },
              author: {
                '@type': 'Person',
                name: r.name,
              },
              reviewBody: r.text,
              datePublished: r.date,
              publisher: {
                '@type': 'Organization',
                name: r.source,
              },
            }))
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: 'Reviews',
                item: 'https://doubleplaywrigley.com/reviews',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="text-white pt-60 pb-24 px-6"
        style={{ backgroundColor: '#15375c' }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-4" style={{ opacity: 0.85 }}>Guest Reviews</div>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What guests say about staying with us.
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.85 }}>
            Real reviews from real guests across Airbnb, VRBO, and our direct-booking site. We've hosted
            hundreds of stays at Double Play — Cubs fans, concert weekenders, families, and everyone in
            between. Here's what they tell us.
          </p>
        </div>
      </section>

      {/* What Guests Love Most Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            style={{ fontFamily: 'var(--font-serif)', color: '#1c2433' }}
          >
            What guests love most
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <ThemeCard
              icon="📍"
              title="Location, location, location."
              text="Almost every review mentions one thing first: how close we are. Across the street from Wrigley means a 30-second walk to the bleacher entrance. No Ubers. No parking. No traffic."
              quote="We walked out the front door and were in our seats in four minutes flat."
              author="Jorn C."
            />

            <ThemeCard
              icon="✨"
              title="Spotless and ready when you arrive."
              text="Every apartment is professionally cleaned between every stay. Fresh linens, fully stocked kitchen, sparkling bathrooms — the basics done right, every time."
              quote="Spotless apartment, easy keypad entry, and great recommendations."
              author="Jonn N."
            />

            <ThemeCard
              icon="👋"
              title="A real person on the other side."
              text="Booking direct means you're talking to us, not a call center. We answer messages within the hour, every day. Local recommendations, custom requests, and game-day tips included."
              quote="Booking direct was easy. Confirmation came through in seconds and there were no surprise fees."
              author="Jane C."
            />
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f5f6f8' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: 'var(--font-serif)', color: '#1c2433' }}
          >
            Every review, in their own words
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Strip */}
      <section className="py-16 px-6" style={{ backgroundColor: '#fdf6f1' }}>
        <div className="max-w-2xl mx-auto border rounded-lg p-8" style={{ borderColor: '#e6e8ec' }}>
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)', color: '#1c2433' }}>
            About these reviews
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#1c2433' }}>
            These reviews come from guests who booked through Airbnb, VRBO, and directly with us. We
            curate the ones we display, but every review is real and verifiable on the original platform.
            If you'd like to see our full review history on Airbnb or VRBO, message us and we'll send the
            links.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#15375c' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Become our next happy guest.
          </h2>
          <p className="text-lg leading-relaxed text-white mb-8" style={{ opacity: 0.9 }}>
            Book direct, save the platform fees, and get the same warm welcome our guests rave about.
          </p>
          <a
            href="/#booking"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#E85A2C' }}
          >
            Check Availability →
          </a>
        </div>
      </section>
    </main>
  )
}
