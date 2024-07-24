"use client";
import Image from "next/image";
import Link from "next/link";
import { IconCircleArrowRight } from '@tabler/icons-react';

const Hero = () => {
  return (
    <section className="pt-20">
      <div className="w-11/12 md:w-10/12 2xl:w-8/12 flex gap-4 flex-col lg:flex-row items-center mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-[55%]">
          {/* Banner */}
          <button className="cursor-default bg-gradient-to-r from-[#ec9f1162] to-[#97d7b144] text-black px-5 py-[2px] rounded-full mb-12 font-medium border border-gray-300">
            We can help you
          </button>

          {/* Title */}
          <h1 className="text-5xl mb-2">
            All Your <span className="text-[#A752A4]">Service <br/></span> Needs in
            One Place
          </h1>
          {/* Slogan */}
          <div className="text-[#5E5E5E] mb-4">
            Expert Care, Anytime, Anywhere
          </div>
          {/* Search Box */}
          <div className="mb-4 flex">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none"
              placeholder="What service do you need?"
            />
            <button className="bg-[#252525] text-[#F0F0F0] px-6 py-2 rounded-r-full hover:bg-[#1b1b1b] duration-200">
              Search
            </button>
          </div>
          {/* Popular Tags */}
          <div className="mb-12 flex flex-wrap items-center">
            <div className="text-[#5E5E5E] mr-1 text-sm font-medium">
              Popular:
            </div>
            <div className="">
              <span className="bg-[#dbdbdb] text-[#787575] px-3 py-1 rounded-full mr-1 mb-2 text-sm">
                Car Detailing
              </span>
              <span className="bg-[#dbdbdb] text-[#787575] px-3 py-1 rounded-full mr-1 mb-2 text-sm">
                Plumbing
              </span>
              <span className="bg-[#dbdbdb] text-[#787575] px-3 py-1 rounded-full mr-1 mb-2 text-sm">
                House Cleaning
              </span>
              <span className="bg-[#dbdbdb] text-[#787575] px-3 py-1 rounded-full mr-1 mb-2 text-sm">
                Moving
              </span>
            </div>
          </div>
          {/* Button and Link */}
          <div className="flex items-center">
            <Link
              href="#"
              className="bg-[#252525] text-[#F0F0F0] px-6 py-2 rounded-full mr-4 hover:bg-[#1b1b1b] duration-200 flex hover:shadow-gray-800 hover:shadow-md shadow shadow-gray-900"
            >
              Start earning
              <IconCircleArrowRight className="text-[#ce8a0c] w-8" stroke={1.5} />
            </Link>
            <Link href="#" className="hover:text-[#ce8a0c] duration-200">
              Learn More
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          {/*Hero Image*/}
          <Image
            src="/transparent-image.png"
            alt="Hero Image"
            width={480}
            height={480}
            className="rounded-md"
          />
        </div>
        {/*Stat Card*/}
        <div className="hidden lg:flex lg:flex-wrap items-center py-8 px-6 rounded-lg bg-gradient-to-l from-[#ec9f1162] to-[#97d7b16b] backdrop-blur-sm md:absolute top-[34%] right-[32%]">
          <div className="mr-2">
            <Image
              src="/happy.png"
              alt="stat card Image"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <div className="text-[30px] leading-6">
            +7800
            <br />
            <span className="text-base text-[#A60A00]">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
