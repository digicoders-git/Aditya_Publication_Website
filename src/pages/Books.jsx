import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Star, TrendingUp, Award, ChevronRight, BookMarked, Zap, Globe, Compass, GraduationCap, X, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["All", "Biography", "Horror", "Thriller", "Adventure", "Sci-Fi", "Business", "Academic"];

const books = [
  { id: 1,  title: "Seconds [PART 1]",     author: "Janet Scott",     category: "Biography", price: 1699, oldPrice: 2499, rating: 4.5, reviews: 128, badge: "Bestseller", desc: "Ek aisi kahani jo aapko sochne pe majboor kar degi. Janet Scott ki yeh biography ek insaan ki zindagi ke ansuney pehluon ko saamne laati hai.", pages: 320, lang: "English", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop" },
  { id: 2,  title: "The Silent Forest",    author: "Marcus Thorne",   category: "Adventure", price: 2099, oldPrice: 2999, rating: 4.2, reviews: 94,  badge: "New",        desc: "Ek jungle mein chupi rahasymay duniya ki khoj. Marcus Thorne ka yeh adventure novel aapko apni seat se uthne nahi dega.", pages: 280, lang: "English", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop" },
  { id: 3,  title: "Beyond The Horizon",   author: "Elena Rodriguez", category: "Sci-Fi",    price: 4199, oldPrice: null, rating: 4.8, reviews: 210, badge: "Top Rated",  desc: "Bhavishya ki duniya mein ek safar jo aapki soch badal dega. Elena Rodriguez ka masterpiece jo science aur imagination ko jodata hai.", pages: 412, lang: "English", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop" },
  { id: 4,  title: "A Heavy Lift",         author: "David Chen",      category: "Thriller",  price: 1349, oldPrice: 1999, rating: 4.0, reviews: 67,  badge: null,         desc: "Ek thriller jo aapko raat bhar jaag ke padhne pe majboor kar dega. David Chen ka suspense-filled narrative.", pages: 256, lang: "English", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" },
  { id: 5,  title: "Fun Age",              author: "Priya Sharma",    category: "Biography", price: 3349, oldPrice: 4199, rating: 4.6, reviews: 183, badge: "Trending",   desc: "Priya Sharma ki yeh biography ek aisi zindagi ki kahani hai jo har mushkil mein muskurana sikhati hai.", pages: 298, lang: "Hindi", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop" },
  { id: 6,  title: "REWORK",               author: "Jason Fried",     category: "Business",  price: 2899, oldPrice: 3499, rating: 4.9, reviews: 342, badge: "Bestseller", desc: "Business karne ka naya tarika. Jason Fried aur DHH ki yeh book startup aur business ki duniya ko naye nazariye se dekhti hai.", pages: 288, lang: "English", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600&auto=format&fit=crop" },
  { id: 7,  title: "Battle Drive",         author: "Rohan Mehta",     category: "Adventure", price: 1699, oldPrice: null, rating: 3.9, reviews: 55,  badge: null,         desc: "Ek adrenaline-pumping adventure jo aapko ek alag hi duniya mein le jaata hai. Rohan Mehta ka debut novel.", pages: 224, lang: "Hindi", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" },
  { id: 8,  title: "Missadventure",        author: "Neha Gupta",      category: "Biography", price: 1499, oldPrice: 2099, rating: 4.3, reviews: 101, badge: "New",        desc: "Galtiyon se seekhne ki ek dilchasp kahani. Neha Gupta apni zindagi ke sabse mushkil waqt ko humor ke saath bayaan karti hain.", pages: 264, lang: "Hindi", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop" },
  { id: 9,  title: "Dark Whispers",        author: "Arjun Kapoor",    category: "Horror",    price: 1899, oldPrice: 2499, rating: 4.4, reviews: 77,  badge: "Trending",   desc: "Raat ke andheron mein chupi awaazein jo aapko darr se kaanpne pe majboor kar dengi. Arjun Kapoor ka horror masterpiece.", pages: 310, lang: "English", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop" },
  { id: 10, title: "Stars & Shadows",      author: "Meera Iyer",      category: "Sci-Fi",    price: 2499, oldPrice: 3199, rating: 4.1, reviews: 89,  badge: null,         desc: "Taaron ki roshni mein chupi andheri sachai. Meera Iyer ka yeh sci-fi novel space aur human emotions ka behtareen mix hai.", pages: 376, lang: "English", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop" },
  { id: 11, title: "Quantitative Aptitude",author: "R.S. Aggarwal",   category: "Academic",  price: 3499, oldPrice: 4499, rating: 4.8, reviews: 512, badge: "Bestseller", desc: "Competitive exams ki taiyari ke liye sabse trusted book. R.S. Aggarwal ki yeh classic book lakho students ki pehli pasand hai.", pages: 944, lang: "English", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" },
];

const badgeColors = {
  "Bestseller": "bg-amber-500",
  "New":        "bg-green-500",
  "Top Rated":  "bg-purple-500",
  "Trending":   "bg-rose-500",
};

const Stars = ({ rating, size = 11 }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(i => (
      <Star key={i} size={size} className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />
    ))}
  </div>
);

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [selected, setSelected] = useState(null);

  let filtered = activeCategory === "All" ? books : books.filter(b => b.category === activeCategory);
  if (search) filtered = filtered.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));
  if (sort === "low")    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")   filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-[200px] md:h-[280px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2d6e] via-[#2a2d6e]/80 to-[#2a2d6e]" />
        </div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl md:text-4xl font-bold text-white mb-4 relative z-10 font-serif">
          Books & Publication List
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-brand px-8 py-2.5 rounded-xl flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest shadow-xl relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <ChevronRight size={14} />
          <span className="opacity-80">Books</span>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <BookOpen size={18} />, label: "Total Books", value: "50,000+" },
            { icon: <TrendingUp size={18} />, label: "New Arrivals", value: "200+ Monthly" },
            { icon: <Award size={18} />, label: "Award Winners", value: "1,200+" },
            { icon: <Star size={18} />, label: "Avg Rating", value: "4.7 / 5" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">{s.icon}</div>
              <div>
                <p className="text-white/70 text-xs">{s.label}</p>
                <p className="font-bold text-sm">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search by title or author..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors" />
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-brand cursor-pointer">
            <option value="default">Sort By: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' : 'bg-white text-gray-500 border-gray-200 hover:border-brand/40 hover:text-brand'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6">Showing <span className="font-bold text-gray-700">{filtered.length}</span> results {activeCategory !== "All" && `in "${activeCategory}"`}</p>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <AnimatePresence>
            {filtered.map((book, i) => (
              <motion.div key={book.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.04 }}
                whileHover={{ y: -5 }} onClick={() => setSelected(book)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-gray-100 cursor-pointer"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {book.badge && (
                    <span className={`absolute top-2.5 left-2.5 ${badgeColors[book.badge]} text-white text-[9px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full`}>
                      {book.badge}
                    </span>
                  )}
                  {book.oldPrice && (
                    <span className="absolute top-2.5 right-2.5 bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">
                      {Math.round((1 - book.price / book.oldPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-0.5">{book.category}</p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-0.5 line-clamp-1">{book.title}</h3>
                  <p className="text-gray-400 text-xs mb-2">by {book.author}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Stars rating={book.rating} />
                    <span className="text-gray-400 text-[10px]">({book.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand font-black text-sm">₹{book.price}</span>
                    {book.oldPrice && <span className="text-gray-400 line-through text-xs">₹{book.oldPrice}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-semibold">No books found</p>
          </div>
        )}

        {/* Featured Publishers */}
        <div className="mt-14 bg-[#f8f9ff] rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-[#1a1f2c] font-serif mb-1">Featured Publishers</h2>
          <p className="text-gray-400 text-sm mb-6">Hamare trusted publishing partners se best titles</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Penguin India", books: "12,000+ titles", color: "bg-orange-50 border-orange-100" },
              { name: "HarperCollins", books: "8,500+ titles",  color: "bg-blue-50 border-blue-100" },
              { name: "Oxford Press",  books: "6,200+ titles",  color: "bg-green-50 border-green-100" },
              { name: "Scholastic",    books: "4,800+ titles",  color: "bg-purple-50 border-purple-100" },
            ].map((pub, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className={`${pub.color} border rounded-2xl p-5 cursor-pointer transition-all hover:shadow-md`}>
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                  <BookOpen size={20} className="text-brand" />
                </div>
                <h4 className="font-bold text-[#1a1f2c] text-sm">{pub.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{pub.books}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Genre Highlights */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1f2c] font-serif mb-6">Browse By Genre</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Biography", icon: <BookMarked size={22} />, count: "2,400+" },
              { name: "Thriller",  icon: <Zap size={22} />,        count: "1,800+" },
              { name: "Sci-Fi",    icon: <Globe size={22} />,      count: "1,200+" },
              { name: "Adventure", icon: <Compass size={22} />,    count: "3,100+" },
              { name: "Academic",  icon: <GraduationCap size={22} />, count: "6,200+" },
              { name: "Horror",    icon: <BookOpen size={22} />,   count: "900+" },
            ].map((g, i) => (
              <motion.button key={i} whileHover={{ scale: 1.05 }} onClick={() => setActiveCategory(g.name)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${activeCategory === g.name ? 'bg-brand border-brand' : 'bg-gray-50 border-gray-100 hover:border-brand/30'}`}>
                <span className={activeCategory === g.name ? 'text-white' : 'text-brand'}>{g.icon}</span>
                <span className={`text-xs font-bold ${activeCategory === g.name ? 'text-white' : 'text-gray-700'}`}>{g.name}</span>
                <span className={`text-[10px] ${activeCategory === g.name ? 'text-white/70' : 'text-gray-400'}`}>{g.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Full View Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  {selected.badge && (
                    <span className={`absolute top-4 left-4 ${badgeColors[selected.badge]} text-white text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full`}>
                      {selected.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 relative">
                  <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <X size={16} />
                  </button>

                  <div>
                    <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-1">{selected.category}</p>
                    <h2 className="text-2xl font-bold text-[#1a1f2c] font-serif leading-tight">{selected.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">by <span className="font-semibold text-gray-600">{selected.author}</span></p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Stars rating={selected.rating} size={14} />
                    <span className="text-gray-500 text-sm font-semibold">{selected.rating}</span>
                    <span className="text-gray-400 text-sm">({selected.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">{selected.desc}</p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-gray-400 text-xs">Pages</p>
                      <p className="font-bold text-gray-800 text-sm">{selected.pages}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-gray-400 text-xs">Language</p>
                      <p className="font-bold text-gray-800 text-sm">{selected.lang}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
                    <div>
                      <span className="text-brand font-black text-2xl">₹{selected.price}</span>
                      {selected.oldPrice && (
                        <span className="text-gray-400 line-through text-sm ml-2">₹{selected.oldPrice}</span>
                      )}
                    </div>
                    {selected.oldPrice && (
                      <span className="bg-rose-50 text-rose-500 text-xs font-black px-2 py-1 rounded-lg flex items-center gap-1">
                        <Tag size={11} /> {Math.round((1 - selected.price / selected.oldPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Books;
