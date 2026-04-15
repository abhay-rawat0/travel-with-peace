import TrustHighlights from './components/TrustHighlights'
import ReviewFormSection from './components/ReviewFormSection'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DestinationsSection from './components/DestinationsSection'
import FleetSection from './components/FleetSection'
import PackagesSection from './components/PackagesSection'
import ReviewsSection from './components/ReviewsSection'
import GallerySection from './components/GallerySection'
import BookingForm from './components/BookingForm'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { siteData } from './data/siteData'

export default function App() {
  const { brand, destinations, fleet, packages, reviews, gallery } = siteData

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar brand={brand.name} whatsapp={brand.whatsapp} />
      <HeroSection brand={brand} />
      <TrustHighlights />
      <AboutSection />
      <DestinationsSection destinations={destinations} />
      <FleetSection fleet={fleet} />
      <PackagesSection packages={packages} />
      <ReviewsSection reviews={reviews} />
      <ReviewFormSection whatsapp={brand.whatsapp} />
      <GallerySection gallery={gallery} />
      <BookingForm />
      <ContactSection brand={brand} />
      <Footer brand={brand} />
      <FloatingWhatsApp whatsapp={brand.whatsapp} />
    </div>
  )
}