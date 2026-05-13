import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const _dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Valley Pressure Washing | Quispamsis, NB',
  description:
    'Professional pressure washing services in Quispamsis and the Greater Saint John area. House washing, window washing, and commercial washing.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#1a2e4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
