import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


const completedSteps: boolean[] = [true, true, false, false, false];

const CreateServiceAvailability: React.FC = () => {
  return (
    <div className=''>
      <ProgressLayout completedSteps={completedSteps} />

      {/* Next and Back buttons */}
      <div className='text-center mt-10'>
        <div className='flex justify-center gap-4'>
          <Link
            href="/provider-dashboard/create-service/info"
            className='inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm'
          >
            <FaArrowLeftLong className='mr-2' />
            Back
          </Link>
          <Link
            href="/provider-dashboard/create-service/location"
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

export default CreateServiceAvailability;