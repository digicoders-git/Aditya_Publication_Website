import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const STATIC_CATEGORIES = ["All", "Biography", "Horror", "Thriller", "Adventure", "Sci-Fi", "Business", "Academic"];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState(STATIC_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/books/categories`);
        const data = await res.json();
        if (data.success && data.categories && data.categories.length > 0) {
          setCategories(["All", ...data.categories]);
        }
      } catch (err) {
        console.error("Error fetching categories for navbar:", err);
      }
    };
    fetchCategories();
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Sync selectedCategory and searchQuery from URL if they change externally (e.g. user navigates)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const catParam = searchParams.get('category') || 'All';
    const searchParam = searchParams.get('search') || '';
    setSelectedCategory(catParam);
    setSearchQuery(searchParam);
  }, [location.search]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim());
    }
    navigate(`/books-publication-list?${params.toString()}`);
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCategoryMenuOpen(false);
    const params = new URLSearchParams();
    if (cat && cat !== 'All') {
      params.set('category', cat);
    }
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim());
    }
    navigate(`/books-publication-list?${params.toString()}`);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Books & Publication", path: "/books-publication-list" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Download App", path: "/download-app" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img src={logo} alt="Aditya Publication" className="h-10 md:h-12 w-auto object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-bold text-gray-900">Aditya</span>
              <span className="text-xs md:text-sm font-medium text-brand tracking-wider uppercase">Publication</span>
            </div>
          </Link>

          {/* Search Bar — hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-brand transition-all">
              {/* Category Dropdown */}
              <div ref={dropdownRef} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                  className="flex items-center px-4 border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors h-11 rounded-l-full shrink-0 whitespace-nowrap focus:outline-none"
                >
                  <span className="text-sm font-medium text-gray-600 truncate max-w-[120px]">
                    {selectedCategory}
                  </span>
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-400 shrink-0" />
                </button>

                <AnimatePresence>
                  {categoryMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 max-h-60 overflow-y-auto"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCategorySelect(cat)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedCategory === cat ? 'text-brand font-bold bg-brand/5' : 'text-gray-700'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search input field */}
              <input
                type="text"
                placeholder="Search Books Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none text-gray-700"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="p-3 mr-1 text-gray-400 hover:text-brand transition-colors focus:outline-none cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Mobile search icon */}
            <Link to="/books-publication-list" className="md:hidden p-2 text-gray-500 hover:text-brand transition-colors">
              <Search size={20} />
            </Link>
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-brand transition-colors">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            {/* Desktop CTA */}
            <Link to="/contact-us"
              className="hidden md:block bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-dark transition-all shadow-md shadow-brand/20 whitespace-nowrap">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:block bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8 h-12">
            {navItems.map((item, i) => (
              <Link key={i} to={item.path}
                className={`text-sm font-bold whitespace-nowrap transition-colors pb-1 border-b-2 ${
                  location.pathname === item.path
                    ? 'text-brand border-brand'
                    : 'text-gray-700 hover:text-brand border-transparent hover:border-brand'
                }`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link key={i} to={item.path} onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === item.path
                      ? 'bg-brand/10 text-brand'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand'
                  }`}>
                  {item.name}
                </Link>
              ))}
              <Link to="/contact-us" onClick={() => setMenuOpen(false)}
                className="mt-2 bg-brand text-white px-4 py-3 rounded-xl text-sm font-bold text-center hover:bg-brand-dark transition-all">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
