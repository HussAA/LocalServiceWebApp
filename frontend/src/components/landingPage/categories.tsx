import Marquee from "react-fast-marquee";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const cardItems = [
  { icon: "/happy.png", title: "Cleaning" },
  { icon: "/happy.png", title: "Home Repairs" },
  { icon: "/happy.png", title: "Yard Work" },
  { icon: "/happy.png", title: "Cateringx" },
  { icon: "/happy.png", title: "Moving Help" },
  { icon: "/happy.png", title: "Furniture Assembly" },
  { icon: "/happy.png", title: "Event Planning" },
  { icon: "/happy.png", title: "Tutoring" },
  { icon: "/happy.png", title: "Pet Care" },
];

const Categories = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 2xl:w-9/12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-row justify-between border-b-2 pb-1 border-gray-200">
          {/* Title Section */}
          <div className="relative">
            <div className="text-xl">Browse Categories</div>
            <div className="absolute top-[30px] left-0 w-1/4 border-b-4 border-orange-400" />
          </div>
          {/* Explore Link */}
          <Link href="#">Explore All</Link>
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
              <Link
                href="#"
                key={index}
                className="bg-[#d1dace48] shadow-md shadow-gray-400 rounded-lg p-4 w-44 hover:shadow-lg hover:shadow-gray-500 duration-200"
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
