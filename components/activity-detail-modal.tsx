// components/activity-detail-modal.tsx
'use client';

import * as React from 'react';
import Image from 'next/image';
import Map, { Marker } from 'react-map-gl/mapbox'; // Corrected import path again
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure CSS is loaded

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Activity } from '@/lib/db/mock-activities';
import { Star, Clock, Tag, Coins, Users } from 'lucide-react';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

interface ActivityDetailModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ActivityDetailModal({ activity, isOpen, onOpenChange }: ActivityDetailModalProps) {
  if (!activity) return null;

  const initialViewState = {
    longitude: activity.longitude,
    latitude: activity.latitude,
    zoom: 14, // Zoom in closer for detail view
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-3xl p-0 max-h-[90vh] overflow-y-auto" 
        onInteractOutside={(e) => {
          // Prevent closing when clicking on the map
          const target = e.target as HTMLElement;
          if (target.closest('.mapboxgl-map')) return;
          onOpenChange(false);
        }}
      >
        {/* Image Header */}
        <div className="relative w-full h-60">
          <Image
            src={activity.imageUrl || '/placeholder-image.jpg'} // Provide a fallback
            alt={activity.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold">{activity.name}</DialogTitle>
          <DialogDescription className="flex items-center pt-1">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
            <span>
              {activity.rating} ({activity.reviews} reviews) -{' '}
              <span className="font-semibold">{activity.locationName}</span>
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-4">
          {/* Details */}
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>
              {activity.rating.toFixed(1)} ({activity.reviewCount} reviews)
            </span>
          </div>
          {activity.durationHours && (
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{activity.durationHours} Stunden</span>
            </div>
          )}
          <div className="flex items-center">
            <Tag className="mr-1 h-4 w-4" />
            <span>{activity.category}</span>
          </div>
          {/* Credit Cost */}
          <div className="flex items-center">
            <Coins className="mr-1 h-4 w-4" />
            <span>{activity.creditCost} Credits</span>
          </div>
          {/* Participant Count */}
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>
              {activity.currentParticipants}/{activity.maxParticipants} Participants
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground">{activity.description}</p>

          {/* Location & Small Map */}
          <div className="mt-4 pt-4 border-t">
            <h3 className="font-semibold">Location</h3>
            <p className="text-lg">{activity.locationName}</p>
            <div className="h-64 w-full rounded-md overflow-hidden border">
              {MAPBOX_TOKEN ? (
                <Map
                  mapboxAccessToken={MAPBOX_TOKEN}
                  initialViewState={initialViewState}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle="mapbox://styles/mapbox/streets-v11" // Or your preferred style
                  scrollZoom={false} // Disable zoom on modal map
                >
                  <Marker
                    longitude={activity.longitude}
                    latitude={activity.latitude}
                    anchor="bottom"
                  >
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
                  </Marker>
                </Map>
              ) : (
                <div className="flex items-center justify-center h-full bg-muted">
                  <p className="text-muted-foreground text-sm">Map requires setup</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 pt-0">
          {/* Add action buttons if needed, e.g., Book Now */}
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
