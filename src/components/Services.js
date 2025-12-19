import React from 'react';

const Services = () => {
  return (
    <section className="px-4 md:px-10 py-16 bg-white/5 dark:bg-card-dark/30" id="services">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-[28px] md:text-[32px] font-bold leading-tight tracking-tight mb-4">Our Core Solutions</h2>
          <p className="text-slate-600 dark:text-text-secondary max-w-2xl">
            We specialize in creating digital environments that are accessible, sensory-friendly, and empowering for neurodiverse users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-card-dark p-6 hover:border-primary/50 transition-colors">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Sensory-Friendly UX</h3>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Interfaces designed with calming palettes and reduced motion to minimize sensory overload and maximize focus for sensitive users.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-card-dark p-6 hover:border-primary/50 transition-colors">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Cognitive Support Tools</h3>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Software tools that assist with executive function, scheduling, and daily workflows, tailored to individual cognitive needs.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-card-dark p-6 hover:border-primary/50 transition-colors">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Inclusive Design Audits</h3>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Expert reviews of your existing digital products to ensure they meet accessibility standards and serve neurodiverse audiences effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;