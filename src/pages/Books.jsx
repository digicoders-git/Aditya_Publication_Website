import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Star, TrendingUp, Award, ChevronRight, BookMarked, Zap, Globe, Compass, GraduationCap, X, Tag, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const getImageUrl = (img) => {
  if (!img) return 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop';
  if (img.startsWith('http')) return img;
  return `${API_BASE_URL}/${img}`;
};

const STATIC_CATEGORIES = ["All", "Biography", "Horror", "Thriller", "Adventure", "Sci-Fi", "Business", "Academic"];

const staticBooks = [
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
  { id: 11, title: "Quantitative Aptitude", author: "R.S. Aggarwal",  category: "Academic",  price: 3499, oldPrice: 4499, rating: 4.8, reviews: 512, badge: "Bestseller", desc: "Competitive exams ki taiyari ke liye sabse trusted book. R.S. Aggarwal ki yeh classic book lakho students ki pehli pasand hai.", pages: 944, lang: "English", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" },
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
  const [showFilter, setShowFilter] = useState(false);
  const [booksList, setBooksList] = useState([]);
  const [categories, setCategories] = useState(STATIC_CATEGORIES);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/books`);
        const data = await res.json();
        if (data.success && data.books && data.books.length > 0) {
          const mapped = data.books.map(b => ({
            id: b._id,
            title: b.title,
            author: b.author,
            category: b.category,
            price: b.price,
            oldPrice: b.oldPrice || null,
            rating: 4.5,
            reviews: 88,
            badge: b.badge || null,
            desc: b.description,
            pages: b.pages || 300,
            lang: b.language || 'English',
            image: getImageUrl(b.image)
          }));
          setBooksList(mapped);
          // Dynamic categories from API
          const apiCats = ['All', ...new Set(data.books.map(b => b.category).filter(Boolean))];
          setCategories(apiCats);
        } else {
          setBooksList(staticBooks);
        }
      } catch (err) {
        console.error("API Fetch Error, falling back to static seed data:", err);
        setBooksList(staticBooks);
      }
    };
    fetchBooks();
  }, []);

  let filtered = activeCategory === "All" ? booksList : booksList.filter(b => b.category === activeCategory);
  if (search) filtered = filtered.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));
  if (sort === "low")    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")   filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-[180px] md:h-[280px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1500&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2d6e] via-[#2a2d6e]/80 to-[#2a2d6e]" />
        </div>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xl md:text-4xl font-bold text-white mb-3 relative z-10 font-serif text-center px-4">
          Books & Publication List
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-brand px-5 py-2 rounded-xl flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest shadow-xl relative z-10">
          <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <ChevronRight size={12} />
          <span className="opacity-80">Books</span>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <BookOpen size={16} />, label: "Total Books", value: "50,000+" },
            { icon: <TrendingUp size={16} />, label: "New Arrivals", value: "200+ Monthly" },
            { icon: <Award size={16} />, label: "Award Winners", value: "1,200+" },
            { icon: <Star size={16} />, label: "Avg Rating", value: "4.7 / 5" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg shrink-0">{s.icon}</div>
              <div>
                <p className="text-white/70 text-[10px]">{s.label}</p>
                <p className="font-bold text-xs md:text-sm">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Search + Sort */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
            <input type="text" placeholder="Search books or author..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand transition-colors" />
          </div>
          {/* Mobile filter toggle */}
          <button onClick={() => setShowFilter(!showFilter)}
            className="md:hidden flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 font-bold">
            <SlidersHorizontal size={15} />
          </button>
          {/* Desktop sort */}
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="hidden md:block bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-brand cursor-pointer">
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile sort dropdown */}
        <AnimatePresence>
          {showFilter && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mb-3">
              <select value={sort} onChange={e => { setSort(e.target.value); setShowFilter(false); }}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-brand">
                <option value="default">Sort: Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' : 'bg-white text-gray-500 border-gray-200 hover:border-brand/40 hover:text-brand'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-xs mb-4">
          Showing <span className="font-bold text-gray-700">{filtered.length}</span> results
          {activeCategory !== "All" && <span> in <span className="text-brand font-bold">"{activeCategory}"</span></span>}
        </p>

        {/* Books Grid */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          <AnimatePresence>
            {filtered.map((book, i) => (
              <motion.div key={book.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }} onClick={() => setSelected(book)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-gray-100 cursor-pointer"
              >
                <div className="relative w-full h-40 sm:h-48 md:h-52 overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {book.badge && (
                    <span className={`absolute top-2 left-2 ${badgeColors[book.badge]} text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full`}>
                      {book.badge}
                    </span>
                  )}
                  {book.oldPrice && (
                    <span className="absolute top-2 right-2 bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">
                      {Math.round((1 - book.price / book.oldPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="text-[9px] font-bold text-brand uppercase tracking-wider mb-0.5">{book.category}</p>
                  <h3 className="font-bold text-gray-900 text-xs leading-snug mb-0.5 line-clamp-1">{book.title}</h3>
                  <p className="text-gray-400 text-[10px] mb-1.5">by {book.author}</p>
                  <div className="flex items-center gap-1 mb-1.5">
                    <Stars rating={book.rating} size={9} />
                    <span className="text-gray-400 text-[9px]">({book.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-brand font-black text-xs">₹{book.price}</span>
                    {book.oldPrice && <span className="text-gray-400 line-through text-[10px]">₹{book.oldPrice}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookOpen size={40} className="text-gray-200 mx-auto mb-3" />
            <p className="text-gray-400 font-semibold text-sm">No books found</p>
          </div>
        )}

        {/* Featured Publications */}
        <div className="mt-10 bg-[#f8f9ff] rounded-2xl p-5 md:p-8">
          <h2 className="text-lg md:text-2xl font-bold text-[#1a1f2c] font-serif mb-1">Featured Publications</h2>
          <p className="text-gray-400 text-xs md:text-sm mb-4">Hamare trusted publishing partners se best titles</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Penguin India", books: "12,000+ titles", color: "bg-orange-50 border-orange-100" },
              { name: "HarperCollins", books: "8,500+ titles",  color: "bg-blue-50 border-blue-100" },
              { name: "Oxford Press",  books: "6,200+ titles",  color: "bg-green-50 border-green-100" },
              { name: "Scholastic",    books: "4,800+ titles",  color: "bg-purple-50 border-purple-100" },
            ].map((pub, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} className={`${pub.color} border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md`}>
                <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <BookOpen size={16} className="text-brand" />
                </div>
                <h4 className="font-bold text-[#1a1f2c] text-xs md:text-sm">{pub.name}</h4>
                <p className="text-gray-400 text-[10px] md:text-xs mt-0.5">{pub.books}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Genre Highlights */}
        <div className="mt-8 mb-4">
          <h2 className="text-lg md:text-2xl font-bold text-[#1a1f2c] font-serif mb-4">Browse By Genre</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[
              { name: "Biography", icon: <BookMarked size={18} />, count: "2,400+" },
              { name: "Thriller",  icon: <Zap size={18} />,        count: "1,800+" },
              { name: "Sci-Fi",    icon: <Globe size={18} />,      count: "1,200+" },
              { name: "Adventure", icon: <Compass size={18} />,    count: "3,100+" },
              { name: "Academic",  icon: <GraduationCap size={18} />, count: "6,200+" },
              { name: "Horror",    icon: <BookOpen size={18} />,   count: "900+" },
            ].map((g, i) => (
              <motion.button key={i} whileHover={{ scale: 1.04 }} onClick={() => setActiveCategory(g.name)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${activeCategory === g.name ? 'bg-brand border-brand' : 'bg-gray-50 border-gray-100 hover:border-brand/30'}`}>
                <span className={activeCategory === g.name ? 'text-white' : 'text-brand'}>{g.icon}</span>
                <span className={`text-[10px] md:text-xs font-bold ${activeCategory === g.name ? 'text-white' : 'text-gray-700'}`}>{g.name}</span>
                <span className={`text-[9px] md:text-[10px] ${activeCategory === g.name ? 'text-white/70' : 'text-gray-400'}`}>{g.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden w-full sm:max-w-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Mobile: stacked, Desktop: side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
                {/* Image */}
                <div className="relative h-52 sm:h-auto">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  {selected.badge && (
                    <span className={`absolute top-3 left-3 ${badgeColors[selected.badge]} text-white text-xs font-black uppercase px-2.5 py-1 rounded-full`}>
                      {selected.badge}
                    </span>
                  )}
                  {/* Mobile drag handle */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/50 rounded-full sm:hidden" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 flex flex-col gap-3 relative">
                  <button onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <X size={15} />
                  </button>

                  <div>
                    <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">{selected.category}</p>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1a1f2c] font-serif leading-tight pr-8">{selected.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">by <span className="font-semibold text-gray-600">{selected.author}</span></p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Stars rating={selected.rating} size={13} />
                    <span className="text-gray-500 text-sm font-semibold">{selected.rating}</span>
                    <span className="text-gray-400 text-xs">({selected.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{selected.desc}</p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-gray-400 text-xs">Pages</p>
                      <p className="font-bold text-gray-800 text-sm">{selected.pages}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-gray-400 text-xs">Language</p>
                      <p className="font-bold text-gray-800 text-sm">{selected.lang}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-brand font-black text-2xl">₹{selected.price}</span>
                      {selected.oldPrice && (
                        <span className="text-gray-400 line-through text-sm ml-2">₹{selected.oldPrice}</span>
                      )}
                    </div>
                    {selected.oldPrice && (
                      <span className="bg-rose-50 text-rose-500 text-xs font-black px-2 py-1 rounded-lg flex items-center gap-1">
                        <Tag size={10} /> {Math.round((1 - selected.price / selected.oldPrice) * 100)}% OFF
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
