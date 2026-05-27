import UnitDetailPage from '@/components/UnitDetailPage'
import { getUnit } from '@/data/units'

export async function generateMetadata() {
  const unit = getUnit('bleacher-balcony-flat')
  if (!unit) return {}
  return {
    title: `${unit.name} — Double Play Wrigleyville`,
    description: unit.description,
  }
}

export default function BleacherBalconyFlatPage() {
  return <UnitDetailPage slug="bleacher-balcony-flat" />
}
