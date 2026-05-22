import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="text-sm font-black tracking-widest uppercase text-primary mb-2">Double Play</div>
          <div className="text-xs text-secondary">Wrigleyville · Chicago, IL</div>
        </div>
        <div className="flex flex-col gap-2 text-xs text-secondary">
          <Link href="/units/unit-1" className="hover:text-primary transition-colors">Unit 1</Link>
          <Link href="/units/unit-2" className="hover:text-primary transition-colors">Unit 2</Link>
          <Link href="/units/unit-3" className="hover:text-primary transition-colors">Unit 3</Link>
          <Link href="/compare" className="hover:text-primary transition-colors">Compare All</Link>
        </div>
        <div className="flex flex-col gap-2 text-xs text-secondary">
          <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
          <Link href="/neighborhood" className="hover:text-primary transition-colors">Neighborhood</Link>
          <Link href="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <div className="text-xs text-secondary">
          <div className="border border-border px-4 py-2 text-primary tracking-widest text-xs uppercase">
            Book Direct · No Fees
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 text-xs text-muted">
        © {new Date().getFullYear()} Double Play Chicago. All rights reserved.
      </div>
    </footer>
  )
}
