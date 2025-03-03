import Image from 'next/image';
import { motion } from 'framer-motion';

interface AppPhoneMockupProps {
  imageUrl: string;
  alt: string;
  rotation?: number;
  delay?: number;
  zIndex?: number;
}

export const AppPhoneMockup = ({
  imageUrl,
  alt,
  rotation = 0,
  delay = 0,
  zIndex = 1
}: AppPhoneMockupProps) => {
  return (
    <motion.div
      className="absolute w-64 h-[500px] bg-darkGray rounded-[40px] shadow-strong overflow-hidden"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        zIndex 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
    >
      {/* Notch at top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/30 z-[2] rounded-t-[40px]"></div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-2 bg-black/50 rounded-full z-[3]"></div>
      
      {/* Phone screen (image) */}
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-[40px]"
        />
      </div>
    </motion.div>
  );
};