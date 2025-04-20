'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ lang }: { lang: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { name: lang === 'ar' ? 'الدورات' : 'Courses', href: '/courses' },
    { name: lang === 'ar' ? 'المعلمون' : 'Teachers', href: '/teachers' },
    { name: lang === 'ar' ? 'عن المنصة' : 'About', href: '/about' },
    { name: lang === 'ar' ? 'تواصل معنا' : 'Contact', href: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-emerald-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/sedra-logo.png"
                alt="Sedra Academy"
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-emerald-900 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="/login"
              className="inline-block bg-emerald-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-600 transition-colors"
            >
              {lang === 'ar' ? 'تسجيل الدخول' : 'Login'}
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-white py-2 px-4 border border-emerald-500 rounded-md text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              {lang === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-emerald-900 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}  
