'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LanguageToggle({ lang, setLang }: { lang: string, setLang: (lang: string) => void }) {
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
      className="px-3 py-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors font-medium"
      aria-label="Toggle language"
    >
      {lang === 'ar' ? 'English' : 'العربية'}
    </motion.button>
  )
}