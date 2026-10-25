import type { Metadata } from 'next'
import { Oswald, Figtree } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HighVolumeNotice from '@/components/HighVolumeNotice'
import USAOriginPopup from '@/components/USAOriginPopup'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UNI — Premium Dispensary-Sourced Products',
  description: 'Dispensary-sourced, authenticated & delivered. 35,000+ customers nationwide. Based in California.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${figtree.variable}`}>
      <body className="bg-bg text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <HighVolumeNotice />
        <USAOriginPopup />
      </body>
    </html>
  )
}
