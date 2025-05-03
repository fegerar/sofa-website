import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Our goal is to reduce human error in officiating, and SOFA's technology is a game-changer.",
      author: "Federico Gerardi",
      title: "SOFA Developer",
      avatar: ""
    },
    {
      quote: "Technology is the future of football officiating, and SOFA is leading the way.",
      author: "Murad Huseynov",
      title: "SOFA Developer",
      avatar: ""
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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark-bg-secondary text-dark-text">
      <div
        className="container mx-auto px-4 md:px-6 transition-all duration-700 transform opacity-0 translate-y-8"
        ref={testimonialsRef}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Idea</h2>
          <p className="mt-4 text-dark-text-secondary max-w-3xl mx-auto">
            Our developers are passionate about using technology to enhance the game of football.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-0 md:left-10 opacity-10">
            <Quote className="h-24 w-24 text-accent" />
          </div>

          <div className="bg-dark-bg rounded-xl p-8 md:p-10 shadow-xl relative z-10 border border-gray-700">
            <div className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-dark-text">
              "{testimonials[activeTestimonial].quote}"
            </div>

            <div className="flex items-center">
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].author}
                className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-accent"
              />
              <div>
                <h4 className="font-semibold text-lg text-dark-text">{testimonials[activeTestimonial].author}</h4>
                <p className="text-dark-text-secondary">{testimonials[activeTestimonial].title}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-dark-bg rounded-full hover:bg-gray-700 transition-colors text-dark-text-secondary hover:text-accent"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full w-6 transition-colors ${
                    activeTestimonial === index ? 'bg-accent' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 bg-dark-bg rounded-full hover:bg-gray-700 transition-colors text-dark-text-secondary hover:text-accent"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;