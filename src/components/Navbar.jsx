import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, ChevronDown, BookOpen } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home Page", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Books & Publication List", path: "/books-publication-list" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Download App", path: "/download-app" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policies", path: "/privacy-policies" }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="bg-brand/10 p-2 rounded-xl group-hover:bg-brand/20 transition-colors">
              <BookOpen className="text-brand w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">Aditya</span>
              <span className="text-sm font-medium text-brand tracking-wider uppercase">Publisher</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full flex items-center bg-gray-50 rounded-full border border-gray-200 group focus-within:border-brand transition-all">
              <div className="flex items-center px-4 border-r border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors h-11 rounded-l-full flex-shrink-0 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-600">Choose Cate</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search Books Here" 
                className="w-full bg-transparent px-6 py-2 text-sm focus:outline-none text-gray-700"
              />
              <button className="p-3 mr-1 text-gray-400 hover:text-brand transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-6 h-6 text-gray-600 group-hover:text-brand transition-colors" />
              <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border-2 border-transparent group-hover:border-brand transition-all">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Links */}
      <div className="bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar scrollbar-hide">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${location.pathname === item.path ? 'text-brand' : 'text-gray-600 hover:text-brand'}`}
                >
                  {item.name}
                  {(item.name === "Home Page" || item.name === "About Us" || item.name === "Books & Publication List") && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>
              ))}
            </div>
            <Link to="/contact-us" className="bg-brand text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 whitespace-nowrap ml-4">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
