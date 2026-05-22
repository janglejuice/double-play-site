import { notFound } from 'next/navigation'
import { units, getUnit } from '@/data/units'
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

  const otherUnits = units.filter(u => u.slug !== unit.slug)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema(unit)) }}
      />

      <div className="text-xs tracking-widest text-muted uppercase mb-4">{unit.floor}</div>
      <h1 className="text-4xl font-black tracking-tight text-primary mb-2">{unit.name}</h1>
      <p className="text-secondary mb-10">{unit.tagline}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <PhotoGallery photos={unit.photos} name={unit.name} />
        <div>
          <p className="text-secondary text-sm leading-relaxed mb-8">{unit.description}</p>
          <div className="mb-8">
            <div className="text-xs tracking-widest text-muted uppercase mb-3">Amenities</div>
            <ul className="grid grid-cols-2 gap-2">
              {unit.amenities.map(a => (
                <li key={a} className="text-xs text-secondary flex items-center gap-2">
                  <span className="text-primary">✓</span> {a}
                </li>
              ))}
            </ul>
          </div>
          <BookingWidget unitId={unit.hospitable_widget_id} />
          <Link href="/compare" className="block text-center text-xs text-muted mt-4 hover:text-secondary transition-colors">
            Compare all three units →
          </Link>
        </div>
      </div>

      <div className="border-t border-border pt-12">
        <div className="text-xs tracking-widest text-muted uppercase mb-6">Other Units</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherUnits.map(u => <UnitCard key={u.slug} unit={u} />)}
        </div>
      </div>
    </div>
  )
}
