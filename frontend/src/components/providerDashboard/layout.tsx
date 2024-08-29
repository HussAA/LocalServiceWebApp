// components/DashboardLayout.tsx
'use client'

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarLink = {
  href: string;
  label: string;
};

type DashboardLayoutProps = {
  children: ReactNode;
  sidebarLinks: SidebarLink[];
  title: string;
};

const DashboardLayout = ({ children, sidebarLinks, title }: DashboardLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {sidebarLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={index} className="mb-2">
                  <Link
                    href={link.href}
                    className={`block p-4 rounded ${
                      isActive ? 'text-blue-500 font-semibold' : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
