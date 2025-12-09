/**
 * Hero Section Component
 * Design Philosophy: Romantic Minimalism
 * - Asymmetric layout with text on left, image on right
 * - Generous whitespace and elegant typography
 * - Soft rose pastel accents and subtle shadows
 */

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FDFBF8] crochet-texture overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-20 lg:py-32 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase">
                Artesanato Artesanal
              </p>
              <h1 className="text-hero text-[#3A3A3A]">
                Elegância Nascida do Fio
              </h1>
            </div>

            <p className="text-body text-[#5A5A5A] max-w-lg leading-relaxed">
              Cada bolsa Bela Fios é meticulosamente confeccionada à mão com amor e atenção aos detalhes. Descubra a perfeita combinação de beleza artesanal e elegância moderna em nossa exclusiva coleção de peças de crochê feitas sob encomenda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary group">
                <span className="flex items-center justify-center gap-2">
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="btn-secondary">
                Saiba Mais
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-8 border-t border-[#E8D5CC]">
              <div>
                <p className="text-2xl font-serif text-[#E8B4C8]">100%</p>
                <p className="text-small text-[#8B8B8B]">Feito à Mão</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#E8B4C8]">5-10</p>
                <p className="text-small text-[#8B8B8B]">Dias de Confecção</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#E8B4C8]">∞</p>
                <p className="text-small text-[#8B8B8B]">Cores Disponíveis</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8B4C8] to-[#D4C5B9] rounded-2xl opacity-10 blur-xl" />
              
              {/* Image container with cream frame */}
              <div className="relative bg-[#F5F1ED] p-8 rounded-2xl card-shadow">
                <img
                  src="/images/hero-crochet-bag.jpg"
                  alt="Elegante bolsa de crochê artesanal em rosa pastel"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E8B4C8] rounded-full opacity-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#E8B4C8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
