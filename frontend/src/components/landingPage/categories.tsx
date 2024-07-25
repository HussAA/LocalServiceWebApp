import Marquee from "react-fast-marquee";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const cardItems = [
  { icon: "/cleaning.png", title: "Cleaning" },
  { icon: "/house-repair.png", title: "Home Repairs" },
  { icon: "/mower.png", title: "Yard Work" },
  { icon: "/catering.png", title: "Catering" },
  { icon: "/moving.png", title: "Moving Help" },
  { icon: "/tools.png", title: "Assembly" },
  { icon: "/hairstyle.png", title: "Salon" },
  { icon: "/paint-roller.png", title: "Painting" },
  { icon: "/pressure-washer.png", title: "Pressure Wash" },
];

const Categories = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 2xl:w-8/12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-row justify-between border-b-2 pb-1 border-gray-200">
          {/* Title Section */}
          <div className="relative">
            <div className="text-xl">Browse Categories</div>
            <div className="absolute top-[30px] left-0 w-1/4 border-b-4 border-orange-400" />
          </div>
          {/* Explore Link */}
          <div className="">
            <Link href="#" className="flex items-center group">
              Explore All
              <span className="font-mono text-lg ml-2 transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
        {/* Card */}
        <Marquee
          speed={70}
          loop={0}
          gradient
          gradientColor="white"
          gradientWidth={10}
        >
          <div className="flex gap-5 ml-5 py-10 items-center">
            {cardItems.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="bg-[#d1dace48] shadow-md shadow-gray-400 rounded-lg p-4 py-7 w-44 min-w-48 hover:shadow-lg hover:shadow-gray-500 duration-200"
              >
                <div className="flex flex-col items-center">
                  <div className="text-orange-400 mb-4">
                    <Image
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  </div>
                  <div className="text-gray-700 text-center">
                    <p className="text-base">{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Marquee>
        {/* Card End */}
      </div>
    </>
  );
};

export default Categories;
