import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, BarChart, Star, DollarSign } from 'lucide-react';

export const Counter: FC = () => {
  const counterStats = [
    { 
      icon: Building2, 
      value: 5000, 
      suffix: "+", 
      label: "Restaurant Partners" 
    },
    { 
      icon: BarChart, 
      value: 30, 
      suffix: "M+", 
      label: "Orders Processed" 
    },
    { 
      icon: Star, 
      value: 98, 
      suffix: "%", 
      label: "Customer Satisfaction" 
    },
    { 
      icon: DollarSign, 
      value: 120, 
      suffix: "M", 
      label: "Revenue Generated", 
      prefix: "$" 
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-black/50 to-darkGray/50" id="impact">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Our Impact"
          title="TapEats in Numbers"
          description="Our platform has revolutionized the restaurant industry with impressive results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16">
          {counterStats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-mint/10 rounded-lg flex items-center justify-center text-mint">
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                <CountUp 
                  from={0} 
                  to={stat.value} 
                  duration={2} 
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  className="text-4xl md:text-5xl font-heading mb-2"
                />
                <p className="text-muted uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Simple count-up component
interface CountUpProps {
  from: number;
  to: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const CountUp: FC<CountUpProps> = ({ from, to, duration, prefix = '', suffix = '', className = '' }) => {
  const [count, setCount] = useState(from);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (countRef.current) clearInterval(countRef.current);
    
    const step = 1000 / 60; // 60fps
    
    startTimeRef.current = Date.now();
    
    countRef.current = setInterval(() => {
      const elapsed = Date.now() - (startTimeRef.current || 0);
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const currentCount = from + (to - from) * progress;
      
      setCount(Math.floor(currentCount));
      
      if (progress >= 1) {
        if (countRef.current) clearInterval(countRef.current);
      }
    }, step);
    
    return () => {
      if (countRef.current) clearInterval(countRef.current);
    };
  }, [from, to, duration]);
  
  return <div className={className}>{prefix}{count.toLocaleString()}{suffix}</div>;
};