import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const Demo: React.FC = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoExamples = [
    {
      title: "Premier League Match Detection",
      description: "Liverpool vs. Manchester City - 78th minute foul detected with 99.8% confidence",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "La Liga Analysis",
      description: "Barcelona vs. Real Madrid - Multiple angles of step-on-foot incident reviewed in seconds",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Champions League Integration",
      description: "Bayern Munich vs. PSG - SOFA providing real-time data to VAR system",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
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
                className="w-full h-full object-cover opacity-50"
              />
              
              {/* Demo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
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
                
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="h-16 w-16 rounded-full border-2 border-green-500 animate-ping opacity-75"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-600 opacity-90 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DETECT</span>
                    </div>
                  </div>
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