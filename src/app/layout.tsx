import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'Double Play | Wrigleyville Apartments — Direct Booking',
  description: 'Three private 2-bedroom apartments directly across from Wrigley Field in Chicago. Book direct and skip the service fees.',
  openGraph: {
    title: 'Double Play | Wrigleyville Apartments',
    description: 'Steps from Wrigley Field. Three private apartments, no service fees.',
    url: 'https://yourdomain.com',
    siteName: 'Double Play',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-bg text-primary antialiased">
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
