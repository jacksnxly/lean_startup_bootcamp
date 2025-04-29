// components/map-view.tsx
"use client";

import * as React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import type { MapRef } from "react-map-gl/mapbox";
import { Activity } from "@/lib/db/mock-activities";

// IMPORTANT: You need to add the Mapbox CSS import to your root layout or page file:
// import 'mapbox-gl/dist/mapbox-gl.css';

interface MapViewProps {
  activities: Activity[]; // We'll use this later for markers
  initialLatitude?: number;
  initialLongitude?: number;
  initialZoom?: number;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export function MapView({
  activities,
  initialLatitude = 52.52, // Default to Berlin center
  initialLongitude = 13.405, // Default to Berlin center
  initialZoom = 11, // Default zoom level
}: MapViewProps) {
  const mapRef = React.useRef<MapRef>(null);

  // Initial viewport settings centered on Frankfurt am Main
  const [viewState, setViewState] = React.useState({
    latitude: 50.1109, // Frankfurt latitude
    longitude: 8.6821, // Frankfurt longitude
    zoom: 12, // Adjusted zoom level for city view
    pitch: 0,
    bearing: 0,
  });

  if (!MAPBOX_TOKEN) {
    console.error("Error: Mapbox token is not configured.");
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <p className="text-destructive-foreground">
          Map requires configuration.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={viewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11" // Standard street map style
        // Add markers, popups, interactivity later
      >
        {/* Markers will be added here based on activities */}
        {activities.map((activity) => (
          <Marker
            key={activity.id}
            longitude={activity.longitude}
            latitude={activity.latitude}
            anchor="bottom"
          >
            {/* Default HTML marker - replaced or styled this */}
            <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white cursor-pointer"></div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
