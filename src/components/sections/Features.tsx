import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  Clock, 
  ClipboardList, 
  Utensils, 
  BarChart2, 
  Users, 
  Package 
} from 'lucide-react';

export const Features = () => {
  // Features with Lucide icons instead of emojis
  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Monitor orders from preparation to delivery with our intuitive status tracking system and real-time notifications.',
      icon: Clock,
    },
    {
      title: 'Menu Management',
      description: 'Easily update your menu items, prices, and availability in real-time through our intuitive interface.',
      icon: ClipboardList,
    },
    {
      title: 'Kitchen Workflow',
      description: 'Connect front-of-house with kitchen operations to streamline order fulfillment and reduce wait times.',
      icon: Utensils,
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain valuable insights into your business performance with detailed reports, trends, and visualizations.',
      icon: BarChart2,
    },
    {
      title: 'Team Management',
      description: 'Efficiently manage your staff, track performance metrics, and optimize scheduling to enhance productivity.',
      icon: Users,
    },
    {
      title: 'Inventory Control',
      description: 'Track food costs, monitor ingredient usage, and automate stock ordering to minimize waste and maximize profits.',
      icon: Package,
    },
  ];

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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                className="bg-darkGray/40 backdrop-blur-md rounded-xl p-8 border border-white/5 relative group hover:shadow-strong transition-all"
                variants={item}
              >
                <div className="absolute top-5 right-5 text-6xl font-bold opacity-5 text-mint">{String(index + 1).padStart(2, '0')}</div>
                
                <div className="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-mint w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};