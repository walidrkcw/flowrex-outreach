import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const scienceGothic = localFont({
  src: '../../Science_Gothic/ScienceGothic-VariableFont_CTRS,slnt,wdth,wght.ttf',
  variable: '--font-science-gothic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flowrex - AI Automation Systems',
  description: 'AI-driven SDR systems that qualify leads and book meetings automatically',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={scienceGothic.variable}>{children}</body>
    </html>
  )
}

