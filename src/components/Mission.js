import React from 'react';

const Mission = () => {
  return (
    <section className="px-4 md:px-10 py-20 flex justify-center" id="mission">
      <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-xl">
          <img 
            alt="Team collaborating" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
            <span className="w-8 h-[2px] bg-primary"></span>
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Bridging the Gap for a More Inclusive Digital Future
          </h2>
          <p className="text-slate-600 dark:text-text-secondary text-lg leading-relaxed">
            At Autism's IT Solution, we believe technology should adapt to the user, not the other way around. Founded by a team of neurodiverse tech experts, we understand the unique challenges and incredible strengths of the autism community.
          </p>
          <p className="text-slate-600 dark:text-text-secondary text-lg leading-relaxed">
            Our goal is to create software that doesn't just "accommodate" but truly empowers. Whether it's through custom enterprise solutions or educational apps, we are building a world where every mind can thrive.
          </p>
          <div className="pt-4">
            <div className="flex gap-8">
              <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">50+</h4>
                <span className="text-sm text-slate-500 dark:text-text-secondary">Projects Launched</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white">10k+</h4>
                <span className="text-sm text-slate-500 dark:text-text-secondary">Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;