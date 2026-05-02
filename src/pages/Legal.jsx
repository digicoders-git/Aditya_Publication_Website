import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, children }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-32 pb-24"
  >
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-gray-900 font-serif mb-12 text-center">{title}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
        {children}
      </div>
    </div>
  </motion.div>
);

export const Terms = () => (
  <LegalLayout title="Terms & Conditions">
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
      <p>By accessing and using Aditya Publisher, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
      <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Aditya Publisher or its content suppliers and protected by international copyright laws.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Conduct</h2>
      <p>Users are prohibited from using the site for any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
      <p>Aditya Publisher shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the services.</p>
    </section>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection</h2>
      <p>We collect personal information that you provide to us, such as your name, email address, and payment information, when you make a purchase or sign up for our newsletter.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Information</h2>
      <p>Your information is used to process transactions, improve our website, and send periodic emails regarding your order or other products and services.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
      <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
      <p>We use cookies to help us remember and process the items in your shopping cart and understand and save your preferences for future visits.</p>
    </section>
  </LegalLayout>
);
