import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { use } from 'react'

export default function FAQPage({
  params
}: {
  params: { lang: string }
}) {
  // Unwrap params with React.use()
const { lang } = params
  const isArabic = lang === 'ar'
  
  const faqs = [
    {
      question: isArabic ? 'كيف يمكنني التسجيل في الدورات؟' : 'How can I register for courses?',
      answer: isArabic 
        ? 'يمكنك التسجيل في الدورات من خلال إنشاء حساب على موقعنا، ثم اختيار الدورة المناسبة لك والدفع عبر وسائل الدفع المتاحة.'
        : 'You can register for courses by creating an account on our website, then selecting the appropriate course and paying through the available payment methods.'
    },
    {
      question: isArabic ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods are available?',
      answer: isArabic 
        ? 'نقبل الدفع عبر بطاقات الائتمان (فيزا، ماستركارد)، وباي بال، والتحويل البنكي.'
        : 'We accept payment via credit cards (Visa, MasterCard), PayPal, and bank transfer.'
    },
    {
      question: isArabic ? 'هل يمكنني الوصول إلى المواد التعليمية بعد انتهاء الدورة؟' : 'Can I access educational materials after the course ends?',
      answer: isArabic 
        ? 'نعم، بمجرد التسجيل في الدورة، ستتمكن من الوصول إلى جميع المواد التعليمية لمدة عام كامل من تاريخ التسجيل.'
        : 'Yes, once you register for the course, you will be able to access all educational materials for a full year from the date of registration.'
    },
    {
      question: isArabic ? 'هل الدروس مباشرة أم مسجلة؟' : 'Are the lessons live or recorded?',
      answer: isArabic 
        ? 'نقدم مزيجاً من الدروس المباشرة والمسجلة. الدروس المباشرة تتيح لك التفاعل مع المعلم مباشرة، بينما الدروس المسجلة متاحة للمراجعة في أي وقت.'
        : 'We offer a mix of live and recorded lessons. Live lessons allow you to interact with the teacher directly, while recorded lessons are available for review at any time.'
    },
    {
      question: isArabic ? 'كم عدد الطلاب في كل فصل؟' : 'How many students are in each class?',
      answer: isArabic 
        ? 'نحرص على أن يكون عدد الطلاب في كل فصل محدوداً (5-10 طلاب) لضمان جودة التعليم والاهتمام الفردي بكل طالب.'
        : 'We ensure that the number of students in each class is limited (5-10 students) to ensure quality education and individual attention to each student.'
    },
    {
      question: isArabic ? 'هل يمكنني إلغاء اشتراكي واسترداد المبلغ؟' : 'Can I cancel my subscription and get a refund?',
      answer: isArabic 
        ? 'نعم، يمكنك إلغاء اشتراكك واسترداد المبلغ خلال 14 يوماً من تاريخ التسجيل، شريطة عدم حضور أكثر من درسين.'
        : 'Yes, you can cancel your subscription and get a refund within 14 days of registration, provided you have not attended more than two lessons.'
    },
    {
      question: isArabic ? 'هل تقدمون شهادات معتمدة؟' : 'Do you offer certified certificates?',
      answer: isArabic 
        ? 'نعم، نقدم شهادات معتمدة عند إكمال الدورات بنجاح، ويمكن استخدامها للأغراض الأكاديمية والمهنية.'
        : 'Yes, we offer certified certificates upon successful completion of courses, which can be used for academic and professional purposes.'
    },
    {
      question: isArabic ? 'ما هي المتطلبات التقنية للدروس عبر الإنترنت؟' : 'What are the technical requirements for online lessons?',
      answer: isArabic 
        ? 'تحتاج إلى جهاز كمبيوتر أو جهاز لوحي أو هاتف ذكي مع اتصال مستقر بالإنترنت، وميكروفون وكاميرا (للدروس التفاعلية).'
        : 'You need a computer, tablet, or smartphone with a stable internet connection, microphone, and camera (for interactive lessons).'
    }
  ]
  
  return (
    <main>
      <Navbar lang={lang} />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'إجابات على الأسئلة الأكثر شيوعاً حول دوراتنا وخدماتنا'
                : 'Answers to the most common questions about our courses and services'}
            </p>
          </div>
          
          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              {isArabic 
                ? 'لم تجد إجابة على سؤالك؟'
                : 'Didn\'t find an answer to your question?'}
            </p>
            <Link 
              href={`/${lang}/contact`} 
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-600 transition-colors shadow-md"
            >
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} />
    </main>
  )
}