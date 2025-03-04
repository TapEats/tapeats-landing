import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { features } from '../../constants/features';

export const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-spacing" id="features">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Powerful Features"
          description="TapEats offers a comprehensive suite of tools designed to streamline restaurant operations and enhance customer experience."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-darkGray/40 backdrop-blur-md rounded-xl p-8 border border-white/5 relative group hover:shadow-strong transition-all"
              variants={item}
            >
              <div className="absolute top-5 right-5 text-6xl font-bold opacity-5 text-mint">{String(index + 1).padStart(2, '0')}</div>
              
              <div className="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-mint text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};