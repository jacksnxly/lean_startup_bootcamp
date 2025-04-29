// components/activity-list.tsx
import React from "react";
import { Activity } from "@/lib/db/mock-activities";
import { ActivityCard } from "./activity-card";

interface ActivityListProps {
  activities: Activity[];
  onActivitySelect: (activity: Activity) => void;
}

// ActivityList component receives activities and renders ActivityCard for each
export function ActivityList({
  activities,
  onActivitySelect,
}: ActivityListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <h2 className="text-xl font-semibold tracking-tight mb-4 col-span-2">
        {activities.length} Aktivitäten in Frankfurt am Main
      </h2>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onClick={() => onActivitySelect(activity)}
        />
      ))}
      {activities.length === 0 && (
        <p className="text-muted-foreground col-span-2">
          Keine Aktivitäten gefunden.
        </p>
      )}
    </div>
  );
}
