import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-20 md:pt-28 lg:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-dark-bg-secondary -z-10"></div>
      <div 
        className="container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 transform opacity-0 translate-y-8"
        ref={heroRef}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text leading-tight">
              Revolutionary Step On Foot Detection
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-dark-text-secondary">
              Enhancing referee decisions with real-time computer vision technology
            </h2>
            <p className="mt-6 text-dark-text-secondary max-w-lg">
              SOFA uses advanced AI to detect step-on-foot fouls in soccer matches with exceptional accuracy, 
              helping referees make better decisions and ensuring fair play.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-dark-bg px-8 py-3 rounded-md hover:bg-accent-dark transition-colors flex items-center justify-center">
                See It In Action <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-accent text-accent px-8 py-3 rounded-md hover:bg-accent/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-tr from-dark-bg-secondary to-gray-700 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-dark-text-secondary text-lg font-medium">Demo Video Placeholder</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
              <p className="text-sm font-medium">99.7% Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;