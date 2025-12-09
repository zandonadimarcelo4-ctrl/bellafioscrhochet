/**
 * About Us Section Component
 * Design Philosophy: Romantic Minimalism
 * - Asymmetric layout with image on left, text on right
 * - Warm, artisanal tone emphasizing handcrafted heritage
 * - Subtle texture overlays and generous whitespace
 */

import { useEffect, useState } from 'react';

export default function AboutSection() {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="relative py-24 lg:py-32 bg-white crochet-texture"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5B9] to-[#E8B4C8] rounded-2xl opacity-10 blur-xl" />

              {/* Image container */}
              <div className="relative bg-[#F5F1ED] p-8 rounded-2xl card-shadow">
                <img
                  src="/images/artisan-workspace.jpg"
                  alt="Espaço de trabalho artesanal com materiais de crochê confeccionados à mão"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4C5B9] rounded-full opacity-10 blur-2xl" />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase">
                Nossa História
              </p>
              <h2 className="text-section-title text-[#3A3A3A]">
                Confeccionado com Herança e Coração
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-body text-[#5A5A5A]">
                Bela Fios nasceu do talento excepcional da minha avó. Com mais de 30 anos de domínio em crochê, ela aperfeiçoou a arte de criar peças bonitas e duráveis que contam uma história. Cada bolsa é um testemunho de sua dedicação e paixão pela excelência artesanal.
              </p>

              <p className="text-body text-[#5A5A5A]">
                Cada ponto é colocado com intenção. Cada cor é escolhida com cuidado. Acreditamos que o verdadeiro luxo está nos detalhes — na textura do fio, na precisão dos pontos e no amor tecido em cada peça. Nosso compromisso com a qualidade significa que cada bolsa Bela Fios é confeccionada para durar a vida toda.
              </p>

              <p className="text-body text-[#5A5A5A]">
                Trabalhamos exclusivamente com materiais sustentáveis de alta qualidade e oferecemos produção sob encomenda. Isso significa que sua bolsa é criada especificamente para você, com suas preferências de cores e estilo em mente. Nenhuma duas peças são exatamente iguais — cada uma é única e sua.
              </p>
            </div>

            {/* Key values */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-[#FDFBF8] rounded-lg border border-[#E8D5CC]">
                <p className="text-card-title text-[#E8B4C8] mb-2">Artesanal</p>
                <p className="text-small text-[#8B8B8B]">Cada peça feita à mão com precisão e cuidado</p>
              </div>
              <div className="p-6 bg-[#FDFBF8] rounded-lg border border-[#E8D5CC]">
                <p className="text-card-title text-[#E8B4C8] mb-2">Sustentável</p>
                <p className="text-small text-[#8B8B8B]">Materiais de qualidade que respeitam o planeta</p>
              </div>
              <div className="p-6 bg-[#FDFBF8] rounded-lg border border-[#E8D5CC]">
                <p className="text-card-title text-[#E8B4C8] mb-2">Personalizada</p>
                <p className="text-small text-[#8B8B8B]">Feita sob encomenda para seu estilo único</p>
              </div>
              <div className="p-6 bg-[#FDFBF8] rounded-lg border border-[#E8D5CC]">
                <p className="text-card-title text-[#E8B4C8] mb-2">Atemporal</p>
                <p className="text-small text-[#8B8B8B]">Projetada para ser apreciada por anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
