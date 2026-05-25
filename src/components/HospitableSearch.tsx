'use client'

import React from 'react'
import Script from 'next/script'
import { HOSPITABLE_SEARCH_IDENTIFIER, HOSPITABLE_SEARCH_SCRIPT } from '@/data/units'

/**
 * Hospitable Property Search widget.
 *
 * Two usage modes:
 * - Search bar (compact): set `resultsUrl` — renders just the search inputs, redirects to that URL on submit.
 * - Results page (full): omit `resultsUrl` — renders the full results listing.
 *
 * Renders the `<hospitable-direct-mps>` custom element via React.createElement
 * to bypass JSX TypeScript declarations (the custom element is registered at runtime by Hospitable's script).
 */

interface HospitableSearchProps {
  /** If set, the widget is a search bar that redirects to this URL on submit. */
  resultsUrl?: string
}

export default function HospitableSearch({ resultsUrl }: HospitableSearchProps) {
  const elementProps: Record<string, string> = {
    identifier: HOSPITABLE_SEARCH_IDENTIFIER,
    type: 'custom',
  }
  if (resultsUrl) elementProps['results-url'] = resultsUrl

  return (
    <>
      <Script src={HOSPITABLE_SEARCH_SCRIPT} strategy="lazyOnload" />
      {React.createElement('hospitable-direct-mps', elementProps)}
    </>
  )
}
