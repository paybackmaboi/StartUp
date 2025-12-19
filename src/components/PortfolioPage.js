import React, { useState } from 'react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All Work');

  const projects = [
    {
      title: "EduLearn Platform",
      category: "Web Apps",
      description: "Accessible Learning Management System designed for inclusivity with screen reader optimization.",
      tags: ["EdTech", "Accessibility"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "FinGuard Chain",
      category: "Web Apps",
      description: "Secure financial interface with high-contrast UI and blockchain verification.",
      tags: ["FinTech", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AutoAssist App",
      category: "Mobile",
      description: "Mobile accessibility tool for daily navigation and routine management.",
      tags: ["Mobile", "Lifestyle"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "GreenEnergy Monitor",
      category: "Enterprise",
      description: "Real-time solar panel tracking system with IoT integration.",
      tags: ["IoT", "Green Tech"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "MediSync Portal",
      category: "Web Apps",
      description: "HIPAA-compliant patient portal connecting diverse healthcare providers.",
      tags: ["Healthcare", "Web"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Nexus Cloud",
      category: "Enterprise",
      description: "Scalable cloud architecture for enterprise resource planning.",
      tags: ["Cloud", "Enterprise"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  const filteredProjects = filter === 'All Work' 
    ? projects 
    : projects.filter(p => p.category === filter || p.tags.includes(filter));

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display">
      
      {/* Page Title */}
      <div className="w-full bg-background-dark pt-12 pb-6 px-4 md:px-40 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Engineered for Impact
            </h1>
            <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-2xl mx-auto md:mx-0">
              A showcase of our technical solutions and the positive change we drive through accessible design and robust architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="w-full bg-background-dark px-4 md:px-40 pb-8 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {['All Work', 'Web Apps', 'Mobile', 'Enterprise'].map((category) => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                  filter === category 
                    ? 'bg-primary text-background-dark font-bold' 
                    : 'bg-[#1a2c15] border border-[#2c4823] text-white hover:border-primary/50 hover:bg-[#2c4823] font-medium'
                }`}
              >
                <span className="text-sm leading-normal">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project (Hero Variant) */}
      <section className="w-full bg-background-dark px-4 md:px-40 py-8 flex justify-center">
        <div className="w-full max-w-7xl bg-[#1a2c15]/50 border border-[#2c4823] rounded-2xl overflow-hidden shadow-2xl">
          <div className="@container">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 aspect-video md:aspect-auto min-h-[300px] relative overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent md:hidden"></div>
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12 md:w-2/5 relative">
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-xl">star</span>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">Featured Case Study</span>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                    EcoStream Dashboard
                  </h2>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    Our flagship analytics platform delivering a 30% efficiency boost through intuitive data visualization and robust backend architecture.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 rounded bg-[#2c4823] text-white text-xs font-medium">React</span>
                    <span className="px-2 py-1 rounded bg-[#2c4823] text-white text-xs font-medium">Node.js</span>
                    <span className="px-2 py-1 rounded bg-[#2c4823] text-white text-xs font-medium">Big Data</span>
                  </div>
                  <button className="flex w-fit items-center gap-2 cursor-pointer rounded-lg h-12 px-6 bg-primary hover:bg-[#3bdb0f] text-background-dark text-base font-bold leading-normal transition-colors">
                    <span>Read Case Study</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="w-full bg-background-dark px-4 md:px-40 py-12 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group flex flex-col gap-4 bg-[#1a2c15] p-4 rounded-xl border border-transparent hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(70,236,19,0.1)] cursor-pointer">
                <div className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                    <span className="material-symbols-outlined text-white/30 group-hover:text-primary transition-colors">north_east</span>
                  </div>
                  <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-white/50 border border-white/10 rounded px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-background-dark px-4 md:px-40 py-20 flex justify-center">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-8">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
            Have a vision for impact? <br/>
            <span className="text-primary">Let's build it together.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Our team of co-founders is ready to transform your ideas into accessible, robust, and modern digital solutions.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-[#3bdb0f] transition-colors text-background-dark text-base font-bold leading-normal tracking-[0.015em]">
              Get a Quote
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-[#2c4823] hover:border-primary/50 text-white transition-colors text-base font-bold leading-normal tracking-[0.015em]">
              View Services
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PortfolioPage;