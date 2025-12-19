import React from 'react';

const Team = () => {
  const foundersCount = [1, 2, 3, 4];

  return (
    <section id="team" className="relative bg-background-dark py-12 md:py-24 border-t border-[#2c4823]">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-10">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            
            {/* 4 Co-Founders Visual Hint */}
            <div className="flex items-center justify-center gap-4 mb-2">
              {foundersCount.map((_, index) => (
                <React.Fragment key={index}>
                  <div className="size-16 rounded-full bg-[#1f3319] border-2 border-[#3f6732] flex items-center justify-center text-[#9fc992] hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  {index < foundersCount.length - 1 && (
                    <div className="w-8 h-px bg-[#3f6732] hidden sm:block"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-3 max-w-[600px]">
              <h2 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl">
                Meet the Visionaries
              </h2>
              <p className="text-[#cfdfcc] text-lg font-normal leading-relaxed">
                Founded by four visionaries united by a single mission: to demonstrate the extraordinary capabilities of neurodiverse talent in tech.
              </p>
            </div>
            
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-[#3bd10f] text-background-dark text-base font-bold leading-normal tracking-[0.015em] shadow-[0_0_20px_-5px_rgba(70,236,19,0.4)] hover:shadow-[0_0_30px_-5px_rgba(70,236,19,0.6)] transition-all">
              <span className="truncate">Meet Our Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;