/**
 * Testimonials Section Component
 * Design Philosophy: Romantic Minimalism
 * - Elegant rose/beige styling with soft shadows
 * - Subtle rotation on hover for handcrafted feel
 * - Star ratings and customer quotes
 */

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Fashion Enthusiast',
    quote: 'The quality and attention to detail in my Bela Fios bag exceeded all my expectations. It\'s not just beautiful—it\'s a work of art that I\'ll treasure forever.',
    rating: 5,
    image: '👩',
  },
  {
    id: 2,
    name: 'Emma Rodriguez',
    title: 'Sustainable Fashion Advocate',
    quote: 'I love supporting artisans who create with intention. My custom bag arrived perfectly crafted, and the personalized service was exceptional.',
    rating: 5,
    image: '👩‍🦰',
  },
  {
    id: 3,
    name: 'Jessica Chen',
    title: 'Luxury Goods Collector',
    quote: 'Bela Fios represents true luxury—handmade, timeless, and deeply personal. Every time I carry my bag, I feel the love woven into every stitch.',
    rating: 5,
    image: '👩‍🎨',
  },
  {
    id: 4,
    name: 'Amanda Brooks',
    title: 'Interior Designer',
    quote: 'The color palette is absolutely stunning. I ordered three bags in different styles, and they\'ve become my go-to accessories for every occasion.',
    rating: 5,
    image: '👩‍💼',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials-section"
      className="relative py-24 lg:py-32 bg-[#FDFBF8] crochet-texture"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase mb-4">
            Loved by Our Customers
          </p>
          <h2 className="text-section-title text-[#3A3A3A] mb-6">
            Customer Testimonials
          </h2>
          <p className="text-body text-[#5A5A5A]">
            Hear from women who have discovered the beauty and elegance of Bela Fios handcrafted bags.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0 pointer-events-auto'
                      : 'opacity-0 translate-x-4 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 lg:p-12 card-shadow hover-lift">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#E8B4C8] text-[#E8B4C8]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-8">
                      <p className="text-lg lg:text-xl text-[#3A3A3A] font-serif italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8B4C8] flex items-center justify-center text-2xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-[#3A3A3A]">
                          {testimonial.name}
                        </p>
                        <p className="text-small text-[#8B8B8B]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Carousel Height Placeholder */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 opacity-0 pointer-events-none">
                <div className="h-64" />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#E8B4C8] w-8'
                      : 'bg-[#D4C5B9] hover:bg-[#E8B4C8]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-6 lg:gap-12 mt-20 lg:mt-24 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-serif text-[#E8B4C8] mb-2">
              500+
            </p>
            <p className="text-small text-[#8B8B8B]">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-serif text-[#E8B4C8] mb-2">
              4.9★
            </p>
            <p className="text-small text-[#8B8B8B]">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-serif text-[#E8B4C8] mb-2">
              100%
            </p>
            <p className="text-small text-[#8B8B8B]">Handmade</p>
          </div>
        </div>
      </div>
    </section>
  );
}
