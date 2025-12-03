import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto relative flex items-center">
        {/* Company name and logo on the left */}
        <div className="flex items-center gap-3">
          <Logo size="default" className="flex-shrink-0" />
          <h1 className="text-xl font-bold text-white">Autis'm I.T Solution</h1>
        </div>
        
        {/* Centered navigation - absolutely centered */}
        <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-900 rounded-full px-8 py-3 shadow-lg border border-amber-600/30">
            <div className="flex items-center justify-center space-x-10">
              <a 
                href="#home" 
                onClick={() => setActiveLink('home')}
                className={`font-semibold text-sm transition ${
                  activeLink === 'home' 
                    ? 'text-amber-400' 
                    : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setActiveLink('about')}
                className={`font-semibold text-sm transition ${
                  activeLink === 'about' 
                    ? 'text-amber-400' 
                    : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setActiveLink('portfolio')}
                className={`font-semibold text-sm transition ${
                  activeLink === 'portfolio' 
                    ? 'text-amber-400' 
                    : 'text-gray-400 hover:text-amber-300'
                }`}
              >
                Our Projects
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-gray-900 text-amber-400 p-2 rounded-full focus:outline-none border border-amber-600/30"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-4">
          <div className="bg-gray-900 rounded-lg shadow-xl p-4 space-y-2 border border-amber-600/30">
            <a 
              href="#home" 
              onClick={() => {setActiveLink('home'); setIsOpen(false);}}
              className={`block px-4 py-2 rounded font-semibold transition ${
                activeLink === 'home' 
                  ? 'text-amber-400 bg-gray-800' 
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => {setActiveLink('about'); setIsOpen(false);}}
              className={`block px-4 py-2 rounded font-semibold transition ${
                activeLink === 'about' 
                  ? 'text-amber-400 bg-gray-800' 
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              onClick={() => {setActiveLink('portfolio'); setIsOpen(false);}}
              className={`block px-4 py-2 rounded font-semibold transition ${
                activeLink === 'portfolio' 
                  ? 'text-amber-400 bg-gray-800' 
                  : 'text-gray-400 hover:text-amber-300'
              }`}
            >
              Our Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="pt-16 hero-tech-bg bg-gray-900 min-h-screen flex items-center relative">
      {/* Tech overlay */}
      <div className="tech-overlay"></div>
      
      {/* SVG Robotics and Tech Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.25]">
        {/* Circuit board lines */}
        <svg className="absolute top-20 left-10 w-96 h-96" viewBox="0 0 400 400" fill="none">
          <path d="M0 100 L200 100 L200 200 L400 200" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4"/>
          <path d="M100 0 L100 200 L300 200 L300 400" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4"/>
          <circle cx="100" cy="100" r="4" fill="#d1d5db" opacity="0.6"/>
          <circle cx="200" cy="200" r="4" fill="#d1d5db" opacity="0.6"/>
          <circle cx="300" cy="200" r="4" fill="#d1d5db" opacity="0.6"/>
        </svg>
        
        {/* Robot silhouette */}
        <svg className="absolute bottom-20 right-10 w-80 h-80" viewBox="0 0 300 300" fill="none">
          <rect x="100" y="80" width="100" height="120" rx="10" fill="#9ca3af" opacity="0.3"/>
          <rect x="110" y="100" width="25" height="25" rx="5" fill="#d1d5db" opacity="0.5"/>
          <rect x="165" y="100" width="25" height="25" rx="5" fill="#d1d5db" opacity="0.5"/>
          <rect x="115" y="140" width="70" height="15" rx="5" fill="#9ca3af" opacity="0.4"/>
          <rect x="130" y="200" width="20" height="60" rx="5" fill="#9ca3af" opacity="0.3"/>
          <rect x="150" y="200" width="20" height="60" rx="5" fill="#9ca3af" opacity="0.3"/>
          <circle cx="150" cy="60" r="15" fill="#d1d5db" opacity="0.4"/>
        </svg>
        
        {/* Arduino board representation */}
        <svg className="absolute top-1/2 right-1/4 w-64 h-64" viewBox="0 0 250 200" fill="none">
          <rect x="10" y="10" width="230" height="180" rx="5" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4" fill="none"/>
          <rect x="30" y="30" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <rect x="55" y="30" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <rect x="80" y="30" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <rect x="30" y="55" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <rect x="55" y="55" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <rect x="80" y="55" width="15" height="15" fill="#d1d5db" opacity="0.5"/>
          <line x1="50" y1="100" x2="200" y2="100" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4"/>
          <line x1="50" y1="120" x2="200" y2="120" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4"/>
          <line x1="50" y1="140" x2="200" y2="140" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4"/>
        </svg>
        
        {/* Gear/Mechanical elements */}
        <svg className="absolute bottom-1/4 left-1/3 w-72 h-72" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="40" stroke="#9ca3af" strokeWidth="3" strokeOpacity="0.4" fill="none"/>
          <circle cx="100" cy="100" r="20" fill="#d1d5db" opacity="0.3"/>
          <path d="M60 100 L70 90 L70 110 Z" fill="#9ca3af" opacity="0.4"/>
          <path d="M140 100 L130 90 L130 110 Z" fill="#9ca3af" opacity="0.4"/>
          <path d="M100 60 L90 70 L110 70 Z" fill="#9ca3af" opacity="0.4"/>
          <path d="M100 140 L90 130 L110 130 Z" fill="#9ca3af" opacity="0.4"/>
        </svg>
        
        {/* Code brackets */}
        <svg className="absolute top-1/3 left-1/4 w-48 h-48" viewBox="0 0 100 100" fill="none">
          <path d="M20 30 L10 50 L20 70" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4"/>
          <path d="M80 30 L90 50 L80 70" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4"/>
          <line x1="40" y1="40" x2="60" y2="40" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.5"/>
          <line x1="40" y1="50" x2="50" y2="50" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.5"/>
          <line x1="40" y1="60" x2="60" y2="60" stroke="#d1d5db" strokeWidth="2" strokeOpacity="0.5"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Logo size="large" className="w-20 h-20 md:w-24 md:h-24" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Autis'm I.T Solution
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Building Innovative Software Systems & Robotics Solutions
          </p>
          <p className="text-lg text-amber-200 mb-12 max-w-2xl mx-auto drop-shadow-md">
            We specialize in software development, innovation, and cutting-edge Arduino robotics projects. 
            Transforming ideas into reality with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="bg-amber-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition transform hover:scale-105 shadow-lg">
              View Our Work
            </a>
            <a href="#contact" className="bg-transparent border-2 border-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-gray-900 transition shadow-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-6">
            Autis'm I.T Solution is a forward-thinking technology company founded by four passionate co-founders 
            who share a vision of innovation and excellence. We combine software engineering expertise with 
            hands-on robotics innovation.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our mission is to build robust software systems, drive innovation in technology, and create 
            groundbreaking Arduino-based robotics projects that solve real-world problems. We believe in 
            the power of technology to transform businesses and improve lives.
          </p>
          <p className="text-lg text-gray-300">
            With a commitment to quality, innovation, and client success, we're dedicated to delivering 
            solutions that exceed expectations and push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Software Systems Development",
      description: "Custom software solutions tailored to your business needs. We build scalable, robust applications using modern technologies."
    },
    {
      icon: "🚀",
      title: "Innovation & Consulting",
      description: "Transform your ideas into innovative products. We provide strategic consulting to help you navigate the tech landscape."
    },
    {
      icon: "🤖",
      title: "Arduino Robotics Projects",
      description: "Custom Arduino-based robotics solutions. From automation systems to IoT devices, we bring your robotics ideas to life."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 border border-amber-600/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-amber-500 transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Member Image Component with Fallback
const TeamMemberImage = ({ image, name }) => {
  const [imageError, setImageError] = React.useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="relative h-64 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="text-6xl text-white opacity-80">👤</div>
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black bg-opacity-50 px-3 py-2 rounded text-center">
          Place your photo in: /public/images/{image.split('/').pop()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 bg-gradient-to-br from-amber-700 to-amber-900 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

// Team Section
// TODO: Update the founders array below with your team information
// - Replace "Co-Founder / CEO" with actual names
// - Update portfolio links with your portfolio URLs
// - Update bio descriptions
// - Add photos to /public/images/ folder (founder1.jpg, founder2.jpg, etc.)
const Team = () => {
  const founders = [
    {
      id: 1,
      name: "Web Page", 
      role: "Co-Founder & CEO",
      image: "/images/ryp.jpg",
      portfolio: "https://portfolio-8b1k.onrender.com/", 
      bio: "Passionate about software innovation and building scalable systems." 
    },
    {
      id: 2,
      name: "Co-Founder / CEO", // Edit: Add founder name
      role: "Co-Founder & CEO",
      image: "/images/founder2.jpg", // Add photo to /public/images/founder2.jpg
      portfolio: "#", // Edit: Add portfolio URL
      bio: "Expert in robotics and Arduino development with a vision for the future." // Edit: Add bio
    },
    {
      id: 3,
      name: "Co-Founder / CEO", // Edit: Add founder name
      role: "Co-Founder & CEO",
      image: "/images/founder3.jpg", // Add photo to /public/images/founder3.jpg
      portfolio: "#", // Edit: Add portfolio URL
      bio: "Dedicated to innovation and transforming ideas into reality." // Edit: Add bio
    },
    {
      id: 4,
      name: "Co-Founder / CEO", // Edit: Add founder name
      role: "Co-Founder & CEO",
      image: "/images/founder4.jpg", // Add photo to /public/images/founder4.jpg
      portfolio: "#", // Edit: Add portfolio URL
      bio: "Specializing in cutting-edge technology solutions and project management." // Edit: Add bio
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-lg text-gray-300 mt-4">Meet the passionate co-founders behind Autism IT Solution</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {founders.map((founder) => (
            <div key={founder.id} className="bg-gray-800 border border-amber-600/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-amber-500 transition transform hover:-translate-y-2">
              <TeamMemberImage image={founder.image} name={founder.name} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
                <p className="text-amber-400 font-semibold mb-3">{founder.role}</p>
                <p className="text-gray-300 text-sm mb-4">{founder.bio}</p>
                <a 
                  href={founder.portfolio} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-500 transition text-sm font-semibold"
                >
                  View Portfolio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const projects = [
    {
      title: "Software System Project",
      category: "Software Development",
      description: "A comprehensive software solution built with modern technologies.",
      image: "/images/project1.jpg"
    },
    {
      title: "Arduino Robotics Project",
      category: "Robotics",
      description: "Innovative Arduino-based automation system for industrial applications.",
      image: "/images/project2.jpg"
    },
    {
      title: "Innovation Project",
      category: "Innovation",
      description: "Cutting-edge technology solution that revolutionized the industry.",
      image: "/images/project3.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-lg text-gray-300 mt-4">Showcasing our innovative projects and solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-amber-600/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-amber-500 transition transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                <span className="text-white text-4xl">📁</span>
              </div>
              <div className="p-6">
                <span className="text-amber-400 text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact/Footer Section
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950 text-white py-12 border-t border-amber-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Autis'm I.T Solution</h3>
            <p className="text-gray-400">
              Building innovative software systems, driving innovation, and creating cutting-edge robotics solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition">Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-amber-400 transition">Team</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-amber-400 transition">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Get In Touch</h4>
            <p className="text-gray-400 mb-2">Email: contact@autissmit.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-amber-600/30 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Autis'm I.T Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
