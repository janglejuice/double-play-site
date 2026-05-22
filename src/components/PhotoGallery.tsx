'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PhotoGallery({ photos, name }: { photos: string[], name: string }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden mb-2">
        <Image src={photos[active]} alt={name} fill className="object-cover" priority />
      </div>
      <div className="flex gap-2">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 aspect-video overflow-hidden border-2 transition-colors ${
              i === active ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Image src={photo} alt={`${name} photo ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
