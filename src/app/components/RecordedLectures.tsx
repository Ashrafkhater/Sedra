'use client'
import React from 'react'

export default function RecordedLectures({ lang }: { lang: string }) {
  const isArabic = lang === 'ar';
  
  const lectures = [
    {
      title: isArabic ? 'أساسيات التجويد' : 'Tajweed Basics',
      url: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      title: isArabic ? 'تلاوة القرآن الكريم' : 'Quran Recitation',
      url: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    {
      title: isArabic ? 'التاريخ الإسلامي' : 'Islamic History',
      url: 'https://www.youtube.com/embed/VIDEO_ID_3',
    },
    // يمكنك إضافة المزيد من المحاضرات هنا
  ]

  return (
    <section className={`py-12 bg-white ${isArabic ? 'font-amiri' : 'font-poppins'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-emerald-700 text-center">
          {isArabic ? 'محاضرات مسجلة' : 'Recorded Lectures'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectures.map((lecture, idx) => (
            <div key={idx} className="rounded-lg shadow-lg overflow-hidden bg-gray-50">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={lecture.url}
                  title={lecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{lecture.title}</h3>
                <button className="mt-4 w-full py-2 px-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  {isArabic ? 'مشاهدة المحاضرة' : 'Watch Lecture'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}