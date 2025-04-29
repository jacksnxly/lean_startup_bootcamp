import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export const SocialProofSection = () => {
  const testimonials = [
    {
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Anna S.",
      city: "Frankfurt",
      role: "Engineering Student",
      testimonial:
        "Honestly, finding Prive felt like unlocking a hidden level of the city. I went from knowing almost no one to having an amazing group for padel and weekend adventures. The curated events are next-level and you really connect with people here.",
    },
    {
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Leo B.",
      city: "Munich",
      role: "Business Administration Student",
      testimonial:
        "Prive isn't just another app. it's an actual community. I've met incredible people potential clients, workout buddies, even just friends for a spontaneous beer after uni. The quality of the network is unmatched, and you feel like you're part of something exclusive.",
    },
    {
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
      name: "Sofia M.",
      city: "Frankfurt",
      role: "Law Student",
      testimonial:
        "Moving to Frankfurt was daunting, but Prive instantly plugged me into the social scene I was looking for. Forget awkward networking events; here, you bond over shared passions like hiking or trying that new restaurant everyone's talking about. It’s genuinely changed how I experience the city.",
    },
  ];

  return (
    <section
      className="py-24 bg-secondary/5 reveal-section opacity-0 transition-all duration-700"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our members are saying about the Prive experience – spots
            are limited.
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

              <p className="text-muted-foreground italic flex-grow mb-6">
                "{testimonial.testimonial}"
              </p>

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
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city} • {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
