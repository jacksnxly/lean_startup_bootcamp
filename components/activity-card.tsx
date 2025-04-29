// components/activity-card.tsx
'use client'; // Needed for potential client-side interactions like hover effects

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'; // Assuming shadcn ui components are in ui folder
import type { Activity } from '@/lib/db/mock-activities';
import { Star, Clock, Coins, Users } from 'lucide-react'; // Icons

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void; // Add onClick handler prop
}

export function ActivityCard({ activity, onClick }: ActivityCardProps) {
  return (
    <Card
      className="overflow-hidden w-full transition-shadow hover:shadow-md cursor-pointer"
      onClick={onClick} // Attach the handler
    >
      <CardHeader className="p-0">
        <div className="relative w-full">
          <Image
            src={activity.imageUrl}
            alt={activity.name}
            width={400} // Keep width or adjust as needed
            height={256} // Updated height prop
            className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105" // h-64 applied here
            priority // Prioritize loading images visible in the initial viewport
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
          <span>{activity.rating.toFixed(1)}</span>
          <span className="ml-1">({activity.reviewCount})</span>
          <span className="mx-2">·</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{activity.durationHours} Stunden</span>
        </div>
        <CardTitle className="text-lg font-semibold mb-2 tracking-tight">
          {activity.name}
        </CardTitle>
        {/* <CardDescription className="text-sm mb-2 line-clamp-2">
          {activity.description} 
        </CardDescription> */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Coins className="mr-1 h-4 w-4" />
            <span>{activity.creditCost} Credits</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>
              {activity.currentParticipants}/{activity.maxParticipants} Participants
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {/* Removed price display */}
      </CardFooter>
    </Card>
  );
}
