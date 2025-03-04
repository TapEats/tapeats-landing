/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { FC, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

// Define steps for the process
const steps = [
  {
    number: 1,
    title: "Setup Your Account",
    description: "Register your restaurant and customize your profile with menus, hours, and delivery zones to get started quickly.",
    image: "/images/app-screens/Home Page.png",
    alt: "TapEats Home Page"
  },
  {
    number: 2,
    title: "Customize Your Menu",
    description: "Add your dishes, categorize them, set prices, and upload mouthwatering images to entice your customers.",
    image: "/images/app-screens/Edit Menu.png",
    alt: "Menu Editor"
  },
  {
    number: 3,
    title: "Connect Your Team",
    description: "Invite your staff members to join, assign roles and permissions to streamline order management.",
    image: "/images/app-screens/RBAC.png",
    alt: "Team Management"
  },
  {
    number: 4,
    title: "Go Live & Grow",
    description: "Start accepting orders, gather customer feedback, and use analytics to continuously improve your business.",
    image: "/images/app-screens/Reports.png",
    alt: "Analytics Dashboard"
  }
];

export const Process: FC = () => {
  // Reference to the container for scroll animation - properly typed
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Calculate progress bar width based on scroll
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // The amount to translate horizontally
  const xTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", `-${(steps.length - 1) * 100}%`]
  );
  
  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="py-0 relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky header and content container */}
      <div className="sticky top-0 left-0 right-0 h-screen overflow-hidden">
        {/* Header */}
        <div className="bg-black/80 backdrop-blur-md pt-6 pb-4 z-10 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <h2 className="text-3xl md:text-4xl font-heading mb-2 md:mb-0">Simple 4-Step Process</h2>
              <p className="text-muted max-w-md text-sm md:text-base text-center md:text-right">
                Getting started with TapEats is easy. Follow these simple steps to transform your restaurant operations.
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-1 bg-mint/20 mt-6">
              <motion.div 
                className="h-full bg-mint" 
                style={{ width: progressWidth }}
              />
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-between pt-6">
              {steps.map((step, index) => {
                // Determine when this step should be active based on scroll position
                const isActiveTransform = useTransform(
                  scrollYProgress,
                  // Activate step during its portion of the scroll
                  [index / steps.length, (index + 1) / steps.length],
                  [1, 0]
                );
                
                return (
                  <div key={step.number} className="flex flex-col items-center relative">
                    <motion.div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 border-2 border-mint"
                      style={{
                        backgroundColor: useTransform(
                          isActiveTransform, 
                          (active) => active > 0.5 ? "rgb(208, 240, 192)" : "transparent"
                        ),
                        color: useTransform(
                          isActiveTransform, 
                          (active) => active > 0.5 ? "rgb(21, 22, 17)" : "rgb(238, 239, 237)"
                        ),
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <p className="text-xs font-medium text-center hidden md:block">{step.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Main content with horizontal movement */}
        <motion.div 
          className="flex h-[calc(100vh-180px)] pt-12"
          style={{ x: xTransform }}
        >
          {steps.map((step, index) => {
            // Calculate range for this step
            const startRange = index / steps.length;
            const endRange = (index + 1) / steps.length;
            const midRange = (startRange + endRange) / 2;
            
            // Calculate opacity for this step
            const opacity = useTransform(
              scrollYProgress,
              [
                Math.max(0, startRange - 0.1),  // Start fade in
                startRange + 0.1,               // Fully visible
                endRange - 0.1,                 // Start fade out
                Math.min(1, endRange + 0.1)     // Fully invisible
              ],
              [0, 1, 1, 0]
            );
            
            // Calculate scale effect
            const scale = useTransform(
              scrollYProgress,
              [startRange, midRange, endRange],
              [0.8, 1, 0.8]
            );
            
            return (
              <motion.div 
                key={step.number}
                className="min-w-full px-6 flex items-center"
                style={{ opacity }}
              >
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-4xl font-bold mb-4">
                        <span className="text-mint mr-2">{step.number}.</span> {step.title}
                      </h3>
                      <div className="w-16 h-1 bg-mint mb-6"></div>
                      <p className="text-lg text-muted mb-6">{step.description}</p>
                      <div className="flex items-center gap-2 text-mint">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Easy to implement</span>
                      </div>
                    </div>
                    
                    <motion.div
                      className="flex justify-center"
                      style={{ scale }}
                    >
                      <div className="relative w-[280px] h-[560px]">
                        {/* Phone frame */}
                        <div className="absolute inset-0 bg-darkGray rounded-[40px] overflow-hidden border-4 border-gray shadow-xl">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                          
                          {/* App screenshot */}
                          <div className="relative w-full h-full p-1 pt-6">
                            <Image
                              src={step.image}
                              alt={step.alt}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="rounded-[36px]"
                            />
                          </div>
                        </div>
                        
                        {/* Reflection overlay */}
                        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;