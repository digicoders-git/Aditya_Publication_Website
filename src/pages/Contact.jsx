import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ d, label }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-all shadow-sm border border-gray-100" aria-label={label}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  </a>
);

const Contact = () => {
  const socialLinks = [
    { label: 'Facebook', d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { label: 'Twitter', d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
    { label: 'Instagram', d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[320px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1500&auto=format&fit=crop"
            alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2d6e] via-transparent to-[#2a2d6e]" />
        </div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-6xl font-bold text-white mb-4 relative z-10 font-serif">
          Contact Us
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="bg-brand px-6 py-2 rounded-xl flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest shadow-xl relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <ChevronRight size={12} />
          <span className="opacity-80">Contact Us</span>
        </motion.div>
      </section>

      {/* Contact Cards — overlap hero on desktop, normal flow on mobile */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:-mt-14 relative z-20 mb-4">
        {[
          { icon: <Phone size={26} />, title: "Phone Number", detail1: "+91 98765 43210", detail2: "+91 87654 32109" },
          { icon: <Mail size={26} />, title: "Email Address", detail1: "hello@adityaPublication.com", detail2: "support@adityaPublication.com", highlight: true },
          { icon: <MapPin size={26} />, title: "Office Location", detail1: "Sector 15, Rohini", detail2: "New Delhi, India - 110085" },
        ].map((card, i) => (
          <motion.div key={i} whileHover={{ y: -6 }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`p-6 md:p-8 rounded-2xl text-center flex flex-col items-center gap-3 border ${
              card.highlight
                ? 'bg-white border-brand shadow-xl shadow-brand/10'
                : 'bg-white border-gray-100 shadow-lg shadow-gray-100'
            }`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.highlight ? 'bg-brand text-white' : 'bg-brand/5 text-brand'}`}>
              {card.icon}
            </div>
            <h3 className="text-base md:text-lg font-bold text-[#1a1f2c] font-serif">{card.title}</h3>
            <div className="space-y-0.5 w-full">
              <p className="text-gray-600 font-medium text-sm break-all">{card.detail1}</p>
              <p className="text-gray-400 text-xs break-all">{card.detail2}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Form + Info */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

        {/* Left Info */}
        <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          className="flex flex-col gap-7">
          <div>
            <span className="text-brand font-black uppercase tracking-[0.3em] text-xs block mb-3">Message Us</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1a1f2c] font-serif leading-tight mb-3">
              Have A Question?<br className="hidden md:block" /> Send Us A Message
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. Whether it's a manuscript submission or a bulk order query, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-brand shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1f2c] text-sm mb-0.5">Live Chat</h4>
                <p className="text-xs text-gray-500">Available 24/7 for urgent help.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-brand shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1f2c] text-sm mb-0.5">Working Hours</h4>
                <p className="text-xs text-gray-500">Mon – Sat: 9AM – 6PM</p>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-gray-100">
            <h4 className="text-xs font-black text-[#1a1f2c] uppercase tracking-[0.3em] mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <SocialIcon key={i} d={link.d} label={link.label} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
          className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-gray-100">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                <input type="text" placeholder="Enter your name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-all text-gray-700" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="Enter your email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-all text-gray-700" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
              <input type="text" placeholder="Enter phone number"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-all text-gray-700" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
              <textarea rows="5" placeholder="Write your message here..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:bg-white transition-all text-gray-700 resize-none">
              </textarea>
            </div>

            <button className="w-full bg-brand text-white py-3.5 rounded-xl font-bold shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all flex items-center justify-center gap-2 text-sm group">
              Send Message
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto h-[220px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg relative border-4 border-white group">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1500&auto=format&fit=crop"
            alt="Office" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-[#2a2d6e]/40 group-hover:bg-transparent transition-all duration-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-6 py-5 md:p-10 bg-[#1a1f2c]/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl w-[85%] sm:w-auto">
            <MapPin size={32} className="mx-auto mb-2 text-brand" />
            <h3 className="text-lg md:text-2xl font-bold mb-1 font-serif">Visit Our Head Office</h3>
            <p className="opacity-80 text-xs md:text-sm">Sector 15, Rohini, New Delhi - 110085</p>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
