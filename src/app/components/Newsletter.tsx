'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Newsletter({ lang }: { lang: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/islamic-pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-[#054a29] dark:text-white sm:text-4xl mb-4"
          >
            {lang === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            {lang === 'ar'
              ? 'احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني'
              : 'Get the latest news and updates directly in your inbox'}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Your email'}
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#054a29] dark:focus:ring-[#FFD700] focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'loading'}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                status === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-[#054a29] hover:bg-[#043d22]'
              } text-white`}
            >
              {status === 'loading' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {lang === 'ar' ? 'جارٍ الاشتراك...' : 'Subscribing...'}
                </span>
              ) : status === 'success' ? (
                <span className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {lang === 'ar' ? 'تم الاشتراك!' : 'Subscribed!'}
                </span>
              ) : (
                lang === 'ar' ? 'اشترك الآن' : 'Subscribe'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}