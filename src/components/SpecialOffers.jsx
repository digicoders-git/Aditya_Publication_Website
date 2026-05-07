import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const getImageUrl = (img) => {
  if (!img) return null;
  if (img.startsWith('http')) return img;
  return `${API_BASE_URL}/${img}`;
};

const SpecialOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/offers`);
        const data = await res.json();
        if (data.success && data.offers?.length > 0) {
          setOffers(data.offers);
        }
      } catch (err) {
        // API unavailable — section stays hidden
      }
    };
    fetchOffers();
  }, []);

  // Agar koi active offer nahi hai toh section hide karo
  if (offers.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 font-serif">Special Offers</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <motion.div
              key={offer._id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={getImageUrl(offer.image) || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop'}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold text-2xl drop-shadow-md">{offer.title}</span>
                </div>
                {offer.discountPercent > 0 && (
                  <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    -{offer.discountPercent}% OFF
                  </span>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>

                {offer.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.categories.map((cat, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-400 px-3 py-1 rounded-full border border-gray-100">
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    {offer.oldPrice && (
                      <span className="block text-gray-400 line-through text-xs font-bold">₹{offer.oldPrice}</span>
                    )}
                    <span className="text-brand text-2xl font-black">₹{offer.price}</span>
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
