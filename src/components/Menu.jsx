import React, { useMemo, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const categories = ['All', 'Snacks', 'Bento Cakes', 'Jar Cakes', 'Mousse Cakes', 'Chocolates'];

  const products = [
    {
      id: 1,
      name: 'Samosa',
      category: 'Snacks',
      price: '₹20',
      image: 'https://images.pexels.com/photos/9027521/pexels-photo-9027521.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Aloo Puff',
      category: 'Snacks',
      price: '₹45',
      image: 'https://images.pexels.com/photos/19499053/pexels-photo-19499053.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Veg Momos',
      category: 'Snacks',
      price: '₹60',
      image: 'https://images.pexels.com/photos/7918232/pexels-photo-7918232.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Soya Momos',
      category: 'Snacks',
      price: '₹70',
      image: 'https://images.pexels.com/photos/7918232/pexels-photo-7918232.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      name: 'Paneer Momos',
      category: 'Snacks',
      price: '₹80',
      weight: '300g (Serves 1-2)',
      desc: 'Traditional crimson cocoa sponge paired with rich cream cheese frosting.',
      image: 'https://images.pexels.com/photos/7918232/pexels-photo-7918232.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      name: 'Chocolate Truffle Cake',
      category: 'Bento Cakes',
      price: '₹200',
      weight: '220ml',
      desc: 'Layers of Nutella ganache, chocolate sponge, and crushed roasted hazelnuts.',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      name: 'Blueberry Truffle Cake',
      category: 'Bento Cakes',
      price: '₹200',
      weight: '500g',
      desc: 'Roasted Piedmont hazelnuts folded into a luxurious milk chocolate mousse.',
      image: 'https://images.pexels.com/photos/17561218/pexels-photo-17561218.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      name: 'Chocolate Truffle Jar Cake',
      category: 'Jar Cakes',
      price: '₹200',
      weight: '300g',
      desc: 'An exquisite assortment of 12 handcrafted artisanal chocolates in a keepsake gift box.',
      image: 'https://images.pexels.com/photos/15080943/pexels-photo-15080943.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      name: 'Blueberry Jar Cake',
      category: 'Jar Cakes',
      price: '₹200',
      image: 'https://images.pexels.com/photos/14122621/pexels-photo-14122621.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 10,
      name: 'Mango Jar Cake',
      category: 'Jar Cakes',
      price: '₹200',
      image: 'https://images.pexels.com/photos/12669167/pexels-photo-12669167.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 11,
      name: 'Dark Chocolate Mousse Cake',
      category: 'Mousse Cakes',
      price: '₹80',
      image: 'https://images.pexels.com/photos/37189984/pexels-photo-37189984.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 12,
      name: 'Blueberry Mousse Cake',
      category: 'Mousse Cakes',
      price: '₹80',
      image: 'https://images.pexels.com/photos/14122627/pexels-photo-14122627.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 13,
      name: 'Milk Chocolate',
      category: 'Chocolates',
      price: '₹20',
      image: 'https://images.pexels.com/photos/4791267/pexels-photo-4791267.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 14,
      name: 'White Chocolate',
      category: 'Chocolates',
      price: '₹20',
      image: 'https://images.pexels.com/photos/4791257/pexels-photo-4791257.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 15,
      name: 'Assorted Chocolates',
      category: 'Chocolates',
      price: '₹180',
      image: 'https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const randomizedProducts = useMemo(() => {
    const items = [...products];

    for (let index = items.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
    }

    return items;
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? randomizedProducts
    : products.filter(p => p.category === activeCategory);

  const selectCategory = (category) => {
    setActiveCategory(category);
    scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

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
              onClick={() => selectCategory(cat)}
              aria-pressed={activeCategory === cat}
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
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = `${import.meta.env.BASE_URL}menu-placeholder.svg`;
                      }}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-cocoa text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-cocoa mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-caramel font-semibold uppercase tracking-wider">Freshly made to order</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-blush/30">
                  <span className="text-xl font-extrabold text-cocoa">{product.price}</span>
                  <a
                    href={`https://wa.me/919718464089?text=Hi%20Crumbypie,%20I'd%20like%20to%20order%20the%20${encodeURIComponent(product.name)}%20(${product.price})`}
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
