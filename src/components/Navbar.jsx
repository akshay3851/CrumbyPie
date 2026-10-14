import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoCdnFailed, setLogoCdnFailed] = useState(false);

  const navLinks = [
    { name: 'Our Creations', href: '#creations' },
    { name: 'Crumbypie Perks', href: '#perks' },
    { name: 'Bespoke Bakes', href: '#bespoke' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Meet the Bakers', href: '#bakers' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cocoa/5 bg-cream/80 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex origin-left items-center transition duration-300 ease-out hover:scale-[1.03] hover:opacity-80"
          aria-label="Crumbypie home"
        >
          {logoCdnFailed ? (
            <img
              src={`${import.meta.env.BASE_URL}crumbypie-logo.svg`}
              alt="Crumbypie Logo"
              className="h-11 w-auto object-contain sm:h-12"
            />
          ) : (
            <picture className="flex items-center">
              <source
                media="(min-width: 1024px)"
                srcSet="https://res.cloudinary.com/l4r81z55/image/upload/v1791992370/crumbypie-logo.png"
              />
              <source
                media="(min-width: 640px)"
                srcSet="https://res.cloudinary.com/l4r81z55/image/upload/v1791992366/android-chrome-512x512.png"
              />
              <img
                src="https://res.cloudinary.com/l4r81z55/image/upload/v1791992366/android-chrome-512x512.png"
                alt="Crumbypie Logo"
                className="h-11 w-auto object-contain sm:h-12"
                onError={() => setLogoCdnFailed(true)}
              />
            </picture>
          )}
          <span className="font-pacifico text-2xl text-cocoa">Crumbypie</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-normal tracking-[0.01em] text-cocoa/75 transition-colors duration-200 hover:text-cocoa"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Social and WhatsApp Links */}
        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="https://instagram.com/crumby.pie?obrf=YWEzNWx1dXJnYzhu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-cocoa/80 transition-colors duration-200 hover:bg-cocoa/5 hover:text-cocoa"
            aria-label="Follow Crumbypie on Instagram"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>@crumby.pie</span>
          </a>
          <a
            href="https://wa.me/919718464089?text=Hi%20Crumbypie,%20I'd%20like%20to%20place%20an%20order.%20Please%20share%20the%20menu!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-cocoa/80 transition-colors duration-200 hover:bg-cocoa/5 hover:text-cocoa"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Order</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <a
            href="https://instagram.com/crumby.pie?obrf=YWEzNWx1dXJnYzhu"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-cocoa transition-colors hover:bg-cocoa/5"
            aria-label="Follow Crumbypie on Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-cocoa transition-colors hover:bg-cocoa/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 min-h-[calc(100vh-4rem)] border-t border-cocoa/5 bg-cream/95 px-6 py-8 shadow-sm backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-lg flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-2xl font-semibold tracking-tight text-cocoa transition-colors hover:text-caramel"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-5 border-t border-cocoa/10 pt-6">
              <a
                href="https://instagram.com/crumby.pie?obrf=YWEzNWx1dXJnYzhu"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-cocoa/15 py-3 text-sm font-medium text-cocoa transition-colors hover:bg-cocoa/5"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>@crumby.pie</span>
              </a>
              <a
                href="https://wa.me/919718464089?text=Hi%20Crumbypie,%20I'd%20like%20to%20place%20an%20order.%20Please%20share%20the%20menu!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-caramel py-3 text-sm font-medium text-white transition-colors hover:bg-caramel/90"
              >
                <Phone className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
