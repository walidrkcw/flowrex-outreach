import type { Metadata } from 'next'
import Script from 'next/script'
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Plausible domain - set NEXT_PUBLIC_PLAUSIBLE_DOMAIN env variable or use 'yourdomain.com'
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'yourdomain.com'

  return (
    <html lang="en">
      <body className={scienceGothic.variable}>{children}</body>
      {plausibleDomain !== 'yourdomain.com' && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </html>
  )
}

