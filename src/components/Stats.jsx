import React from 'react';
import { Users, BookOpen, Store, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { icon: <Users size={40} />, count: "125,663", label: "Happy Customers" },
    { icon: <BookOpen size={40} />, count: "50,672", label: "Book Collections" },
    { icon: <Store size={40} />, count: "1,562", label: "Our Stores" },
    { icon: <PenTool size={40} />, count: "457", label: "Famous Writers" }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-brand/30 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white group-hover:border-solid transition-all duration-300">
              {stat.icon}
            </div>
            <h4 className="text-4xl font-black text-gray-900 mb-2">{stat.count}</h4>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
