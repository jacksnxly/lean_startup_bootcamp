import Image from 'next/image';
import { cn } from '@/lib/utils';
import { mockActivities, Activity } from '@/lib/db/mock-activities'; // Import mock data
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// Select a few activities to show as past events (e.g., first 3)
const pastEventsToShow = mockActivities.slice(0, 3);

interface PastEventCardProps {
  activity: Activity;
}

// Simple card component for past events
function PastEventCard({ activity }: PastEventCardProps) {
  return (
    <Card className="overflow-hidden w-full transition-shadow hover:shadow-md bg-card border border-border/50">
      <CardHeader className="p-0">
        <div className="relative w-full h-48"> {/* Fixed height for consistency */} 
          <Image
            src={activity.imageUrl}
            alt={activity.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full filter grayscale-[50%] opacity-80" // Add grayscale and opacity for 'past' look
            priority={false} // Not critical for initial load
          />
          <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded">PAST</div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-md font-semibold mb-1 tracking-tight truncate">{activity.name}</h3>
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{activity.locationName}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function PastEventsSection() {
  return (
    <section className="py-24 reveal-section opacity-0 transition-all duration-700" id="past-events">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Glimpse Into the Past</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of the exclusive events our members have enjoyed recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pastEventsToShow.map((activity) => (
            <PastEventCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
