'use client'
import { motion } from 'framer-motion'

export default function Courses({ lang }: { lang: string }) {
  const courses = [
    {
      title: lang === 'ar' ? 'تعلم القرآن الكريم' : 'Learn Quran',
      description: lang === 'ar'
        ? 'دورة شاملة لتعلم تلاوة القرآن الكريم مع التجويد'
        : 'Comprehensive course for learning Quran recitation with Tajweed',
      level: lang === 'ar' ? 'جميع المستويات' : 'All Levels',
      duration: lang === 'ar' ? '٦ أشهر' : '6 Months',
      image: '/images/quran-course.jpg'
    },
    {
      title: lang === 'ar' ? 'العقيدة الإسلامية' : 'Islamic Creed',
      description: lang === 'ar'
        ? 'تعلم أساسيات العقيدة الإسلامية بطريقة ميسرة'
        : 'Learn the fundamentals of Islamic creed in a simplified way',
      level: lang === 'ar' ? 'مبتدئ' : 'Beginner',
      duration: lang === 'ar' ? '٣ أشهر' : '3 Months',
      image: '/images/aqeedah-course.jpg'
    },
    {
      title: lang === 'ar' ? 'الفقه الإسلامي' : 'Islamic Jurisprudence',
      description: lang === 'ar'
        ? 'دراسة الأحكام الشرعية العملية في الإسلام'
        : 'Study practical Islamic rulings and jurisprudence',
      level: lang === 'ar' ? 'متوسط' : 'Intermediate',
      duration: lang === 'ar' ? '٤ أشهر' : '4 Months',
      image: '/images/fiqh-course.jpg'
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
            {lang === 'ar' ? 'دوراتنا التعليمية' : 'Our Courses'}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#054a29] to-[#076d3c] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {course.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-[#054a29] dark:text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.level}
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2 text-[#054a29] dark:text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-[#054a29] text-white rounded-lg font-semibold hover:bg-[#043d22] transition-colors duration-300"
                  >
                    {lang === 'ar' ? 'سجل الآن' : 'Enroll Now'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}