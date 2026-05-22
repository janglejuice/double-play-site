import Link from 'next/link'

export const metadata = {
  title: 'Booking Confirmed — Double Play',
}

export default function BookingConfirmPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="text-4xl mb-6">✓</div>
      <h1 className="text-3xl font-black tracking-tight text-primary mb-4">You're booked.</h1>
      <p className="text-secondary mb-12">
        Check your email for confirmation details. You'll hear from us before check-in with everything you need.
      </p>

      <div className="bg-surface border border-border p-8 mb-12 text-left">
        <div className="text-xs tracking-widest text-muted uppercase mb-3">Optional Add-On</div>
        <div className="text-lg font-bold text-primary mb-2">Add Travel Insurance</div>
        <p className="text-sm text-secondary mb-6">
          Protect your trip against cancellations, emergencies, and unexpected delays. Starting from a few dollars per night.
        </p>
        <a
          href="https://rentalguardian.com/AFFILIATE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-bg text-xs font-bold tracking-widest px-6 py-3 hover:bg-primary/90 transition-colors"
        >
          Get Travel Insurance →
        </a>
        <p className="text-xs text-muted mt-3">Opens in a new tab. This is optional and separate from your booking.</p>
      </div>

      <Link href="/" className="text-xs text-muted hover:text-secondary transition-colors">
        ← Back to Double Play
      </Link>
    </div>
  )
}
