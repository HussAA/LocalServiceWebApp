'use client'

import { useState } from 'react';
import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from "react";

const completedSteps: boolean[] = [true, true, true, true, true];

const CreateServiceSeo: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />

      <div className='text-center mt-10'>
        <div className='flex justify-center gap-4'>
          <Link
            href='/provider-dashboard/create-service/gallery'
            className='inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm group'
          >
            <FaArrowLeftLong className='mr-2 transition-transform group-hover:-translate-x-1' />
            Back
          </Link>
          <button
            onClick={handleSubmit}
            className='inline-flex items-center bg-[#365BAB] text-white p-2 px-5 rounded-md text-sm'
          >
            Add Service
          </button>
        </div>

        {/* Success Modal */}
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex items-center justify-center z-50" onClose={() => setIsModalOpen(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Success!
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your submission was successful. You can now go to the dashboard.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href="/provider-dashboard/my-services"
                  className="inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm"
                >
                  Close
                </Link>
                <Link
                  href="/provider-dashboard"
                  className="inline-flex items-center bg-[#365BAB] text-white p-2 px-5 rounded-md text-sm"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

    </div>
  );
};

export default CreateServiceSeo;