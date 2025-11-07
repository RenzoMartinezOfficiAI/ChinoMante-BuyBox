import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BuyBoxCard from './components/BuyBoxCard';
import Footer from './components/Footer';
import DealScorecard from './components/DealScorecard';
import ScorecardFaq from './components/ScorecardFaq';
import FixAndFlipScorecard from './components/HowToSubmit';
import { BUY_BOX_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#05020B] via-[#120926] to-[#05020B] text-[#F7F5FF] min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Hero />

        <section id="buy-box" className="mt-20 sm:mt-32">
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-center mb-4">
            Our Investment Focus
          </h2>
          <p className="text-center text-lg text-[#B3A8D6] max-w-3xl mx-auto mb-12 sm:mb-16">
            We specialize in specific deal types where we can create maximum impact and value. If your property fits one of these profiles, we want to see it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {BUY_BOX_DATA.map((box) => (
              <BuyBoxCard
                key={box.title}
                title={box.title}
                description={box.description}
                bullets={box.bullets}
                ctaText={box.ctaText}
              />
            ))}
          </div>
        </section>

        <DealScorecard />

        <ScorecardFaq />

        <div className="my-20 sm:my-32 border-t-2 border-[#39E2FF]/20"></div>

        <FixAndFlipScorecard />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
