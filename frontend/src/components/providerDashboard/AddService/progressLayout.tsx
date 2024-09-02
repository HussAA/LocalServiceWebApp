// components/ProgressLayout.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface ProgressLayoutProps {
    completedSteps: boolean[];
}

const steps = [
    { title: 'Info' },
    { title: 'Availability' },
    { title: 'Location' },
    { title: 'Gallery' },
    { title: 'SEO' },
];

const ProgressLayout: React.FC<ProgressLayoutProps> = ({ completedSteps }) => {
    return (
        <>
            <div className="relative text-center mt-20 py-20">
                {/* Background Image */}
                <Image
                    src="/react-create-service.jpg"
                    alt="Create Service"
                    layout="fill" // Cover the entire div
                    objectFit="cover" // Cover the div proportionally
                    className="absolute inset-0 z-1" // Positioned behind content
                />

                {/* Header */}
                <div className="relative z-10 ">
                    <div>
                        <div className="text-black text-[40px] font-medium capitalize mb-4">create service</div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/" className="capitalize text-sm relative underline">
                            home <span className="absolute w-2 h-2 top-[7px] left-[53px] rounded-full bg-blue-800" />
                        </Link>
                        <div className="text-[#666666] capitalize pl-9">create service</div>
                    </div>
                </div>
            </div>
            {/* Progress */}
            <div className="mx-auto p-4 lg:w-11/12 xl:w-9/12">
                <div className="grid gap-3 grid-cols-3 md:grid-cols-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 bg-white border rounded-lg shadow py-7 lg:py-10 max-w-60">
                            <div className="flex-1">
                                <span className="text-lg font-medium">{step.title}</span>
                            </div>
                            <div>
                                <FaCheckCircle
                                    className={`text-xl ${completedSteps[index] ? 'text-blue-500' : 'text-gray-300'
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProgressLayout;
