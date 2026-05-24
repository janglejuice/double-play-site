import { units } from '@/data/units'
import Image from 'next/image'
import Link from 'next/link'
import CompareContent from './compare-content'

export const metadata = {
  title: 'Compare Units — Double Play Wrigleyville',
  description: 'Compare all three Double Play apartments side by side. View features, pricing, and find which apartment is right for your trip to Wrigley Field.',
}

export default function ComparePage() {
  return <CompareContent units={units} />
}
