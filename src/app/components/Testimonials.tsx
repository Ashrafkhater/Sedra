'use client'
import { motion } from 'framer-motion'
import { User, UserRound } from 'lucide-react'

// Remove the unused 'User' import or use it in your component
// import { User } from 'some-package'

export default function Testimonials({ lang }: { lang: string }) {
  const testimonials = [
    {
      name: lang === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
      role: lang === 'ar' ? 'طالب حفظ القرآن' : 'Quran Memorization Student',
      content: lang === 'ar' 
        ? 'أكاديمية سدرة غيرت حياتي. بفضل المعلمين المتميزين، تمكنت من حفظ عشرة أجزاء من القرآن في وقت قياسي.'
        : 'Sedra Academy changed my life. Thanks to the excellent teachers, I was able to memorize ten parts of the Quran in record time.',
      gender: 'male'
    },
    {
      name: lang === 'ar' ? 'فاطمة علي' : 'Fatima Ali',
      role: lang === 'ar' ? 'طالبة اللغة العربية' : 'Arabic Language Student',
      content: lang === 'ar'
        ? 'كنت أبحث عن مكان لتعلم اللغة العربية بطريقة سهلة وممتعة، وجدت ضالتي في أكاديمية سدرة. الآن أستطيع التحدث بطلاقة.'
        : 'I was looking for a place to learn Arabic in an easy and fun way, and I found what I was looking for at Sedra Academy. Now I can speak fluently.',
      gender: 'female'
    },
    {
      name: lang === 'ar' ? 'عمر خالد' : 'Omar Khalid',
      role: lang === 'ar' ? 'طالب التجويد' : 'Tajweed Student',
      content: lang === 'ar'
        ? 'المعلمون في أكاديمية سدرة متخصصون ويهتمون بكل طالب. تعلمت قواعد التجويد بسهولة وأصبحت قادراً على تلاوة القرآن بشكل صحيح.'
        : 'The teachers at Sedra Academy are specialized and care about each student. I learned Tajweed rules easily and became able to recite the Quran correctly.',
      gender: 'male'
    },
    {
      name: lang === 'ar' ? 'نورا أحمد' : 'Nora Ahmed',
      role: lang === 'ar' ? 'طالبة الدراسات الإسلامية' : 'Islamic Studies Student',
      content: lang === 'ar'
        ? 'أحب طريقة التدريس في أكاديمية سدرة. المناهج حديثة والمعلمون يشرحون بطريقة مبسطة. أنصح كل من يريد تعلم الدين بالالتحاق بها.'
        : 'I love the teaching method at Sedra Academy. The curricula are modern and the teachers explain in a simplified way. I recommend it to anyone who wants to learn about religion.',
      gender: 'female'
    },
    {
      name: lang === 'ar' ? 'سارة محمود' : 'Sarah Mahmoud',
      role: lang === 'ar' ? 'والدة طالب' : 'Student\'s Parent',
      content: lang === 'ar'
        ? 'ابني يحب دروسه في أكاديمية سدرة. لاحظت تحسناً كبيراً في تلاوته وحفظه للقرآن. شكراً لكم على الاهتمام والمتابعة المستمرة.'
        : 'My son loves his lessons at Sedra Academy. I noticed a great improvement in his recitation and memorization of the Quran. Thank you for your care and continuous follow-up.',
      gender: 'female'
    },
    {
      name: lang === 'ar' ? 'محمد عبدالله' : 'Mohammed Abdullah',
      role: lang === 'ar' ? 'طالب دولي' : 'International Student',
      content: lang === 'ar'
        ? 'رغم اختلاف التوقيت، إلا أن أكاديمية سدرة وفرت لي أوقاتاً مناسبة للدراسة. أشعر وكأنني أتعلم في بلدي مع معلمين يتحدثون لغتي.'
        : 'Despite the time difference, Sedra Academy provided me with suitable study times. I feel like I\'m learning in my country with teachers who speak my language.',
      gender: 'male'
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {lang === 'ar' ? 'ماذا يقول طلابنا عنا' : 'What Our Students Say'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                  {testimonial.gender === 'female' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative z-10 text-gray-700 dark:text-gray-300 mt-2 pl-6">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}