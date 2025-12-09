/**
 * Home Page - Bela Fios Website
 * Design Philosophy: Romantic Minimalism
 * - Elegant, minimalist design with handcrafted aesthetic
 * - Rose pastel, beige, cream, and white color palette
 * - Smooth animations and generous whitespace
 */

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CatalogSection from '@/components/CatalogSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF8]">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Catalog/Products Section */}
      <CatalogSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact/CTA Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
