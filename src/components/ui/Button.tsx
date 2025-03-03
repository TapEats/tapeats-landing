import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-mint to-mintDarker text-black hover:shadow-[0_10px_25px_rgba(208,240,192,0.3)]',
    secondary: 'bg-transparent border-2 border-white/10 text-offWhite hover:border-white/20',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'py-3 px-8',
    lg: 'text-lg py-4 px-10',
  };
  
  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};