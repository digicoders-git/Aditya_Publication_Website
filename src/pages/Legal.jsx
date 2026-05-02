import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Shield, Scale, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalLayout = ({ title, icon, children }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white"
  >
    {/* Hero Section */}
    <section className="relative h-[300px] bg-[#2a2d6e] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 font-serif"
      >
        {title}
      </motion.h1>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-brand px-6 py-2 rounded-full flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest shadow-2xl relative z-10"
      >
        <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
        <ChevronRight size={14} />
        <span className="opacity-80">{title}</span>
      </motion.div>
    </section>

    {/* Content Section */}
    <section className="py-24 max-w-5xl mx-auto px-4">
      <div className="bg-gray-50 rounded-[3rem] p-10 md:p-20 border border-gray-100 shadow-xl shadow-gray-200/50">
        <div className="flex items-center gap-4 mb-12 text-brand">
          <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
            {icon}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-1">Official Document</p>
            <h2 className="text-2xl font-bold font-serif">{title}</h2>
          </div>
        </div>

        <div className="space-y-12 leading-relaxed opacity-90">
          {children}
        </div>

        <div className="mt-20 p-10 bg-white rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <Info size={24} />
            </div>
            <p className="text-sm font-medium text-gray-500">Last updated: May 02, 2026. For any queries regarding these documents, please contact our legal team.</p>
          </div>
          <Link to="/contact-us" className="bg-[#1a1f2c] text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand transition-all shadow-lg whitespace-nowrap">
            Contact Legal Team
          </Link>
        </div>
      </div>
    </section>
  </motion.div>
);

export const Terms = () => (
  <LegalLayout title="Terms & Conditions" icon={<Scale size={32} />}>
    <div className="space-y-10">
      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">1. Acceptance of Terms</h3>
        <p className="text-lg">
          By accessing and using <span className="text-brand font-bold">Aditya Publisher</span>, you agree to comply with and be bound by these Terms and Conditions. Our services are intended for readers and researchers looking for authentic literature and academic resources. If you do not agree to these terms, please refrain from using our website.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">2. Intellectual Property Rights</h3>
        <p className="text-lg">
          All content included on this site, such as text, graphics, logos, images, digital downloads, and software, is the property of Aditya Publisher or its content suppliers. The compilation of all content on this site is the exclusive property of Aditya Publisher and is protected by international copyright laws.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">3. User Responsibility & Account</h3>
        <p className="text-lg">
          If you use this site, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password. Aditya Publisher reserves the right to refuse service, terminate accounts, or cancel orders at its sole discretion.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">4. Product Descriptions & Pricing</h3>
        <p className="text-lg">
          Aditya Publisher attempts to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. Prices for our products are subject to change without notice.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">5. Governing Law</h3>
        <p className="text-lg">
          These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in New Delhi for any dispute arising out of or in connection with these terms.
        </p>
      </section>
    </div>
  </LegalLayout>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy" icon={<Shield size={32} />}>
    <div className="space-y-10">
      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">1. Information We Collect</h3>
        <p className="text-lg">
          We collect personal information that you voluntarily provide to us when you register on the website, place an order, or subscribe to our newsletter. This may include your name, email address, mailing address, and phone number.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">2. How We Use Your Information</h3>
        <p className="text-lg">
          We use the information we collect to process your transactions, personalize your experience, and improve our customer service. We may also use your email address to send you information and updates pertaining to your order, in addition to receiving occasional company news or product updates.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">3. Data Protection & Security</h3>
        <p className="text-lg">
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">4. Third-Party Disclosure</h3>
        <p className="text-lg">
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website or conducting our business.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold font-serif">5. Cookies & Tracking</h3>
        <p className="text-lg">
          Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. We use cookies to help us remember and process the items in your shopping cart and understand your preferences for future visits.
        </p>
      </section>
    </div>
  </LegalLayout>
);
