import Link from 'next/link'
import Image from 'next/image'
import { Unit } from '@/data/units'

interface UnitCardProps {
  unit: Unit
  showCompareLink?: boolean
}

export default function UnitCard({ unit, showCompareLink = false }: UnitCardProps) {
  return (
    <div className="bg-surface border border-border group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={unit.photos[0]}
          alt={unit.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-xs tracking-widest text-secondary uppercase">{unit.floor}</div>
          <div className="text-sm font-bold text-primary">{unit.highlight}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs tracking-widest text-secondary uppercase mb-1">{unit.name}</div>
        <div className="text-base font-bold text-primary mb-2">{unit.tagline}</div>
        <div className="text-xs text-secondary mb-4">{unit.beds} bed · {unit.baths} bath</div>
        <Link
          href={`/units/${unit.slug}`}
          className="block text-center bg-primary text-bg text-xs font-bold tracking-widest py-3 hover:bg-primary/90 transition-colors"
        >
          View & Book
        </Link>
        {showCompareLink && (
          <Link href="/compare" className="block text-center text-xs text-muted mt-2 hover:text-secondary transition-colors">
            Compare all units
          </Link>
        )}
      </div>
    </div>
  )
}
