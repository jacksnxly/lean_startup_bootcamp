'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    { 
      step: 1, 
      title: "Apply Online",
      description: "Fill out our membership application with your interests and background."
    },
    { 
      step: 2, 
      title: "Get Vetted",
      description: "Our community panel reviews applications to ensure a good fit."
    },
    { 
      step: 3, 
      title: "Book Your First Event",
      description: "Once approved, join your first match or social gathering."
    },
    { 
      step: 4, 
      title: "Build Your Tribe",
      description: "Connect with members and create your own social circle."
    },
  ];

  return (
    <section className="py-24 reveal-section opacity-0 transition-all duration-700" id="membership">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join in 4 Simple Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our straightforward process makes it easy to become part of our exclusive community.
          </p>
        </div>
        
        {/* Desktop Steps */}
        <div className="hidden md:block relative mb-16">
          {/* Progress line */}
          <div className="absolute top-[2.5rem] left-0 right-0 h-[2px] bg-muted-foreground/20">
            <div 
              className="h-full bg-primary transition-all duration-1000" 
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            />
          </div>
          
          <div className="grid grid-cols-4 relative z-10 gap-8">
            {steps.map((step) => (
              <div 
                key={step.step}
                className={cn(
                  "flex flex-col items-center p-6 rounded-xl transition-all duration-300",
                  "hover:bg-secondary/5",
                  step.step <= activeStep ? "opacity-100" : "opacity-50"
                )}
                onMouseEnter={() => setActiveStep(step.step)}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300",
                    step.step <= activeStep 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.step < activeStep ? (
                    <CheckCircle size={24} />
                  ) : (
                    <span className="font-semibold">{step.step}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center max-w-[250px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Steps */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div 
              key={step.step}
              className={cn(
                "flex items-start space-x-6 p-6 rounded-xl border border-border/50",
                "transition-all duration-300",
                step.step === activeStep ? "bg-primary/5 border-primary/30" : ""
              )}
              onClick={() => setActiveStep(step.step)}
            >
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  step.step <= activeStep 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}
              >
                {step.step < activeStep ? (
                  <CheckCircle size={20} />
                ) : (
                  <span className="font-semibold">{step.step}</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="default" 
            size="lg"
            className="group"
          >
            Start Your Application
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};