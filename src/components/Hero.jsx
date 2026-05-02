import React from 'react';
import { motion } from 'framer-motion';
import { Book, Sparkles, Star } from 'lucide-react';
import heroBanner from '../assets/images/herosection.png';
import featuredBook from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-gradient-to-br from-[#f8f9ff] via-[#ffffff] to-[#fff5f0] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[15%] text-brand/20 hidden lg:block"
      >
        <Book size={40} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[15%] text-brand/20 hidden lg:block"
      >
        <Sparkles size={30} />
      </motion.div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-0 items-center py-10 lg:py-24">
          
          {/* Left Content: Typography */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start"
          >
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-3 justify-center lg:justify-start"
              >
                <div className="h-[2px] w-12 bg-brand" />
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Best Bookstore In Town</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-brand font-serif text-5xl lg:text-7xl font-extrabold leading-[0.75] mb-0 drop-shadow-sm"
              >
                BIG
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-brand font-serif text-3xl lg:text-5xl italic font-medium -mt-2 lg:-mt-3"
              >
                Winter
              </motion.h3>
              
              <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="bg-brand text-white text-xl lg:text-3xl font-bold px-5 py-2.5 rounded-2xl inline-block shadow-2xl shadow-brand/40 border-b-4 border-brand-dark"
                >
                  SALE
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-gray-400 line-through text-sm lg:text-lg font-medium">₹999.00</span>
                  <span className="text-gray-900 text-lg lg:text-2xl font-bold">Only ₹499.00</span>
                </div>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-500 text-sm max-w-xs leading-relaxed"
            >
              Discover the joy of reading with our exclusive winter collection. 
              Get huge discounts on your favorite titles today.
            </motion.p>
          </motion.div>

          {/* Right Content: Images & Badges */}
          <div className="relative flex justify-center items-center h-[340px] sm:h-[450px] lg:h-[600px] lg:-ml-40 xl:-ml-60 mt-12 lg:mt-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-2xl group"
            >
              <img 
                src={heroBanner} 
                alt="Woman holding books" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-brand/10 rounded-full -z-10 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand/5 rounded-full -z-10 animate-reverse-spin-slow" />
            </motion.div>

            {/* 50% OFF Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="absolute top-0 right-0 lg:-top-10 lg:-right-10 z-30 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-brand rounded-full flex flex-col items-center justify-center text-white border-[6px] border-white shadow-2xl"
            >
              <span className="text-[8px] sm:text-[10px] lg:text-sm font-bold uppercase tracking-widest opacity-80">Up To</span>
              <span className="text-2xl sm:text-3xl lg:text-5xl font-black">50%</span>
              <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold uppercase text-center px-2 leading-tight">OFF ON SELECTED ITEMS</span>
            </motion.div>

            {/* Book Badge */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-2 right-0 lg:-bottom-5 lg:-right-20 z-40"
            >
              <div className="relative group">
                <div className="bg-white p-1.5 rounded-[1.5rem] shadow-2xl overflow-hidden w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 border-4 border-white ring-1 ring-gray-100">
                  <img src={featuredBook} alt="Featured Book" className="w-full h-full object-cover rounded-[1rem] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 shadow-xl rounded-full z-50 whitespace-nowrap border border-gray-50">
                  <span className="text-[7px] lg:text-[10px] font-black text-gray-900 uppercase tracking-tighter flex items-center gap-1">
                    <Star size={8} className="fill-brand text-brand" /> NEW RELEASE 2026
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white p-1 rounded-xl shadow-xl border border-gray-50">
                  <div className="bg-brand text-white px-2 py-0.5 rounded-lg font-black text-sm lg:text-xl">₹249</div>
                  <div className="pr-1">
                    <div className="text-[7px] font-bold text-gray-400 line-through leading-none">₹499</div>
                    <div className="text-[7px] font-black text-brand leading-none">Limited</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white drop-shadow-[-10px_0_10px_rgba(0,0,0,0.05)]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,103.1,123.89,103,181.11,84.62,243.36,64.75,282.49,63.66,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;


