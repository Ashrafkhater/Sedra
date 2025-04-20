import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TermsPage({
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
              {isArabic ? 'شروط الاستخدام' : 'Terms of Service'}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold-500 mx-auto" />
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'يرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام موقعنا'
                : 'Please read these terms of service carefully before using our website'}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 prose prose-emerald max-w-none">
            <h2>{isArabic ? 'مقدمة' : 'Introduction'}</h2>
            <p>
              {isArabic 
                ? 'تحدد شروط الاستخدام هذه القواعد والأنظمة لاستخدام موقع أكاديمية سدرة. من خلال الوصول إلى هذا الموقع، نفترض أنك تقبل هذه الشروط. لا تستمر في استخدام أكاديمية سدرة إذا كنت لا توافق على أخذ جميع الشروط والأحكام المذكورة في هذه الصفحة.'
                : 'These terms of service outline the rules and regulations for the use of Sedra Academy\'s website. By accessing this website, we assume you accept these terms. Do not continue to use Sedra Academy if you do not agree to take all of the terms and conditions stated on this page.'}
            </p>
            
            <h2>{isArabic ? 'ملفات تعريف الارتباط' : 'Cookies'}</h2>
            <p>
              {isArabic 
                ? 'نستخدم ملفات تعريف الارتباط. من خلال الوصول إلى أكاديمية سدرة، وافقت على استخدام ملفات تعريف الارتباط وفقًا لسياسة الخصوصية الخاصة بأكاديمية سدرة.'
                : 'We employ the use of cookies. By accessing Sedra Academy, you agreed to use cookies in agreement with Sedra Academy\'s Privacy Policy.'}
            </p>
            
            <h2>{isArabic ? 'الترخيص' : 'License'}</h2>
            <p>
              {isArabic 
                ? 'ما لم يُذكر خلاف ذلك، تمتلك أكاديمية سدرة و/أو مرخصوها حقوق الملكية الفكرية لجميع المواد الموجودة على أكاديمية سدرة. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا من أكاديمية سدرة للاستخدام الشخصي الخاص بك وفقًا للقيود المنصوص عليها في شروط الاستخدام هذه.'
                : 'Unless otherwise stated, Sedra Academy and/or its licensors own the intellectual property rights for all material on Sedra Academy. All intellectual property rights are reserved. You may access this from Sedra Academy for your own personal use subjected to restrictions set in these terms of service.'}
            </p>
            
            <h2>{isArabic ? 'القيود' : 'Restrictions'}</h2>
            <p>
              {isArabic 
                ? 'يُحظر عليك: نشر أي مادة من أكاديمية سدرة على أي وسائط أخرى، بيع أو ترخيص أو تأجير مواد من أكاديمية سدرة، إعادة إنتاج أو تكرار أو نسخ مواد من أكاديمية سدرة، إعادة توزيع المحتوى من أكاديمية سدرة.'
                : 'You are restricted from the following: publishing any material from Sedra Academy on any other media, selling, licensing, or renting out any material from Sedra Academy, reproducing, duplicating, or copying material from Sedra Academy, redistributing content from Sedra Academy.'}
            </p>
            
            <h2>{isArabic ? 'المحتوى المقدم من المستخدم' : 'User-Generated Content'}</h2>
            <p>
              {isArabic 
                ? 'يجب ألا يكون المحتوى الذي تنشره على الموقع غير قانوني أو مسيء أو تشهيري أو فاحش أو تهديدي أو ينتهك خصوصية الآخرين أو ينتهك حقوق الملكية الفكرية.'
                : 'The content you post on the site must not be illegal, abusive, defamatory, obscene, threatening, invasive of others\' privacy, or infringe on intellectual property rights.'}
            </p>
            
            <h2>{isArabic ? 'إخلاء المسؤولية' : 'Disclaimer'}</h2>
            <p>
              {isArabic 
                ? 'إلى أقصى حد يسمح به القانون المعمول به، نستبعد جميع الإقرارات والضمانات والشروط المتعلقة بموقعنا واستخدام هذا الموقع.'
                : 'To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.'}
            </p>
            
            <h2>{isArabic ? 'تحديثات الشروط' : 'Terms Updates'}</h2>
            <p>
              {isArabic 
                ? 'نحتفظ بالحق في تحديث أو تغيير هذه الشروط في أي وقت. من مسؤوليتك مراجعة هذه الشروط بشكل دوري. استمرار استخدامك للموقع بعد نشر التغييرات على هذه الشروط يعني قبولك لهذه التغييرات.'
                : 'We reserve the right to update or change these terms at any time. It is your responsibility to review these terms periodically. Your continued use of the website after posting changes to these terms means you accept those changes.'}
            </p>
            
            <h2>{isArabic ? 'القانون الحاكم' : 'Governing Law'}</h2>
            <p>
              {isArabic 
                ? 'تخضع هذه الشروط وتفسر وفقًا لقوانين جمهورية مصر العربية، وتخضع أنت بشكل غير قابل للنقض للاختصاص القضائي الحصري للمحاكم في تلك الدولة.'
                : 'These terms shall be governed and construed in accordance with the laws of the Arab Republic of Egypt, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.'}
            </p>
            
            <h2>{isArabic ? 'الاتصال بنا' : 'Contact Us'}</h2>
            <p>
              {isArabic 
                ? 'إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى الاتصال بنا.'
                : 'If you have any questions about these Terms of Service, please contact us.'}
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