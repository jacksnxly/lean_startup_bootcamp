import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { ActivitiesSection } from './ActivitiesSection';
import { SocialProofSection } from './SocialProofSection';
import { HowItWorksSection } from './HowItWorksSection';
import { Footer } from './Footer';
import { PastEventsSection } from './past-events-section';
import { ScrollRevealInitializer } from './scroll-reveal-initializer';

export function RedesignedHomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <PastEventsSection />
        <FeaturesSection />
        <ActivitiesSection />
        <SocialProofSection />
        <HowItWorksSection />
      </main>
      <Footer />
      <ScrollRevealInitializer />
    </div>
  );
}