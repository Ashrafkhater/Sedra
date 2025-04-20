import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PrivacyPage({
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
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نحن نقدر خصوصيتك ونلتزم بحمايتها'
                : 'We value your privacy and are committed to protecting it'}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 prose prose-emerald max-w-none">
            <h2>{isArabic ? 'المعلومات التي نجمعها' : 'Information We Collect'}</h2>
            <p>
              {isArabic 
                ? 'نجمع معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف عندما تسجل في موقعنا، أو تشترك في دوراتنا، أو تملأ نموذجًا، أو تقدم تعليقات.'
                : 'We collect personal information such as name, email address, and phone number when you register on our site, subscribe to our courses, fill out a form, or submit comments.'}
            </p>
            
            <h2>{isArabic ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information'}</h2>
            <p>
              {isArabic 
                ? 'قد نستخدم المعلومات التي نجمعها منك للأغراض التالية: تخصيص تجربتك، تحسين موقعنا، تحسين خدمة العملاء، معالجة المعاملات، إدارة مسابقة أو عرض ترويجي أو استطلاع أو ميزة أخرى للموقع، إرسال رسائل بريد إلكتروني دورية.'
                : 'We may use the information we collect from you for the following purposes: to personalize your experience, to improve our website, to improve customer service, to process transactions, to administer a contest, promotion, survey, or other site feature, to send periodic emails.'}
            </p>
            
            <h2>{isArabic ? 'كيف نحمي معلوماتك' : 'How We Protect Your Information'}</h2>
            <p>
              {isArabic 
                ? 'نحن نطبق مجموعة متنوعة من إجراءات الأمان للحفاظ على سلامة معلوماتك الشخصية عند إدخال معلوماتك أو تقديمها أو الوصول إليها. نحن نقدم استخدام خادم آمن. يتم تشفير جميع المعلومات الحساسة المقدمة عبر تقنية طبقة المقابس الآمنة (SSL).'
                : 'We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology.'}
            </p>
            
            <h2>{isArabic ? 'استخدام ملفات تعريف الارتباط' : 'Use of Cookies'}</h2>
            <p>
              {isArabic 
                ? 'تُستخدم ملفات تعريف الارتباط الخاصة بنا لتتبع الإعلانات وتمكين ميزات مخصصة للموقع (مثل تفضيلات اللغة أو المحتوى). يمكنك اختيار رفض ملفات تعريف الارتباط من خلال متصفحك، ولكن قد يؤدي ذلك إلى عدم تمكنك من استخدام بعض ميزات موقعنا.'
                : 'Our cookies are used to track advertisements and enable custom site features (such as language preferences or content). You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. However, this may cause some features of our site to not function properly.'}
            </p>
            
            <h2>{isArabic ? 'الإفصاح لأطراف ثالثة' : 'Disclosure to Third Parties'}</h2>
            <p>
              {isArabic 
                ? 'نحن لا نبيع أو نتاجر أو ننقل بطريقة أخرى معلوماتك الشخصية القابلة للتعريف إلى أطراف خارجية. وهذا لا يشمل أطراف ثالثة موثوقة تساعدنا في تشغيل موقعنا أو إدارة أعمالنا، طالما أن هذه الأطراف توافق على الحفاظ على سرية هذه المعلومات.'
                : 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.'}
            </p>
            
            <h2>{isArabic ? 'موافقتك' : 'Your Consent'}</h2>
            <p>
              {isArabic 
                ? 'باستخدام موقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا.'
                : 'By using our site, you consent to our privacy policy.'}
            </p>
            
            <h2>{isArabic ? 'التغييرات على سياسة الخصوصية' : 'Changes to Our Privacy Policy'}</h2>
            <p>
              {isArabic 
                ? 'إذا قررنا تغيير سياسة الخصوصية الخاصة بنا، فسننشر هذه التغييرات على هذه الصفحة.'
                : 'If we decide to change our privacy policy, we will post those changes on this page.'}
            </p>
            
            <h2>{isArabic ? 'الاتصال بنا' : 'Contact Us'}</h2>
            <p>
              {isArabic 
                ? 'إذا كان لديك أي أسئلة بخصوص سياسة الخصوصية هذه، يمكنك الاتصال بنا باستخدام المعلومات أدناه.'
                : 'If you have any questions regarding this privacy policy, you may contact us using the information below.'}
            </p>
            <ul>
              <li>
                {isArabic ? 'البريد الإلكتروني: ' : 'Email: '}
                <a href="mailto:info@sedraacademy.com" className="text-emerald-600 hover:text-emerald-800">
                  info@sedraacademy.com
                </a>
              </li>
              <li>
                {isArabic ? 'الهاتف: ' : 'Phone: '}
                <a href="tel:+201501886908" className="text-emerald-600 hover:text-emerald-800">
                  +20 150 188 6908
                </a>
              </li>
            </ul>
            
            <p className="mt-8 text-gray-500 text-sm">
              {isArabic 
                ? 'آخر تحديث: 1 يونيو 2023'
                : 'Last updated: June 1, 2023'}
            </p>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} />
    </main>
  )
}