'use client';
import ProgressLayout from './progressLayout';
import { useState } from 'react';
import RichTextEditor from '../../ui/richTextEditor';
import * as Switch from '@radix-ui/react-switch';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";


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
        <div className="bg-white p-7 rounded-lg shadow-md pb-20">
          <div className="text-2xl font-medium mb-1">Service Information</div>
          <hr className="mb-7" />

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Service Title*/}
            <div className="md:col-span-2">
              <label className="block mb-2">Service Title</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Category and Sub Category */}
            <div>
              <label className="block mb-2">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
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
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
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
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={price}
                min="0"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2">Duration</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="" disabled className='text-gray-500'>Select Duration</option>
                <option value="fixed">Fixed</option>
                <option value="starting">Starting</option>
                <option value="hourly">Hourly</option>
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

export default CreateServiceInfo;

interface AdditionalService {
  additionalServiceItem: string;
  additionalServicePrice: string;
  additionalServiceDuration: string;
}

const AdditionalServices: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [services, setServices] = useState<AdditionalService[]>([
    { additionalServiceItem: '', additionalServicePrice: '', additionalServiceDuration: '' },
  ]);

  const handleServiceChange = (index: number, field: keyof AdditionalService, value: string) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const addServiceForm = () => {
    setServices([...services, { additionalServiceItem: '', additionalServicePrice: '', additionalServiceDuration: '' }]);
  };

  const removeServiceForm = (index: number) => {
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md pb-14">
      {/* Title */}
      <div className="flex items-center justify-between mb-7">
        <div className="text-2xl font-medium">Additional Services</div>
        <div className="flex items-center">
          {/* <label className="mr-3 text-gray-700 font-medium" htmlFor="form-toggle">
            Toggle Form
          </label> */}
          <Switch.Root
            className={`w-12 h-6 rounded-full relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${checked ? 'bg-green-700' : 'bg-gray-400'
              }`}
            id="form-toggle"
            checked={checked}
            onCheckedChange={setChecked}
          >
            <Switch.Thumb
              className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-[1.6rem]' : 'translate-x-[0.15rem]'
                }`}
            />
          </Switch.Root>
        </div>
      </div>

      {/* Conditional Form */}
      {checked && (
        <div>
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-6">
              {/* Additional Service Title */}
              <div className="md:col-span-2">
                <label className="block mb-2 capitalize">Additional Service</label>
                <input
                  placeholder='Ex. pet hair removal'
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                  value={service.additionalServiceItem}
                  onChange={(e) => handleServiceChange(index, 'additionalServiceItem', e.target.value)}
                />
              </div>
              {/* Additional Service Price */}
              <div className="md:col-span-2">
                <label className="block mb-2 capitalize">Price</label>
                <input
                  min={0}
                  placeholder='$50'
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                  value={service.additionalServicePrice}
                  onChange={(e) => handleServiceChange(index, 'additionalServicePrice', e.target.value)}
                />
              </div>
              {/* Additional Service Duration */}
              <div className="md:col-span-2">
                <label className="block mb-2 capitalize">Duration</label>

                <select
                  className="w-full p-2 border border-gray-300 rounded-sm text-sm md:text-base"
                  value={service.additionalServiceDuration}
                  onChange={(e) => handleServiceChange(index, 'additionalServiceDuration', e.target.value)}
                >

                  <option value="" disabled className="text-gray-500">
                    Select Duration
                  </option>
                  <option value="fixed">Fixed</option>
                  <option value="starting">Starting</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
              {/* Delete Button */}
              <div className="md:col-span-6 text-right">
                {services.length > 1 && (
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => removeServiceForm(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
          <button onClick={addServiceForm} className="text-left flex items-center space-x-1 bg-transparent text-[#365BAB] hover:text-[#21386b] duration-150">
            <FiPlusCircle />
            <div>
              Add Additional Service
            </div>
          </button>
        </div>
      )}
    </div>
  );
};


