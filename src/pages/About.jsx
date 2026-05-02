import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-brand font-black uppercase tracking-[0.4em] text-sm mb-4 block"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-bold text-gray-900 font-serif mb-8"
        >
          About Aditya Publisher
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Founded in 2010, Aditya Publisher has grown from a small local bookstore to one of the most respected independent publishers in the country. Our mission is to bridge the gap between brilliant authors and passionate readers.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 font-serif">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower voices that deserve to be heard and to provide readers with high-quality, thought-provoking literature that inspires change and fosters imagination.
            </p>
            <div className="h-1 w-20 bg-brand rounded-full" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 font-serif">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become a global leader in the publishing industry, known for our commitment to quality, diversity, and the celebration of the written word.
            </p>
            <div className="h-1 w-20 bg-brand rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <BookOpen className="text-brand" />, title: "Premium Quality", desc: "We use high-grade paper and advanced printing techniques." },
          { icon: <Users className="text-brand" />, title: "Author-Centric", desc: "We work closely with authors to bring their vision to life." },
          { icon: <Award className="text-brand" />, title: "Award Winning", desc: "Our publications have won numerous literary awards." },
          { icon: <ShieldCheck className="text-brand" />, title: "Trusted Brand", desc: "Over 15 years of excellence in the publishing industry." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-50 text-center"
          >
            <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default About;
