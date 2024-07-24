import Marquee from "react-fast-marquee";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const cardItems = [
  { icon: "/plumber.png", title: "Cleaning" },
  { icon: "/plumber.png", title: "Home Repairs" },
  { icon: "/plumber.png", title: "Yard Work" },
  { icon: "/plumber.png", title: "Cateringx" },
  { icon: "/plumber.png", title: "Moving Help" },
  { icon: "/plumber.png", title: "Furniture Assembly" },
  { icon: "/plumber.png", title: "Event Planning" },
  { icon: "/plumber.png", title: "Tutoring" },
  { icon: "/plumber.png", title: "Pet Care" },
];

const PopularServices = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 2xl:w-8/12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-row justify-between border-b-2 pb-1 border-gray-200">
          {/* Title Section */}
          <div className="relative">
            <div className="text-xl">Popular Services</div>
            <div className="absolute top-[30px] left-0 w-1/4 border-b-4 border-orange-400" />
          </div>
          {/* Explore Link */}
          <Link href="#">See All</Link>
        </div>
        {/* Card */}
        <Marquee
          speed={70}
          loop={0}
          gradient
          gradientColor="white"
          gradientWidth={10}
        >
          <div className="flex gap-5 ml-5 py-10">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#d1dace48] shadow-md shadow-gray-400 rounded-lg duration-200 flex flex-col"
              >
                <div className="relative w-[290px] h-[180px]">
                  <Image
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="w-full h-full object-cover rounded-t-lg"
                    width={900}
                    height={900}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="font-medium mb-8">{item.title}</div>
                  <div className="flex justify-between items-center">
                    <div className=" text-gray-600">starting $120</div>
                    <Link
                      href="#"
                      className="bg-[#2B3F6C] text-white p-2 px-4 rounded-[10px] shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 duration-200"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        {/* Card End */}
      </div>
    </>
  );
};

export default PopularServices;
