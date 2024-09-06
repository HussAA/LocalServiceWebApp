import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const completedSteps: boolean[] = [true, true, true, false, false];

const CreateServiceLocation: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />

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