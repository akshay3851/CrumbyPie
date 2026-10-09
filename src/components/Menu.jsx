import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const categories = ['All', 'Bento Cakes', 'Dessert Jars', 'Mousse Cakes', 'Chocolates'];

  const products = [
    {
      id: 1,
      name: 'Classic Truffle Bento Cake',
      category: 'Bento Cakes',
      price: '₹499',
      weight: '300g (Serves 1-2)',
      desc: 'Rich Belgian chocolate sponge layered with silky chocolate ganache in our signature bento box.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Biscoff Caramel Jar',
      category: 'Dessert Jars',
      price: '₹349',
      weight: '220ml',
      desc: 'Crumbled Lotus Biscoff cookies layered with creamy white chocolate cheesecake mousse.',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      name: 'Belgian Dark Mousse Cake',
      category: 'Mousse Cakes',
      price: '₹799',
      weight: '500g',
      desc: 'Decadent velvety dark chocolate mousse with a crispy praline base.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      name: 'Assorted Artisan Truffles (Box of 6)',
      category: 'Chocolates',
      price: '₹599',
      weight: '150g',
      desc: 'Handcrafted bite-sized chocolate truffles infused with sea salt, hazelnut, and espresso.',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      name: 'Red Velvet Mini Bento',
      category: 'Bento Cakes',
      price: '₹549',
      weight: '300g (Serves 1-2)',
      desc: 'Traditional crimson cocoa sponge paired with rich cream cheese frosting.',
      image: 'https://images.unsplash.com/photo-1586788680734-22b39f3eb36a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      name: 'Nutella Ferrero Jar',
      category: 'Dessert Jars',
      price: '₹399',
      weight: '220ml',
      desc: 'Layers of Nutella ganache, chocolate sponge, and crushed roasted hazelnuts.',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 7,
      name: 'Signature Hazelnut Praline Cake',
      category: 'Mousse Cakes',
      price: '₹899',
      weight: '500g',
      desc: 'Roasted Piedmont hazelnuts folded into a luxurious milk chocolate mousse.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 8,
      name: 'Signature Celebration Truffle Box',
      category: 'Chocolates',
      price: '₹999',
      weight: '300g',
      desc: 'An exquisite assortment of 12 handcrafted artisanal chocolates in a keepsake gift box.',
      image: 'https://images.unsplash.com/photo-1526318896980-cf7b109bcef7?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="creations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cocoa mb-4">Our Creations</h2>
          <p className="text-cocoa/70 text-base">
            Handcrafted fresh daily in Faridabad. Select your favorite treat and order directly via WhatsApp.
          </p>
        </div>

        {/* Category Filter Tabs (Horizontal Scroller on Mobile) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeCategory === cat
                  ? 'bg-cocoa text-white shadow-md'
                  : 'bg-cream text-cocoa/80 hover:bg-blush/50 border border-blush'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Carousel Container with Navigation Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-blush shadow-lg rounded-full items-center justify-center text-cocoa hover:bg-cream transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-blush shadow-lg rounded-full items-center justify-center text-cocoa hover:bg-cream transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Product Grid */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-2"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[260px] sm:w-[300px] snap-start bg-cream rounded-2xl overflow-hidden border border-blush/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-blush/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-cocoa text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.weight}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-cocoa mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-caramel font-semibold uppercase tracking-wider mb-2">{product.category}</p>
                    <p className="text-cocoa/70 text-xs line-clamp-2 mb-4 leading-relaxed">{product.desc}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-blush/30">
                  <span className="text-xl font-extrabold text-cocoa">{product.price}</span>
                  <a
                    href={`https://wa.me/919811000000?text=Hi%20Crumbypie,%20I'd%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${product.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-caramel hover:bg-caramel/90 text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
