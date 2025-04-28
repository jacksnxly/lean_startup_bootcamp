import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ActivitiesSection = () => {
  const activities = [
    { 
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Tennis match between friends", 
      title: "Sports Matches",
      description: "Connect through competitive and casual games"
    },
    { 
      image: "https://images.pexels.com/photos/5935232/pexels-photo-5935232.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Cultural city tour", 
      title: "Cultural Experiences",
      description: "Discover hidden gems in your city"
    },
    { 
      image: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Wine tasting event", 
      title: "Wine Tours",
      description: "Taste exceptional wines with experts"
    },
    { 
      image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Evening networking event", 
      title: "Networking Nights",
      description: "Expand your social and professional circle"
    },
    { 
      image: "https://images.pexels.com/photos/6308141/pexels-photo-6308141.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Indoor rock climbing session", 
      title: "Adventure Activities",
      description: "Challenge yourself with thrilling experiences"
    },
    { 
      image: "https://images.pexels.com/photos/8436742/pexels-photo-8436742.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Dance workshop", 
      title: "Skill Workshops",
      description: "Learn something new in a supportive environment"
    },
  ];

  return (
    <section className="py-24 reveal-section opacity-0 transition-all duration-700" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More Than Just a Club</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a variety of curated experiences designed to help you connect, grow, and have fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={cn(
                "group rounded-xl overflow-hidden shadow-md bg-card border border-border/50 h-[360px]",
                "hover:shadow-lg transition-all duration-500 relative"
              )}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-white/80 text-sm">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};