'use client'
import { useState } from 'react';
import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const completedSteps: boolean[] = [true, true, true, false, false];

const CreateServiceLocation: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');


  {/* use this for address autoComplete Google Places Autocomplete */}
  return (
    <div className='pb-20'>
      <ProgressLayout completedSteps={completedSteps} />

      {/* Form */}
      <div className="mx-auto p-4 lg:w-11/12 xl:w-9/12">
        <div className="bg-white p-7 rounded-lg shadow-md pb-20">
          <div className="text-2xl font-medium mb-1">Service Location</div>
          <hr className="mb-7" />

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2">Address</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2">City</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Province */}
            <div>
              <label className="block mb-2">State / Province</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2">Country</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block mb-2">Zip Code/Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>

            {/* Latitude */}
            <div>
              <label className="block mb-2">Latitude (ex. 21.422534)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>

            {/* Longitude */}
            <div>
              <label className="block mb-2">Longitude (ex. 39.826189)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>




      {/* Next and Back buttons */}
      <div className='text-center mt-10'>
        <div className='flex justify-center gap-4'>
          <Link
            href="/provider-dashboard/create-service/availability"
            className='inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm group'
          >
            <FaArrowLeftLong className='mr-2 transition-transform group-hover:-translate-x-1' />
            Back
          </Link>
          <Link
            href="/provider-dashboard/create-service/gallery"
            className='inline-flex items-center bg-[#365BAB] text-white p-2 px-5 rounded-md text-sm group'
          >
            Next
            <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceLocation;