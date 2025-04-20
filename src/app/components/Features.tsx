'use client'
import { motion } from 'framer-motion'

export default function Features({ lang }: { lang: string }) {
  const features = [
    {
      title: lang === 'ar' ? 'معلمون مؤهلون' : 'Qualified Teachers',
      description: lang === 'ar' 
        ? 'نخبة من المعلمين المتخصصين في تعليم القرآن والعلوم الإسلامية'
        : 'Elite teachers specialized in Quran and Islamic studies',
      icon: '👨‍🏫'
    },
    {
      title: lang === 'ar' ? 'مرونة في التعلم' : 'Flexible Learning',
      description: lang === 'ar'
        ? 'تعلم في أي وقت ومن أي مكان يناسبك'
        : 'Learn anytime and anywhere at your convenience',
      icon: '🕒'
    },
    {
      title: lang === 'ar' ? 'دروس تفاعلية' : 'Interactive Lessons',
      description: lang === 'ar'
        ? 'دروس تفاعلية مع تقنيات حديثة لتحسين تجربة التعلم'
        : 'Interactive lessons with modern technology to enhance learning',
      icon: '💻'
    },
    {
      title: lang === 'ar' ? 'متابعة مستمرة' : 'Continuous Support',
      description: lang === 'ar'
        ? 'متابعة مستمرة لتقدم الطالب مع تقارير دورية'
        : 'Continuous monitoring of student progress with periodic reports',
      icon: '📊'
    }
  ]

  return (
    <div className="py-16 bg-emerald-50"> {/* خلفية خفيفة متناسقة مع الألوان */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-900 sm:text-4xl"
          >
            {lang === 'ar' ? 'لماذا تختار أكاديمية سدرة؟' : 'Why Choose Sedra Academy?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto"
          >
            {lang === 'ar'
              ? 'نقدم تجربة تعليمية فريدة مع أفضل المميزات'
              : 'We offer a unique learning experience with the best features'}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="bg-teal-500 text-white p-4 rounded-full shadow-lg text-3xl"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
