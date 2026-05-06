import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Apple, Play } from 'lucide-react';

const Download = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm mb-4 block">Mobile Experience</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif mb-6 leading-tight">
            Read Anywhere, <br /> <span className="text-brand">Anytime.</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Download the Aditya Publication app to access thousands of titles on the go. 
            Sync your library across all your devices and enjoy an immersive reading experience with our custom e-reader.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-gray-900 text-white px-7 py-4 rounded-2xl flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl">
              <Apple size={24} />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                <p className="text-base font-bold">App Store</p>
              </div>
            </button>
            <button className="bg-white text-gray-900 border-2 border-gray-100 px-7 py-4 rounded-2xl flex items-center gap-3 hover:bg-gray-50 transition-all shadow-lg">
              <Play size={24} className="fill-gray-900" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                <p className="text-base font-bold">Google Play</p>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
                <Smartphone size={24} />
              </div>
              <p className="font-bold text-gray-900">iOS & Android</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand">
                <Tablet size={24} />
              </div>
              <p className="font-bold text-gray-900">Tablet Ready</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand/5 rounded-full blur-[100px] -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop" 
            alt="Mobile App" 
            className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)] rounded-[3rem]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Download;
