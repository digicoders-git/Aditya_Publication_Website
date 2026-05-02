import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Grid, List } from 'lucide-react';

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Biography", "Horror", "Thriller", "Adventure", "Sci-Fi"];
  
  const books = [
    { id: 1, title: "Seconds [PART 1]", category: "Biography", price: 20, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop" },
    { id: 2, title: "The Silent Forest", category: "Adventure", price: 25, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" },
    { id: 3, title: "Beyond The Horizon", category: "Sci-Fi", price: 50, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" },
    { id: 4, title: "A Heavy Lift", category: "Thriller", price: 16, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" },
    { id: 5, title: "Fun Age", category: "Biography", price: 40, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&auto=format&fit=crop" },
    { id: 6, title: "REWORK", category: "Business", price: 35, image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&auto=format&fit=crop" },
    { id: 7, title: "Battle Drive", category: "Adventure", price: 20, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop" },
    { id: 8, title: "Missadventure", category: "Biography", price: 18, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" }
  ];

  const filteredBooks = activeCategory === "All" 
    ? books 
    : books.filter(b => b.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title & Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 font-serif">Books & Publication List</h1>
            <p className="text-gray-500 mt-2">Showing {filteredBooks.length} results</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input 
                type="text" 
                placeholder="Search books..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3 focus:outline-none focus:border-brand transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button className="p-3 bg-gray-50 rounded-xl border border-gray-100 hover:text-brand transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat 
                ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-brand/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book, i) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-50"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand/10">
                  {book.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{book.title}</h3>
                <p className="text-brand font-black text-2xl mb-6">${book.price}</p>
                <button className="w-full bg-[#1a1f2c] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand transition-all shadow-xl shadow-gray-200">
                  <ShoppingCart size={18} /> Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Books;
