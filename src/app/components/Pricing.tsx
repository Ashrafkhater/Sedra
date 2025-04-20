'use client'
import { motion } from 'framer-motion'

export default function Pricing({ lang }: { lang: string }) {
  const plans = [
    {
      name: lang === 'ar' ? 'الأساسية' : 'Basic',
      price: '99',
      features: [
        lang === 'ar' ? 'درسان أسبوعياً' : '2 lessons per week',
        lang === 'ar' ? 'معلم مؤهل' : 'Qualified teacher',
        lang === 'ar' ? 'تقارير شهرية' : 'Monthly reports',
        lang === 'ar' ? 'دعم فني' : 'Technical support'
      ],
      cta: lang === 'ar' ? 'ابدأ الآن' : 'Get Started'
    },
    {
      name: lang === 'ar' ? 'المتقدمة' : 'Premium',
      price: '199',
      popular: true,
      features: [
        lang === 'ar' ? '4 دروس أسبوعياً' : '4 lessons per week',
        lang === 'ar' ? 'معلم متخصص' : 'Specialized teacher',
        lang === 'ar' ? 'تقارير أسبوعية' : 'Weekly reports',
        lang === 'ar' ? 'دعم فني على مدار الساعة' : '24/7 technical support',
        lang === 'ar' ? 'مواد تعليمية إضافية' : 'Additional learning materials'
      ],
      cta: lang === 'ar' ? 'اختر الخطة المتقدمة' : 'Choose Premium'
    },
    {
      name: lang === 'ar' ? 'العائلية' : 'Family',
      price: '299',
      features: [
        lang === 'ar' ? 'دروس غير محدودة' : 'Unlimited lessons',
        lang === 'ar' ? 'حتى 3 طلاب' : 'Up to 3 students',
        lang === 'ar' ? 'معلمين متخصصين' : 'Specialized teachers',
        lang === 'ar' ? 'تقارير مخصصة' : 'Custom reports',
        lang === 'ar' ? 'جلسات استشارية' : 'Consultation sessions'
      ],
      cta: lang === 'ar' ? 'اختر الخطة العائلية' : 'Choose Family Plan'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {lang === 'ar' ? 'خطط الأسعار المرنة' : 'Flexible Pricing Plans'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            {lang === 'ar' 
              ? 'اختر الخطة المناسبة لاحتياجاتك'
              : 'Choose the plan that fits your needs'}
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg shadow-lg bg-white overflow-hidden ${
                plan.popular ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-emerald-500 text-white text-center py-2 text-sm font-medium">
                  {lang === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold text-emerald-600">
                  ${plan.price}
                  <span className="text-xl font-normal text-gray-500">/mo</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full py-3 px-6 rounded-md text-white font-medium ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}