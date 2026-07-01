import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection';
import FeaturedBooks from '../components/FeaturedBooks';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedBooks />
      <Footer />
    </>
  );
}

export default Home;