import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function FeaturesPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const isArabic = lang === 'ar'
  
  const features = [
    {
      title: isArabic ? 'معلمون متخصصون' : 'Specialized Teachers',
      description: isArabic 
        ? 'نختار معلمينا بعناية من بين الخبراء المتخصصين في مجالاتهم، مع التركيز على الخبرة التعليمية والمؤهلات العلمية'
        : 'We carefully select our teachers from among experts specialized in their fields, focusing on educational experience and academic qualifications',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: isArabic ? 'منصة تعليمية متطورة' : 'Advanced Learning Platform',
      description: isArabic 
        ? 'نستخدم أحدث التقنيات لتوفير تجربة تعليمية سلسة وتفاعلية، مع إمكانية الوصول إلى المواد التعليمية في أي وقت ومن أي مكان'
        : 'We use the latest technologies to provide a smooth and interactive learning experience, with the ability to access educational materials anytime and from anywhere',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: isArabic ? 'دروس مباشرة وتفاعلية' : 'Live and Interactive Lessons',
      description: isArabic 
        ? 'نقدم دروساً مباشرة يتفاعل فيها الطلاب مع المعلمين، مما يتيح فرصة للأسئلة والمناقشة وتصحيح الأخطاء فوراً'
        : 'We offer live lessons where students interact with teachers, providing an opportunity for questions, discussion, and immediate correction of mistakes',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: isArabic ? 'تقييم مستمر للتقدم' : 'Continuous Progress Assessment',
      description: isArabic 
        ? 'نتابع تقدم الطلاب بشكل مستمر من خلال اختبارات دورية وتقييمات شاملة، مع تقديم تقارير منتظمة للطلاب وأولياء الأمور'
        : 'We continuously monitor students\' progress through periodic tests and comprehensive assessments, providing regular reports to students and parents',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: isArabic ? 'مناهج مخصصة' : 'Customized Curricula',
      description: isArabic 
        ? 'نصمم مناهجنا لتناسب احتياجات كل طالب، مع مراعاة مستواه وأهدافه التعليمية وسرعة تعلمه'
        : 'We design our curricula to suit the needs of each student, taking into account their level, educational goals, and learning pace',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: isArabic ? 'شهادات معتمدة' : 'Certified Certificates',
      description: isArabic 
        ? 'نمنح شهادات معتمدة عند إكمال الدورات، مما يوثق إنجازات الطلاب ويمكن استخدامها للأغراض الأكاديمية والمهنية'
        : 'We grant certified certificates upon completion of courses, documenting students\' achievements that can be used for academic and professional purposes',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]
  
  return (
    <main>
      <Navbar lang={lang} />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'المميزات' : 'Features'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'اكتشف ما يميز أكاديمية سدرة عن غيرها من منصات التعليم الإسلامي عبر الإنترنت'
                : 'Discover what sets Sedra Academy apart from other online Islamic education platforms'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-emerald-50 rounded-2xl p-8 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-emerald-800">
                {isArabic ? 'جرب مميزاتنا بنفسك' : 'Try Our Features Yourself'}
              </h2>
              <p className="mt-2 text-gray-600">
                {isArabic 
                  ? 'سجل الآن للحصول على حصة تجريبية مجانية واكتشف جودة تعليمنا'
                  : 'Register now for a free trial session and discover the quality of our education'}
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href={`/${lang}/contact`} 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-600 transition-colors shadow-md"
              >
                {isArabic ? 'احجز حصة تجريبية مجانية' : 'Book a Free Trial Session'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} />
    </main>
  )
}