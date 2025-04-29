'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Noto_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: '300' });

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible on initial load with a slight delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center text-center min-h-[90vh] overflow-hidden" id="home">
      {/* Hero Background Video */}
      <video
        src="/assets/video/prive.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-background/95" />

      {/* Content Container */}
      <div className={cn(
        "relative z-20 container mx-auto px-4 flex flex-col items-center transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <span className="inline-block bg-chart-1/20 border border-chart-1/30 text-white px-5 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
          Launching Now in Frankfurt and Munich
        </span>
        
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-7xl font-thin mb-8 max-w-4xl text-white leading-tight",
          notoSerif.className
        )}>
          Your Passport to <span className="text-chart-1">Sports</span>, <span className="text-chart-2">Social Life</span> &amp; <span className="text-chart-4">Adventure</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
          Join an exclusive community of like-minded individuals seeking authentic connections through sports and curated experiences.
        </p>
        
        <Button
          variant="default"
          size="lg"
          className="bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 transform hover:scale-105"
          asChild // Use Button styling for the anchor tag
        >
          <a href="https://fs-students.activehosted.com/f/1" target="_blank" rel="noopener noreferrer">
            Apply for Membership
          </a>
        </Button>
      </div>
    </section>
  );
};