import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Seconds [PART 1]",
      categories: ["Biography", "Horror", "Thriller"],
      description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur..",
      price: 1699,
      oldPrice: 4199,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "A Heavy Lift",
      categories: ["Biography", "Horror", "Thriller"],
      description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur..",
      price: 1349,
      oldPrice: 2099,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Fun age",
      categories: ["Biography", "Horror", "Thriller"],
      description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur..",
      price: 3349,
      oldPrice: 4199,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 font-serif">Special Offers</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-brand hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((book) => (
            <motion.div 
              key={book.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold text-2xl drop-shadow-md">{book.title}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h3>
                <div className="flex gap-2 mb-4">
                  {book.categories.map((cat, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-400 px-3 py-1 rounded-full border border-gray-100">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <span className="block text-gray-400 line-through text-xs font-bold">₹{book.oldPrice}</span>
                    <span className="text-brand text-2xl font-black">₹{book.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
