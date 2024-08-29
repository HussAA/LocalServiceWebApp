// app/dashboard/page.tsx

import DashboardLayout from '@/components/providerDashboard/layout';

const sidebarLinks = [
  { href: '/providerDashboard', label: 'Dashboard' },
  { href: '/providerDashboard/myServices', label: 'My Services' },
  { href: '/providerDashboard/bookings', label: 'Bookings' },
  { href: '/providerDashboard/payout', label: 'Payout' },
];

export default function MyServicesPage() {
  return (
    <DashboardLayout sidebarLinks={sidebarLinks} title="Logo">
      <h1 className="text-2xl font-bold">My Services</h1>
      <p className="mt-4">Welcome to your Services!</p>
    </DashboardLayout>
  );
}
