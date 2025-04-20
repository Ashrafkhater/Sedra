'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', href: `/${lang}` },
    { name: lang === 'ar' ? 'من نحن' : 'About', href: `/${lang}/about` },
    { name: lang === 'ar' ? 'الدورات' : 'Courses', href: `/${lang}/courses` },
    { name: lang === 'ar' ? 'المميزات' : 'Features', href: `/${lang}/features` },
    { name: lang === 'ar' ? 'اتصل بنا' : 'Contact', href: `/${lang}/contact` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`bg-emerald-600 text-white fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'h-14' : 'h-24'
      } ${lang === 'ar' ? 'font-amiri' : 'font-poppins'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo + Text */}
          <div className="flex items-center space-x-3">
            <img
              className={`${
                isScrolled ? 'h-10' : 'h-20'
              } w-auto transition-all duration-300`}
              src="/images/logo.png"
              alt="Sidrah Academy"
            />
            <div className="hidden sm:flex flex-col items-center text-center leading-tight">
              <span className={`font-bold ${isScrolled ? 'text-[14px]' : 'text-[18px]'} ${lang === 'ar' ? 'font-amiri' : 'font-poppins'}`}>
                أكاديمية سدرة
              </span>
              <span className={`uppercase font-medium ${isScrolled ? 'text-[14px]' : 'text-[18px]'} font-poppins`}>
                Sedra Academy
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'font-bold border-b-2 border-white'
                    : 'hover:text-gray-200'
                } text-white px-2 py-1 text-base transition-colors duration-200 ${
                  lang === 'ar' ? 'font-amiri' : 'font-poppins'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switch */}
          <div className="hidden sm:block">
            <Link
              href={lang === 'ar' ? pathname.replace('/ar', '/en') : pathname.replace('/en', '/ar')}
              className="text-white hover:underline text-base"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-emerald-700 px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block ${
                pathname === item.href
                  ? 'font-bold underline'
                  : 'hover:text-gray-200'
              } text-white text-lg`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={lang === 'ar' ? pathname.replace('/ar', '/en') : pathname.replace('/en', '/ar')}
            className="block text-white mt-2 hover:underline text-lg"
            onClick={() => setIsOpen(false)}
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </Link>
        </div>
      )}
    </nav>
  )
}
