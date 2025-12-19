import React from 'react';

const TeamPage = () => {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-[#111418] dark:text-white">
      
      {/* Hero Section */}
      <section className="px-4 py-8 md:px-40 flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="relative flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl overflow-hidden items-center justify-center p-8 md:p-12 shadow-2xl" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(21, 34, 17, 0.8), rgba(21, 34, 17, 0.85)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop")` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#152211] to-transparent opacity-90"></div>
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Visionaries at Work</span>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                    Meet the Minds Behind the Mission
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mt-2">
                    Driven by passion, expertise, and a shared commitment to building a more inclusive digital future for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders Grid */}
      <section className="px-4 md:px-40 py-10 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-white text-3xl font-bold leading-tight">
              Our Co-Founders
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              A diverse team of leaders uniting technical brilliance with deep empathy to redefine IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Founder 1 */}
            <div className="group flex flex-col rounded-2xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/60 transition-all hover:translate-y-[-4px] duration-300">
              <div className="h-64 bg-[#233a1d] relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Dr. Emily Carter" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dark/90"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-white text-xl font-bold">Dr. Emily Carter</h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">Chief Executive Officer</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed border-t border-border-dark pt-3 mt-1">
                  With over 15 years in tech leadership and autism advocacy, Emily leads our strategic vision to make technology universally accessible.
                </p>
                <div className="flex gap-3 mt-2">
                   {/* Social Icons Placeholder */}
                   <span className="text-text-secondary hover:text-primary cursor-pointer text-sm font-bold">LinkedIn</span>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group flex flex-col rounded-2xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/60 transition-all hover:translate-y-[-4px] duration-300">
              <div className="h-64 bg-[#1e2e19] relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dark/90"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-white text-xl font-bold">James Wilson</h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">Chief Technology Officer</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed border-t border-border-dark pt-3 mt-1">
                  An expert full-stack architect, James specializes in building robust, adaptive infrastructure that supports diverse user needs seamlessly.
                </p>
                <div className="flex gap-3 mt-2">
                   <span className="text-text-secondary hover:text-primary cursor-pointer text-sm font-bold">LinkedIn</span>
                </div>
              </div>
            </div>

            {/* Founder 3 */}
            <div className="group flex flex-col rounded-2xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/60 transition-all hover:translate-y-[-4px] duration-300">
              <div className="h-64 bg-[#263e20] relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                  alt="Sarah Lin" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dark/90"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-white text-xl font-bold">Sarah Lin</h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">Head of Product & Design</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed border-t border-border-dark pt-3 mt-1">
                  Sarah brings a unique perspective to UI/UX, prioritizing cognitive accessibility and calming aesthetics to create truly intuitive interfaces.
                </p>
                <div className="flex gap-3 mt-2">
                   <span className="text-text-secondary hover:text-primary cursor-pointer text-sm font-bold">LinkedIn</span>
                   <span className="text-text-secondary hover:text-primary cursor-pointer text-sm font-bold">Dribbble</span>
                </div>
              </div>
            </div>

            {/* Founder 4 */}
            <div className="group flex flex-col rounded-2xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/60 transition-all hover:translate-y-[-4px] duration-300">
              <div className="h-64 bg-[#1f3319] relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Michael Thorne" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-dark/90"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-white text-xl font-bold">Michael Thorne</h3>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase">Chief Operating Officer</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed border-t border-border-dark pt-3 mt-1">
                  Michael orchestrates our operations with precision, ensuring every project is delivered on time while maintaining our high ethical standards.
                </p>
                <div className="flex gap-3 mt-2">
                   <span className="text-text-secondary hover:text-primary cursor-pointer text-sm font-bold">LinkedIn</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 md:px-40 py-16 flex justify-center bg-[#1a2b15]">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-text-secondary">The principles that guide every decision we make and every line of code we write.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="relative flex flex-col items-center text-center gap-4 bg-surface-dark p-6 rounded-2xl border border-border-dark">
              <div className="size-16 rounded-full bg-[#152211] border-2 border-primary text-primary flex items-center justify-center text-3xl font-bold z-10">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h4 className="text-white font-bold text-lg">Inclusivity First</h4>
              <p className="text-text-secondary text-sm">We believe technology should be accessible to everyone, regardless of ability or background.</p>
            </div>
            {/* Value 2 */}
            <div className="relative flex flex-col items-center text-center gap-4 bg-surface-dark p-6 rounded-2xl border border-border-dark">
              <div className="size-16 rounded-full bg-[#152211] border-2 border-primary text-primary flex items-center justify-center text-3xl font-bold z-10">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h4 className="text-white font-bold text-lg">Empathy Driven</h4>
              <p className="text-text-secondary text-sm">We design with heart, understanding the unique challenges our users face daily.</p>
            </div>
            {/* Value 3 */}
            <div className="relative flex flex-col items-center text-center gap-4 bg-surface-dark p-6 rounded-2xl border border-border-dark">
              <div className="size-16 rounded-full bg-[#152211] border-2 border-primary text-primary flex items-center justify-center text-3xl font-bold z-10">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h4 className="text-white font-bold text-lg">Innovative Thinking</h4>
              <p className="text-text-secondary text-sm">We challenge the status quo to find creative solutions for complex accessibility problems.</p>
            </div>
            {/* Value 4 */}
            <div className="relative flex flex-col items-center text-center gap-4 bg-surface-dark p-6 rounded-2xl border border-border-dark">
              <div className="size-16 rounded-full bg-[#152211] border-2 border-primary text-primary flex items-center justify-center text-3xl font-bold z-10">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h4 className="text-white font-bold text-lg">Integrity & Trust</h4>
              <p className="text-text-secondary text-sm">We are transparent, reliable, and committed to doing what is right for our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 flex justify-center bg-surface-dark border-t border-border-dark">
        <div className="max-w-[800px] w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Want to Join Our Mission?</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            We are always looking for passionate individuals to help us build a more inclusive world.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-green-400 text-[#152211] text-base font-bold transition-all shadow-lg shadow-primary/20">
              View Openings
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;