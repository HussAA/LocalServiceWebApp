"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Service {
  id: number;
  title: string;
  location: string;
  price: number;
  status: boolean;
}

export default function MyServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/listings/", {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1c3NhaW4uc21pdGhAZXhhbXBsZS5jb20iLCJzdWIiOjIsImlhdCI6MTcyMDkwNzA5MiwiZXhwIjoxNzIwOTEwNjkyfQ.VWxFLR_X_NFZehX3D6owoIy8STWecix8xIBE5APfZOQ`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: Service[]) => setServices(data))
      .catch((error) => console.error("Error fetching data:", error));
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
    <>
      <div className="container mx-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">My Services</h1>
          <div className="flex justify-between mb-4">
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Active Services
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded">
                Inactive Services
              </button>
            </div>
            <button
              onClick={openAddServiceModal}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              + Add Service
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-50 bg-gray-200 flex items-center justify-center border-b">
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
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  <div className="flex justify-between items-center mb-2">
                    <span>{service.location}</span>
                    <span>${service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-4">
                      Edit
                    </button>
                    <button
                      onClick={openStatusModal}
                      className={`px-2 py-1 rounded ${
                        service.status
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {service.status ? "Active" : "Inactive"}
                    </button>
                    <div className="ml-auto">
                      <button className="bg-purple-500 text-white px-2 py-1 rounded">
                        Boost Listing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Transition appear show={isAddServiceOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={closeAddServiceModal}
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
                        Add New Service
                      </Dialog.Title>
                      <div className="mt-2">
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Title
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Location
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Price
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Status
                            </label>
                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeAddServiceModal}
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
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
    </>
  );
}
