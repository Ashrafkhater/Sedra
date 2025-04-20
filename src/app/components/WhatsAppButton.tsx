'use client'
import { useEffect, useState } from 'react'

export default function WhatsAppButton({ lang }: { lang: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const isRtl = lang === 'ar'
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = '201501886908'
  const message = isRtl 
    ? 'مرحباً، أرغب في حجز حصة تجريبية مجانية'
    : 'Hello, I would like to book a free trial session'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-50 flex items-center gap-3 px-4 py-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      aria-label="Contact via WhatsApp"
    >
      <div className="absolute animate-ping w-10 h-10 rounded-full bg-green-400 opacity-75 left-1"></div>
      <svg viewBox="0 0 32 32" className="w-8 h-8 text-white fill-current flex-shrink-0">
        <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.43-.618-1.79-1.624-3.684-1.624-3.684-.4-.8-.806-.705-.806-.705l-1.182-.02c-.14 0-.3.046-.4.214-.275.464-1.09 1.543-1.09 3.75 0 2.21 1.858 4.294 2.113 4.58.27.3 3.72 6.66 9.06 9.312a48.42 48.42 0 0 0 3.624 1.49c.5.187.947.26 1.326.26a4.43 4.43 0 0 0 1.08-.132c.975-.26 3.582-1.474 4.072-2.863.5-1.37.5-2.556.35-2.82-.143-.275-.558-.413-.974-.55z"/>
        <path d="M16.002 3c-7.173 0-13.002 5.83-13.002 13.002 0 2.3.59 4.478 1.75 6.39l-1.725 5.133c-.116.348-.022.726.212.96a.936.936 0 0 0 .961.212l5.254-1.75a13.042 13.042 0 0 0 6.55 1.75c7.173 0 13.002-5.83 13.002-13.002 0-7.173-5.83-13.002-13.002-13.002zm0 23.5a10.5 10.5 0 0 1-5.33-1.45c-.225-.132-.492-.172-.745-.093l-3.682 1.228 1.23-3.682a1.17 1.17 0 0 0-.094-.747A10.5 10.5 0 1 1 16.002 26.5z"/>
      </svg>
      <span className="text-white font-medium whitespace-nowrap">
        {isRtl ? 'احجز حصة مجانية الآن' : 'Book a free session now'}
      </span>
    </a>
  )
}