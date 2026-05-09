import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Headset, X, Sun, Moon, Type, MessageSquare, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FixedSidebar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const sizes = { small: '14px', normal: '16px', large: '18px' };
    document.documentElement.style.fontSize = sizes[fontSize];
  }, [fontSize]);

  const menuItems = [
    { id: 'settings', icon: <Settings size={18} />, color: 'bg-[#FF7A1A]' },
    { id: 'support',  icon: <Headset size={18} />,  color: 'bg-[#00B4D8]' },
  ];

  return (
    <>
      <div className="fixed left-0 bottom-0 -translate-y-1/2 z-[100] flex flex-col gap-2 md:gap-3">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActivePanel(activePanel === item.id ? null : item.id)}
            whileHover={{ x: 6 }}
            className={`${item.color} text-white p-2.5 pl-2.5 pr-4 rounded-r-xl shadow-lg flex items-center justify-center transition-all relative overflow-hidden group`}
          >
            <div className="relative z-10">{item.icon}</div>
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activePanel && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
            />

            <motion.div
              initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed left-0 top-0 bottom-0 w-[85vw] sm:w-[340px] bg-white z-[120] shadow-2xl p-5 sm:p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 font-serif capitalize">
                  {activePanel === 'settings' ? 'Settings' : 'Support'}
                </h3>
                <button onClick={() => setActivePanel(null)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-all">
                  <X size={18} />
                </button>
              </div>

              {/* Settings Panel */}
              {activePanel === 'settings' && (
                <div className="space-y-8">

                  {/* Dark / Light Mode */}
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Appearance</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => setDarkMode(false)}
                        className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all ${!darkMode ? 'border-brand bg-brand/5 text-brand' : 'border-gray-100 text-gray-400 hover:border-brand/30'}`}>
                        <Sun size={22} />
                        <span className="font-bold text-sm">Light</span>
                      </button>
                      <button onClick={() => setDarkMode(true)}
                        className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all ${darkMode ? 'border-brand bg-brand/5 text-brand' : 'border-gray-100 text-gray-400 hover:border-brand/30'}`}>
                        <Moon size={22} />
                        <span className="font-bold text-sm">Dark</span>
                      </button>
                    </div>
                  </div>

                  {/* Font Size */}
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Type size={14} /> Font Size
                    </p>
                    <div className="flex gap-2">
                      {[
                        { key: 'small',  label: 'A', size: 'text-sm' },
                        { key: 'normal', label: 'A', size: 'text-base' },
                        { key: 'large',  label: 'A', size: 'text-lg' },
                      ].map((f) => (
                        <button key={f.key} onClick={() => setFontSize(f.key)}
                          className={`flex-1 py-3 rounded-xl border-2 font-black transition-all ${f.size} ${fontSize === f.key ? 'border-brand bg-brand text-white' : 'border-gray-100 text-gray-500 hover:border-brand/30'}`}>
                          {f.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-2 text-center">Small · Normal · Large</p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Quick Links</p>
                    <div className="space-y-2">
                      {[
                        { label: 'Home', path: '/' },
                        { label: 'Books & Publication', path: '/books-publication-list' },
                        { label: 'About Us', path: '/about-us' },
                        { label: 'Contact', path: '/contact-us' },
                      ].map((link) => (
                        <Link key={link.path} to={link.path} onClick={() => setActivePanel(null)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 hover:bg-brand/5 hover:text-brand transition-all text-sm font-semibold text-gray-700 group">
                          {link.label}
                          <ChevronRight size={14} className="text-gray-300 group-hover:text-brand transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Support Panel */}
              {activePanel === 'support' && (
                <div className="space-y-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Koi bhi sawaal ho — orders, books, ya publishing — hamaari team 24/7 ready hai.
                  </p>

                  <div className="space-y-3">
                    <a href="tel:+919307318451"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand/5 group transition-all">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                        <p className="font-bold text-gray-900 text-sm">+91 93073 18451</p>
                        <p className="text-gray-400 text-xs">Mon–Sat, 9AM–6PM</p>
                      </div>
                    </a>

                    <a href="mailto:aditya.pktiwari@gmail.com"
                      className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-brand/5 group transition-all">
                      <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-all shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Us</p>
                        <p className="font-bold text-gray-900 text-sm">aditya.pktiwari@gmail.com</p>
                        <p className="text-gray-400 text-xs">Reply within 24 hours</p>
                      </div>
                    </a>

                    <Link to="/contact-us" onClick={() => setActivePanel(null)}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-[#1a1f2c] text-white hover:bg-brand transition-all group">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Send a Message</p>
                        <p className="text-white/60 text-xs">Fill our contact form</p>
                      </div>
                      <ChevronRight size={16} className="ml-auto text-white/40 group-hover:text-white transition-colors" />
                    </Link>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-brand/5 border border-brand/10 rounded-2xl p-5">
                    <p className="text-xs font-black text-brand uppercase tracking-widest mb-3">Working Hours</p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between"><span className="text-gray-500">Monday – Friday</span><span className="font-bold text-gray-800">9AM – 6PM</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Saturday</span><span className="font-bold text-gray-800">10AM – 4PM</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Sunday</span><span className="font-bold text-rose-400">Closed</span></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FixedSidebar;
