import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SpecialOffers from '../components/SpecialOffers';
import FeaturedProduct from '../components/FeaturedProduct';
import Recommended from '../components/Recommended';
import LatestNews from '../components/LatestNews';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Stats />
      <SpecialOffers />
      <FeaturedProduct />
      <Recommended />
      <LatestNews />
    </motion.div>
  );
};

export default Home;
