import React from 'react';

const Faq: React.FC = () => {
  return (
    <section id="faq" className="mt-20 sm:mt-32 max-w-3xl mx-auto text-center">
      <div className="border-t border-[#7A6F9A]/30 pt-12">
        <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9B5CFF] to-[#39E2FF]">
          Not Sure If Your Deal Fits?
        </h2>
        <p className="text-lg text-[#B3A8D6] mb-4">
          Send it anyway. The worst we can say is "no," but we'll always explain why and try to offer a helpful suggestion. If you're short on time, just send the property address and a one-sentence summary of the situation. We can give you quick guidance from there.
        </p>
        <p className="text-lg text-white font-semibold">
          This is about more than just transactions. We're looking for profitable deals that also stabilize real people's lives. If that's the kind of opportunity you have, we want to see it.
        </p>
      </div>
    </section>
  );
};

export default Faq;
