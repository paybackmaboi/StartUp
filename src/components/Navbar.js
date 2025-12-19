import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle navigation
  const handleNav = (page, e) => {
    e.preventDefault();
    if (setCurrentPage) setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#232f48] bg-background-light/80 dark:bg-[#111722]/90 backdrop-blur-md">
      <div className="flex justify-center w-full">
        <div className="flex max-w-[1280px] flex-1 items-center justify-between px-4 py-3 lg:px-10">
          
          {/* 1. LEFT SECTION: Logo */}
          <div 
            className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" 
            onClick={(e) => handleNav('home', e)}
          >
            <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[28px]">hub</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Netrunner's IT Solution
            </h2>
          </div>

          {/* 2. CENTER SECTION: Home, About, Services */}
          {/* We use 'absolute left-1/2' logic or simple flex justify-between. 
              Here justify-between on the parent handles spacing, keeping this in the visual middle area. */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={(e) => handleNav('home', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Home</a>
            <a href="#about" onClick={(e) => handleNav('about', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">About Us</a>
            <a href="#services" onClick={(e) => handleNav('services', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Services</a>
          </nav>

          {/* 3. RIGHT SECTION: Portfolio, Contact + CTA Button */}
          {/* Grouped together to stay on the far right side */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#portfolio" onClick={(e) => handleNav('portfolio', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Portfolio</a>
            <a href="#contact" onClick={(e) => handleNav('contact', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Contact</a>
            
            {/* Divider line (optional, adds techy feel) */}
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

            <button 
              onClick={(e) => handleNav('contact', e)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-slate-900 dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-[#111722] border-b border-gray-200 dark:border-[#232f48] py-4 px-4 flex flex-col gap-4 shadow-xl">
          <a href="#home" onClick={(e) => handleNav('home', e)} className="text-slate-900 dark:text-white hover:text-primary text-base font-medium py-2 border-b border-gray-200 dark:border-[#232f48]">Home</a>
          <a href="#about" onClick={(e) => handleNav('about', e)} className="text-slate-900 dark:text-white hover:text-primary text-base font-medium py-2 border-b border-gray-200 dark:border-[#232f48]">About Us</a>
          <a href="#services" onClick={(e) => handleNav('services', e)} className="text-slate-900 dark:text-white hover:text-primary text-base font-medium py-2 border-b border-gray-200 dark:border-[#232f48]">Services</a>
          
          <a href="#portfolio" onClick={(e) => handleNav('portfolio', e)} className="text-slate-900 dark:text-white hover:text-primary text-base font-medium py-2 border-b border-gray-200 dark:border-[#232f48]">Portfolio</a>
          <a href="#contact" onClick={(e) => handleNav('contact', e)} className="text-slate-900 dark:text-white hover:text-primary text-base font-medium py-2 border-b border-gray-200 dark:border-[#232f48]">Contact</a>
          <button 
            onClick={(e) => handleNav('contact', e)}
            className="w-full mt-2 h-10 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;