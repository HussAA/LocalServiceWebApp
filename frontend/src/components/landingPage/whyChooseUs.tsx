import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCircleArrowRight } from "@tabler/icons-react";

const sectionDetails = [
  "With smart recommendations, real-time booking, secure payments, and round-the-clock support, we ensure a hassle-free experience, making our experts your trusted partner for getting a service done efficiently.",
];
const cardDetails = [
  "Expert plumbing services for your home. Fast, affordable, and dependable solutions for repairs, maintenance, and installations. Satisfaction guaranteed!",
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="py-32 bg-gradient-to-r from-[#201039] to-[#0F1627] relative">
        <div className="w-11/12 md:w-10/12 2xl:w-8/12 flex lg:flex-row flex-col gap-6 mx-auto ">
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
                <p className="text-sm text-[#A0A0A0] pt-7 pb-5">
                  {cardDetails}
                </p>
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
            <div className="absolute 2xl:top-[29%] top-[32%] 2xl:left-[12%] left-[2%] z-50 hidden xl:block">
              <PayBanner />
            </div>
            <div className="absolute 2xl:top-[32%] top-[37%] 2xl:left-[30%] left-[24%] z-50 hidden xl:block">
              <TrustedBanner />
            </div>
            <div className="absolute 2xl:top-[78%] top-[72%] 2xl:left-[32%] left-[28%] z-50 hidden xl:block">
              <EasyBanner />
            </div>
          </div>

          {/*Right Side*/}
          <div className="lg:w-7/12 flex flex-col justify-center order-1 lg:order-2">
            <div className="text-4xl capitalize text-[#F4F4F4]">
              Why Choose Us?
            </div>
            <p className="py-7 text-[#D1CFCF]">{sectionDetails}</p>
            <div className="py-4 flex items-center">
              <Link
                className="group space-x-1 bg-[#101010] text-[#F0F0F0] text-nowrap mr-6 py-2 px-6 rounded-lg shadow shadow-gray-900 hover:shadow-gray-800 hover:shadow-md duration-200 flex max-w-[200px] justify-center items-center"
                href="#"
              >
                Start Earning
                <IconCircleArrowRight
                  className="text-[#ce8a0c] ml-1 transition-transform group-hover:translate-x-1 duration-200"
                  stroke={1.5}
                />
              </Link>
              <Link
                className=" text-[#618AE4] hover:text-[#4b72c7] duration-200"
                href="#"
              >
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

const PayBanner = () => {
  return (
    <>
      <div className="bg-[#efefefb9] w-[230px] h-[50px] shadow-md shadow-slate-900 backdrop-blur-lg rounded-[8px] text-black text-center text-lg border-0 flex items-center justify-center">
        Secure payments
      </div>
    </>
  );
};
const TrustedBanner = () => {
  return (
    <>
      <div className="bg-[#efefefb9] w-[230px] h-[50px] shadow-md shadow-slate-900 backdrop-blur-lg rounded-[8px] text-black text-center text-lg border-0 flex items-center justify-center">
        Trusted Experts
      </div>
    </>
  );
};
const EasyBanner = () => {
  return (
    <>
      <div className="bg-[#efefefb9] w-[230px] h-[50px] shadow-md shadow-slate-900 backdrop-blur-lg rounded-[8px] text-black text-center text-lg border-0 flex items-center justify-center">
        Easy Booking
      </div>
    </>
  );
};
