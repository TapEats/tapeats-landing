import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "TapEats has revolutionized how we manage our restaurant. The real-time order tracking and inventory management have saved us countless hours and significantly improved our customer satisfaction rates by over 35%!",
    author: "Alex Johnson",
    role: "Executive Chef & Owner, Coastal Bistro",
    avatar: "/images/testimonials/avatar-1.png"
  },
  {
    id: 2,
    content: "We implemented TapEats six months ago and have seen a 28% increase in order efficiency and a 15% reduction in food waste. The analytics dashboard gives us invaluable insights into our business performance.",
    author: "Sarah Martinez",
    role: "Operations Manager, Urban Plate",
    avatar: "/images/testimonials/avatar-2.png"
  },
  {
    id: 3,
    content: "The team management features have transformed our staffing process. Scheduling is streamlined, communication is improved, and everyone knows exactly what's expected of them. Simply outstanding!",
    author: "Michael Chang",
    role: "General Manager, Fusion Kitchen",
    avatar: "/images/testimonials/avatar-3.png"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };
  
  return (
    <section className="section-spacing" id="testimonials">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Success Stories"
          title="What Our Clients Say"
          description="Join thousands of satisfied restaurants that have transformed their operations with TapEats."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-darkGray/40 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/5 relative">
                    <div className="text-4xl text-mint/10 absolute top-6 left-6">❝</div>
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl italic mb-8 leading-relaxed">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600 mr-4">
                          {testimonial.avatar && (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.author}</h4>
                          <p className="text-sm text-mint">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-mint hover:text-black transition-colors"
              onClick={prevSlide}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-mint hover:text-black transition-colors"
              onClick={nextSlide}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-mint w-6" : "bg-white/20"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};