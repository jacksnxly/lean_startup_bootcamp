// components/header.tsx
'use client';

import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, User, LogOut, Menu } from 'lucide-react';

export function Header() {
  // Placeholder user data and logout function
  const user = { name: 'User Name', initials: 'UN' }; // Replace with actual auth data
  const handleLogout = () => {
    console.log('Logout clicked'); // Replace with actual logout logic
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section: Brand/Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Add your logo here if you have one */}
          {/* <YourLogoComponent className="h-6 w-6" /> */}
          <span className="font-bold inline-block">prive</span>
        </Link>

        {/* Middle Section: Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-full pl-9 rounded-full"
              // Add onChange, onSubmit handlers later
            />
          </div>
        </div>

        {/* Right Section: User Menu */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* Group Menu icon and Avatar */}
              <Button variant="ghost" className="flex items-center space-x-2 px-2 h-9">
                <Menu className="h-5 w-5" /> {/* Burger menu icon */}
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder-pfp.png" // Replace with actual user PFP URL
                    alt={user.name}
                  />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  {/* <p className="text-xs leading-none text-muted-foreground">
                    user@example.com 
                  </p>*/}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Add other items like Profile, Settings if needed */}
              {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
              {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
