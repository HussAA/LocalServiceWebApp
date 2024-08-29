'use client'
import { useState } from 'react';

const HeaderTest = () => {
  const [device, setDevice] = useState('desktop');

  const handleDeviceClick = (size : any) => {
    setDevice(size);
  };

  return (
    <header className="p-4 bg-gray-600 text-white">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${device === 'desktop' ? 'bg-gray-600' : ''}`}
          onClick={() => handleDeviceClick('desktop')}
        >
          Desktop
        </button>
        <button
          className={`px-4 py-2 ${device === 'tablet' ? 'bg-gray-600' : ''}`}
          onClick={() => handleDeviceClick('tablet')}
        >
          Tablet
        </button>
        <button
          className={`px-4 py-2 ${device === 'phone' ? 'bg-gray-600' : ''}`}
          onClick={() => handleDeviceClick('phone')}
        >
          Phone
        </button>
      </div>

      <div className="mt-8">
        {device === 'desktop' && (
          <div className="border p-4">
            <p className="text-lg">Desktop View (1200px)</p>
            <div className="w-[1200px] h-[800px] bg-blue-200">Content Area</div>
          </div>
        )}
        {device === 'tablet' && (
          <div className="border p-4">
            <p className="text-lg">Tablet View (768px)</p>
            <div className="w-[768px] h-[1024px] bg-green-200">Content Area</div>
          </div>
        )}
        {device === 'phone' && (
          <div className="border p-4">
            <p className="text-lg">Phone View (375px)</p>
            <div className="w-[375px] h-[667px] bg-red-200">Content Area</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderTest;
