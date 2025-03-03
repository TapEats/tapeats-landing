import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/80 backdrop-blur-md shadow-md' : 'py-5 bg-black/50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#showcase">Showcase</NavLink>
                <NavLink href="#process">How It Works</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
              </div>
              
              <Link 
                href="#download" 
                className="bg-mint hover:bg-mint/90 text-black font-medium py-2.5 px-5 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-mint/20"
              >
                Get Started
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="flex md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-8 items-center">
              <NavLink 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                isMobile
              >
                Features
              </NavLink>
              <NavLink 
                href="#showcase" 
                onClick={() => setMobileMenuOpen(false)}
                isMobile
              >
                Showcase
              </NavLink>
              <NavLink 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                isMobile
              >
                How It Works
              </NavLink>
              <NavLink 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                isMobile
              >
                Testimonials
              </NavLink>
              
              <Link 
                href="#download" 
                className="bg-mint hover:bg-mint/90 text-black font-medium py-3 px-8 rounded-full w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// NavLink Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, children, onClick, isMobile = false }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };
    
    // Check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);
  
  return (
    <Link 
      href={href} 
      className={`relative ${isMobile ? 'text-2xl' : 'text-sm'} font-medium transition-colors`}
      onClick={onClick}
    >
      <span className={isActive ? 'text-mint' : 'text-offWhite hover:text-mint'}>
        {children}
      </span>
      {isActive && (
        <motion.div 
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-mint rounded-full"
          layoutId={isMobile ? "mobileUnderline" : "desktopUnderline"}
        />
      )}
    </Link>
  );
};