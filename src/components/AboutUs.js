import React from 'react';

const AboutUs = () => {
  const founders = [
    {
      name: "James Chen",
      role: "Chief Executive Officer",
      bio: "Former enterprise architect with a passion for inclusive leadership. James drives the strategic vision of connecting talent with opportunity.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sarah Al-Fayed",
      role: "Chief Technology Officer",
      bio: "Expert in assistive technologies and AI. Sarah ensures our platform is technically robust and accessible by design.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Operating Officer",
      bio: "Operations veteran focused on sustainable growth and outreach programs that bring real value to the community.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Product Officer",
      bio: "A UX visionary specializing in neurodiverse design patterns. Elena ensures every interaction is intuitive and calming.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  ];

  const values = [
    { icon: "diversity_3", title: "Inclusivity", desc: "Designing for all minds, embracing differences as strengths." },
    { icon: "precision_manufacturing", title: "Precision", desc: "Delivering exact, reliable solutions tailored to specific needs." },
    { icon: "trending_up", title: "Growth", desc: "Constant evolution of our tools and our understanding." },
    { icon: "support_agent", title: "Support", desc: "Unwavering dedication to our users' success and comfort." }
  ];

  const faqItems = [
    {
      title: "Specialized Methodology",
      content: "We don't just build software; we build understanding. Our development methodology integrates feedback from neurodiverse users at every stage, ensuring that the final product is truly accessible and effective."
    },
    {
      title: "Adaptive Tools & Environment",
      content: "Our solutions feature customizable interfaces that allow users to control sensory inputs, layout density, and notification frequency, creating a personalized workspace that reduces anxiety and boosts focus."
    },
    {
      title: "Commitment to Privacy",
      content: "We understand the sensitivity of personal data. Our platforms are built with enterprise-grade security and strict privacy protocols to ensure that user information is protected at all times."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] flex-col justify-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div 
            className="h-full w-full bg-cover bg-center" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')` }}
          ></div>
          <div className="absolute inset-0 bg-background-dark/80 bg-gradient-to-b from-background-dark/90 to-background-dark/70"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Neurodiversity Through Technology
            </h1>
            <p className="mb-10 text-lg text-slate-300 sm:text-xl">
              Bridging the gap between specialized talent and technological innovation. We build an inclusive digital world where unique minds thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 transition-all hover:ring-primary/50">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                <p className="mb-8 flex-grow text-slate-600 dark:text-slate-400 leading-relaxed">
                  To create an inclusive digital world where unique minds thrive. We build tools that adapt to users, not the other way around, fostering an ecosystem of support and innovation.
                </p>
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                  <img 
                    alt="Team collaborating" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-surface-dark p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 transition-all hover:ring-primary/50">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                <p className="mb-8 flex-grow text-slate-600 dark:text-slate-400 leading-relaxed">
                  Setting the global standard for accessible and adaptive IT environments. Ensuring technology acts as a bridge, not a barrier, for neurodiverse talent worldwide.
                </p>
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                  <img 
                    alt="Futuristic network" 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-[#0d121c] py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-primary">Our DNA</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-primary shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{val.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Meet The Founders</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">The minds behind the mission.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, idx) => (
              <div key={idx} className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-200 dark:ring-slate-800">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200">
                  <img 
                    alt={founder.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={founder.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{founder.name}</h3>
                  <p className="text-sm font-medium text-primary">{founder.role}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Why Us" Accordion Section */}
      <section className="bg-slate-50 dark:bg-[#151c2a] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Choose Us?</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqItems.map((item, idx) => (
              <details key={idx} className="group rounded-xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 open:ring-primary/50 dark:open:ring-primary/50">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-slate-900 dark:text-white">
                  <span className="text-lg font-bold">{item.title}</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                  <p>{item.content}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to innovate with us?</h2>
          <p className="mb-8 text-xl text-blue-100">Join us in building a more inclusive future for technology.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-12 min-w-[160px] rounded-lg bg-white px-6 text-base font-bold text-primary transition-colors hover:bg-blue-50">
              Partner with Us
            </button>
            <button className="h-12 min-w-[160px] rounded-lg border-2 border-white bg-transparent px-6 text-base font-bold text-white transition-colors hover:bg-white/10">
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;