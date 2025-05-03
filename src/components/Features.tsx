import React, { useEffect, useRef } from 'react';
import { Eye, BarChart3, Clock, Shield, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Real-time Detection",
      description: "Instantly identify step-on-foot fouls as they happen with sub-second latency.",
      icon: <Eye className="h-8 w-8 text-accent-darker" />,
      color: "bg-accent/10"
    },
    {
      title: "99.7% Accuracy",
      description: "Trained on thousands of matches, our AI delivers industry-leading precision.",
      icon: <BarChart3 className="h-8 w-8 text-green-400" />,
      color: "bg-green-500/10"
    },
    {
      title: "Instant Replay",
      description: "Provide immediate video evidence with multiple angles for review.",
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      color: "bg-blue-500/10"
    },
    {
      title: "API Integration",
      description: "Seamlessly connect with existing VAR systems and broadcast equipment.",
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      color: "bg-purple-500/10"
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security ensures team and match data remains protected.",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      color: "bg-red-500/10"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-dark-bg-secondary">
      <div 
        className="container mx-auto px-4 md:px-6 transition-all duration-700 transform opacity-0 translate-y-8"
        ref={featuresRef}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">Advanced Features</h2>
          <p className="mt-4 text-dark-text-secondary max-w-3xl mx-auto">
            SOFA combines cutting-edge computer vision with deep learning to revolutionize 
            foul detection in professional soccer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;