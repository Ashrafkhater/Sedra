import { Inter, Amiri } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })
const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

import WhatsAppButton from '../components/WhatsAppButton'

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const isRtl = params.lang === 'ar';
  
  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={params.lang} className={isRtl ? 'font-amiri' : 'font-poppins'}>
      {children}
      <WhatsAppButton lang={params.lang} />
    </div>
  );
}