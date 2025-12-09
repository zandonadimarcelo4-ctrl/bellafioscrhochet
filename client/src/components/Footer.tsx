/**
 * Footer Component
 * Design Philosophy: Romantic Minimalism
 * - Elegant, minimal footer with brand information
 * - Links organized by category
 * - Social media connections
 */

import { Heart, Instagram, Facebook, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A3A3A] text-white crochet-texture">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#E8B4C8]">Bela Fios</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Handcrafted crochet bags made with love, heritage, and artisanal excellence. Each piece tells a story of craftsmanship.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/bellafios_roo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#E8B4C8] rounded-full hover:bg-[#D4A0B8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#E8B4C8] rounded-full hover:bg-[#D4A0B8] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#E8B4C8] rounded-full hover:bg-[#D4A0B8] transition-colors"
                aria-label="Pinterest"
              >
                <Share2 className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  All Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Classic Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Casual Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Mini Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-6">About</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E8B4C8] transition-colors">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © {currentYear} Bela Fios. All rights reserved. Handcrafted with{' '}
            <Heart className="w-4 h-4 inline text-[#E8B4C8] fill-[#E8B4C8]" /> and thread.
          </p>

          {/* Payment Methods */}
          <div className="flex gap-4">
            <span className="text-xs text-gray-400">Secure payments:</span>
            <div className="flex gap-2 text-gray-400">
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
