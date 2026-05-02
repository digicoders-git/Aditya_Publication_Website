import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-6xl font-bold text-gray-900 font-serif mb-6">Contact Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a question or a manuscript to share? We'd love to hear from you. 
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-gray-100 border border-gray-50"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand transition-colors" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Subject</label>
                <input type="text" placeholder="Manuscript Submission" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Your Message</label>
                <textarea rows="6" placeholder="Write your message here..." className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-brand text-white py-5 rounded-2xl font-bold shadow-2xl shadow-brand/30 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col gap-12 justify-center"
          >
            {[
              { icon: <Phone className="text-brand" />, title: "Call Us", detail: "+91 98765 43210", desc: "Mon-Sat from 9am to 6pm." },
              { icon: <Mail className="text-brand" />, title: "Email Us", detail: "hello@adityapublisher.com", desc: "We respond within 24 hours." },
              { icon: <MapPin className="text-brand" />, title: "Visit Us", detail: "New Delhi, India", desc: "Sector 15, Rohini, Delhi-110085" }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-900 font-bold mb-1">{item.detail}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Follow Our Updates</h3>
              <div className="flex gap-6">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand hover:border-brand hover:text-white transition-all">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
