import React from 'react';
import HeroSection from './components/heroSection';
import Features from './components/features';
import Insights from './components/insights';
import CallToAction from './components/callToAction';
import Footer from './components/footer';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Insights />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
