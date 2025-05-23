import Link from 'next/link'

export default function Footer({ lang }: { lang: string }) {
  const isArabic = lang === 'ar'
  
  const quickLinks = [
    { name: isArabic ? 'الرئيسية' : 'Home', href: `/${lang}` },
    { name: isArabic ? 'من نحن' : 'About Us', href: `/${lang}/about` },
    { name: isArabic ? 'الدورات' : 'Courses', href: `/${lang}/courses` },
    { name: isArabic ? 'المميزات' : 'Features', href: `/${lang}/features` },
    { name: isArabic ? 'الأسئلة الشائعة' : 'FAQ', href: `/${lang}/faq` },
    { name: isArabic ? 'اتصل بنا' : 'Contact Us', href: `/${lang}/contact` },
  ]
  
  const courses = [
    { name: isArabic ? 'القرآن الكريم' : 'Quran', href: `/${lang}/courses/quran` },
    { name: isArabic ? 'التجويد' : 'Tajweed', href: `/${lang}/courses/tajweed` },
    { name: isArabic ? 'اللغة العربية' : 'Arabic Language', href: `/${lang}/courses/arabic` },
    { name: isArabic ? 'الفقه الإسلامي' : 'Islamic Jurisprudence', href: `/${lang}/courses/fiqh` },
    { name: isArabic ? 'السيرة النبوية' : 'Prophetic Biography', href: `/${lang}/courses/seerah` },
  ]
  
  const legalLinks = [
    { name: isArabic ? 'شروط الاستخدام' : 'Terms of Service', href: `/${lang}/terms` },
    { name: isArabic ? 'سياسة الخصوصية' : 'Privacy Policy', href: `/${lang}/privacy` },
  ]
  
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{isArabic ? 'أكاديمية سدرة' : 'Sedra Academy'}</h2>
            <p className="text-emerald-100 mb-4">
              {isArabic 
                ? 'منصة تعليمية إسلامية عبر الإنترنت تقدم دورات في القرآن الكريم والتجويد واللغة العربية والدراسات الإسلامية.'
                : 'An online Islamic educational platform offering courses in Quran, Tajweed, Arabic language, and Islamic studies.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-emerald-200 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-white">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{isArabic ? 'روابط سريعة' : 'Quick Links'}</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-emerald-100 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{isArabic ? 'الدورات' : 'Courses'}</h2>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link href={course.href} className="text-emerald-100 hover:text-white">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{isArabic ? 'تواصل معنا' : 'Contact Us'}</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-emerald-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-emerald-100">info@sedraacademy.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-emerald-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-emerald-100">+20 150 188 6908</span>
              </li>
              <li className="mt-4">
                <Link href={`/${lang}/contact`} className="bg-white hover:bg-emerald-100 text-emerald-800 px-4 py-2 rounded-md inline-block transition-colors">
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-emerald-100 hover:text-white mr-4">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
          <p>© {new Date().getFullYear()} {isArabic ? 'أكاديمية سدرة. جميع الحقوق محفوظة' : 'Sedra Academy. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}