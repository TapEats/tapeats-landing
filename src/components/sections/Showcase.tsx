import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Order Management',
    description: 'Track and manage all orders in real-time',
    image: '/images/app-screens/Received Orders.png',
  },
  {
    id: 2,
    title: 'Menu Editor',
    description: 'Easily update your offerings',
    image: '/images/app-screens/Edit Menu.png',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Powerful insights at a glance',
    image: '/images/app-screens/Reports.png',
  },
  {
    id: 4,
    title: 'Stock Management',
    description: 'Keep track of all supplies',
    image: '/images/app-screens/Stock.png',
  },
  {
    id: 5,
    title: 'Status Tracking',
    description: 'Monitor order progress',
    image: '/images/app-screens/Status.png',
  },
];

export const Showcase = () => {
  return (
    <section className="py-24" id="showcase">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="APP INTERFACE"
          title="Beautiful & Intuitive Design"
          description="Experience the elegance and simplicity of TapEats through our thoughtfully designed interface."
        />
        
        {/* Featured Screenshots - Limited to 3 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {showcaseItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-darkGray/30 backdrop-blur-md p-6 rounded-2xl border border-white/5 h-full flex flex-col">
                <div className="relative w-full h-[320px] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="text-xl font-bold text-offWhite mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Screens Grid - More compact display */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Effortless Order Management</h3>
              <p className="text-muted">TapEats streamlines your restaurant operations with its intuitive interface, allowing you to manage orders, inventory, and staff efficiently.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
              <p className="text-muted">Track your restaurant's performance with powerful analytics tools, providing actionable insights to optimize your business.</p>
            </motion.div>
          </div>
          
          <div className="relative h-[480px]">
            <motion.div 
              className="absolute top-0 left-[10%] w-[180px] shadow-lg rounded-3xl overflow-hidden z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/app-screens/Cart.png"
                alt="TapEats Cart"
                width={180}
                height={360}
                className="border border-white/10 rounded-3xl"
              />
            </motion.div>
            
            <motion.div 
              className="absolute top-[15%] right-[10%] w-[180px] shadow-lg rounded-3xl overflow-hidden z-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/images/app-screens/Received Orders.png"
                alt="TapEats Orders"
                width={180}
                height={360}
                className="border border-white/10 rounded-3xl"
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-[25%] w-[180px] shadow-lg rounded-3xl overflow-hidden z-30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src="/images/app-screens/Reports.png"
                alt="TapEats Analytics"
                width={180}
                height={360}
                className="border border-white/10 rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};