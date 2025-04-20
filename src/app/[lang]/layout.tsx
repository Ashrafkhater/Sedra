import type { Metadata } from 'next'
import { Inter, Amiri } from 'next/font/google'
// Update the CSS import path to the correct location
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })
const amiri = Amiri({ weight: ['400', '700'], subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'Sedra Academy',
  description: 'Learn Quran, Arabic and Islamic Studies Online',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const isRtl = params.lang === 'ar';
  return (
    <html lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className={isRtl ? amiri.className : inter.className}>
        {children}
      </body>
    </html>
  );
}