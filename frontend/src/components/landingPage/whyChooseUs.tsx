import React from "react";
import Image from "next/image";
import Link from "next/link";

const sectionDetails = [
  "With smart recommendations, real-time booking, secure payments, and round-the-clock support, we ensure a hassle-free experience, making our experts your trusted partner for getting a service done efficiently.",
];
const cardDetails = [
  "Expert plumbing services for your home. Fast, affordable, and dependable solutions for repairs, maintenance, and installations. Satisfaction guaranteed!",
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="py-32 bg-gradient-to-r from-[#201039] to-[#0F1627] ">
        <div className="w-11/12 md:w-10/12 xl:w-8/12 2xl:w-9/12 flex lg:flex-row flex-col gap-6 mx-auto ">
          {/*Left Side*/}
          <div className="lg:w-5/12 order-2 lg:order-1">
            <div className="absolute bg-[#252525] w-[330px] shadow-md shadow-gray-900 rounded-lg duration-200 flex flex-col">
              <div className="">
                <Image
                  src="/plumber.png"
                  alt={`Plumbing image`}
                  className="w-full h-full object-cover rounded-t-lg"
                  width={900}
                  height={900}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="font-medium text-[#E3E3E3]">
                  Reliable Home Plumbing
                </div>
                <div className="text-sm text-[#A0A0A0] pt-7 pb-5">
                  {cardDetails}
                </div>
                <div className="flex justify-between items-center">
                  <div className=" text-[#E3E3E3]">
                    $40 <span className="text-sm text-[#A0A0A0]">/ hour</span>
                  </div>
                  <Link
                    href="#"
                    className="bg-[#2B3F6C] text-white p-2 px-5 rounded-[10px] shadow-md shadow-gray-800 hover:shadow-lg hover:shadow-gray-700 duration-200"
                  >
                    Chat now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*Right Side*/}
          <div className="lg:w-7/12 flex flex-col justify-center order-1 lg:order-2">
            <div className="text-4xl capitalize text-[#F4F4F4]">
              Why Choose Us?
            </div>
            <div className="py-7 text-[#D1CFCF]">{sectionDetails}</div>
            <div className="space-x-6 py-4">
              <Link
                className="bg-[#101010] text-[#F0F0F0] p-2 px-8 rounded-lg shadow-md shadow-gray-900 hover:shadow-gray-800 hover:shadow-lg duration-200"
                href="#"
              >
                Start Earning
              </Link>
              <Link className=" text-[#618AE4] hover:text-[#4b72c7] duration-200" href="#">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
