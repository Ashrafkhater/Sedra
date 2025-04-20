'use client'
import { motion } from 'framer-motion'

export default function TeacherShowcase({ lang }: { lang: string }) {
  const teachers = [
    {
      name: lang === 'ar' ? 'الشيخ أحمد محمد' : 'Sheikh Ahmad Muhammad',
      role: lang === 'ar' ? 'معلم القرآن الكريم' : 'Quran Teacher',
      experience: lang === 'ar' ? '١٥ سنة خبرة' : '15 years experience',
      image: '/images/teacher-1.jpg',
      specialization: lang === 'ar' ? 'متخصص في التجويد' : 'Specialized in Tajweed'
    },
    {
      name: lang === 'ar' ? 'الشيخ عمر عبدالله' : 'Sheikh Omar Abdullah',
      role: lang === 'ar' ? 'معلم السيرة النبوية' : 'Seerah Teacher',
      experience: lang === 'ar' ? '١٢ سنة خبرة' : '12 years experience',
      image: '/images/teacher-2.jpg',
      specialization: lang === 'ar' ? 'متخصص في السيرة' : 'Specialized in Seerah'
    },
    {
      name: lang === 'ar' ? 'الشيخ خالد إبراهيم' : 'Sheikh Khalid Ibrahim',
      role: lang === 'ar' ? 'معلم التحفيظ' : 'Hifz Teacher',
      experience: lang === 'ar' ? '١٨ سنة خبرة' : '18 years experience',
      image: '/images/teacher-3.jpg',
      specialization: lang === 'ar' ? 'متخصص في التحفيظ' : 'Specialized in Memorization'
    }
  ]

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'ar' ? 'معلمونا المتميزون' : 'Our Distinguished Teachers'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto mt-4" />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{teacher.name}</h3>
                  <p className="mt-2 text-emerald-600 dark:text-emerald-400">{teacher.role}</p>
                  <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {teacher.experience}
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{teacher.specialization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}