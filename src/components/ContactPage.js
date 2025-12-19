import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-[#111418] dark:text-white">
      
      {/* Hero Section */}
      <section className="px-4 py-8 md:px-40 flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="relative flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl overflow-hidden items-center justify-center p-8 md:p-12 shadow-2xl" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(21, 34, 17, 0.85), rgba(21, 34, 17, 0.9)), url("https://images.unsplash.com/photo-1423666639041-f140481d8236?q=80&w=2070&auto=format&fit=crop")` 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#152211] to-transparent opacity-90"></div>
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">We're Here to Help</span>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                    Let's Start a Conversation
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mt-2">
                    Whether you have a question about our services, need technical support, or just want to explore how we can collaborate, we are ready to listen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="px-4 md:px-40 py-10 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-white text-3xl font-bold">Send us a Message</h2>
              <div className="w-12 h-1 bg-primary rounded-full mt-2 mb-3"></div>
              <p className="text-text-secondary">Fill out the form below and our team will get back to you shortly.</p>
            </div>
            <form className="flex flex-col gap-5 mt-2">
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">Full Name</label>
                <input className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3.5 text-white placeholder-text-secondary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" type="text"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">Email Address</label>
                <input className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3.5 text-white placeholder-text-secondary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" type="email"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">Subject</label>
                <input className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3.5 text-white placeholder-text-secondary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="How can we help?" type="text"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 font-medium text-sm">Message</label>
                <textarea className="bg-surface-dark border border-border-dark rounded-xl px-4 py-3.5 text-white placeholder-text-secondary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Write your message here..." rows="5"></textarea>
              </div>
              <button className="mt-4 bg-primary hover:bg-green-400 text-background-dark font-bold text-base py-3.5 px-8 rounded-full transition-all shadow-lg shadow-primary/20 w-full sm:w-auto self-start" type="button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 flex flex-col gap-8 shadow-xl">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold">Contact Information</h3>
                <p className="text-text-secondary text-sm">Reach out to us directly through any of these channels.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5 group">
                  <div className="bg-[#152211] p-3.5 rounded-full text-primary border border-border-dark group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs uppercase tracking-wider font-bold mb-1">Email Us</p>
                    <p className="text-white font-medium text-lg">hello@autismsitsolution.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="bg-[#152211] p-3.5 rounded-full text-primary border border-border-dark group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs uppercase tracking-wider font-bold mb-1">Call Us</p>
                    <p className="text-white font-medium text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="bg-[#152211] p-3.5 rounded-full text-primary border border-border-dark group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs uppercase tracking-wider font-bold mb-1">Visit Us</p>
                    <p className="text-white font-medium text-lg leading-snug">123 Innovation Drive,<br/>Tech Valley, CA 94043</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Iframe */}
            <div className="h-72 w-full rounded-2xl overflow-hidden border border-border-dark relative shadow-xl">
              <iframe 
                title="Office Location"
                className="grayscale invert-[0.9] opacity-80 hover:opacity-100 transition-opacity" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08624618469247!3d37.421999879825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1611819808080!5m2!1sen!2sus" 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Help Center CTA */}
      <section className="px-4 py-20 flex justify-center bg-surface-dark border-t border-border-dark mt-auto">
        <div className="max-w-[800px] w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Need Immediate Assistance?</h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Check out our Frequently Asked Questions or visit our Help Center for quick answers.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;