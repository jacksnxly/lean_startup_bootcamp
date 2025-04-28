import Image from 'next/image';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SocialProofSection = () => {
  const testimonials = [
    {
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Anna S.",
      city: "Vienna",
      role: "Graduate Student",
      testimonial: "Joining Prive has been the most exciting part of my university life! I've made genuine connections through sports and social events that I wouldn't have found elsewhere.",
    },
    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Leo B.",
      city: "Berlin",
      role: "Marketing Executive",
      testimonial: "From tennis matches to networking events, I've found a community that shares my interests. The curated experiences and quality of members make Prive truly special.",
    },
    {
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Sofia M.",
      city: "Munich",
      role: "Software Engineer",
      testimonial: "As someone who relocated for work, Prive made it easy to build a social circle in a new city. The exclusive events create the perfect environment to meet like-minded people.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/5 reveal-section opacity-0 transition-all duration-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our community about how Prive has enhanced their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-xl bg-card border border-border/50 shadow-sm",
                "hover:shadow-md transition-all duration-300 flex flex-col"
              )}
            >
              <div className="mb-6 text-primary/60">
                <Quote size={30} />
              </div>
              
              <p className="text-muted-foreground italic flex-grow mb-6">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.city} • {testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};