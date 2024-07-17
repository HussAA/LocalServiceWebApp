"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const cardItems = [
  { icon: "/happy.png", title: "Cleaning" },
  { icon: "/happy.png", title: "Home Repairs" },
  { icon: "/happy.png", title: "Yard Work" },
  { icon: "/happy.png", title: "Cleaning" },
  { icon: "/happy.png", title: "Home Repairs" },
  { icon: "/happy.png", title: "Yard Work" },
];

const Categories = () => {
  return (
    <>
      <div className="container w-11/12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-row justify-between border-b-2 border-gray-200">
          {/* Title Section */}
          <div className="relative">
            <div className="text-xl">Browse Categories</div>
            <div className="absolute top-[26px] left-0 w-1/4 border-b-4 border-orange-400" />
          </div>
          {/* Explore Link */}
          <Link href="#">Explore All</Link>
        </div>
        {/* Card */}
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <div className="flex flex-row space-x-4">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#d1dace48] shadow-md shadow-gray-400 rounded-lg p-4 w-36"
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
              </div>
            ))}
          </div>
        </main>
        {/* Card End */}
      </div>
    </>
  );
};

export default Categories;
