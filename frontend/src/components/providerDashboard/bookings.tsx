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
  { href: '/provider-dashboard', label: 'Dashboard', icon: <FiHome /> },
  { href: '/provider-dashboard/my-services', label: 'My Services', icon: <HiOutlineSquares2X2 /> },
  { href: '/provider-dashboard/bookings', label: 'Bookings', icon: <LuCalendarDays /> },
  { href: '/provider-dashboard/payout', label: 'Payout', icon: <FiDollarSign /> },
  { href: '/provider-dashboard/availability', label: 'Availability', icon: <FiClock /> },
  { href: '/provider-dashboard/reviews', label: 'Reviews', icon: <FiStar /> },
  { href: '/provider-dashboard/earnings', label: 'Earnings', icon: <FiDollarSign /> },
  { href: '/provider-dashboard/chat', label: 'Chat', icon: <IoChatbubbleEllipsesOutline /> },
  { href: '/provider-dashboard/settings', label: 'Settings', icon: <FiSettings /> },
  { href: '/provider-dashboard/logout', label: 'Logout', icon: <FiLogOut /> },
];
export default function BookingsPage() {
  return (
    <DashboardLayout sidebarLinks={sidebarLinks} title="Logo">
      <h1 className="text-3xl font-medium">Bookings</h1>
      <p className="mt-4"></p>
    </DashboardLayout>
  );
}
