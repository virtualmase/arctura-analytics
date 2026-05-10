/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from '@/components/analytics'
import { OrganizationJsonLd, defaultMetadata } from '@/lib/seo'

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#171312',
  colorScheme: 'dark'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap"
        />
      </head>
      {/* eslint-enable @next/next/no-page-custom-font */}
      <body className="bg-bg text-ink antialiased">
        <a href="#content" className="skip-link">Skip to content</a>
        <OrganizationJsonLd />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
