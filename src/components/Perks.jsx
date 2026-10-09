import React from 'react';
import { Award, Clock, Gift, ShieldCheck } from 'lucide-react';

export default function Perks() {
  const perksList = [
    {
      icon: <Award className="w-7 h-7 text-caramel" />,
      title: 'Premium Ingredients',
      desc: 'We use real butter, rich couverture chocolate, and fresh dairy. No artificial preservatives or shortcuts.'
    },
    {
      icon: <Clock className="w-7 h-7 text-caramel" />,
      title: 'Baked to Order',
      desc: 'Your dessert never sits in a display case. Handcrafted specifically for your order ensuring peak freshness.'
    },
    {
      icon: <Gift className="w-7 h-7 text-caramel" />,
      title: 'Beautifully Boxed',
      desc: 'Elegantly packaged with care, making every order ready to gift for birthdays and anniversaries.'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-caramel" />,
      title: '100% Eggless',
      desc: 'Decadent, soft, and completely eggless bakes crafted with strict kitchen hygiene and absolute peace of mind.'
    }
  ];

  return (
    <section id="perks" className="py-20 bg-cream border-t border-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cocoa mb-4">Crumbypie Perks</h2>
          <p className="text-cocoa/70 text-base">
            What makes our home bakery the preferred choice for dessert lovers across Faridabad and NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perksList.map((perk, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-blush/60 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-bluch">
                {perk.icon}
              </div>
              <h3 className="font-bold text-lg text-cocoa mb-2">{perk.title}</h3>
              <p className="text-cocoa/70 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
