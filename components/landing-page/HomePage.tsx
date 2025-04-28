'use client';

import { useEffect } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { ActivitiesSection } from './ActivitiesSection';
import { SocialProofSection } from './SocialProofSection';
import { HowItWorksSection } from './HowItWorksSection';
import { Footer } from './Footer';

export function RedesignedHomePage() {
  // Add scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivitiesSection />
        <SocialProofSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}