/**
 * How It Works Section Component
 * Design Philosophy: Romantic Minimalism
 * - Rose-gold thin icons for visual hierarchy
 * - Vertical timeline with elegant spacing
 * - Soft shadows and subtle animations
 */

import { useEffect, useState } from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Choose Your Style',
    description: 'Select from our collection of handcrafted designs or request a custom creation.',
    icon: '✨',
    details: ['Browse our catalog', 'Pick your favorite style', 'Or describe your vision'],
  },
  {
    id: 2,
    title: 'Select Your Colors',
    description: 'Pick from our beautiful palette of rose pastel, beige, cream, and more.',
    icon: '🎨',
    details: ['Choose primary color', 'Select accent colors', 'Mix and match freely'],
  },
  {
    id: 3,
    title: 'Place Your Order',
    description: 'Confirm your choices and place your order through our secure checkout.',
    icon: '🛍️',
    details: ['Review your design', 'Secure payment', 'Order confirmation'],
  },
  {
    id: 4,
    title: 'Handcrafted Creation',
    description: 'Our artisan carefully crafts your bag with meticulous attention to detail.',
    icon: '🧶',
    details: ['5-10 days of crafting', 'Premium materials', 'Quality assurance'],
  },
  {
    id: 5,
    title: 'Shipped with Care',
    description: 'Your finished bag is carefully packaged and shipped to your door.',
    icon: '📦',
    details: ['Secure packaging', 'Tracking provided', 'Insured delivery'],
  },
];

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('how-it-works-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works-section"
      className="relative py-24 lg:py-32 bg-white crochet-texture"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="text-section-title text-[#3A3A3A] mb-6">
            How It Works
          </h2>
          <p className="text-body text-[#5A5A5A]">
            From inspiration to delivery, we guide you through every step of creating your perfect handcrafted bag.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`fade-in-up-stagger transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Step Container */}
              <div className="relative pb-12 lg:pb-16">
                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#E8B4C8] to-[#D4C5B9] opacity-30" />
                )}

                {/* Step Content */}
                <div className="flex gap-8 lg:gap-12">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F5F1ED] border-2 border-[#E8B4C8] text-2xl hover-lift">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 pt-2">
                    <button
                      onClick={() =>
                        setExpandedStep(
                          expandedStep === step.id ? null : step.id
                        )
                      }
                      className="w-full text-left hover:opacity-70 transition-opacity"
                    >
                      <h3 className="text-card-title text-[#3A3A3A] mb-2 flex items-center justify-between">
                        {step.title}
                        <span
                          className={`text-[#E8B4C8] transition-transform duration-300 ${
                            expandedStep === step.id ? 'rotate-180' : ''
                          }`}
                        >
                          ▼
                        </span>
                      </h3>
                    </button>

                    <p className="text-body text-[#5A5A5A] mb-4">
                      {step.description}
                    </p>

                    {/* Expandable Details */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedStep === step.id
                          ? 'max-h-48 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 pl-4 border-l-2 border-[#E8B4C8] space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-[#E8B4C8] font-semibold mt-1">
                              •
                            </span>
                            <p className="text-small text-[#8B8B8B]">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-body text-[#5A5A5A] mb-6">
            Ready to start your journey? Let's create something beautiful together.
          </p>
          <button className="btn-primary">
            Start Your Order
          </button>
        </div>
      </div>
    </section>
  );
}
