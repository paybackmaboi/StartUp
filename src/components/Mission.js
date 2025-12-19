import React from 'react';

const Mission = () => {
  return (
    <section id="about" className="relative bg-background-dark py-12">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-white tracking-tight text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                Our Code is Different
              </h2>
              <p className="text-[#cfdfcc] text-base font-normal leading-normal max-w-[720px]">
                Focused on precision, perspective, and potential. We bring a unique approach to every project we touch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="flex flex-1 gap-4 rounded-xl border border-[#3f6732]/50 bg-[#1f3319]/40 backdrop-blur-sm p-6 flex-col hover:bg-[#1f3319] transition-colors group">
                <div className="size-12 rounded-full bg-[#2c4823] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold leading-tight">Precision Engineering</h3>
                  <p className="text-[#9fc992] text-sm font-normal leading-relaxed">Code that is meticulously crafted for performance and stability.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-1 gap-4 rounded-xl border border-[#3f6732]/50 bg-[#1f3319]/40 backdrop-blur-sm p-6 flex-col hover:bg-[#1f3319] transition-colors group">
                <div className="size-12 rounded-full bg-[#2c4823] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">accessibility_new</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold leading-tight">Inclusive Design</h3>
                  <p className="text-[#9fc992] text-sm font-normal leading-relaxed">Building interfaces that are accessible to everyone.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-1 gap-4 rounded-xl border border-[#3f6732]/50 bg-[#1f3319]/40 backdrop-blur-sm p-6 flex-col hover:bg-[#1f3319] transition-colors group">
                <div className="size-12 rounded-full bg-[#2c4823] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold leading-tight">Unique Perspective</h3>
                  <p className="text-[#9fc992] text-sm font-normal leading-relaxed">Solving complex problems with neurodiverse thinking patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;