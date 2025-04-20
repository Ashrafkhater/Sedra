import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sidrah Academy',
  description: 'Learn Quran and Islamic Studies Online',
  keywords: ['Quran', 'Islamic Studies', 'Online Learning', 'Arabic Language'],
  authors: [{ name: 'Sidrah Academy' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
