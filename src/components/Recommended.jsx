import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const getImage = (img) => {
  if (!img) return 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop';
  if (img.startsWith('http')) return img;
  return `${API_BASE_URL}/${img}`;
};

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/books/section/recommended`);
        const data = await res.json();
        if (data.success && data.books && data.books.length > 0) {
          setBooks(data.books);
        }
      } catch (err) {
        console.error('Failed to load recommended books:', err);
      }
    };
    fetchRecommended();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1.5);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (books.length === 0) return null;

  const maxIndex = books.length - Math.floor(visible);
  const next = () => setCurrent((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section className="py-12 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">Recommended For You</h2>
            <p className="text-gray-400 text-sm mt-1">Hand-picked titles just for you</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current <= 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white hover:border-brand transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-all shadow-md shadow-brand/30 disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: `calc(-${current} * (100% / ${visible} + ${visible > 2 ? '24px' : '16px'}))` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            {books.map((book) => (
              <div
                key={book._id}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: `calc((100% - ${(Math.ceil(visible) - 1) * (visible > 2 ? 24 : 16)}px) / ${visible})` }}
              >
                <div className="relative w-full aspect-[2/3] sm:h-72 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all mb-3">
                  <img
                    src={getImage(book.image)}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate px-1">{book.title}</h3>
                <div className="flex items-center gap-2 mt-1 px-1">
                  <span className="text-brand font-black text-sm sm:text-base">₹{book.price}</span>
                  {book.oldPrice && <span className="text-gray-400 line-through text-[10px] sm:text-xs">₹{book.oldPrice}</span>}
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
