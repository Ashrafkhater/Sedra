'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ({ lang }: { lang: string }) {
  const faqs = [
    {
      question: lang === 'ar' ? 'كيف تتم عملية التسجيل؟' : 'How does the registration process work?',
      answer: lang === 'ar'
        ? 'عملية التسجيل بسيطة: قم بإنشاء حساب، اختر خطة الاشتراك المناسبة، ثم حدد المعلم والوقت المناسب لك'
        : 'The registration process is simple: create an account, choose your subscription plan, then select your preferred teacher and schedule'
    },
    {
      question: lang === 'ar' ? 'ما هي المتطلبات التقنية للدروس؟' : 'What are the technical requirements for lessons?',
      answer: lang === 'ar'
        ? 'تحتاج فقط إلى جهاز كمبيوتر أو جهاز لوحي مع اتصال جيد بالإنترنت وميكروفون'
        : 'You only need a computer or tablet with a good internet connection and a microphone'
    },
    {
      question: lang === 'ar' ? 'هل يمكنني تغيير المعلم؟' : 'Can I change my teacher?',
      answer: lang === 'ar'
        ? 'نعم، يمكنك تغيير المعلم في أي وقت إذا لم تكن راضياً عن تجربة التعلم'
        : 'Yes, you can change your teacher at any time if you are not satisfied with the learning experience'
    },
    {
      question: lang === 'ar' ? 'كيف يتم تقييم التقدم؟' : 'How is progress evaluated?',
      answer: lang === 'ar'
        ? 'يقوم المعلم بتقييم مستمر للتقدم وإرسال تقارير دورية حسب خطة الاشتراك'
        : 'The teacher conducts continuous assessment and sends periodic reports based on your subscription plan'
    },
    {
      question: lang === 'ar' ? 'هل يمكنني إلغاء اشتراكي؟' : 'Can I cancel my subscription?',
      answer: lang === 'ar'
        ? 'نعم، يمكنك إلغاء اشتراكك في أي وقت، وسيتم رد المبلغ المتبقي حسب سياسة الاسترداد'
        : 'Yes, you can cancel your subscription at any time, and the remaining amount will be refunded according to our refund policy'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
      <div className="absolute inset-0 bg-[url('/images/islamic-pattern.svg')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-[#054a29] dark:text-white sm:text-4xl mb-4"
          >
            {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#FFD700] mx-auto rounded-full mb-6"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-medium text-[#054a29] dark:text-[#FFD700]">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}