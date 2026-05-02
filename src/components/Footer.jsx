import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const SocialIcon = ({ d, label }) => (
    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand hover:border-brand transition-all" aria-label={label}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d={d} />
      </svg>
    </a>
  );

  const socialLinks = [
    { label: 'Facebook', d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { label: 'Twitter', d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
    { label: 'Instagram', d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { label: 'Linkedin', d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
  ];

  return (
    <footer className="bg-[#1a1f2c] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center font-black text-2xl">A</div>
            <span className="text-2xl font-bold font-serif">Aditya <span className="text-brand">Publisher</span></span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            Discover the world's best books. Join our community of readers and writers today.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} d={link.d} label={link.label} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 font-serif">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-brand transition-colors">About Us</Link></li>
            <li><Link to="/books-publication-list" className="hover:text-brand transition-colors">Books</Link></li>
            <li><Link to="/contact-us" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-5 font-serif">Our Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/download-app" className="hover:text-brand transition-colors">Help Center</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-brand transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policies" className="hover:text-brand transition-colors">Privacy Policies</Link></li>
            <li><Link to="/contact-us" className="hover:text-brand transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 font-serif">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Subscribe to our newsletter to get latest updates and offers.
          </p>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Your Email" 
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-brand transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-brand px-4 rounded-lg hover:bg-brand-dark transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-gray-500 text-sm">© 2026 Aditya Publisher. All Rights Reserved.</p>
        <p className="text-gray-500 text-sm">Crafted By <a href="https://digicoders.in/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">DigiCoders</a></p>
        <div className="flex items-center gap-8 text-gray-500 text-sm">
          <Link to="/privacy-policies" className="hover:text-brand">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-brand">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
