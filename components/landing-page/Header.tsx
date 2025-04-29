'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: '300' });

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300",
        isScrolled 
          ? "bg-background/95 py-2" 
          : "bg-background/50 py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" aria-label="Prive" className="flex items-center gap-2 group">
          <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Prive Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span className={`text-2xl font-thin tracking-wider ${notoSerif.className} group-hover:text-primary transition-colors`}>
            Prive
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button variant="default" size="sm" className="bg-primary/90 hover:bg-primary transition-colors duration-300" asChild>
            <a href="https://fs-students.activehosted.com/f/1" target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
            <Button variant="default" size="sm" className="bg-primary/90 hover:bg-primary transition-colors duration-300 w-full" asChild>
              <a href="https://fs-students.activehosted.com/f/1" target="_blank" rel="noopener noreferrer" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}> 
                Apply
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, setMobileMenuOpen }) => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Activities', href: '#activities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Membership', href: '#membership' },
  ];

  const handleClick = () => {
    if (mobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={cn(
        "relative group",
        mobile ? "block py-2" : "hover:text-primary transition-colors"
      )}
    >
      {link.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </Link>
  ));
};