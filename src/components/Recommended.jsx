import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const books = [
  { id: 1, title: "Missadventure", price: 1499, oldPrice: 2099, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" },
  { id: 2, title: "Pushing Clouds", price: 2499, oldPrice: 4199, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" },
  { id: 3, title: "REWORK", price: 4199, oldPrice: null, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&auto=format&fit=crop" },
  { id: 4, title: "Battle Drive", price: 1699, oldPrice: 2099, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop" },
  { id: 5, title: "The Silent Hour", price: 1299, oldPrice: 1899, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop" },
  { id: 6, title: "Deep Waters", price: 1899, oldPrice: 2499, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" },
  { id: 7, title: "Beyond Stars", price: 3299, oldPrice: null, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop" },
];

const VISIBLE = 4;

const Recommended = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const total = books.length;
  const maxIndex = total - VISIBLE;

  const next = () => {
    if (current >= maxIndex) return;
    setDir(1);
    setCurrent((p) => p + 1);
  };

  const prev = () => {
    if (current <= 0) return;
    setDir(-1);
    setCurrent((p) => p - 1);
  };

  return (
    <section className="py-12 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Recommended For You</h2>
            <p className="text-gray-400 text-sm mt-1">Hand-picked titles just for you</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white hover:border-brand transition-all disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-all shadow-md shadow-brand/30 disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + 6px))` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
              >
                <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all mb-3">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm truncate">{book.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-brand font-black text-sm">₹{book.price}</span>
                  {book.oldPrice && <span className="text-gray-400 line-through text-xs">₹{book.oldPrice}</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;
