import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-bg">
      <div
        className="container mx-auto px-4 md:px-6 transition-all duration-700 transform opacity-0 translate-y-8"
        ref={ctaRef}
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-dark-bg-secondary to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Ready to Transform Refereeing?</h2>
              <p className="mt-4 text-dark-text-secondary">
                Join the growing list of leagues and organizations using SOFA to enhance fairness and accuracy in football matches.
              </p>

              <div className="mt-8 space-y-4">
                <button className="bg-accent text-dark-bg px-8 py-3 rounded-md hover:bg-accent-dark transition-colors w-full md:w-auto flex items-center justify-center">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent border border-accent text-accent px-8 py-3 rounded-md hover:bg-accent/10 transition-colors w-full md:w-auto">
                  Partnership Inquiries
                </button>
              </div>
            </div>

            <div className="bg-dark-bg p-8 md:p-12">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-dark-text-secondary mb-1 text-sm">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-dark-bg-secondary text-dark-text border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark-text-secondary mb-1 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-dark-bg-secondary text-dark-text border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-dark-text-secondary mb-1 text-sm">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-2 rounded-md bg-dark-bg-secondary text-dark-text border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="Football Association"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-text-secondary mb-1 text-sm">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 rounded-md bg-dark-bg-secondary text-dark-text border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="Tell us about your needs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-accent text-dark-bg px-6 py-2 rounded-md hover:bg-accent-dark transition-colors w-full"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;