import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-[#111418] dark:text-white">
      
      {/* Hero Section */}
      <section className="px-4 py-8 md:px-40 flex flex-1 justify-center">
        <div className="flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl overflow-hidden items-center justify-center p-8 md:p-12 shadow-2xl"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(21, 34, 17, 0.8), rgba(21, 34, 17, 0.6)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#152211] to-transparent opacity-80"></div>
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Purpose</span>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                    Innovating with Empathy
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mt-2">
                    Bridging the gap between neurodiversity and cutting-edge technology. We are building a digital future that is accessible, inclusive, and excellent by design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 md:px-40 py-10 flex justify-center">
        <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold leading-tight">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <div className="flex flex-col gap-4 text-text-secondary text-lg leading-relaxed">
              <p>
                Autism's IT Solution began with a simple yet powerful conversation among four friends. We realized that the tech industry, while innovative, often overlooked a massive pool of talent and failed to design truly inclusive experiences.
              </p>
              <p>
                Founded by four visionaries, we set out to change the narrative. We are dedicated to providing top-tier IT solutions that not only empower businesses but also champion neurodiversity in every line of code we write.
              </p>
              <p>
                Today, we stand as a testament that diverse minds build better products. Our journey is just beginning.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-dark bg-surface-dark group">
            <img 
              alt="Team collaborating" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152211] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-4 md:px-40 py-16 flex justify-center bg-[#1a2b15]">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-4">Why We Exist</h2>
            <p className="text-text-secondary">Our guiding principles that drive every decision, every project, and every line of code.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[32px]">flag</span>
              </div>
              <h3 className="text-white text-xl font-bold">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">To provide inclusive, high-quality IT solutions that empower businesses while creating meaningful career pathways for neurodivergent talent.</p>
            </div>
            {/* Vision */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[32px]">visibility</span>
              </div>
              <h3 className="text-white text-xl font-bold">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">A digital world built for everyone, accessible by design, where neurodiversity is recognized as a competitive advantage in innovation.</p>
            </div>
            {/* Values */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors duration-300">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[32px]">handshake</span>
              </div>
              <h3 className="text-white text-xl font-bold">Our Values</h3>
              <p className="text-text-secondary leading-relaxed">Inclusivity, Radical Transparency, and Technical Excellence. We believe in building trust through capability and kindness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-4 md:px-40 py-20 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-3xl font-bold tracking-tight">Meet the Founders</h2>
            <p className="text-text-secondary max-w-2xl">The visionary team behind Autism's IT Solution, combining diverse expertise to drive change.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Founder 1 */}
            <div className="group flex flex-col items-center p-6 rounded-2xl border border-border-dark bg-surface-dark hover:bg-[#233a1d] transition-all">
              <div className="size-28 mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img alt="Alex Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"/>
              </div>
              <h3 className="text-white text-lg font-bold">Alex Chen</h3>
              <span className="text-primary text-sm font-bold mb-3">CEO & Co-Founder</span>
              <p className="text-text-secondary text-sm text-center leading-relaxed">
                Driving the strategic vision with a focus on sustainable growth and inclusive leadership practices.
              </p>
            </div>
            {/* Founder 2 */}
            <div className="group flex flex-col items-center p-6 rounded-2xl border border-border-dark bg-surface-dark hover:bg-[#233a1d] transition-all">
              <div className="size-28 mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img alt="Sarah Johnson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"/>
              </div>
              <h3 className="text-white text-lg font-bold">Sarah Johnson</h3>
              <span className="text-primary text-sm font-bold mb-3">CTO & Co-Founder</span>
              <p className="text-text-secondary text-sm text-center leading-relaxed">
                Architecting robust, scalable systems and ensuring technical excellence across all deliverables.
              </p>
            </div>
            {/* Founder 3 */}
            <div className="group flex flex-col items-center p-6 rounded-2xl border border-border-dark bg-surface-dark hover:bg-[#233a1d] transition-all">
              <div className="size-28 mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img alt="Michael Ross" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"/>
              </div>
              <h3 className="text-white text-lg font-bold">Michael Ross</h3>
              <span className="text-primary text-sm font-bold mb-3">Head of Design</span>
              <p className="text-text-secondary text-sm text-center leading-relaxed">
                Championing user-centric design and accessibility standards to create seamless experiences for all.
              </p>
            </div>
            {/* Founder 4 */}
            <div className="group flex flex-col items-center p-6 rounded-2xl border border-border-dark bg-surface-dark hover:bg-[#233a1d] transition-all">
              <div className="size-28 mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img alt="Emily Davis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"/>
              </div>
              <h3 className="text-white text-lg font-bold">Emily Davis</h3>
              <span className="text-primary text-sm font-bold mb-3">Head of Operations</span>
              <p className="text-text-secondary text-sm text-center leading-relaxed">
                Ensuring smooth execution of projects and fostering strong, transparent client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-4 py-20 flex justify-center bg-surface-dark border-t border-border-dark">
        <div className="max-w-[800px] w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Ready to Innovate With Us?</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Whether you need a cutting-edge web solution or want to learn more about our inclusive practices, we'd love to hear from you.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-green-400 text-[#152211] text-base font-bold transition-all shadow-lg shadow-primary/20">
              Contact Us
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all">
              View Careers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;