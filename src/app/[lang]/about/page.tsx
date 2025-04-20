import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const isArabic = lang === 'ar'
  
  return (
    <main>
      <Navbar lang={lang} />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'من نحن' : 'About Us'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/about-us.jpg" 
                alt={isArabic ? "أكاديمية سدرة" : "Sedra Academy"} 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-emerald-700">
                {isArabic ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-gray-700">
                {isArabic 
                  ? 'تأسست أكاديمية سدرة بهدف تقديم تعليم إسلامي عالي الجودة للطلاب في جميع أنحاء العالم. نحن نؤمن بأن التعليم الإسلامي يجب أن يكون متاحاً للجميع، بغض النظر عن موقعهم الجغرافي.'
                  : 'Sedra Academy was founded with the goal of providing high-quality Islamic education to students worldwide. We believe that Islamic education should be accessible to everyone, regardless of their geographical location.'}
              </p>
              <p className="text-gray-700">
                {isArabic
                  ? 'مع فريق من المعلمين المؤهلين والمتخصصين، نقدم دورات في القرآن الكريم، والتجويد، واللغة العربية، والدراسات الإسلامية. نستخدم أحدث التقنيات لضمان تجربة تعليمية سلسة وفعالة.'
                  : 'With a team of qualified and specialized teachers, we offer courses in Quran, Tajweed, Arabic language, and Islamic studies. We use the latest technologies to ensure a smooth and effective learning experience.'}
              </p>
              
              <h2 className="text-2xl font-semibold text-emerald-700 pt-4">
                {isArabic ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              <p className="text-gray-700">
                {isArabic
                  ? 'نسعى لأن نكون المنصة التعليمية الرائدة عالمياً في مجال التعليم الإسلامي عبر الإنترنت، ونهدف إلى تمكين الملايين من المسلمين من تعلم دينهم بطريقة صحيحة وميسرة.'
                  : 'We strive to be the leading global educational platform in the field of online Islamic education, and we aim to empower millions of Muslims to learn their religion in a correct and accessible way.'}
              </p>
              
              <h2 className="text-2xl font-semibold text-emerald-700 pt-4">
                {isArabic ? 'قيمنا' : 'Our Values'}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>{isArabic ? 'الإتقان في التعليم' : 'Excellence in education'}</li>
                <li>{isArabic ? 'الاحترام والتقدير' : 'Respect and appreciation'}</li>
                <li>{isArabic ? 'الابتكار المستمر' : 'Continuous innovation'}</li>
                <li>{isArabic ? 'الشمولية والتنوع' : 'Inclusivity and diversity'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} />
    </main>
  )
}