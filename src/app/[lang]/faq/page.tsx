'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FAQPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const isArabic = lang === 'ar'
  
  // Use a more reliable approach for handling client-side rendering
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    // Set mounted state in useEffect to ensure it only runs on client
    setMounted(true)
    
    // Apply direction to document body to ensure consistent layout
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.removeAttribute('dir')
    }
  }, [isArabic, lang])
  
  // Define faqs outside of render to ensure consistency
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
  
  // Use a simpler initial render to avoid hydration mismatches
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50"></div>
  }
  
  return (
    <div>
      <Navbar lang={lang} />
      
      <div className="pt-24 pb-16 bg-gray-50">
        {/* Rest of your component remains the same */}
      </div>
      
      <Footer lang={lang} />
    </div>
  )
}