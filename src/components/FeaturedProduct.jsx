import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    title: "Seconds [PART 1]",
    subtitle: "A Film By Janet Scott",
    categories: ["Biography", "Horror", "Thriller"],
    description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur.",
    longDescription: "sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop",
    ghostText: "BEST SELLER 2026"
  },
  {
    id: 2,
    title: "The Silent Forest",
    subtitle: "By Marcus Thorne",
    categories: ["Mystery", "Adventure", "Nature"],
    description: "An immersive journey into the depths of a forest that holds secrets older than time itself. Discover what lies beneath the canopy.",
    longDescription: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    ghostText: "NEW RELEASE"
  },
  {
    id: 3,
    title: "Beyond The Horizon",
    subtitle: "By Elena Rodriguez",
    categories: ["Sci-Fi", "Philosophy", "Space"],
    description: "What happens when humanity reaches the edge of the universe? Explore the psychological impact of infinite space.",
    longDescription: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    ghostText: "MOST READ"
  }
];

const FeaturedProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif tracking-tight">Featured Collections</h2>
          <div className="w-16 h-1 bg-brand mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm">
            Immerse yourself in our hand-picked masterpieces of the season. 
            Exclusive stories waiting for your discovery.
          </p>
        </motion.div>
      </div>

      <div className="relative min-h-[700px] flex items-center pb-20 md:pb-28">
        {/* Ghost Text Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.ghostText}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.05, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 text-[18rem] font-black text-gray-900 select-none pointer-events-none -z-10 whitespace-nowrap"
          >
            {currentProduct.ghostText}
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-12 items-center bg-white p-5 sm:p-6 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50"
              >
                {/* Book Image Cover */}
                <div className="relative aspect-[3/4] max-h-[300px] sm:max-h-none rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <motion.img 
                    src={currentProduct.image} 
                    alt={currentProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8 bg-brand text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                    {currentProduct.subtitle}
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2.5rem]" />
                </div>

                {/* Content Side */}
                <div className="flex flex-col gap-8">
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-4"
                    >
                      {currentProduct.categories.map((cat, i) => (
                        <span key={i} className="text-xs font-bold text-brand uppercase tracking-[0.3em] bg-brand/5 px-4 py-1.5 rounded-full border border-brand/10">
                          {cat}
                        </span>
                      ))}
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif leading-[1.2]"
                    >
                      {currentProduct.title}
                    </motion.h3>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="border-l-4 border-brand pl-5 py-1">
                      <p className="text-sm text-gray-600 font-medium leading-relaxed italic mb-3">
                        "{currentProduct.description}"
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                        {currentProduct.longDescription}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center gap-6 mt-4"
                  >
                    <button className="bg-brand text-white px-7 py-3 rounded-xl font-bold shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all flex items-center gap-2 group text-sm">
                      Explore Collection 
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button className="text-gray-900 font-bold flex items-center gap-2 hover:text-brand transition-colors text-sm">
                      View Details <ChevronRight size={20} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute -bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-5 md:gap-8 z-20">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2 md:gap-3">
                {featuredProducts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 md:w-12 bg-brand' : 'w-2.5 md:w-3 bg-gray-200'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand shadow-2xl shadow-brand/40 flex items-center justify-center text-white hover:bg-brand-dark transition-all hover:scale-110 active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
