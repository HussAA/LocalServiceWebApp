// app/dashboard/page.tsx

import DashboardLayout from '@/components/providerDashboard/layout';

import { FiHome, FiSettings, FiDollarSign, FiStar, FiLogOut, FiClock } from 'react-icons/fi'; // Import necessary icons
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

type SidebarLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const sidebarLinks: SidebarLink[] = [
  { href: '/providerDashboard', label: 'Dashboard', icon: <FiHome /> },
  { href: '/providerDashboard/myServices', label: 'My Services', icon: <HiOutlineSquares2X2 /> },
  { href: '/providerDashboard/bookings', label: 'Bookings', icon: <LuCalendarDays /> },
  { href: '/providerDashboard/payout', label: 'Payout', icon: <FiDollarSign /> },
  { href: '/providerDashboard/availability', label: 'Availability', icon: <FiClock /> },
  { href: '/providerDashboard/reviews', label: 'Reviews', icon: <FiStar /> },
  { href: '/providerDashboard/earnings', label: 'Earnings', icon: <FiDollarSign /> },
  { href: '/providerDashboard/chat', label: 'Chat', icon: <IoChatbubbleEllipsesOutline /> },
  { href: '/providerDashboard/settings', label: 'Settings', icon: <FiSettings /> },
  { href: '/providerDashboard/logout', label: 'Logout', icon: <FiLogOut /> },
];
export default function DashboardPage() {
  return (
    <DashboardLayout sidebarLinks={sidebarLinks} title="Logo">
      <h1 className="text-2xl font-bold">Provider Dashboard</h1>
      <p className="mt-4">Welcome to your dashboard!</p>
    </DashboardLayout>
  );
}
