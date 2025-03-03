import { FC } from 'react';
import { motion } from 'framer-motion';

export const CTA: FC = () => {
  return (
    <section className="section-spacing" id="download">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-gradient-to-br from-darkGray/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 md:p-16 border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-mint/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-mint/5 blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Restaurant?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join thousands of successful restaurants that have elevated their business with TapEats. 
              Download now and start your journey towards streamlined operations and enhanced customer experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#" className="flex items-center gap-4 bg-darkGray hover:bg-gray transition-colors p-4 rounded-xl border border-white/10">
                <div className="text-mint text-3xl">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.71 19.5c-.83 1.24-1.71 1.5-3 1.5-1.3 0-2.19-.52-3.5-2-1.11 1.2-2.02 2-3.5 2-1.3 0-2.19-.26-3-1.5-1.1-1.62-1-3.5-.5-6.5C6 11 8 8.5 12 8.5s6 2.5 6.71 4.5c.5 3 .6 4.88-.5 6.5z"></path>
                    <path d="M12 8.5c0-1.58.59-4 2-4 1.4 0 2 2.42 2 4"></path>
                    <path d="M8 8.5c0-1.58.6-4 2-4 1.4 0 2 2.42 2 4"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-bold text-lg">App Store</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 bg-darkGray hover:bg-gray transition-colors p-4 rounded-xl border border-white/10">
                <div className="text-mint text-3xl">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 3 21 12 3 21 3 3"></polygon>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-75">GET IT ON</div>
                  <div className="font-bold text-lg">Google Play</div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};