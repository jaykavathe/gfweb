import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductHighlights from './components/ProductHighlights'
import Features from './components/Features'
import DevelopmentStatus from './components/DevelopmentStatus'
import Team from './components/Team'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductHighlights />
        <Features />
        <DevelopmentStatus />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

