import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function Bespoke() {
  const steps = [
    { step: '01', title: 'Dream It', desc: 'Share your occasion, theme, color palette, or inspirational reference.' },
    { step: '02', title: "Let's Chat", desc: 'We discuss flavor profiles, sizing, and finalize your custom design quote.' },
    { step: '03', title: 'Celebrate', desc: 'We handcraft your masterpiece with absolute care, ready for your big day.' }
  ];

  return (
    <section id="bespoke" className="py-20 bg-white border-t border-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-blush/30 rounded-3xl transform -rotate-2"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&q=80&w=800"
                alt="Custom Celebration Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blush/50 px-4 py-1.5 rounded-full mb-4 text-cocoa text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-caramel" />
              <span>Tailored for Milestones</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-cocoa mb-4">
              Bespoke Bakes & Celebrations
            </h2>

            <p className="text-cocoa/80 text-base mb-8 leading-relaxed">
              From intimate birthdays to grand wedding anniversaries, we craft personalized centerpieces that taste as extraordinary as they look.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-cream p-4 rounded-xl border border-blush/40">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-caramel text-white font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-cocoa text-base mb-0.5">{item.title}</h4>
                    <p className="text-cocoa/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919811000000?text=Hi%20Crumbypie,%20I'd%20like%20to%20discuss%20a%20custom%20bespoke%20cake%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-caramel hover:bg-caramel/90 text-white px-8 py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start a WhatsApp Consultation</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
