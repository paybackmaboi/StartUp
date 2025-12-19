import React from 'react';

const ServicesPage = () => {
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
                  backgroundImage: `linear-gradient(rgba(21, 34, 17, 0.8), rgba(21, 34, 17, 0.7)), url("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop")` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#152211] to-transparent opacity-90"></div>
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                    Solutions Built for Impact
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mt-2">
                    We combine technical precision with inclusive design principles to deliver world-class software services. From accessibility audits to full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="px-4 md:px-40 py-10 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-white text-3xl font-bold leading-tight">
              Our Core Services
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              Empowering organizations with accessible technology and innovative software solutions designed to leave no one behind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">code</span>
              </div>
              <h3 className="text-white text-xl font-bold">Custom Web Development</h3>
              <p className="text-text-secondary leading-relaxed">
                Scalable, responsive, and high-performance websites built with modern frameworks like React, Vue, and Tailwind CSS.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">accessibility_new</span>
              </div>
              <h3 className="text-white text-xl font-bold">Accessibility Audits</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive WCAG 2.1 compliance testing and remediation strategies to ensure your digital products are usable by everyone.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">design_services</span>
              </div>
              <h3 className="text-white text-xl font-bold">Inclusive UI/UX Design</h3>
              <p className="text-text-secondary leading-relaxed">
                User-centric design that prioritizes cognitive accessibility, clear navigation, and calming aesthetics without sacrificing style.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">bug_report</span>
              </div>
              <h3 className="text-white text-xl font-bold">Quality Assurance (QA)</h3>
              <p className="text-text-secondary leading-relaxed">
                Rigorous manual and automated testing processes driven by our detail-oriented team to deliver bug-free, reliable software.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">cloud</span>
              </div>
              <h3 className="text-white text-xl font-bold">Cloud Infrastructure</h3>
              <p className="text-text-secondary leading-relaxed">
                Secure and efficient cloud deployment, management, and migration services utilizing AWS, Azure, and Google Cloud.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group flex flex-col gap-4 p-8 rounded-2xl border border-border-dark bg-surface-dark hover:border-primary/60 transition-all hover:bg-[#233a1d] cursor-default">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-[32px]">smartphone</span>
              </div>
              <h3 className="text-white text-xl font-bold">Mobile App Development</h3>
              <p className="text-text-secondary leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android that deliver smooth performance and engaging experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-4 md:px-40 py-16 flex justify-center bg-[#1a2b15]">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-text-secondary">A transparent and collaborative process designed to bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-surface-dark border-2 border-primary text-primary flex items-center justify-center text-2xl font-bold z-10">1</div>
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border-dark -z-0"></div>
              <h4 className="text-white font-bold text-lg">Discovery</h4>
              <p className="text-text-secondary text-sm">We listen to your needs and understand your users' unique challenges.</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-surface-dark border-2 border-primary text-primary flex items-center justify-center text-2xl font-bold z-10">2</div>
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border-dark -z-0"></div>
              <h4 className="text-white font-bold text-lg">Design & Plan</h4>
              <p className="text-text-secondary text-sm">We create inclusive roadmaps and prototypes that prioritize accessibility.</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-surface-dark border-2 border-primary text-primary flex items-center justify-center text-2xl font-bold z-10">3</div>
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border-dark -z-0"></div>
              <h4 className="text-white font-bold text-lg">Build & Test</h4>
              <p className="text-text-secondary text-sm">Our diverse team builds robust code with rigorous QA testing.</p>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-full bg-surface-dark border-2 border-primary text-primary flex items-center justify-center text-2xl font-bold z-10">4</div>
              <h4 className="text-white font-bold text-lg">Launch & Support</h4>
              <p className="text-text-secondary text-sm">We deploy your solution and provide ongoing maintenance and growth.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 flex justify-center bg-surface-dark border-t border-border-dark">
        <div className="max-w-[800px] w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Ready to Start Your Project?</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Whether you need a full-scale platform or an accessibility audit, our team is ready to deliver excellence.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-green-400 text-[#152211] text-base font-bold transition-all shadow-lg shadow-primary/20">
              Get a Quote
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;