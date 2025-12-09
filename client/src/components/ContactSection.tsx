/**
 * Contact/CTA Section Component
 * Design Philosophy: Romantic Minimalism
 * - Bold, prominent CTA for WhatsApp ordering
 * - Elegant contact information layout
 * - Soft background with decorative elements
 */

import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact-section"
      className="relative py-24 lg:py-32 bg-[#FDFBF8] crochet-texture overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Main CTA Section */}
        <div
          className={`max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-br from-[#E8B4C8] to-[#D4C5B9] rounded-3xl p-12 lg:p-16 card-shadow text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
              Order Your Custom Bag
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Ready to create something beautiful? Chat with us on WhatsApp to discuss your perfect design, colors, and crafting timeline.
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/5566996039897?text=Hi%20Bella%20Fios!%20I%27m%20interested%20in%20ordering%20a%20custom%20crochet%20bag."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#E8B4C8] font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Trust badge */}
            <p className="text-white/80 text-sm mt-8">
              ✓ Fast response • ✓ Personalized service • ✓ Made-to-order excellence
            </p>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <div
            className={`fade-in-up-stagger transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-full">
                  <Mail className="w-6 h-6 text-[#E8B4C8]" />
                </div>
              </div>
              <h3 className="text-card-title text-[#3A3A3A] mb-2">Email</h3>
              <a
                href="mailto:hello@belafios.com"
                className="text-[#E8B4C8] hover:text-[#D4A0B8] transition-colors text-sm"
              >
                hello@belafios.com
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            className={`fade-in-up-stagger transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: isVisible ? '100ms' : '0ms' }}
          >
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-full">
                  <MessageCircle className="w-6 h-6 text-[#E8B4C8]" />
                </div>
              </div>
              <h3 className="text-card-title text-[#3A3A3A] mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/5566996039897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8B4C8] hover:text-[#D4A0B8] transition-colors text-sm"
              >
                +55 66 99603-9897
              </a>
            </div>
          </div>

          {/* Location */}
          <div
            className={`fade-in-up-stagger transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: isVisible ? '200ms' : '0ms' }}
          >
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-full">
                  <MapPin className="w-6 h-6 text-[#E8B4C8]" />
                </div>
              </div>
              <h3 className="text-card-title text-[#3A3A3A] mb-2">Location</h3>
              <p className="text-[#8B8B8B] text-sm">
                Handcrafted with love, worldwide shipping available
              </p>
            </div>
          </div>

          {/* Hours */}
          <div
            className={`fade-in-up-stagger transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: isVisible ? '300ms' : '0ms' }}
          >
            <div className="bg-white rounded-2xl p-8 card-shadow hover-lift text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#F5F1ED] rounded-full">
                  <Clock className="w-6 h-6 text-[#E8B4C8]" />
                </div>
              </div>
              <h3 className="text-card-title text-[#3A3A3A] mb-2">Hours</h3>
              <p className="text-[#8B8B8B] text-sm">
                Mon-Fri: 9am-6pm<br />Sat-Sun: 10am-4pm
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 lg:mt-24 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 card-shadow">
            <h3 className="text-2xl font-serif text-[#3A3A3A] mb-4 text-center">
              Stay Updated
            </h3>
            <p className="text-body text-[#5A5A5A] mb-6 text-center">
              Subscribe to our newsletter for exclusive designs, color previews, and special offers.
            </p>
            <form className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#F5F1ED] border border-[#E8D5CC] rounded-lg focus:outline-none focus:border-[#E8B4C8] transition-colors"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
