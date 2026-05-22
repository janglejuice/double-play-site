import { spots } from '@/data/neighborhood'

export const metadata = {
  title: 'Wrigleyville Neighborhood Guide — Double Play Chicago',
  description: 'The best bars, restaurants, coffee, and transit near Wrigley Field.',
}

const categories = ['bar', 'restaurant', 'coffee', 'transit', 'other'] as const

export default function NeighborhoodPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">Chicago · Wrigleyville</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">The Neighborhood</h1>

      {categories.map(cat => {
        const catSpots = spots.filter(s => s.category === cat)
        if (catSpots.length === 0) return null
        return (
          <section key={cat} className="mb-12">
            <div className="text-xs tracking-widest text-muted uppercase mb-4 capitalize">{cat}s</div>
            <div className="space-y-4">
              {catSpots.map((spot, i) => (
                <div key={i} className="bg-surface border border-border p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-bold text-primary">{spot.name}</div>
                    <div className="text-xs text-muted">{spot.distance}</div>
                  </div>
                  <p className="text-xs text-secondary">{spot.description}</p>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
