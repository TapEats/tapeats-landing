import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  const controls = useAnimation();
  
  // Start animation immediately on component mount
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Scroll-linked animations - only for opacity, not position
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: {
      opacity: 1 // Start visible to avoid the blank initial state
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen pt-32 relative flex items-center" id="hero">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text Content - Fades on scroll but doesn't move up */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: contentOpacity }}
          >
            <motion.span
              className="inline-block py-1.5 px-4 rounded-full text-sm font-medium mb-6 bg-mint/10 text-mint border border-mint/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              Restaurant Management Simplified
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl xl:text-7xl font-heading leading-tight mb-6"
              variants={itemVariants}
            >
              Fuel Your <span className="text-mint">Flavor</span> <br /> Adventure
            </motion.h1>

            <motion.p
              className="text-lg text-muted mb-8 max-w-xl"
              variants={itemVariants}
            >
              Streamlined restaurant management and delightful dining experiences at your fingertips. TapEats simplifies operations and enhances customer satisfaction.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="group"
              >
                Get Started 
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Button>
              <Button variant="secondary" size="lg">Explore Features</Button>
            </motion.div>

            <motion.div
              className="flex gap-12 lg:gap-16"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">5K+</div>
                <div className="text-muted uppercase text-sm tracking-wider">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">98%</div>
                <div className="text-muted uppercase text-sm tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading mb-1">30M+</div>
                <div className="text-muted uppercase text-sm tracking-wider">Orders</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero App Screenshots - With scroll-based fade */}
          <motion.div 
            className="lg:w-1/2 relative h-[550px] w-full"
            style={{ opacity: contentOpacity }}
          >
            <motion.div
              className="absolute bottom-0 left-[5%] w-64 h-[480px] bg-darkGray rounded-[40px] overflow-hidden shadow-xl shadow-black/30 z-20"
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Image
                src="/images/app-screens/Home Page.png"
                alt="TapEats app interface"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-[40px]"
              />
            </motion.div>
            
            <motion.div
              className="absolute top-0 right-[5%] w-64 h-[480px] bg-darkGray rounded-[40px] overflow-hidden shadow-xl shadow-black/30 z-10"
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 8 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Image
                src="/images/app-screens/Received Orders.png"
                alt="TapEats app interface"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-[40px]"
              />
            </motion.div>
            
            {/* Floating UI Elements */}
            <motion.div
              className="absolute top-[10%] left-0 bg-darkGray/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 z-30 border border-white/10 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center text-mint">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted">New Orders</div>
                <div className="text-sm font-medium">+24%</div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-[15%] right-0 bg-darkGray/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 z-30 border border-white/10 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center text-mint">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted">Revenue</div>
                <div className="text-sm font-medium">$12.8K</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: contentOpacity }}
      >
        <div className="w-8 h-14 border-2 border-muted/20 rounded-full mb-2 relative">
          <motion.div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-mint rounded-full"
            animate={{ 
              y: [0, 6, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-sm">Scroll Down</span>
      </motion.div>
    </section>
  );
};