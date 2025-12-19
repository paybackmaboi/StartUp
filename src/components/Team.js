import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Web Page",
      role: "CEO & Co-Founder",
      quote: "Innovation happens when we listen to every voice.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Karl Villar",
      role: "CTO & Co-Founder",
      quote: "Building robust systems that are accessible by default.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Andrew Czar Mata",
      role: "Head of Design",
      quote: "Simplicity and clarity are the ultimate sophistication.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Kerbi Cabardo",
      role: "COO & Co-Founder",
      quote: "Creating pathways for talent to shine.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  ];

  return (
    <section className="px-4 md:px-10 py-20 bg-slate-50 dark:bg-[#151c2b]" id="team">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Minds Behind the Mission</h2>
          <p className="text-slate-600 dark:text-text-secondary">
            Our founding team combines decades of IT experience with lived experience, driving innovation through diverse perspectives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-card-border shadow-sm">
              <div className="size-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img alt={member.name} className="w-full h-full object-cover" src={member.img} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 dark:text-text-secondary text-sm">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;