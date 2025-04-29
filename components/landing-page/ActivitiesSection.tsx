import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ActivitiesSection = () => {
  const activities = [
    {
      image: "/assets/images/landing/outdoor-padel-lesson-with-a-padel-coach-2024-10-18-10-04-13-utc.jpg",
      alt: "Padel lesson outdoors",
      title: "Sports Matches",
      description: "Connect through competitive and casual games"
    },
    {
      image: "/assets/images/landing/businesswoman-in-frankfurt-2025-03-31-19-54-13-utc.jpg",
      alt: "Businesswoman looking over Frankfurt skyline",
      title: "Cultural Experiences",
      description: "Discover hidden gems in your city"
    },
    {
      image: "/assets/images/landing/work-colleagues-in-a-restaurant-celebrating-conclu-2024-11-26-10-34-11-utc.jpg",
      alt: "Colleagues celebrating at a restaurant",
      title: "Social Dining",
      description: "Enjoy curated food and drink experiences"
    },
    {
      image: "/assets/images/landing/large-group-toasting-together-at-outdoor-barbecue-2025-04-22-04-31-08-utc.jpg",
      alt: "Group toasting at outdoor barbecue",
      title: "Networking Nights",
      description: "Expand your social and professional circle"
    },
    {
      image: "/assets/images/landing/young-hikers-relaxing-on-the-top-of-the-mountain-2025-03-05-05-13-16-utc.jpg",
      alt: "Hikers relaxing on a mountain top",
      title: "Adventure Activities",
      description: "Challenge yourself with thrilling experiences"
    },
    {
      image: "/assets/images/landing/interracial-couple-prepare-food-together-with-a-pr-2024-12-01-10-58-40-utc.jpg",
      alt: "Couple cooking together",
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