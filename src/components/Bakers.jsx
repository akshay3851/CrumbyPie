import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Bakers() {
  return (
    <section id="bakers" className="py-20 bg-white border-t border-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blush/50 px-4 py-1.5 rounded-full mb-4 text-cocoa text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-caramel" />
              <span>Meet the Bakers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-cocoa mb-6">
              Baking with Passion & Purpose
            </h2>

            <p className="text-cocoa/80 text-base leading-relaxed mb-4">
              Hi there! We are the passionate home bakers behind Crumbypie. What started as a late-night craving experiment in our Faridabad kitchen quickly blossomed into a mission to redefine eggless desserts in the NCR region.
            </p>

            <p className="text-cocoa/80 text-base leading-relaxed mb-6">
              We believe that every dessert should taste like a celebration. That's why we never compromise on ingredients—using 100% real butter, authentic couverture chocolate, and zero artificial preservatives. 
            </p>

            <div className="flex items-center gap-3 font-pacifico text-2xl text-caramel">
              <span>— Yashika & Akshay</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blush/30 rounded-3xl transform rotate-2"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                alt="Bakers in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
