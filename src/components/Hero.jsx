import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#FFF3E4] to-cream py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-blush/60 px-4 py-1.5 rounded-full mb-6 text-cocoa text-xs md:text-sm font-semibold tracking-wider uppercase border border-bluch">
              <Sparkles className="w-4 h-4 text-caramel" />
              <span>Handcrafted in Faridabad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cocoa leading-[1.15] mb-6 tracking-tight">
              Artisanal Bakes, <br />
              <span className="font-pacifico text-caramel font-normal">A Slice of Divine.</span>
            </h1>

            <p className="text-base sm:text-lg text-cocoa/80 max-w-lg mb-8 leading-relaxed">
              Freshly baked, 100% eggless gourmet bento cakes, decadent truffle jars, and celebration sweets crafted with real butter and premium love. Delivered straight to your doorstep.
            </p>

            {/* Mobile Small Image Placement (Visible on mobile only between text and button) */}
            <div className="block lg:hidden my-6 w-full max-w-xs mx-auto">
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-blush shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
                  alt="Delicious Crumbypie Chocolate Cake"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#creations"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-cocoa hover:bg-cocoa/90 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Our Creations</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#bespoke"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blush/80 hover:bg-blush text-cocoa px-8 py-4 rounded-full text-base font-semibold transition-all"
              >
                Bespoke Orders
              </a>
            </div>
          </div>

          {/* Desktop Right Image (Visible on lg+ screens) */}
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-[450px] h-[450px] bg-blush/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
                alt="Delicious Crumbypie Chocolate Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
