'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero({ lang }: { lang: string }) {
  const containerRef = useRef(null)

  // ✅ تعريف وحيد بدون تكرار
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const isArabic = lang === 'ar'

  return (
    <div ref={containerRef} className={`relative min-h-[70vh] overflow-hidden bg-white ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-20 ${isArabic ? 'left-20' : 'right-20'} w-96 h-96 rounded-full bg-emerald-50/50`} />
        <div className={`absolute bottom-10 ${isArabic ? 'left-40' : 'right-40'} w-64 h-64 rounded-full border-[40px] border-emerald-100/30`} />
        <div className={`absolute top-40 ${isArabic ? 'left-60' : 'right-60'} w-20 h-20 rounded-full bg-emerald-100/20`} />
        <svg className={`absolute top-0 ${isArabic ? 'left-0' : 'right-0'} text-emerald-50`} width="400" height="400" viewBox="0 0 200 200">
          <path fill="currentColor" d="M 0 100 C 0 0, 100 0, 100 100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/20 text-sm font-medium text-slate-600">
                {isArabic ? 'رحلة روحانية مميزة' : 'A Spiritual Learning Experience'}
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.4] tracking-normal bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-4 py-2"
              style={{ 
                fontFamily: 'Noto Kufi Arabic, Amiri, serif',
                lineHeight: isArabic ? '1.4' : '1.2'
              }}
            >
              {isArabic ? 'تعلم القرآن الكريم' : 'Learn Holy Quran'}
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed mb-6">
              {isArabic
                ? 'تعلم القرآن الكريم في أي وقت وأي مكان مع منصة تعليمية متخصصة، تحت إشراف نخبة من المعلمين المؤهلين.'
                : 'Learn the Holy Quran anytime, anywhere through a specialized educational platform guided by top qualified teachers.'}
            </p>

            <div className="flex gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-white text-base font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-200/20"
              >
                {isArabic ? 'ابدأ الآن' : 'Start Now'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 text-emerald-700 text-base font-medium rounded-lg border-2 border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
              >
                {isArabic ? 'تعرف علينا' : 'About Us'}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-emerald-50/40 to-transparent" />
            <motion.div
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-4/5"
            >
              <img
                src="/images/hero-quran.png"
                alt="تعلم القرآن الكريم"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
