import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Guestbook() {
  const reviews = [
    {
      name: 'Priya Sharma',
      location: 'Sector 15, Faridabad',
      review: 'Ordered a Biscoff jar and a truffle bento cake for my husband’s birthday. The presentation was top-notch and it tasted divine! So glad we found a premium home bakery nearby.',
      rating: 5
    },
    {
      name: 'Ananya Gupta',
      location: 'Greenfield Colony',
      review: 'Being strictly vegetarian, finding truly premium eggless cakes that don’t taste dry is tough. Crumbypie completely blew us away. The texture was so soft and luxurious!',
      rating: 5
    },
    {
      name: 'Rohit Verma',
      location: 'Charmwood Village',
      review: 'Super smooth WhatsApp ordering process and timely delivery. The packaging looked like an expensive gift box. Will definitely be ordering for all family occasions.',
      rating: 5
    }
  ];

  return (
    <section id="guestbook" className="py-20 bg-cream border-t border-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cocoa mb-4">The Guestbook</h2>
          <p className="text-cocoa/70 text-base">
            Kind words from our lovely dessert patrons across Faridabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-blush/60 shadow-sm relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-blush">
                <Quote className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-cocoa/80 text-sm leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>
              <div className="border-t border-blush/30 pt-4">
                <h4 className="font-bold text-cocoa text-sm">{item.name}</h4>
                <p className="text-xs text-caramel font-medium">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
