import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import RecordedLectures from '../components/RecordedLectures'
import CoursePreview from '../components/CoursePreview'
import TeacherShowcase from '../components/TeacherShowcase'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home({
  params: { lang }
}: {
  params: { lang: string }
}) {
  return (
    <main>
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <RecordedLectures lang={lang} />
      <CoursePreview lang={lang} />
      <TeacherShowcase lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <Newsletter lang={lang} />
      <ContactForm lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}