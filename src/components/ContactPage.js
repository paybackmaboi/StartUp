import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-[#0e121b] dark:text-[#f8f9fb] font-display antialiased">
      
      {/* Main Content */}
      <main className="flex-1 w-full bg-background-light dark:bg-background-dark py-12 md:py-20 px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Information */}
          <div className="flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Contact Us</p>
              <h1 className="text-[#0e121b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Let's connect.
              </h1>
              <p className="text-[#506795] dark:text-[#9ca3af] text-lg font-normal leading-relaxed">
                We are here to help you navigate IT solutions tailored for unique minds. Reach out to us for specialized support and consultation.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-2 mt-4">
              {/* Email Item */}
              <div className="flex items-center gap-4 bg-white dark:bg-[#1a2230] p-4 rounded-xl shadow-sm border border-[#e8ebf3] dark:border-[#2a3441] transition-transform hover:-translate-y-1 duration-300">
                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                  <span className="material-symbols-outlined text-[24px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#506795] dark:text-[#9ca3af] uppercase mb-0.5">Email Us</span>
                  <a className="text-[#0e121b] dark:text-white text-base font-medium leading-normal truncate hover:text-primary transition-colors" href="mailto:support@autismitsolution.com">
                    support@autismitsolution.com
                  </a>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-4 bg-white dark:bg-[#1a2230] p-4 rounded-xl shadow-sm border border-[#e8ebf3] dark:border-[#2a3441] transition-transform hover:-translate-y-1 duration-300">
                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#506795] dark:text-[#9ca3af] uppercase mb-0.5">Call Us</span>
                  <a className="text-[#0e121b] dark:text-white text-base font-medium leading-normal truncate hover:text-primary transition-colors" href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Address Item */}
              <div className="flex items-center gap-4 bg-white dark:bg-[#1a2230] p-4 rounded-xl shadow-sm border border-[#e8ebf3] dark:border-[#2a3441] transition-transform hover:-translate-y-1 duration-300">
                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#506795] dark:text-[#9ca3af] uppercase mb-0.5">Visit Us</span>
                  <p className="text-[#0e121b] dark:text-white text-base font-medium leading-normal truncate">
                    123 Innovation Drive, Tech City, CA
                  </p>
                </div>
              </div>
            </div>

            {/* Mini Map */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm border border-[#e8ebf3] dark:border-[#2a3441] mt-4 group">
              <img 
                alt="Map showing location" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3bx7Srqtipp68j4cPE9N0n1nfTga7lCPqDyUhFVuV8RrxlY_51yk0VsCkdLbSvfKEj4SjN0je48eiLEBqepbFZ5_x2i-dYbnmv9YBH-4bcALgcWIefRJOPVPxFXSxXVAQbfVTJgpc7c5iUPcZsfKF1yGKlcktGVKdOEkMQNNrWIEXGpv88OAUKHjIp-qrmrHa9QPbxmZKNxEKalU68uavPvxb0IEdahMoDD019l_JYd9gi5A30CYzmZq-DgU49_9RciRXHzN6SOkD" 
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg transform -translate-y-4">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-[#1a2230] rounded-2xl p-6 md:p-8 shadow-lg border border-[#e8ebf3] dark:border-[#2a3441] h-fit sticky top-10">
            <h3 className="text-2xl font-bold text-[#0e121b] dark:text-white mb-6">Send us a message</h3>
            <form className="flex flex-col gap-5">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0e121b] dark:text-[#f8f9fb]" htmlFor="name">Your Name</label>
                <input 
                  className="w-full rounded-lg border border-[#d0d5dd] dark:border-[#4b5563] bg-transparent px-4 py-3 text-base text-[#0e121b] dark:text-white placeholder-[#98a2b3] dark:placeholder-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  id="name" 
                  name="name" 
                  placeholder="Jane Doe" 
                  type="text"
                />
              </div>
              
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0e121b] dark:text-[#f8f9fb]" htmlFor="email">Email Address</label>
                <input 
                  className="w-full rounded-lg border border-[#d0d5dd] dark:border-[#4b5563] bg-transparent px-4 py-3 text-base text-[#0e121b] dark:text-white placeholder-[#98a2b3] dark:placeholder-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  id="email" 
                  name="email" 
                  placeholder="jane@example.com" 
                  type="email"
                />
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0e121b] dark:text-[#f8f9fb]" htmlFor="subject">Subject</label>
                <div className="relative">
                  <select 
                    className="w-full rounded-lg border border-[#d0d5dd] dark:border-[#4b5563] bg-transparent px-4 py-3 text-base text-[#0e121b] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none" 
                    id="subject" 
                    name="subject"
                    defaultValue=""
                  >
                    <option className="text-[#98a2b3] bg-white dark:bg-[#1a2230]" disabled value="">Select a topic</option>
                    <option className="text-black dark:text-white bg-white dark:bg-[#1a2230]" value="general">General Inquiry</option>
                    <option className="text-black dark:text-white bg-white dark:bg-[#1a2230]" value="support">Technical Support</option>
                    <option className="text-black dark:text-white bg-white dark:bg-[#1a2230]" value="consultation">Request Consultation</option>
                    <option className="text-black dark:text-white bg-white dark:bg-[#1a2230]" value="partnership">Partnership</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0e121b] dark:text-[#f8f9fb]" htmlFor="message">How can we help?</label>
                <textarea 
                  className="w-full rounded-lg border border-[#d0d5dd] dark:border-[#4b5563] bg-transparent px-4 py-3 text-base text-[#0e121b] dark:text-white placeholder-[#98a2b3] dark:placeholder-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-y min-h-[120px]" 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your needs..." 
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                className="mt-2 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-bold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors" 
                type="button"
              >
                Send Message
              </button>
              
              <p className="text-center text-xs text-[#506795] dark:text-[#9ca3af] mt-2">
                By sending this form, you agree to our <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ContactPage;