import { Goal, PartyPopper, Users, Laptop } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Goal size={36} className="text-chart-1" />,
      title: 'Sports Access',
      description: 'Book courts anytime, host games, join tournaments, and connect with players of all skill levels.',
    },
    {
      icon: <PartyPopper size={36} className="text-chart-4" />,
      title: 'Curated Social Events',
      description: 'Enjoy exclusive bar crawls, workshops, escape rooms, themed parties, and wellness events.',
    },
    {
      icon: <Users size={36} className="text-chart-2" />,
      title: 'Selective Membership',
      description: 'Join a vetted community of like-minded individuals for quality interactions and meaningful connections.',
    },
    {
      icon: <Laptop size={36} className="text-chart-5" />,
      title: 'Integrated Platform',
      description: 'Book activities, network with members, and explore events—all in one seamless digital experience.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 reveal-section opacity-0 transition-all duration-700" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Makes Us Different</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            We've reimagined social networking by combining digital convenience with real-world experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300",
                "hover:translate-y-[-4px] hover:border-primary/20"
              )}
            >
              <div className="mb-4 p-3 rounded-full bg-secondary/20 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};