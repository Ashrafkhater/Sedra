'use client'
import { motion } from 'framer-motion'

export default function About({ lang }: { lang: string }) {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: lang === 'ar' ? 'منهج شامل' : 'Comprehensive Curriculum',
      description: lang === 'ar'
        ? 'منهج متكامل يغطي جميع جوانب تعلم القرآن الكريم'
        : 'A complete curriculum covering all aspects of Quran learning'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: lang === 'ar' ? 'معلمون متخصصون' : 'Expert Teachers',
      description: lang === 'ar'
        ? 'نخبة من المعلمين المؤهلين ذوي الخبرة في التعليم'
        : 'Elite qualified teachers with extensive teaching experience'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: lang === 'ar' ? 'مرونة في المواعيد' : 'Flexible Scheduling',
      description: lang === 'ar'
        ? 'جدول مرن يناسب مختلف المناطق الزمنية والالتزامات'
        : 'Flexible schedule accommodating different time zones and commitments'
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/islamic-pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-[#054a29] dark:text-white sm:text-4xl mb-4"
          >
            {lang === 'ar' ? 'من نحن' : 'About Us'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {lang === 'ar'
              ? 'نحن مؤسسة تعليمية رائدة متخصصة في تعليم القرآن الكريم والعلوم الإسلامية عبر الإنترنت'
              : 'We are a leading educational institution specializing in online Quran and Islamic studies education'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#054a29] to-[#076d3c] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                <div className="w-16 h-16 rounded-xl bg-[#054a29]/10 dark:bg-[#054a29]/20 flex items-center justify-center mb-6">
                  <div className="text-[#054a29] dark:text-[#FFD700]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#054a29] dark:text-[#FFD700] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#054a29] rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
            {lang === 'ar' ? 'انضم إلينا اليوم' : 'Join Us Today'}
          </h3>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'ابدأ رحلتك في تعلم القرآن الكريم مع أفضل المعلمين وأحدث التقنيات'
              : 'Start your Quran learning journey with the best teachers and latest technology'}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#FFD700] text-[#054a29] rounded-lg font-semibold hover:bg-[#FFE44D] transition-colors duration-300"
          >
            {lang === 'ar' ? 'سجل الآن' : 'Register Now'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}