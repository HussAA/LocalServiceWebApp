// components/DashboardLayout.tsx
'use client';
import { Theme, Button, Flex, Box, Avatar, Text } from '@radix-ui/themes';
import * as Popover from '@radix-ui/react-popover';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiBell } from 'react-icons/fi';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // Ensure these are correctly imported

type SidebarLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type DashboardLayoutProps = {
  children: ReactNode;
  sidebarLinks: SidebarLink[];
  title: string;
};
import { IoPersonCircleOutline } from "react-icons/io5";
import { Boxes } from 'lucide-react';

const DashboardLayout = ({ children, sidebarLinks, title }: DashboardLayoutProps) => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#F4F4F4]">
      {/* Mobile Sidebar and Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white shadow w-full">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="text-2xl text-black">
              <FiMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 bg-gray-900 text-white">
            <nav>
              <ul>
                {sidebarLinks.map((link, index) => (
                  <li key={index} className="text-lg mb-4">
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-2 rounded ${pathname === link.href ? 'text-blue-500' : 'text-gray-300 hover:bg-gray-800'
                        }`}
                    >
                      {link.icon} {/* Render icon */}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <div className="flex items-center space-x-4">
          <button className="text-2xl text-black">
            <FiBell />
          </button>
          {/* Add more icons or buttons here */}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for larger screens */}
        <aside className="hidden md:flex md:flex-col w-80 bg-white shadow-md">
          <div className="p-6">
            <h1 className="text-3xl capitalize">{title}</h1>
          </div>
          <nav className="flex-1 mt-6">
            <ul>
              {sidebarLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index} className="text-lg">
                    <Link
                      href={link.href}
                      className={`flex items-center px-6 py-2 rounded ${isActive ? 'text-[#365BAB]' : 'text-[#515050] hover:bg-gray-200'
                        }`}
                    >
                      <span className="mr-3">{link.icon}</span> {/* Add margin-right to create space */}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Profile popover at the bottom */}

          <Theme className="p-4 mt-[80%]">
            <Popover.Root>
              <Popover.Trigger className='flex items-center space-x-2'>
                <Avatar
                  size="4"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  fallback="A"
                  radius="full"
                />
                <div className='text-left'>
                  <div className='text-gray-800'>
                    John Smith
                  </div>
                  <div className='text-gray-500'>
                    johnsmith@gmail.com
                  </div>
                </div>


              </Popover.Trigger>
              <Popover.Content sideOffset={5} align="start" className="shadow-lg shadow-gray-400 bg-gray-100 p-4 rounded-lg absolute bottom-0 left-0 ">
                <Flex direction="column" gap="2">
                  <Flex gap="3">
                    <Avatar
                      size="4"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      fallback="A"
                      radius="full"
                    />
                    <Box>
                      <div className='font-medium'>John Doe</div>
                      <Text size="2" color="gray">johndoe@example.com</Text>
                    </Box>
                  </Flex>
                  <Box mt="3">
                    <Link href="#" className='hover:text-blue-500 duration-150'>
                      View Profile
                    </Link>
                  </Box>
                  <Box>
                    <Link href="#" className='hover:text-blue-500 duration-150'>
                      Settings
                    </Link>
                  </Box>
                  <Box>
                    <Link href="#" className='text-red-700'>
                      Logout
                    </Link>
                  </Box>
                </Flex>
              </Popover.Content>
            </Popover.Root>
          </Theme>



        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <header className="hidden md:block p-4 md:bg-[#F4F4F4] bg-white md:shadow-none shadow w-full">
            <h1 className="text-2xl font-semibold capitalize">Header</h1>
          </header>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
