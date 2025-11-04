import React from 'react';
import { SCORECARD_FAQ_DATA } from '../constants';

const ScorecardFaq: React.FC = () => {
  return (
    <section id="scorecard-faq" className="mt-20 sm:mt-24">
      <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-center mb-12">
        Scorecard Glossary
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {SCORECARD_FAQ_DATA.map((item, index) => (
          <div key={index} className="bg-[#120926]/40 border border-[#39E2FF]/20 rounded-xl p-6">
            <h3 className="font-bold text-xl text-white mb-2">{item.question}</h3>
            <p className="text-[#B3A8D6]">{item.answer}</p>
            {item.example && (
              <div className="mt-4 border-t border-[#7A6F9A]/30 pt-4">
                <p className="text-sm text-[#7A6F9A] uppercase font-bold tracking-wider">Example</p>
                <p className="text-sm text-[#B3A8D6] italic mt-1">{item.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScorecardFaq;
