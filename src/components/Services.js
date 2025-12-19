import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: "Software Development",
      description: "Custom software tailored to your specific business needs with clean, maintainable code.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
      alt: "Modern code editor"
    },
    {
      title: "QA Testing",
      description: "Rigorous manual and automated testing to ensure flawless performance.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      alt: "QA engineer testing software"
    },
    {
      title: "Accessibility Audits",
      description: "Ensuring your digital products meet WCAG compliance standards.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      alt: "Accessibility compliance check"
    }
  ];

  return (
    <section id="services" className="relative bg-background-dark py-12 md:py-20">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">What We Do</span>
              </div>
              <h2 className="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Core Services
              </h2>
              <p className="text-[#cfdfcc] text-base font-normal leading-normal max-w-[720px]">
                Delivering high-quality tech solutions across the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {serviceList.map((service, index) => (
                <div key={index} className="flex flex-col gap-4 group cursor-pointer">
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg border border-[#2c4823] group-hover:border-primary/50 transition-colors"
                    style={{ backgroundImage: `url("${service.image}")` }}
                    aria-label={service.alt}
                  >
                    <div className="w-full h-full bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold leading-normal mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </p>
                    <p className="text-[#9fc992] text-sm font-normal leading-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;