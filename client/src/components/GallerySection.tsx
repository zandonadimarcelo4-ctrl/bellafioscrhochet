/**
 * Photo Gallery Section Component
 * Design Philosophy: Romantic Minimalism
 * - Asymmetric masonry layout with varied sizes
 * - Close-ups of textures and color combinations
 * - Hover zoom effects and subtle animations
 */

import { useEffect, useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span: 'col-span-1' | 'col-span-2' | 'row-span-2';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/crochet-texture-closeup.jpg',
    alt: 'Close-up of delicate crochet stitching texture',
    span: 'col-span-1',
  },
  {
    id: 2,
    src: '/images/hero-crochet-bag.jpg',
    alt: 'Elegant rose pastel handcrafted crochet bag',
    span: 'col-span-2',
  },
  {
    id: 3,
    src: '/images/product-gallery-bags.jpg',
    alt: 'Collection of handcrafted bags in different styles',
    span: 'col-span-1',
  },
  {
    id: 4,
    src: '/images/color-palette-display.jpg',
    alt: 'Yarn and fabric swatches in rose, beige, and cream',
    span: 'col-span-1',
  },
  {
    id: 5,
    src: '/images/artisan-workspace.jpg',
    alt: 'Artisan workspace with handcrafted materials',
    span: 'col-span-2',
  },
];

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('gallery-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery-section"
      className="relative py-24 lg:py-32 bg-white crochet-texture"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="text-section-title text-[#3A3A3A] mb-6">
            Gallery of Craftsmanship
          </h2>
          <p className="text-body text-[#5A5A5A]">
            Explore the beauty and detail of our handcrafted crochet bags through these intimate glimpses of texture, color, and artistry.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`${image.span} fade-in-up-stagger transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gallery Item */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl card-shadow group cursor-pointer">
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Caption */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">
                      {image.alt}
                    </p>
                  </div>

                  {/* Decorative frame on hover */}
                  <div
                    className={`absolute inset-0 border-2 border-[#E8B4C8] rounded-2xl transition-all duration-300 pointer-events-none ${
                      hoveredId === image.id
                        ? 'opacity-100 scale-95'
                        : 'opacity-0 scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-body text-[#5A5A5A] mb-6">
            Inspired by what you see? Let's create your perfect piece.
          </p>
          <button className="btn-primary">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
