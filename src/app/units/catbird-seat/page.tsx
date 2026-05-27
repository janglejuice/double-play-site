import UnitDetailPage from '@/components/UnitDetailPage'
import { getUnit } from '@/data/units'

export async function generateMetadata() {
  const unit = getUnit('catbird-seat')
  if (!unit) return {}
  return {
    title: `${unit.name} — Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function CatbirdSeatPage() {
  return <UnitDetailPage slug="catbird-seat" />
}
