import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Britannia Coaches - Professional Transportation Services',
  description: 'Professional coach transportation services across the UK. Corporate events, school trips, weddings, airport transfers, and day trips. 25+ years experience, modern fleet, professional drivers.',
  keywords: 'coach hire, bus hire, transportation, corporate events, school trips, wedding transport, airport transfers, UK transport, professional drivers',
  authors: [{ name: 'Britannia Coaches' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Britannia Coaches - Professional Transportation Services',
    description: 'Professional coach transportation services across the UK. Modern fleet, professional drivers, 25+ years experience.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Britannia Coaches',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Britannia Coaches - Professional Transportation Services',
    description: 'Professional coach transportation services across the UK. Modern fleet, professional drivers, 25+ years experience.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}