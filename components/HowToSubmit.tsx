import React from 'react';
import Button from './Button';

const HowToSubmit: React.FC = () => {
  return (
    <section id="submit" className="mt-20 sm:mt-32 text-center">
      <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-center mb-4">
        Ready to Submit a Deal?
      </h2>
      <p className="text-center text-lg text-[#B3A8D6] max-w-3xl mx-auto mb-12">
        To get the fastest response, please provide the key details we need to evaluate the opportunity. The more information, the better.
      </p>

      <div className="max-w-4xl mx-auto bg-[#120926]/50 border border-[#39E2FF]/30 rounded-2xl p-8 sm:p-12 text-left shadow-[0_0_25px_rgba(57,226,255,0.15)]">
        <h3 className="text-2xl font-bold mb-6 text-white">What to Include in Your Email</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-[#B3A8D6]">
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> Property Address</li>
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> Photos (if available)</li>
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> The Current Situation</li>
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> Known Numbers (asking, payoff, etc.)</li>
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> Your Ideal Timeline</li>
          <li className="flex items-center"><span className="text-[#9B5CFF] text-2xl mr-3">✓</span> Why it fits our buy box</li>
        </ul>

        <div className="mt-8 border-t border-[#7A6F9A]/30 pt-8">
            <p className="text-[#B3A8D6] mb-2 font-semibold">Use this subject line format:</p>
            <code className="block w-full text-center bg-[#05020B] p-4 rounded-md text-[#C5FF3A] border border-[#7A6F9A]/50 text-sm sm:text-base">
                DEAL SUBMISSION – [City, State] – [Strategy, e.g., Sub-To]
            </code>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-[#B3A8D6] mb-6">
                Deals that fit our criteria get our immediate attention. Even if it’s not a fit, we promise to provide honest and direct feedback.
            </p>
            <Button href="mailto:deals@yourdomain.com" variant="primary">
                Email Your Deal
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToSubmit;
