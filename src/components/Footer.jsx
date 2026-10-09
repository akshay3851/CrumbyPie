import React from 'react';
import { MessageCircle, MapPin, Heart } from 'lucide-react';

function InstagramIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <img src={`${import.meta.env.BASE_URL}crumbypie-logo.png`} alt="Crumbypie Logo" className="h-10 w-auto object-contain brightness-0 invert" /> */}
              <span className="font-pacifico text-2xl text-cream">Crumbypie</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Artisanal, 100% eggless home bakery based in Faridabad, Haryana. Delivering the slice of divine straight to your celebrations.
            </p>
            <div className="flex items-center gap-2 text-cream/80 text-sm">
              <MapPin className="w-4 h-4 text-caramel flex-shrink-0" />
              <span>Faridabad, Haryana, NCR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base text-white mb-4 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><a href="#creations" className="hover:text-caramel transition-colors">Our Creations</a></li>
              <li><a href="#perks" className="hover:text-caramel transition-colors">Crumbypie Perks</a></li>
              <li><a href="#bespoke" className="hover:text-caramel transition-colors">Bespoke Bakes</a></li>
              <li><a href="#guestbook" className="hover:text-caramel transition-colors">Guestbook</a></li>
              <li><a href="#bakers" className="hover:text-caramel transition-colors">Meet the Bakers</a></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="font-bold text-base text-white mb-4 tracking-wide uppercase text-xs">Direct Connect</h4>
            <p className="text-cream/70 text-sm mb-4">
              Have a custom craving or query? Chat with us instantly on WhatsApp.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919811000000?text=Hi%20Crumbypie,%20I'd%20like%20to%20inquire%20about%20your%20menu!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-caramel text-white flex items-center justify-center hover:bg-caramel/90 transition-all shadow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Crumbypie. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-caramel fill-current" /> for Faridabad dessert lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}
