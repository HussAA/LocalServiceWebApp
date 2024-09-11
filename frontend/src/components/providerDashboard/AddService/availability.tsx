'use client'

import { useState } from 'react';
import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface TimeSlot {
  start: string;
  end: string;
}

interface DayAvailability {
  active: boolean;
  timeSlots: TimeSlot[];
}

interface Availability {
  monday: DayAvailability;
  tuesday: DayAvailability;
  wednesday: DayAvailability;
  thursday: DayAvailability;
  friday: DayAvailability;
  saturday: DayAvailability;
  sunday: DayAvailability;
  allDays: DayAvailability;
}

const initialAvailability: Availability = {
  monday: { active: false, timeSlots: [{ start: "", end: "" }] },
  tuesday: { active: false, timeSlots: [{ start: "", end: "" }] },
  wednesday: { active: false, timeSlots: [{ start: "", end: "" }] },
  thursday: { active: false, timeSlots: [{ start: "", end: "" }] },
  friday: { active: false, timeSlots: [{ start: "", end: "" }] },
  saturday: { active: false, timeSlots: [{ start: "", end: "" }] },
  sunday: { active: false, timeSlots: [{ start: "", end: "" }] },
  allDays: { active: false, timeSlots: [{ start: "", end: "" }] },
};

const completedSteps: boolean[] = [true, true, false, false, false];

const CreateServiceAvailability: React.FC = () => {
  const [availability, setAvailability] = useState<Availability>(initialAvailability);

  const handleToggleDay = (day: keyof Availability) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], active: !prev[day].active },
    }));
  };

  const handleTimeChange = (
    day: keyof Availability,
    index: number,
    type: "start" | "end",
    value: string
  ) => {
    const updatedTimeSlots = availability[day].timeSlots.map((slot, i) =>
      i === index ? { ...slot, [type]: value } : slot
    );
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], timeSlots: updatedTimeSlots },
    }));
  };

  const addTimeSlot = (day: keyof Availability) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], timeSlots: [...prev[day].timeSlots, { start: "", end: "" }] },
    }));
  };

  const removeTimeSlot = (day: keyof Availability, index: number) => {
    const updatedTimeSlots = availability[day].timeSlots.filter((_, i) => i !== index);
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], timeSlots: updatedTimeSlots },
    }));
  };

  const renderTimeSelectors = (day: keyof Availability) => (
    <div className="space-y-2">
      {availability[day].timeSlots.map((slot, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="time"
            value={slot.start}
            onChange={(e) => handleTimeChange(day, index, "start", e.target.value)}
            className="border rounded-md px-2 py-1"
            placeholder="Start Time"
          />
          <input
            type="time"
            value={slot.end}
            onChange={(e) => handleTimeChange(day, index, "end", e.target.value)}
            className="border rounded-md px-2 py-1"
            placeholder="End Time"
          />
          <button
            onClick={() => removeTimeSlot(day, index)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() => addTimeSlot(day)}
        className="text-blue-500 hover:text-blue-700 mt-2"
      >
        Add Time Slot
      </button>
    </div>
  );


  return (
    <div className='pb-12'>
      <ProgressLayout completedSteps={completedSteps} />

      {/* Set Your Availability */}
      <div className="mx-auto p-4 lg:w-11/12 xl:w-9/12">
        <div className='bg-white p-7 rounded-lg shadow-md pb-20'>
          <h2 className="text-2xl font-medium mb-1">Service Availability</h2>
          <hr className="mb-7" />
          <div className="space-y-4">
            {Object.keys(availability).map((day) => (
              <div key={day} className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={availability[day as keyof Availability].active}
                    onChange={() => handleToggleDay(day as keyof Availability)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="capitalize">{day}</span>
                </label>
                {availability[day as keyof Availability].active && renderTimeSelectors(day as keyof Availability)}
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Next and Back buttons */}
      <div className='text-center mt-10'>
        <div className='flex justify-center gap-4'>
          <Link
            href="/provider-dashboard/create-service/info"
            className='inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm group'
          >
            <FaArrowLeftLong className='mr-2 transition-transform group-hover:-translate-x-1' />
            Back
          </Link>
          <Link
            href="/provider-dashboard/create-service/location"
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

export default CreateServiceAvailability;