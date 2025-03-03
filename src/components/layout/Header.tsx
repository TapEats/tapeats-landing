// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/80 backdrop-blur-md shadow-md' : 'py-5 bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />

        <nav className={`fixed md:relative top-0 left-0 w-full h-full md:h-auto bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none md:flex items-center z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          <ul className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto gap-8 md:gap-6">
            <li>
              <Link href="#features" className="text-offWhite hover:text-mint transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mint after:transition-all hover:after:w-full" onClick={() => isOpen && toggleMenu()}>Features</Link>
            </li>
            <li>
              <Link href="#showcase" className="text-offWhite hover:text-mint transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mint after:transition-all hover:after:w-full" onClick={() => isOpen && toggleMenu()}>Showcase</Link>
            </li>
            <li>
              <Link href="#process" className="text-offWhite hover:text-mint transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mint after:transition-all hover:after:w-full" onClick={() => isOpen && toggleMenu()}>How It Works</Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-offWhite hover:text-mint transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-mint after:transition-all hover:after:w-full" onClick={() => isOpen && toggleMenu()}>Testimonials</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 z-50">
          <Link href="#download" className="hidden md:block">
            <Button>Get Started</Button>
          </Link>
          
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};