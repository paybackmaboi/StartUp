import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f1a0c] border-t border-[#2c4823] py-10 mt-auto">
      <div className="flex justify-center w-full">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex items-center gap-3 text-white">
              <div className="size-6 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h3 className="text-lg font-bold">Autism's IT Solution</h3>
            </div>
            <div className="flex gap-6 flex-wrap">
              <a className="text-[#9fc992] hover:text-primary text-sm font-medium transition-colors" href="#home">Home</a>
              <a className="text-[#9fc992] hover:text-primary text-sm font-medium transition-colors" href="#about">About</a>
              <a className="text-[#9fc992] hover:text-primary text-sm font-medium transition-colors" href="#services">Services</a>
              <a className="text-[#9fc992] hover:text-primary text-sm font-medium transition-colors" href="#contact">Contact</a>
            </div>
          </div>
          <div className="h-px w-full bg-[#2c4823] mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5e7c54]">
            <p>© {new Date().getFullYear()} Autism's IT Solution. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;