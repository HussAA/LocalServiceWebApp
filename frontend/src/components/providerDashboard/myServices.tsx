// app/dashboard/page.tsx
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DashboardLayout from '@/components/providerDashboard/layout';

import { FiHome, FiSettings, FiDollarSign, FiStar, FiLogOut, FiClock, FiList } from 'react-icons/fi'; // Import necessary icons
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  location: string;
  price: number;
  status: boolean;
}

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
export default function MyServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/listings/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AUTH_BEARER}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: Service[]) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, []);

  function closeAddServiceModal() {
    setIsAddServiceOpen(false);
  }

  function openAddServiceModal() {
    setIsAddServiceOpen(true);
  }

  function closeStatusModal() {
    setStatusModalOpen(false);
  }

  function openStatusModal() {
    setStatusModalOpen(true);
  }
  return (
    <DashboardLayout sidebarLinks={sidebarLinks} title="Logo">

      <div className="mx-auto w-11/12">
        <div className="p-2">
          <h1 className="text-3xl font-medium mb-8">My Services</h1>
          <div className="flex justify-between mb-12">
            <div className="flex space-x-4">
              <button className="bg-transparent border-[#2B3F6C] border text-[#2B3F6C] px-4 py-2 rounded focus:text-white focus:bg-[#2B3F6C]">
                Active Services
              </button>
              <button className="bg-transparent border-[#2B3F6C] border text-[#2B3F6C] px-4 py-2 rounded focus:text-white focus:bg-[#2B3F6C]">
                Inactive Services
              </button>
            </div>
            {/*Top Right Buttons*/}
            <div className="flex pr-1 items-center">
              <div className="pr-1">
                <button

                  className="bg-transparent text-black p-[7px] text-2xl border-gray-400 border rounded focus:text-white focus:bg-[#2B3F6C]"
                >
                  <HiOutlineSquares2X2 />
                </button>

              </div>
              <div className="pr-2">
                <button

                  className="bg-transparent text-black p-[7px] text-2xl border-gray-400 border rounded focus:text-white focus:bg-[#2B3F6C]"
                >
                  <FiList/>
                </button>

              </div>
              <div>
                <Link
                  href="/provider-dashboard/create-service/info"
                  className="bg-[#2B3F6C] text-white p-2 py-[10px] rounded"
                >
                  + Add Service
                </Link>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <div className="bg-gray-200 flex items-center justify-center border-b">
                  <Image
                    src="/plumber.png"
                    alt="Service Image"
                    className="object-cover h-full w-full"
                    width={500}
                    height={500}
                    blurDataURL="data:..."
                    placeholder="blur"
                  />
                </div>
                <div className="p-4">
                  <div className="text-lg mb-2 capitalize">
                    {service.title}
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[#7D7474]">{service.location}</span>
                    <span>${service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="bg-transparent text-black px-2 py-1 rounded mr-4 flex items-center">
                      <HiOutlinePencilSquare className="text-2xl mr-2" />Edit
                    </button>
                    <button
                      onClick={openStatusModal}
                      className="relative flex items-center ml-6"
                    >
                      <span
                        className={`absolute -left-3 w-4 h-4 rounded-full ${service.status ? "bg-green-700" : "bg-red-700"
                          }`}
                      />
                      <span className="ml-3">
                        {service.status ? "Active" : "Inactive"}
                      </span>
                    </button>
                    <div className="ml-auto">
                      <button className="bg-[#2B3F6C] text-white px-4 py-2 rounded text-sm">
                        Boost Listing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Confirm Status Change Modal */}
          <Transition appear show={isStatusModalOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeStatusModal}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Confirm Status Change
                      </Dialog.Title>
                      <div className="mt-2">
                        <p>
                          Are you sure you want to change the status to
                          inactive?
                        </p>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                          onClick={closeStatusModal}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-4"
                          onClick={closeStatusModal}
                        >
                          No
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>

    </DashboardLayout>
  );
}
