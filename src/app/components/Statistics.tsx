export default function Statistics({ lang }: { lang: string }) {
  const stats = [
    {
      value: '5000+',
      label: lang === 'ar' ? 'طالب وطالبة' : 'Students',
      icon: (props: any) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      value: '50+',
      label: lang === 'ar' ? 'معلم ومعلمة' : 'Teachers',
      icon: (props: any) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
        </svg>
      )
    },
    {
      value: '20+',
      label: lang === 'ar' ? 'دورة تعليمية' : 'Courses',
      icon: (props: any) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow px-6 py-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-12 w-12 text-emerald-600" />
                </div>
                <div className="ml-5">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}