// app/explore/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

// Set page-specific metadata for the /explore route
export const metadata: Metadata = {
  title: 'Aktivitäten in Frankfurt am Main',
};

// This layout wraps the explore page
export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // Just render the children (the page component)
}
