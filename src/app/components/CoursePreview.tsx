'use client'
import { motion } from 'framer-motion'

export default function CoursePreview({ lang }: { lang: string }) {
  const courses = [
    {
      title: lang === 'ar' ? 'القرآن للأطفال' : 'Qur\'an for Kids',
      description: lang === 'ar' 
        ? 'دورة مخصصة للأطفال لتعلم القرآن الكريم بطريقة ممتعة وتفاعلية'
        : 'A specialized course for children to learn the Quran in a fun and interactive way',
      duration: lang === 'ar' ? '٦ أشهر' : '6 months',
      level: lang === 'ar' ? 'مبتدئ' : 'Beginner',
      image: '/images/quran-kids.jpg',
      price: lang === 'ar' ? '٢٤٩ ريال' : '$69'
    },
    {
      title: lang === 'ar' ? 'برنامج حفظ القرآن' : 'Quran Memorizing Program',
      description: lang === 'ar'
        ? 'برنامج متكامل لحفظ القرآن الكريم مع المتابعة المستمرة'
        : 'Comprehensive program for Quran memorization with continuous follow-up',
      duration: lang === 'ar' ? '١٢ شهر' : '12 months',
      level: lang === 'ar' ? 'متقدم' : 'Advanced',
      image: '/images/hifz-course.jpg',
      price: lang === 'ar' ? '٤٩٩ ريال' : '$129'
    },
    {
      title: lang === 'ar' ? 'قواعد التجويد' : 'Tajweed Rules',
      description: lang === 'ar' 
        ? 'تعلم أحكام التجويد وتطبيقها في تلاوة القرآن الكريم'
        : 'Learn Tajweed rules and apply them in Quran recitation',
      duration: lang === 'ar' ? '٣ أشهر' : '3 months',
      level: lang === 'ar' ? 'متوسط' : 'Intermediate',
      image: '/images/tajweed-course.jpg',
      price: lang === 'ar' ? '٢٩٩ ريال' : '$79'
    },
    {
      title: lang === 'ar' ? 'اللغة العربية' : 'Arabic',
      description: lang === 'ar'
        ? 'دورة شاملة لتعلم اللغة العربية للناطقين بغيرها'
        : 'Comprehensive course to learn Arabic for non-native speakers',
      duration: lang === 'ar' ? '٩ أشهر' : '9 months',
      level: lang === 'ar' ? 'مبتدئ إلى متقدم' : 'Beginner to Advanced',
      image: '/images/arabic-course.jpg',
      price: lang === 'ar' ? '٣٩٩ ريال' : '$99'
    },
    {
      title: lang === 'ar' ? 'الدراسات الإسلامية' : 'Islamic Studies',
      description: lang === 'ar'
        ? 'تعلم أساسيات العقيدة والفقه والسيرة النبوية'
        : 'Learn the fundamentals of Islamic belief, jurisprudence, and prophetic biography',
      duration: lang === 'ar' ? '٦ أشهر' : '6 months',
      level: lang === 'ar' ? 'متوسط' : 'Intermediate',
      image: '/images/islamic-studies.jpg',
      price: lang === 'ar' ? '٣٤٩ ريال' : '$89'
    }
  ]

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'ar' ? 'دوراتنا المميزة' : 'Featured Courses'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto mt-4" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    <p className="mt-1 text-sm text-emerald-300">{course.level}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{course.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{course.price}</span>
                  </div>
                  <button className="mt-4 w-full py-2 px-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg text-sm font-medium hover:from-emerald-700 hover:to-emerald-600 transition-colors">
                    {lang === 'ar' ? 'سجل الآن' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}