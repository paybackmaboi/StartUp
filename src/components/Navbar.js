import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle navigation
  const handleNav = (page, e) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2c4823] bg-background-dark/95 backdrop-blur-md">
      <div className="flex justify-center w-full">
        <div className="flex max-w-[960px] flex-1 items-center justify-between px-4 py-3 lg:px-10">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 text-white cursor-pointer" 
            onClick={(e) => handleNav('home', e)}
          >
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Autism's IT Solution
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a href="#home" onClick={(e) => handleNav('home', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Home</a>
              <a href="#about" onClick={(e) => handleNav('about', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">About Us</a>
              <a href="#services" onClick={(e) => handleNav('services', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Services</a>
              <a href="#team" onClick={(e) => handleNav('team', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Team</a>
              <a href="#portfolio" onClick={(e) => handleNav('portfolio', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Portfolio</a>
              <a href="#contact" onClick={(e) => handleNav('contact', e)} className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Contact</a>
            </nav>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-[#3bd10f] transition-colors text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-[#2c4823] py-4 px-4 flex flex-col gap-4 shadow-xl">
          <a href="#home" onClick={(e) => handleNav('home', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">Home</a>
          <a href="#about" onClick={(e) => handleNav('about', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">About Us</a>
          <a href="#services" onClick={(e) => handleNav('services', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">Services</a>
          <a href="#team" onClick={(e) => handleNav('team', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">Team</a>
          <a href="#portfolio" onClick={(e) => handleNav('portfolio', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">Portfolio</a>
          <a href="#contact" onClick={(e) => handleNav('contact', e)} className="text-white hover:text-primary text-base font-medium py-2 border-b border-[#2c4823]">Contact</a>
          <button className="w-full mt-2 h-10 rounded-full bg-primary hover:bg-[#3bd10f] text-background-dark font-bold">
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;