import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CoursePreview from '../../components/CoursePreview'

export default function CoursesPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const isArabic = lang === 'ar'
  
  return (
    <main>
      <Navbar lang={lang} />
      
      <div className="pt-24 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'الدورات' : 'Courses'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'اكتشف مجموعة متنوعة من الدورات المصممة لمساعدتك في رحلة التعلم الإسلامي'
                : 'Discover a variety of courses designed to help you in your Islamic learning journey'}
            </p>
          </div>
        </div>
      </div>
      
      <CoursePreview lang={lang} />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">
              {isArabic ? 'لماذا تختار دوراتنا؟' : 'Why Choose Our Courses?'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'مناهج معتمدة' : 'Certified Curricula'}
                </h3>
                <p className="text-gray-600">
                  {isArabic 
                    ? 'دوراتنا مصممة وفق معايير تعليمية عالية ومعتمدة من خبراء في المجال'
                    : 'Our courses are designed according to high educational standards and certified by experts in the field'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'دعم مستمر' : 'Continuous Support'}
                </h3>
                <p className="text-gray-600">
                  {isArabic 
                    ? 'نقدم دعماً مستمراً لطلابنا من خلال جلسات فردية ومجموعات دراسية'
                    : 'We provide continuous support to our students through individual sessions and study groups'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isArabic ? 'مرونة في الوقت' : 'Time Flexibility'}
                </h3>
                <p className="text-gray-600">
                  {isArabic 
                    ? 'نوفر جداول زمنية مرنة تناسب طلابنا من مختلف المناطق الزمنية'
                    : 'We provide flexible schedules that suit our students from different time zones'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} />
    </main>
  )
}