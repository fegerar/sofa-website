import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const Demo: React.FC = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoExamples = [
    {
      title: "Monza Roma - Serie A",
      description: "Foul on Baldanzi detected with 99.8% confidence",
      image: "/src/assets/video.gif"
    }
  ];

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

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (demoRef.current) {
        observer.unobserve(demoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % demoExamples.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, demoExamples.length]);

  const handleNext = () => {
    setActiveDemo((prev) => (prev + 1) % demoExamples.length);
  };

  const handlePrev = () => {
    setActiveDemo((prev) => (prev - 1 + demoExamples.length) % demoExamples.length);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-dark-bg">
      <div 
        className="container mx-auto px-4 md:px-6 transition-all duration-700 transform opacity-0 translate-y-8"
        ref={demoRef}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">See SOFA in Action</h2>
          <p className="mt-4 text-dark-text-secondary max-w-3xl mx-auto">
            Watch how our technology identifies and analyzes step-on-foot incidents in real match scenarios.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-700">
            <div className="aspect-video bg-black relative">
              <img 
                src={demoExamples[activeDemo].image} 
                alt={demoExamples[activeDemo].title}
                className="w-full h-full object-cover "
              />
              
              {/* Demo Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {demoExamples[activeDemo].title}
                </h3>
                <p className="text-gray-300 mt-2 max-w-2xl">
                  {demoExamples[activeDemo].description}
                </p>
                
                {/* Detection Indicators */}
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Foul Detected
                </div>
                
                
              </div>
            </div>
            
            {/* Controls */}
            <div className="bg-dark-bg-secondary p-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="p-2 text-dark-text-secondary hover:text-accent transition-colors"
                >
                  <SkipBack className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 text-dark-text-secondary hover:text-accent transition-colors"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 text-dark-text-secondary hover:text-accent transition-colors"
                >
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex space-x-1">
                {demoExamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`h-2 rounded-full w-8 transition-colors ${
                      activeDemo === index ? 'bg-accent' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;