import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SpecialOffers from '../components/SpecialOffers';
import FeaturedProduct from '../components/FeaturedProduct';
import Recommended from '../components/Recommended';
import LatestNews from '../components/LatestNews';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Award, Users, Globe, Smartphone, Mail, Phone, MapPin, Star, CheckCircle2, Zap, Heart, Truck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } })
};

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="h-[2px] w-10 bg-brand" />
    <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">{text}</span>
  </div>
);

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <Stats />
      <SpecialOffers />
      <FeaturedProduct />
      <Recommended />

      {/* ── About Preview ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-10">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" alt="Books" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" alt="Shelf" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
              </div>
            </div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring' }}
              className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-brand text-white px-8 py-5 rounded-2xl shadow-2xl shadow-brand/40 flex flex-col items-center text-center min-w-[150px]">
              <span className="text-4xl font-black">50+</span>
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">Years of<br />Experience</span>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-5 mt-8 lg:mt-0">
            <SectionLabel text="Who We Are" />
            <h2 className="text-4xl font-bold text-[#1a1f2c] font-serif leading-tight">Aditya Publisher — Best Choice For Learners</h2>
            <p className="text-gray-500 text-sm leading-relaxed">1974 se lekar aaj tak, Aditya Publisher ne lakho readers ki zindagi mein kitabon ka rang bhara hai. Hamare paas 50,000 se zyada titles hain — fiction se lekar academic tak.</p>
            <div className="grid grid-cols-2 gap-3">
              {["Comics & Graphics", "Biography", "Literary Collections", "Children Fiction", "Academic Books", "Research Papers"].map((item, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand shrink-0" />
                  <span className="text-gray-600 font-semibold text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              {[
                { icon: <BookOpen size={20} />, label: "50K+ Titles" },
                { icon: <Award size={20} />, label: "Award Winner" },
                { icon: <Users size={20} />, label: "1L+ Readers" },
              ].map((b, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="flex items-center gap-2 bg-brand/5 border border-brand/10 px-4 py-2 rounded-xl text-brand text-xs font-bold">
                  {b.icon} {b.label}
                </motion.div>
              ))}
            </div>
            <Link to="/about-us" className="mt-1 bg-brand text-white w-fit px-7 py-3 rounded-xl font-bold shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all flex items-center gap-2 text-sm">
              Know More <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Why Us</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Why Choose Aditya Publisher</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <BookOpen size={26} />, title: "50,000+ Titles", desc: "Fiction, non-fiction, academic, children — har genre mein best collection." },
              { icon: <Truck size={26} />, title: "Fast Delivery", desc: "Order karo aur 2-3 din mein ghar pe pao. Pan-India delivery available." },
              { icon: <Award size={26} />, title: "100% Authentic", desc: "Sirf original aur genuine books. Koi duplicate, koi compromise nahi." },
              { icon: <Heart size={26} />, title: "Reader Community", desc: "1 lakh se zyada readers ka trusted community. Join karo aur grow karo." },
              { icon: <Globe size={26} />, title: "Online & Offline", desc: "7 cities mein physical stores aur 24/7 online platform available hai." },
              { icon: <Zap size={26} />, title: "24/7 Support", desc: "Koi bhi problem ho — hamare support team hamesha ready hai help ke liye." },
            ].map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1a1f2c] mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Books Teaser ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel text="Our Collection" />
              <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Top Books This Season</h2>
              <p className="text-gray-400 text-sm mt-1">Bestsellers, new arrivals aur award-winning titles</p>
            </div>
            <Link to="/books-publication-list" className="hidden md:flex items-center gap-2 text-brand font-bold text-sm hover:gap-3 transition-all">
              View All Books <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { title: "Seconds [PART 1]", author: "Janet Scott", price: 1699, badge: "Bestseller", badgeColor: "bg-amber-500", rating: 4.5, img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop" },
              { title: "Beyond The Horizon", author: "Elena Rodriguez", price: 4199, badge: "Top Rated", badgeColor: "bg-purple-500", rating: 4.8, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop" },
              { title: "REWORK", author: "Jason Fried", price: 2899, badge: "Bestseller", badgeColor: "bg-amber-500", rating: 4.9, img: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop" },
              { title: "Dark Whispers", author: "Arjun Kapoor", price: 1899, badge: "Trending", badgeColor: "bg-rose-500", rating: 4.4, img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400&auto=format&fit=crop" },
              { title: "Quantitative Aptitude", author: "R.S. Aggarwal", price: 3499, badge: "Bestseller", badgeColor: "bg-amber-500", rating: 4.8, img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop" },
            ].map((book, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-2 left-2 ${book.badgeColor} text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full`}>{book.badge}</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{book.title}</h3>
                  <p className="text-gray-400 text-xs mb-1">by {book.author}</p>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map(j => <Star key={j} size={10} className={j <= Math.round(book.rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />)}
                  </div>
                  <span className="text-brand font-black text-sm">₹{book.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mt-8">
            <Link to="/books-publication-list" className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all text-sm">
              Browse All 50,000+ Books <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <LatestNews />

      {/* ── Download App ── */}
      <section className="py-20 bg-[#1a1f2c] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionLabel text="Mobile App" />
            <h2 className="text-4xl font-bold text-white font-serif leading-tight mb-4">Read Anywhere,<br /><span className="text-brand">Anytime.</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">Download the Aditya Publisher app to access thousands of titles on the go. Sync your library across all devices.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-white text-gray-900 px-6 py-3 rounded-xl flex items-center gap-3 font-bold text-sm shadow-xl hover:shadow-2xl transition-all">
                <Smartphone size={20} className="text-brand" />
                <div className="text-left"><p className="text-[9px] text-gray-400 uppercase font-bold">Download on</p><p className="text-sm font-black">App Store</p></div>
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-3 font-bold text-sm hover:bg-white/20 transition-all">
                <Smartphone size={20} className="text-brand" />
                <div className="text-left"><p className="text-[9px] text-gray-400 uppercase font-bold">Get it on</p><p className="text-sm font-black">Google Play</p></div>
              </motion.button>
            </div>
            <div className="flex gap-6">
              {["iOS & Android", "Tablet Ready", "Offline Reading"].map((f, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-2 text-gray-400 text-xs font-bold">
                  <CheckCircle2 size={14} className="text-brand" /> {f}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ x: 80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative flex justify-center">
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-3xl" />
            <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=500&auto=format&fit=crop" alt="App" className="relative w-72 rounded-3xl shadow-2xl border-4 border-white/10" />
          </motion.div>
        </div>
      </section>

      {/* ── Contact Teaser ── */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Get In Touch</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Hum Yahan Hain Aapke Liye</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">Koi bhi sawaal ho — books, orders, ya publishing — hamaari team hamesha ready hai.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Phone size={28} />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon–Sat, 9AM–6PM" },
              { icon: <Mail size={28} />, title: "Email Us", detail: "hello@adityapublisher.com", sub: "Reply within 24 hours", highlight: true },
              { icon: <MapPin size={28} />, title: "Visit Us", detail: "Sector 15, Rohini", sub: "New Delhi – 110085" },
            ].map((card, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }}
                className={`p-7 rounded-2xl text-center flex flex-col items-center gap-3 border transition-all ${card.highlight ? 'bg-brand text-white border-brand shadow-xl shadow-brand/20' : 'bg-white border-gray-100 shadow-sm hover:shadow-lg'
                  }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.highlight ? 'bg-white/20' : 'bg-brand/10 text-brand'}`}>{card.icon}</div>
                <h3 className={`font-bold text-lg font-serif ${card.highlight ? 'text-white' : 'text-[#1a1f2c]'}`}>{card.title}</h3>
                <p className={`font-semibold text-sm ${card.highlight ? 'text-white' : 'text-gray-700'}`}>{card.detail}</p>
                <p className={`text-xs ${card.highlight ? 'text-white/70' : 'text-gray-400'}`}>{card.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <Link to="/contact-us" className="inline-flex items-center gap-2 bg-[#1a1f2c] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-brand transition-all text-sm shadow-lg">
              Send Us A Message <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
