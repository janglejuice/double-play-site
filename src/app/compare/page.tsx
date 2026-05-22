import { units } from '@/data/units'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Compare Units — Double Play Wrigleyville',
  description: 'Compare all three Double Play apartments side by side.',
}

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-xs tracking-widest text-muted uppercase mb-4">All Units</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-12">Compare</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {units.map((unit) => (
          <div key={unit.slug} className="bg-surface border border-border">
            <div className="relative aspect-video">
              <Image src={unit.photos[0]} alt={unit.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted uppercase tracking-widest mb-1">{unit.floor}</div>
              <div className="text-lg font-black text-primary mb-1">{unit.name}</div>
              <div className="text-xs text-secondary mb-4">{unit.highlight}</div>
              <div className="text-xs text-secondary mb-4">{unit.beds} bed · {unit.baths} bath</div>
              <ul className="mb-6 space-y-1">
                {unit.amenities.slice(0, 4).map(a => (
                  <li key={a} className="text-xs text-muted flex gap-2">
                    <span className="text-primary">✓</span>{a}
                  </li>
                ))}
              </ul>
              <Link
                href={`/units/${unit.slug}`}
                className="block text-center bg-primary text-bg text-xs font-bold tracking-widest py-3 hover:bg-primary/90 transition-colors"
              >
                View & Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
