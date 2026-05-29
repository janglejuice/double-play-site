import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Double Play at Wrigley — Chicago Apartments Near Wrigley Field | Direct Booking',
  description: 'Three private 2-bedroom Chicago vacation rentals directly across from Wrigley Field in Wrigleyville. Book direct and skip the service fees. Steps to Addison Red Line and downtown Chicago.',
  keywords: 'Chicago vacation rentals, Wrigleyville apartments, Wrigley Field rental, Chicago apartments near Wrigley Field, Cubs game rental, direct booking Wrigleyville',
  openGraph: {
    title: 'Double Play at Wrigley — Chicago Apartments Near Wrigley Field',
    description: 'Three private 2-bedroom Chicago vacation rentals steps from Wrigley Field. Book direct, no service fees.',
    url: 'https://doubleplaywrigley.com',
    siteName: 'Double Play at Wrigley',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
