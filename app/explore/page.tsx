// app/explore/page.tsx
'use client'; // Make it a client component for state

import React, { useState } from 'react'; // Import useState

import { ActivityList } from '@/components/activity-list';
import { MapView } from '@/components/map-view';
import { mockActivities, Activity } from '@/lib/db/mock-activities'; // Import Activity type
import { FilterBar } from '@/components/filter-bar';
import { Header } from '@/components/header';
import { ActivityDetailModal } from '@/components/activity-detail-modal'; // Import Modal

export default function ExplorePage() {
  const activities = mockActivities;
  // State for selected activity and modal visibility
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to open modal with selected activity
  const handleSelectActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: Deselect activity after a short delay to allow fade-out
    // setTimeout(() => setSelectedActivity(null), 300);
  };

  return (
    <div className="flex flex-col h-screen"> {/* Overall page container */}
      <Header /> 
      <FilterBar /> 
      {/* Container for the two panes */}
      <div className="flex flex-1 overflow-hidden"> {/* flex-1 takes remaining height */}
        {/* Left Pane: Activity List */}
        <div className="w-1/2 overflow-y-auto p-4 border-r border-border">
          {/* Pass the selection handler to ActivityList */}
          <ActivityList activities={activities} onActivitySelect={handleSelectActivity} />
          {/* <p>Activity List Placeholder</p> Placeholder */}
        </div>

        {/* Right Pane: Map View - Let MapView handle its own height (h-full) */}
        <div className="w-1/2 h-full">
          <MapView activities={activities} />
          {/* <p>Map Placeholder</p> Placeholder */}
        </div>
      </div>

      {/* Render the Modal */}
      <ActivityDetailModal
        activity={selectedActivity}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen} // Use Shadcn's convention for closing
      />
    </div>
  );
}
