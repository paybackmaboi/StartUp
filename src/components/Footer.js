import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-[#232f48] bg-background-light dark:bg-[#111722] py-12 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
            <span className="material-symbols-outlined !text-[20px]">diversity_2</span>
          </div>
          <span className="text-lg font-bold">Autism's IT Solution</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500 dark:text-text-secondary">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Accessibility Statement</a>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Autism's IT Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;