import { reviews } from '@/data/reviews'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Guest Reviews — Double Play Wrigleyville',
  description: 'Read what guests say about staying at Double Play, Chicago.',
}

export default function ReviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">From Guests</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
      </div>
    </div>
  )
}
