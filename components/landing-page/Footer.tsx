import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Noto_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: '300' });

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const locations = [
    { city: "Frankfurt", country: "Germany" },
    { city: "Munich", country: "Germany" },
    { city: "Vienna", country: "Austria" },
  ];
  
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Activities", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "FAQ", href: "#" },
  ];
  
  const socialLinks = [
    { name: "Instagram", href: "#", icon: <Instagram size={20} /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
  ];

  return (
    <footer className="bg-secondary/10 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className={cn("text-2xl font-thin", notoSerif.className)}>Prive</span>
            </Link>
            <p className="text-muted-foreground">
              Your exclusive passport to sports, social life, and adventure in European cities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-secondary/30 hover:bg-secondary/50"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Locations</h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.city} className="flex items-start">
                  <MapPin size={18} className="mr-2 text-muted-foreground mt-0.5" />
                  <span>
                    <span className="font-medium">{location.city}</span>, {location.country}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <Mail size={18} className="mr-2 text-muted-foreground" />
                <a href="mailto:info@prive.club" className="hover:text-primary transition-colors">
                  info@prive.club
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-muted-foreground" />
                <a href="tel:+4915901234567" className="hover:text-primary transition-colors">
                  +49 159 0123 4567
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay in the Loop</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates about new locations and exclusive events.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background rounded-md px-4 py-2 flex-grow border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and to receive marketing emails.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Prive. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};