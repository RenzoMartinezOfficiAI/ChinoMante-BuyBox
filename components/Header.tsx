import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-orbitron font-bold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B5CFF] to-[#39E2FF]">
              CHINO MANTE
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#buy-box" className="text-sm font-medium text-[#B3A8D6] hover:text-white transition-colors">Buy Box</a>
            <a href="#deal-scorecard" className="text-sm font-medium text-[#B3A8D6] hover:text-white transition-colors">Deal Scorecard</a>
            <a href="#scorecard-faq" className="text-sm font-medium text-[#B3A8D6] hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;