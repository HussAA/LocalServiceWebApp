'use client';
import ProgressLayout from './progressLayout';
import { useState } from 'react';
import RichTextEditor from '../../ui/richTextEditor';
import * as Switch from '@radix-ui/react-switch';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";


const completedSteps: boolean[] = [true, false, false, false, false];

const CreateServiceInfo: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  return (
    <div>
      {/* Header and Progress bar */}
      <div>
        <ProgressLayout completedSteps={completedSteps} />
      </div>

      {/* Form */}
      <div className="mx-auto p-4 lg:w-11/12 xl:w-9/12">
        <div className="bg-white p-5 rounded-lg shadow-md pb-14">
          <div className="text-2xl font-medium mb-1">Service Information</div>
          <hr className="mb-7" />

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Service Title*/}
            <div className="md:col-span-2">
              <label className="block mb-2">Service Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Category and Sub Category */}
            <div>
              <label className="block mb-2">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {/* Add categories here */}
              </select>
            </div>
            <div>
              <label className="block mb-2">Sub Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="">Select Sub Category</option>
                {/* Add subcategories here */}
              </select>
            </div>

            {/* Price and Duration */}
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={price}
                min="0"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2">Duration</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                {/* Add durations here */}
              </select>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div>
            <h1 className="mb-4">Description</h1>
            <RichTextEditor value={text} onChange={setText} />
          </div>
        </div>
        {/* Additional Services */}
        <div className='mt-10'>
          <AdditionalServices />
        </div>
        <div className='text-center mt-10'>
          <Link
            href="/provider-dashboard/create-service/availability"
            className='inline-flex items-center bg-[#365BAB] text-white p-2 px-5 rounded-md text-sm'
          >
            Next
            <FaArrowRightLong className='ml-2' />
          </Link>
        </div>

      </div>

    </div>
  );
};

export default CreateServiceInfo;



const AdditionalServices: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md pb-14">
      {/* Title */}
      <div className="flex items-center justify-between mb-7">
        <div className="text-2xl font-medium">Additional Services</div>
        <div className="flex items-center">
          <label className="mr-3 text-gray-700 font-medium" htmlFor="form-toggle">
            Toggle Form
          </label>
          <Switch.Root
            className={`w-12 h-6 rounded-full relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${checked ? 'bg-green-700' : 'bg-gray-400'
              }`}
            id="form-toggle"
            checked={checked}
            onCheckedChange={setChecked}
          >
            <Switch.Thumb
              className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-[1.6rem]' : 'translate-x-0'
                }`}
            />
          </Switch.Root>
        </div>
      </div>

      {/* Conditional Form */}
      {checked && (
        <div>
          {/* Add your form components here */}
          <p>Your form goes here...</p>
        </div>
      )}
    </div>
  );
};


