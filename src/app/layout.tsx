import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Double Play at Wrigley — Direct Booking, No Service Fees',
  description: 'Three private 2-bedroom apartments directly across from Wrigley Field in Chicago. Book direct and skip the service fees.',
  openGraph: {
    title: 'Double Play at Wrigley',
    description: 'Steps from Wrigley Field. Three private apartments, no service fees.',
    url: 'https://yourdomain.com',
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
