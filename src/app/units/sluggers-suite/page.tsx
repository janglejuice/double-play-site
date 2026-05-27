import UnitDetailPage from '@/components/UnitDetailPage'
import { getUnit } from '@/data/units'

export async function generateMetadata() {
  const unit = getUnit('sluggers-suite')
  if (!unit) return {}
  return {
    title: `${unit.name} — Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function SluggersSuitePage() {
  return <UnitDetailPage slug="sluggers-suite" />
}
