import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-4 md:px-10 py-12 md:py-20 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Content (Text) */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Empowering <span className="text-primary">Neurodiversity</span> Through Technology
          </h1>
          <h2 className="text-slate-600 dark:text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto md:mx-0">
            Tailored IT solutions designed to bridge gaps and unlock potential. We build digital environments where autism is not a barrier, but a unique perspective.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-blue-600 transition-colors">
              Partner with Us
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-200 dark:bg-card-dark text-slate-900 dark:text-white text-base font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-card-border">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content (Video) */}
        <div className="flex-1 w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* Using the local video path relative to the public folder */}
            <source src="/videos/hero-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
};

export default Hero;