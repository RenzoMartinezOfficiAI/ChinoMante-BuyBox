import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-8">
      <div className="border-t border-[#7A6F9A]/30 pt-8 text-center text-[#7A6F9A]">
        <p>&copy; {new Date().getFullYear()} Chino Mante. All rights reserved.</p>
        <p className="text-sm mt-1">Creating stability through real estate.</p>
      </div>
    </footer>
  );
};

export default Footer;
