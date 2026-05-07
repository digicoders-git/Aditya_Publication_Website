import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Store, Users, CheckCircle2, Star, ChevronRight, ChevronLeft, Target, Heart, Globe, Truck, Headset, ShieldCheck, Pen, Search, Printer, Package, TrendingUp, Quote, Flame, MapPin, Zap, PenLine, Leaf, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';

const testimonials = [
  { name: "Miranda Lee", role: "Writer", rating: 5, text: "Aditya Publication ne meri reading journey ko bilkul badal diya. Yahan ki collection aur service dono lajawaab hain. Har baar naye titles milte hain jo sach mein kaam ke hote hain." },
  { name: "Steve Henry", role: "Book Lover", rating: 5, text: "Maine kai bookstores try kiye hain lekin yahan ki quality aur variety ka koi muqabla nahi. Delivery bhi fast hai aur packaging bhi bahut achhi hoti hai." },
  { name: "Jason Huang", role: "Author", rating: 4, text: "Ek author ke taur pe main chahta hoon ki readers ko best books mile — Aditya Publication exactly yahi karta hai. Highly recommended for all book lovers." },
  { name: "Priya Sharma", role: "Student", rating: 5, text: "Competitive exams ki preparation ke liye yahan se books lena best decision tha. Prices bhi reasonable hain aur collection bhi bahut wide hai." },
  { name: "Rahul Verma", role: "Teacher", rating: 5, text: "Main apne students ko hamesha yahan se books recommend karta hoon. Quality aur authenticity mein koi compromise nahi. Bahut achha experience raha." },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1.1); // Peek for mobile
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = testimonials.length;
  const maxIndex = total - Math.floor(visible);

  const next = () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white overflow-hidden">

      {/* Hero Banner */}
      <section className="relative h-[240px] md:h-[350px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2d6e] via-[#2a2d6e]/80 to-[#2a2d6e]" />
        </div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-6xl font-bold text-white mb-4 relative z-10 font-serif">
          About Us
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-brand px-8 py-2.5 rounded-xl flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest shadow-xl relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <ChevronRight size={14} />
          <span className="opacity-80">About Us</span>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1 pb-10 lg:pb-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="pt-10">
              <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop" alt="Books" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop" alt="Shelf" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-brand text-white px-8 py-5 rounded-2xl shadow-2xl shadow-brand/40 flex flex-col items-center text-center min-w-[150px]">
            <span className="text-4xl font-black mb-1">50+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Years of<br />Experience</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-brand" />
            <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
            <div className="h-[2px] w-10 bg-brand lg:hidden" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1a1f2c] font-serif leading-tight">
            Aditya Publication — Best Choice For Learners
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            1974 se lekar aaj tak, Aditya Publication ne lakho readers ki zindagi mein kitabon ka rang bhara hai. Hamare paas 50,000 se zyada titles hain — fiction se lekar academic tak, children books se lekar research publications tak. Hum sirf books nahi bechte, hum ek reading culture banate hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {["Comics & Graphics", "Biography", "Literary Collections", "Children Fiction", "Academic Books", "Research Papers"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-brand/20 transition-all">
                <CheckCircle2 size={18} className="text-brand shrink-0" />
                <span className="text-gray-700 font-bold text-xs">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/contact-us" className="mt-4 bg-brand text-white w-fit px-10 py-4 rounded-xl font-bold shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
            Contact Us <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Why Us</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f2c] font-serif">Why Choose Aditya Publication</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <BookOpen size={28} />, title: "50,000+ Titles", desc: "Fiction, non-fiction, academic, children — har genre mein best collection." },
              { icon: <Truck size={28} />, title: "Fast Delivery", desc: "Order karo aur 2-3 din mein ghar pe pao. Pan-India delivery available." },
              { icon: <ShieldCheck size={28} />, title: "100% Authentic", desc: "Sirf original aur genuine books. Koi duplicate, koi compromise nahi." },
              { icon: <Heart size={28} />, title: "Reader Community", desc: "1 lakh se zyada readers ka trusted community. Join karo aur grow karo." },
              { icon: <Globe size={28} />, title: "Online & Offline", desc: "7 cities mein physical stores aur 24/7 online platform available hai." },
              { icon: <Headset size={28} />, title: "24/7 Support", desc: "Koi bhi problem हो — hamare support team hamesha ready hai help ke liye." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand/20 transition-all flex flex-col gap-5 items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1f2c] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our Purpose</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f2c] font-serif">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen size={32} />, title: "Best Bookstore", desc: "Har reader ko uski pasand ki book milni chahiye — yahi hamara mission hai. Hum continuously apni collection expand karte rehte hain taaki koi reader khali haath na jaye.", highlight: false },
              { icon: <Award size={32} />, title: "Trusted Seller", desc: "50 saalon se zyada ka experience aur lakho satisfied customers — yahi hamari trust ki neev hai. Hum quality aur authenticity mein koi compromise nahi karte.", highlight: true },
              { icon: <Target size={32} />, title: "Expand Vision", desc: "Hamara vision hai ki India ke har kone mein reading culture phailaye. 2030 tak 50 cities mein apni presence establish karna hamara goal hai.", highlight: false },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className={`p-10 rounded-[2.5rem] text-center flex flex-col items-center gap-5 border transition-all ${item.highlight ? 'bg-brand text-white border-brand shadow-2xl shadow-brand/30' : 'bg-white border-gray-100 shadow-md hover:shadow-xl'}`}>
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${item.highlight ? 'bg-white/20' : 'bg-brand/10 text-brand'}`}>
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold font-serif ${item.highlight ? 'text-white' : 'text-[#1a1f2c]'}`}>{item.title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>{item.desc}</p>
                <button className={`text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all ${item.highlight ? 'text-white/80' : 'text-brand'}`}>
                  Learn More <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our People</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f2c] font-serif">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Aditya Sharma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" },
              { name: "Neha Gupta", role: "Head of Curation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
              { name: "Rohan Mehta", role: "Operations Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" },
              { name: "Priya Singh", role: "Customer Success", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" },
            ].map((member, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
                <div className="h-64 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-[#1a1f2c] text-lg">{member.name}</h4>
                  <p className="text-brand text-xs font-black uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[2px] w-10 bg-brand" />
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Reviews</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1f2c] font-serif">What Our Readers Say</h2>
              <p className="text-gray-400 text-sm md:text-base mt-2 max-w-md">Hamare customers ki real experiences — unhi ki zubaani.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={prev} disabled={current <= 0} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white hover:border-brand transition-all disabled:opacity-30">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} disabled={current >= maxIndex} className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-xl shadow-brand/30 hover:bg-brand-dark transition-all disabled:opacity-30">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current} * (100% / ${visible} + ${visible > 2 ? '24px' : '16px'}))` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-[#f8f9ff] border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-6 shadow-sm hover:shadow-xl transition-all"
                  style={{ 
                    width: `calc((100% - ${(Math.ceil(visible) - 1) * (visible > 2 ? 24 : 16)}px) / ${visible})`,
                    minWidth: visible < 2 ? '85%' : 'auto'
                  }}
                >
                  <Quote size={40} className="text-brand/10" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className={j < item.rating ? 'fill-brand text-brand' : 'text-gray-200 fill-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed italic font-medium flex-1">"{item.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img src={`https://i.pravatar.cc/150?u=${item.name}`} alt={item.name} className="w-14 h-14 rounded-2xl object-cover shadow-md" />
                    <div>
                      <h4 className="font-bold text-[#1a1f2c] text-base">{item.name}</h4>
                      <p className="text-brand text-[10px] font-black uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-500 ${current === i ? 'w-10 bg-brand' : 'w-2.5 bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Our Journey</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1f2c] font-serif">50 Saal Ki Kahani</h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl mx-auto">1974 se aaj tak — ek chhoti si dukaan se India ke sabse trusted Publication tak ka safar.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand/10" />
            <div className="flex flex-col gap-12">
              {[
                { year: "1974", title: "Humble Beginnings", desc: "Aditya Sharma ne Delhi ke Connaught Place mein ek chhoti si book shop se apna safar shuru kiya. Sirf 200 titles the, lekin sapna bada tha.", side: "left" },
                { year: "1985", title: "First Publication", desc: "Pehli baar khud ki publishing shuru ki. 'Bharat Ki Kahaniyan' series launch ki jo bestseller ban gayi aur 1 lakh copies biki.", side: "right" },
                { year: "1995", title: "National Expansion", desc: "Mumbai, Kolkata aur Chennai mein branches khuli. Pan-India distribution network establish hua aur 10,000+ titles ho gaye.", side: "left" },
                { year: "2005", title: "Digital Revolution", desc: "Online platform launch kiya. E-books aur audiobooks ki range add ki. Digital India ke saath kadam milaya.", side: "right" },
                { year: "2015", title: "Award & Recognition", desc: "Government of India se 'Best Publication Award' mila. 50,000+ titles aur 7 cities mein physical presence.", side: "left" },
                { year: "2024", title: "50 Years of Excellence", desc: "50 saal poore kiye! 1 lakh+ satisfied customers, 50,000+ titles, aur India ke top 3 Publications mein shamil.", side: "right" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 flex justify-start md:justify-center ${item.side === 'left' ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} pl-12 md:pl-0`}>
                    <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand/20 transition-all w-full max-w-md">
                      <span className="text-brand font-black text-3xl font-serif">{item.year}</span>
                      <h3 className="font-bold text-[#1a1f2c] text-xl mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-white border-4 border-brand shadow-xl shrink-0 relative z-10" />
                  <div className="flex md:hidden absolute left-4 w-4 h-4 rounded-full bg-brand border-2 border-white shadow-md z-10 mt-10" />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">How We Work</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f2c] font-serif">Hamaari Publishing Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Pen size={24} />, step: "01", title: "Manuscript", desc: "Author apni manuscript submit karta hai. Hamaari editorial team carefully review karti hai." },
              { icon: <Search size={24} />, step: "02", title: "Editing", desc: "Expert editors content ko polish karte hain — grammar, flow, aur clarity ensure karte hain." },
              { icon: <BookOpen size={24} />, step: "03", title: "Design", desc: "Cover design aur layout team attractive aur reader-friendly book design karti hai." },
              { icon: <Printer size={24} />, step: "04", title: "Printing", desc: "High-quality printing presses pe best paper aur ink use karke books print hoti hain." },
              { icon: <Package size={24} />, step: "05", title: "Distribution", desc: "Pan-India network ke through books stores aur readers tak pahunchti hain." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-[#f8f9ff] p-8 rounded-[2rem] border border-gray-100 hover:border-brand/30 hover:shadow-xl transition-all text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-brand/10 font-black text-5xl absolute top-6 right-6">{item.step}</span>
                <h3 className="font-bold text-[#1a1f2c] text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-20 bg-[#1a1f2c] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Recognition</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif">Awards & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Award size={32} />, title: "Best Publication Award", year: "2015", org: "Government of India", desc: "National level pe best Publication ka prestigious award mila." },
              { icon: <TrendingUp size={32} />, title: "Top 3 Publication", year: "2020", org: "India Book Industry", desc: "India ke top 3 Publications mein shamil — sales aur quality dono mein." },
              { icon: <Users size={32} />, title: "1 Lakh+ Readers", year: "2022", org: "Community Milestone", desc: "1 lakh se zyada registered readers ka trusted community." },
              { icon: <Globe size={32} />, title: "International Reach", year: "2023", org: "Global Expansion", desc: "UAE, UK aur USA mein Indian diaspora ke liye books export shuru." },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 hover:border-brand/50 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-6 shadow-2xl shadow-brand/20">
                  {item.icon}
                </div>
                <span className="text-brand text-xs font-black uppercase tracking-widest">{item.year} • {item.org}</span>
                <h3 className="font-bold text-white text-xl mt-3 mb-3 font-serif">{item.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-[2px] w-10 bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Did You Know</span>
              <div className="h-[2px] w-10 bg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f2c] font-serif">Kuch Interesting Facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Flame size={28} />, fact: "Hamaari library mein sabse zyada padhne wali book 'Wings of Fire' hai — 5,000+ copies bik chuki hain sirf hamare platform se.", label: "Most Popular Book" },
              { icon: <MapPin size={28} />, fact: "Hamare readers 28 states aur 8 union territories se hain. Sabse zyada orders UP, Maharashtra aur Tamil Nadu se aate hain.", label: "Reader Distribution" },
              { icon: <Zap size={28} />, fact: "Hamaara fastest delivery record 4 ghante ka hai — Delhi NCR mein same-day delivery ke liye.", label: "Speed Record" },
              { icon: <PenLine size={28} />, fact: "500 se zyada Indian authors ne hamare saath publish kiya hai — newcomers se lekar established writers tak.", label: "Author Network" },
              { icon: <Leaf size={28} />, fact: "2022 se hum eco-friendly packaging use kar rahe hain. 80% packaging recycled materials se bani hai.", label: "Sustainability" },
              { icon: <Trophy size={28} />, fact: "Hamaere 3 titles ne National Book Award jeeta hai — fiction, non-fiction aur children's category mein.", label: "Award-Winning Books" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-5 p-8 bg-[#f8f9ff] rounded-[2rem] border border-gray-100 hover:border-brand/30 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-brand shrink-0">{item.icon}</div>
                <div>
                  <span className="text-brand text-xs font-black uppercase tracking-widest">{item.label}</span>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2 font-medium">{item.fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Quote size={60} className="text-white/20 mx-auto mb-8" />
          <blockquote className="text-white text-2xl md:text-4xl font-serif font-bold leading-tight mb-10 italic">
            "Ek kitaab sirf kagaz aur syahi nahi hoti — woh ek zindagi hoti hai jo kisi ne apne khoon-pasine se likhi hai. Hamaara kaam hai us zindagi ko sahi haathon tak pahunchana."
          </blockquote>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Aditya Sharma" className="w-20 h-20 rounded-3xl border-4 border-white/20 object-cover shadow-2xl" />
            <div className="text-center md:text-left">
              <p className="text-white font-black text-xl">Aditya Sharma</p>
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Founder & CEO, Aditya Publication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a1f2c] rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px]" />
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6 leading-tight">Apni Reading Journey<br /><span className="text-brand">Aaj Hi Shuru Karo</span></h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">50,000+ books mein se apni pasand ki book dhundho. Free delivery on first order. Join 1 lakh+ happy readers today!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 shrink-0 relative z-10 w-full lg:w-auto">
              <Link to="/books-publication-list" className="bg-brand text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-brand/40 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
                Browse Books <ChevronRight size={20} />
              </Link>
              <Link to="/contact-us" className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
                Contact Us <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-gray-100 overflow-hidden bg-white">
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12">Our Trusted Partners</p>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-20 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...['Penguin', 'HarperCollins', 'Oxford', 'Scholastic', 'Rupa Publications', 'Jaico Books', 'Westland', 'Bloomsbury'], ...['Penguin', 'HarperCollins', 'Oxford', 'Scholastic', 'Rupa Publications', 'Jaico Books', 'Westland', 'Bloomsbury']].map((name, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <div className="w-8 h-8 bg-brand/20 rounded-xl flex items-center justify-center text-brand font-black text-xs">A</div>
                <span className="text-xl font-black text-[#1a1f2c] tracking-tighter whitespace-nowrap uppercase">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
