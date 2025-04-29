// components/filter-bar.tsx
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SlidersHorizontal } from 'lucide-react'; // Icon for More Filters

export function FilterBar() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // TODO: Implement actual filtering logic
  const handleCategoryChange = (value: string) => {
    if (value) { // Prevent unselecting all
      setSelectedCategory(value);
      console.log('Selected category:', value);
    }
  };

  const handleLocationClick = () => {
    console.log('Location filter clicked'); // Placeholder
  };

  const handleMoreFiltersClick = () => {
    console.log('More filters clicked'); // Placeholder
  };

  return (
    <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Adjust top-16 based on actual header height */}
      <div className="flex h-14 items-center justify-between gap-4 px-4 md:px-6">
        {/* Wrap left-aligned items */}
        <div className="flex items-center gap-4">
          {/* Category Filters */}
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={handleCategoryChange}
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="all" aria-label="Toggle All">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="social" aria-label="Toggle Social">
              Social
            </ToggleGroupItem>
            <ToggleGroupItem value="sports" aria-label="Toggle Sports">
              Sports
            </ToggleGroupItem>
            <ToggleGroupItem value="fun" aria-label="Toggle Fun">
              Fun
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Separator (Optional) */}
          {/* <Separator orientation="vertical" className="h-6 hidden sm:block" /> */}

          {/* Location Filter Button */}
          <Button
            variant="outline"
            className="hidden md:flex"
            onClick={handleLocationClick}
          >
            Location
            {/* Add location icon if desired */}
          </Button>
        </div>

        {/* More Filters Button */}
        <Button
          variant="outline"
          onClick={handleMoreFiltersClick}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
