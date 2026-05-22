'use client'

import { useState } from 'react'
import { FAQItem } from '@/data/faq'

export default function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold text-primary">{item.question}</span>
        <span className="text-secondary ml-4">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-sm text-secondary pb-5 leading-relaxed">{item.answer}</p>
      )}
    </div>
  )
}
