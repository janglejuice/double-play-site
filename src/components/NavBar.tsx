import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-bg/90 backdrop-blur-sm border-b border-border">
      <Link href="/" className="text-sm font-black tracking-widest text-primary uppercase">
        Double Play
      </Link>
      <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-secondary uppercase">
        <Link href="/units/unit-1" className="hover:text-primary transition-colors">Units</Link>
        <Link href="/compare" className="hover:text-primary transition-colors">Compare</Link>
        <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
        <Link href="/neighborhood" className="hover:text-primary transition-colors">Neighborhood</Link>
        <Link href="/#booking" className="bg-primary text-bg px-4 py-2 text-xs font-bold tracking-widest hover:bg-primary/90 transition-colors">
          Book Direct
        </Link>
      </div>
    </nav>
  )
}
