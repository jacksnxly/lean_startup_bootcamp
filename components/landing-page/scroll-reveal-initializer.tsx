'use client';

import { useEffect } from 'react';

/**
 * Initializes IntersectionObserver for scroll-reveal animations on elements with the 'reveal-section' class.
 * This component is marked as a client component ('use client') to allow the use of useEffect.
 * It doesn't render any visible UI itself.
 */
export function ScrollRevealInitializer() {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, scroll reveal animations disabled.');
      // Optionally, make all sections visible immediately as a fallback
      document.querySelectorAll('.reveal-section').forEach(el => {
        el.classList.remove('opacity-0'); 
        el.classList.add('opacity-100'); // Ensure visibility
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0'); // Make visible
          entry.target.classList.add('animate-in');  // Add animation class
          // entry.target.classList.add('opacity-100'); // Alternative simple fade-in
          obs.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => {
      // Ensure initial state is set (if not done via CSS)
      section.classList.add('opacity-0', 'transition-opacity', 'duration-700', 'ease-in-out');
      observer.observe(section);
    });

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      sections.forEach((section) => {
        if (observer) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return null; // This component does not render anything
}
