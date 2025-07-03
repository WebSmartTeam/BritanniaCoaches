import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Britannia Coaches - Professional Transportation Services",
  description: "Professional coach and bus transportation services across the UK. Reliable, comfortable, and safe travel for all occasions.",
  keywords: "coach hire, bus rental, transportation, UK travel, group transport, Britannia Coaches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}