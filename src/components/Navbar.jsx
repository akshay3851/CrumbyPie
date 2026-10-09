import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Creations', href: '#creations' },
    { name: 'Crumbypie Perks', href: '#perks' },
    { name: 'Bespoke Bakes', href: '#bespoke' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Meet the Bakers', href: '#bakers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8EF]/95 backdrop-blur-md border-b border-[#F3D5C0]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={`${import.meta.env.BASE_URL}crumbypie-logo.png`} alt="Crumbypie Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          <span className="font-pacifico text-2xl text-cocoa">Crumbypie</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-cocoa/80 hover:text-caramel transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-caramel hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Quick Contact */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/919811000000?text=Hi%20Crumbypie,%20I'd%20like%20to%20inquire%20about%20your%20menu!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-caramel hover:bg-caramel/90 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-cocoa hover:text-caramel transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-cream border-b border-[#F3D5C0] shadow-lg py-6 px-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-cocoa hover:text-caramel transition-colors py-2 border-b border-blush/30"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/919811000000?text=Hi%20Crumbypie,%20I'd%20like%20to%20inquire%20about%20your%20menu!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-caramel text-white w-full py-3 rounded-full text-base font-medium shadow"
              >
                <Phone className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
