import React from 'react';

const Hero = () => {
  const heroImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="home" className="relative flex flex-col justify-center overflow-hidden bg-background-dark py-12 md:py-20">
      <div className="flex w-full justify-center">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-10">
          <div className="@container">
            <div className="flex flex-col gap-10 md:gap-12 md:flex-row-reverse items-center">
              
              <div className="w-full md:w-1/2">
                <div 
                  className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-[0_0_40px_-10px_rgba(70,236,19,0.3)]"
                  style={{ backgroundImage: `url("${heroImage}")` }}
                  aria-label="Abstract digital network nodes"
                >
                </div>
              </div>

              <div className="flex flex-col gap-6 md:w-1/2 text-left">
                <h1 className="text-white text-4xl font-black leading-[1.1] tracking-[-0.033em] md:text-5xl">
                  Empowering <span className="text-primary">Neurodiversity</span> Through Technology
                </h1>
                <h2 className="text-[#cfdfcc] text-base font-normal leading-relaxed md:text-lg">
                  Innovative IT solutions built by unique minds. We bridge the gap between complex tech challenges and exceptional results.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-[#3bd10f] transition-transform active:scale-95 text-background-dark text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Explore Solutions</span>
                  </button>
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#1f3319] hover:bg-[#2a4522] border border-[#3f6732] text-white text-base font-bold leading-normal transition-colors">
                    <span className="truncate">Our Mission</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;