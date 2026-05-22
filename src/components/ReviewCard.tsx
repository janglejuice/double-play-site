import { Review } from '@/data/reviews'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-surface border border-border p-6">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-primary text-sm">★</span>
        ))}
      </div>
      <p className="text-sm text-secondary leading-relaxed mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold text-primary">{review.name}</div>
        <div className="text-xs text-muted">{review.date} · {review.source}</div>
      </div>
    </div>
  )
}
