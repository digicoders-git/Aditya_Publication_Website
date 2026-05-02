import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "You Will Never Believe These Bizarre.",
      date: "Sep 6, 2022",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "You Should Experience Library At Least.",
      date: "Sep 2, 2022",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Ten Factors That Affect Book Library’s.",
      date: "Sep 6, 2022",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "You Will Never Believe These Bizarre.",
      date: "Sep 6, 2022",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Latest News</h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 group shadow-sm hover:shadow-xl transition-all"
          >
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt="news" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors line-clamp-2 min-h-[3.5rem]">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                Sometimes I even ask myself if all this has really happened, if its pictures dwell.
              </p>
              <div className="flex items-center gap-2 text-brand font-bold text-sm border-t border-gray-50 pt-6">
                <Calendar size={16} /> {item.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
