import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Britannia Coaches - Professional Transportation Services UK',
  description: 'Professional coach transportation services across the UK. Corporate events, school trips, weddings, airport transfers, and day trips. 25+ years experience, modern fleet, professional drivers.',
  keywords: 'coach hire, bus hire, transportation, corporate events, school trips, wedding transport, airport transfers, UK transport, professional drivers, luxury coaches, group travel',
  authors: [{ name: 'Britannia Coaches' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Britannia Coaches - Professional Transportation Services UK',
    description: 'Professional coach transportation services across the UK. Corporate events, school trips, weddings, airport transfers, and day trips. 25+ years experience.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Britannia Coaches',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Britannia Coaches - Professional Transportation Services UK',
    description: 'Professional coach transportation services across the UK. 25+ years experience, modern fleet, professional drivers.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}