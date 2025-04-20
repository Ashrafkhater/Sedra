'use client'
import { motion } from 'framer-motion'

export default function Teachers({ lang }: { lang: string }) {
  const teachers = [
    {
      name: lang === 'ar' ? 'الشيخ عبدالله محمد' : 'Sheikh Abdullah Mohammed',
      specialty: lang === 'ar' ? 'القراءات العشر' : 'Ten Quranic Readings',
      experience: lang === 'ar' ? '١٥ سنة خبرة' : '15 years experience',
      image: '/images/teachers/teacher1.jpg',
      rating: 5,
      students: lang === 'ar' ? '٥٠٠+' : '500+'
    },
    {
      name: lang === 'ar' ? 'الشيخ أحمد علي' : 'Sheikh Ahmed Ali',
      specialty: lang === 'ar' ? 'التجويد والتلاوة' : 'Tajweed & Recitation',
      experience: lang === 'ar' ? '١٢ سنة خبرة' : '12 years experience',
      image: '/images/teachers/teacher2.jpg',
      rating: 4.9,
      students: lang === 'ar' ? '٤٠٠+' : '400+'
    },
    {
      name: lang === 'ar' ? 'الشيخة مريم أحمد' : 'Sheikha Mariam Ahmed',
      specialty: lang === 'ar' ? 'حفظ القرآن' : 'Quran Memorization',
      experience: lang === 'ar' ? '١٠ سنوات خبرة' : '10 years experience',
      image: '/images/teachers/teacher3.jpg',
      rating: 4.8,
      students: lang === 'ar' ? '٣٠٠+' : '300+'
    },
    {
      name: lang === 'ar' ? 'الشيخ محمد خالد' : 'Sheikh Mohammed Khalid',
      specialty: lang === 'ar' ? 'التفسير والتدبر' : 'Tafsir & Reflection',
      experience: lang === 'ar' ? '٨ سنوات خبرة' : '8 years experience',
      image: '/images/teachers/teacher4.jpg',
      rating: 4.7,
      students: lang === 'ar' ? '٢٥٠+' : '250+'
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
            {lang === 'ar' ? 'نخبة من المعلمين المتخصصين' : 'Our Expert Teachers'}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#054a29] dark:text-[#FFD700] mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {teacher.specialty}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {teacher.experience}
                    </span>
                    <div className="flex items-center">
                      <span className="text-[#FFD700] mr-1">★</span>
                      <span className="text-gray-600 dark:text-gray-300">{teacher.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {lang === 'ar' ? 'الطلاب: ' : 'Students: '}{teacher.students}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-[#054a29] dark:text-[#FFD700] font-medium hover:underline"
                    >
                      {lang === 'ar' ? 'عرض الملف الشخصي' : 'View Profile'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}