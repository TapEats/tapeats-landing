// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-darkGray border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="mb-6" />
            
            <p className="text-muted mb-6 leading-relaxed">
              Streamlining restaurant operations and enhancing dining experiences with innovative technology solutions since 2022.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-mint">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Features</Link></li>
              <li><Link href="#showcase" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Showcase</Link></li>
              <li><Link href="#process" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Testimonials</Link></li>
              <li><Link href="#download" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Download</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-mint">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">API Documentation</a></li>
              <li><a href="#" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Case Studies</a></li>
              <li><a href="#" className="text-muted hover:text-mint transition-colors hover:translate-x-1 inline-block">Partner Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-mint">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-mint mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </span>
                <span className="text-muted">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mint mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                  </svg>
                </span>
                <span className="text-muted">support@tapeats.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-mint mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                  </svg>
                </span>
                <span className="text-muted">123 Tech Plaza, San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">&copy; 2025 TapEats. All rights reserved.</p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-muted hover:text-mint transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted hover:text-mint transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted hover:text-mint transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};