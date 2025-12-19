import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import TeamPage from './components/TeamPage';
import PortfolioPage from './components/PortfolioPage'; // Import PortfolioPage
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <Navbar setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <LandingPage />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />} {/* Add this line */}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;