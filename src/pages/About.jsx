import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Store, Users, CheckCircle2, Star, ChevronRight, ChevronLeft, Target, Heart, Globe, Truck, Headset, ShieldCheck, Pen, Search, Printer, Package, TrendingUp, Quote, Flame, MapPin, Zap, PenLine, Leaf, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';

const testimonials = [
  { name: "Miranda Lee", role: "Writer", rating: 5, text: "Aditya Publisher ne meri reading journey ko bilkul badal diya. Yahan ki collection aur service dono lajawaab hain. Har baar naye titles milte hain jo sach mein kaam ke hote hain." },
  { name: "Steve Henry", role: "Book Lover", rating: 5, text: "Maine kai bookstores try kiye hain lekin yahan ki quality aur variety ka koi muqabla nahi. Delivery bhi fast hai aur packaging bhi bahut achhi hoti hai." },
  { name: "Jason Huang", role: "Author", rating: 4, text: "Ek author ke taur pe main chahta hoon ki readers ko best books mile — Aditya Publisher exactly yahi karta hai. Highly recommended for all book lovers." },
  { name: "Priya Sharma", role: "Student", rating: 5, text: "Competitive exams ki preparation ke liye yahan se books lena best decision tha. Prices bhi reasonable hain aur collection bhi bahut wide hai." },
  { name: "Rahul Verma", role: "Teacher", rating: 5, text: "Main apne students ko hamesha yahan se books recommend karta hoon. Quality aur authenticity mein koi compromise nahi. Bahut achha experience raha." },
];

const VISIBLE = 3;

const About = () => {
  const [current, setCurrent] = useState(0);
  const maxIndex = testimonials.length - VISIBLE;

  const next = () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-[220px] md:h-[320px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2d6e] via-[#2a2d6e]/80 to-[#2a2d6e]" />
        </div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10 font-serif">
          About Us
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-brand px-8 py-2.5 rounded-xl flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest shadow-xl relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <ChevronRight size={14} />
          <span className="opacity-80">About Us</span>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-10">
              <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" alt="Books" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" alt="Shelf" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-brand text-white px-8 py-6 rounded-2xl shadow-2xl shadow-brand/40 flex flex-col items-center text-center min-w-[160px]">
            <span className="text-4xl font-black mb-1">50+</span>
            <span className="text-xs font-bold uppercase tracking-widest leading-tight">Years of<br />Experience</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-brand" />
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
          </div>
          <h2 className="text-4xl font-bold text-[#1a1f2c] font-serif leading-tight">
            Aditya Publisher — Best Choice For Learners
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            1974 se lekar aaj tak, Aditya Publisher ne lakho readers ki zindagi mein kitabon ka rang bhara hai. Hamare paas 50,000 se zyada titles hain — fiction se lekar academic tak, children books se lekar research publications tak. Hum sirf books nahi bechte, hum ek reading culture banate hain.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Comics & Graphics", "Biography", "Literary Collections", "Children Fiction", "Academic Books", "Research Papers"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <CheckCircle2 size={18} className="text-brand shrink-0" />
                <span className="text-gray-600 font-semibold text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/contact-us" className="mt-2 bg-brand text-white w-fit px-8 py-3.5 rounded-xl font-bold shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all flex items-center gap-2 text-sm">
            Contact Us <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Why Us</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Why Choose Aditya Publisher</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen size={28} />, title: "50,000+ Titles", desc: "Fiction, non-fiction, academic, children — har genre mein best collection." },
              { icon: <Truck size={28} />, title: "Fast Delivery", desc: "Order karo aur 2-3 din mein ghar pe pao. Pan-India delivery available." },
              { icon: <ShieldCheck size={28} />, title: "100% Authentic", desc: "Sirf original aur genuine books. Koi duplicate, koi compromise nahi." },
              { icon: <Heart size={28} />, title: "Reader Community", desc: "1 lakh se zyada readers ka trusted community. Join karo aur grow karo." },
              { icon: <Globe size={28} />, title: "Online & Offline", desc: "7 cities mein physical stores aur 24/7 online platform available hai." },
              { icon: <Headset size={28} />, title: "24/7 Support", desc: "Koi bhi problem ho — hamare support team hamesha ready hai help ke liye." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f2c] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our Purpose</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen size={32} />, title: "Best Bookstore", desc: "Har reader ko uski pasand ki book milni chahiye — yahi haara mission hai. Hum continuously apni collection expand karte rehte hain taaki koi reader khali haath na jaye.", highlight: false },
              { icon: <Award size={32} />, title: "Trusted Seller", desc: "50 saalon se zyada ka experience aur lakho satisfied customers — yahi haari trust ki neev hai. Hum quality aur authenticity mein koi compromise nahi karte.", highlight: true },
              { icon: <Target size={32} />, title: "Expand Vision", desc: "Haara vision hai ki India ke har kone mein reading culture phailaye. 2030 tak 50 cities mein apni presence establish karna haara goal hai.", highlight: false },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className={`p-8 rounded-2xl text-center flex flex-col items-center gap-4 border transition-all ${item.highlight ? 'bg-brand text-white border-brand shadow-2xl shadow-brand/20' : 'bg-white border-gray-100 shadow-md'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.highlight ? 'bg-white/20' : 'bg-brand/10 text-brand'}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold font-serif ${item.highlight ? 'text-white' : 'text-[#1a1f2c]'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>{item.desc}</p>
                <button className={`text-xs font-black uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all ${item.highlight ? 'text-white/80' : 'text-brand'}`}>
                  Learn More <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our People</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Aditya Sharma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" },
              { name: "Neha Gupta", role: "Head of Curation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
              { name: "Rohan Mehta", role: "Operations Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" },
              { name: "Priya Singh", role: "Customer Success", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" },
            ].map((member, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="h-52 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-[#1a1f2c]">{member.name}</h4>
                  <p className="text-brand text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Testimonials */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[2px] w-10 bg-brand" />
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Reviews</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">What Our Readers Say</h2>
              <p className="text-gray-400 text-sm mt-1 max-w-md">Hamare customers ki real experiences — unhi ki zubaani.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} disabled={current === 0} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white hover:border-brand transition-all disabled:opacity-30">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} disabled={current >= maxIndex} className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all disabled:opacity-30">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current} * (100% / ${VISIBLE} + 8px))` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-[#f8f9ff] border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className={j < item.rating ? 'fill-brand text-brand' : 'text-gray-200 fill-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1">"{item.text}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <img src={`https://i.pravatar.cc/150?u=${item.name}`} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#1a1f2c] text-sm">{item.name}</h4>
                      <p className="text-brand text-xs font-bold uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-brand' : 'w-2 bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our Journey</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">50 Saal Ki Kahani</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">1974 se aaj tak — ek chhoti si dukaan se India ke sabse trusted publisher tak ka safar.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand/20 hidden md:block" />
            <div className="flex flex-col gap-10">
              {[
                { year: "1974", title: "Humble Beginnings", desc: "Aditya Sharma ne Delhi ke Connaught Place mein ek chhoti si book shop se apna safar shuru kiya. Sirf 200 titles the, lekin sapna bada tha.", side: "left" },
                { year: "1985", title: "First Publication", desc: "Pehli baar khud ki publishing shuru ki. 'Bharat Ki Kahaniyan' series launch ki jo bestseller ban gayi aur 1 lakh copies biki.", side: "right" },
                { year: "1995", title: "National Expansion", desc: "Mumbai, Kolkata aur Chennai mein branches khuli. Pan-India distribution network establish hua aur 10,000+ titles ho gaye.", side: "left" },
                { year: "2005", title: "Digital Revolution", desc: "Online platform launch kiya. E-books aur audiobooks ki range add ki. Digital India ke saath kadam milaya.", side: "right" },
                { year: "2015", title: "Award & Recognition", desc: "Government of India se 'Best Publisher Award' mila. 50,000+ titles aur 7 cities mein physical presence.", side: "left" },
                { year: "2024", title: "50 Years of Excellence", desc: "50 saal poore kiye! 1 lakh+ satisfied customers, 50,000+ titles, aur India ke top 3 publishers mein shamil.", side: "right" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: item.side === 'left' ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-6 md:gap-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${item.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand/20 transition-all">
                      <span className="text-brand font-black text-2xl font-serif">{item.year}</span>
                      <h3 className="font-bold text-[#1a1f2c] text-lg mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-brand border-4 border-white shadow-lg shrink-0 relative z-10 mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">How We Work</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Hamaari Publishing Process</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">Ek manuscript se bestseller tak — hamaari mehnati process jo quality ensure karti hai.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: <Pen size={24} />, step: "01", title: "Manuscript", desc: "Author apni manuscript submit karta hai. Hamaari editorial team carefully review karti hai." },
              { icon: <Search size={24} />, step: "02", title: "Editing", desc: "Expert editors content ko polish karte hain — grammar, flow, aur clarity ensure karte hain." },
              { icon: <BookOpen size={24} />, step: "03", title: "Design", desc: "Cover design aur layout team attractive aur reader-friendly book design karti hai." },
              { icon: <Printer size={24} />, step: "04", title: "Printing", desc: "High-quality printing presses pe best paper aur ink use karke books print hoti hain." },
              { icon: <Package size={24} />, step: "05", title: "Distribution", desc: "Pan-India network ke through books stores aur readers tak pahunchti hain." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-[#f8f9ff] p-6 rounded-2xl border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all text-center group">
                {i < 4 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-brand/30 z-10" />}
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-4 group-hover:bg-brand group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-brand/30 font-black text-3xl absolute top-4 right-4">{item.step}</span>
                <h3 className="font-bold text-[#1a1f2c] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-16 bg-[#1a1f2c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Recognition</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold font-serif">Awards & Achievements</h2>
            <p className="text-gray-400 text-sm mt-2">50 saalon ki mehnat ka recognition — hamare awards aur milestones.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, title: "Best Publisher Award", year: "2015", org: "Government of India", desc: "National level pe best publisher ka prestigious award mila." },
              { icon: <TrendingUp size={32} />, title: "Top 3 Publisher", year: "2020", org: "India Book Industry", desc: "India ke top 3 publishers mein shamil — sales aur quality dono mein." },
              { icon: <Users size={32} />, title: "1 Lakh+ Readers", year: "2022", org: "Community Milestone", desc: "1 lakh se zyada registered readers ka trusted community." },
              { icon: <Globe size={32} />, title: "International Reach", year: "2023", org: "Global Expansion", desc: "UAE, UK aur USA mein Indian diaspora ke liye books export shuru." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-brand/50 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-4">
                  {item.icon}
                </div>
                <span className="text-brand text-xs font-bold uppercase tracking-widest">{item.year} • {item.org}</span>
                <h3 className="font-bold text-white text-lg mt-2 mb-2 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Did You Know</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl font-bold text-[#1a1f2c] font-serif">Kuch Interesting Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Flame size={28} />, fact: "Hamaari library mein sabse zyada padhne wali book 'Wings of Fire' hai — 5,000+ copies bik chuki hain sirf hamare platform se.", label: "Most Popular Book" },
              { icon: <MapPin size={28} />, fact: "Hamare readers 28 states aur 8 union territories se hain. Sabse zyada orders UP, Maharashtra aur Tamil Nadu se aate hain.", label: "Reader Distribution" },
              { icon: <Zap size={28} />, fact: "Hamaara fastest delivery record 4 ghante ka hai — Delhi NCR mein same-day delivery ke liye.", label: "Speed Record" },
              { icon: <PenLine size={28} />, fact: "500 se zyada Indian authors ne hamare saath publish kiya hai — newcomers se lekar established writers tak.", label: "Author Network" },
              { icon: <Leaf size={28} />, fact: "2022 se hum eco-friendly packaging use kar rahe hain. 80% packaging recycled materials se bani hai.", label: "Sustainability" },
              { icon: <Trophy size={28} />, fact: "Hamaare 3 titles ne National Book Award jeeta hai — fiction, non-fiction aur children's category mein.", label: "Award-Winning Books" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-6 bg-[#f8f9ff] rounded-2xl border border-gray-100 hover:border-brand/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">{item.icon}</div>
                <div>
                  <span className="text-brand text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={48} className="text-white/30 mx-auto mb-6" />
          <blockquote className="text-white text-2xl md:text-3xl font-serif font-bold leading-relaxed mb-8">
            "Ek kitaab sirf kagaz aur syahi nahi hoti — woh ek zindagi hoti hai jo kisi ne apne khoon-pasine se likhi hai. Hamaara kaam hai us zindagi ko sahi haathon tak pahunchana."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Aditya Sharma" className="w-14 h-14 rounded-full border-2 border-white/50 object-cover" />
            <div className="text-left">
              <p className="text-white font-bold text-lg">Aditya Sharma</p>
              <p className="text-white/70 text-sm">Founder & CEO, Aditya Publisher</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a1f2c] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Apni Reading Journey<br />Aaj Hi Shuru Karo</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">50,000+ books mein se apni pasand ki book dhundho. Free delivery on first order. Join 1 lakh+ happy readers today!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/books-publication-list" className="bg-brand text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all flex items-center gap-2 text-sm">
                Browse Books <ChevronRight size={16} />
              </Link>
              <Link to="/contact-us" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2 text-sm">
                Contact Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 border-t border-gray-100 overflow-hidden">
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Our Trusted Partners</p>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {[...['Penguin', 'HarperCollins', 'Oxford', 'Scholastic', 'Rupa Publications', 'Jaico Books', 'Westland', 'Bloomsbury'], ...['Penguin', 'HarperCollins', 'Oxford', 'Scholastic', 'Rupa Publications', 'Jaico Books', 'Westland', 'Bloomsbury']].map((name, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-7 h-7 bg-gray-900 rounded-full" />
                <span className="text-lg font-black text-gray-900 tracking-tighter whitespace-nowrap">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
