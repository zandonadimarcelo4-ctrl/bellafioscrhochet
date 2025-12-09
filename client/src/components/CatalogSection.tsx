/**
 * Catalog/Products Section Component
 * Design Philosophy: Romantic Minimalism
 * - Product cards with soft shadows and cream frames
 * - Hover lift effects and smooth transitions
 * - Asymmetric grid layout with generous spacing
 */

import { ShoppingBag, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  colors: string[];
  colorNames: string[];
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Bag',
    description: 'Our signature tote with elegant structure and timeless appeal. Perfect for everyday elegance.',
    colors: ['#E8B4C8', '#D4C5B9', '#F5F1ED'],
    colorNames: ['Rose Pastel', 'Warm Beige', 'Cream'],
    price: 'Starting at $89',
    image: '/images/hero-crochet-bag.jpg',
  },
  {
    id: 2,
    name: 'Casual Bag',
    description: 'A relaxed, versatile style with comfortable handles. Great for weekend adventures.',
    colors: ['#F5F1ED', '#E8B4C8', '#D4C5B9'],
    colorNames: ['Cream', 'Rose Pastel', 'Warm Beige'],
    price: 'Starting at $69',
    image: '/images/product-gallery-bags.jpg',
  },
  {
    id: 3,
    name: 'Mini Bag',
    description: 'A delicate, compact style perfect for essentials. Ideal for evening outings.',
    colors: ['#E8B4C8', '#F5F1ED', '#D4C5B9'],
    colorNames: ['Rose Pastel', 'Cream', 'Warm Beige'],
    price: 'Starting at $49',
    image: '/images/color-palette-display.jpg',
  },
];

export default function CatalogSection() {
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

    const element = document.getElementById('catalog-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="catalog-section"
      className="relative py-24 lg:py-32 bg-[#FDFBF8] crochet-texture"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B4C8] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4C5B9] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[#D4C5B9] text-sm font-semibold tracking-widest uppercase mb-4">
            Collections
          </p>
          <h2 className="text-section-title text-[#3A3A3A] mb-6">
            Explore Our Handcrafted Collection
          </h2>
          <p className="text-body text-[#5A5A5A]">
            Each piece is meticulously crafted to perfection. Choose your style, select your colors, and order your exclusive, made-to-order bag.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`fade-in-up-stagger transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Card */}
              <div className="hover-lift group">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl bg-[#F5F1ED] p-6 card-shadow">
                  <div className="relative bg-white rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-8 right-8 p-3 bg-white rounded-full card-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-[#E8B4C8]" />
                  </button>

                  {/* Badge */}
                  <div className="absolute top-8 left-8 px-3 py-1 bg-[#E8B4C8] text-white text-xs font-semibold rounded-full">
                    Handmade
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-card-title text-[#3A3A3A] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-small text-[#8B8B8B] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Color Swatches */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide">
                      Available Colors
                    </p>
                    <div className="flex gap-3">
                      {product.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="group/swatch cursor-pointer"
                          title={product.colorNames[idx]}
                        >
                          <div
                            className="w-8 h-8 rounded-full border-2 border-[#E8D5CC] transition-all duration-300 group-hover/swatch:scale-110 group-hover/swatch:border-[#E8B4C8]"
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-xs text-[#8B8B8B] mt-1 text-center opacity-0 group-hover/swatch:opacity-100 transition-opacity">
                            {product.colorNames[idx]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-4 border-t border-[#E8D5CC] flex items-center justify-between">
                    <p className="text-card-title text-[#E8B4C8] font-semibold">
                      {product.price}
                    </p>
                    <button className="p-2 rounded-lg bg-[#E8B4C8] text-white transition-all duration-300 hover:bg-[#D4A0B8] hover:scale-110">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-body text-[#5A5A5A] mb-6">
            Don't see your perfect style? We offer custom designs!
          </p>
          <button className="btn-primary">
            Request a Custom Design
          </button>
        </div>
      </div>
    </section>
  );
}
