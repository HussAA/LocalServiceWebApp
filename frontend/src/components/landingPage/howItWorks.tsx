import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { BiSolidCalendar } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import Image from "next/image";
const cards = [
  {
    icon: <RiSearch2Fill size={30} />,
    title: "Choose an Expert",
    description: "Find taskers quickly by searching for your desired service.",
    number: 1,
    bgColour: "bg-[#ffaa0010]",
    textColour: "text-[#ECA111]",
    borderColour: "border-[#ECA111]",
    bgCircleColour: "bg-[#ECA111]",
  },
  {
    icon: <BiSolidCalendar size={30} />,
    title: "Book With Ease",
    description:
      "Book your preferred expert instantly. Use real-time chat to discuss details and schedule.",
    number: 2,
    bgColour: "bg-[#AD00FF10]",
    textColour: "text-[#A952A3]",
    borderColour: "border-[#A952A3]",
    bgCircleColour: "bg-[#A952A3]",
  },
  {
    icon: <GiWallet size={30} />,
    title: "Track, Pay, & Review",
    description:
      "Pay securely through the app, and leave a review once the job is done.",
    number: 3,
    bgColour: "bg-[#00ff0d10]",
    textColour: "text-[#24670C]",
    borderColour: "border-[#24670C]",
    bgCircleColour: "bg-[#24670C]",
  },
];

const HowItWorks = () => {
  return (
    <div className="relative py-16">
      <div className="absolute h-full top-0">
        <Image
          
          src="/Modern - 1.svg"
          alt="Background"
          width={999}
          height={999}
          quality={100}
        />
        <Image
          className="lg:hidden"
          src="/Modern - 1.svg"
          alt="Background"
          width={999}
          height={999}
          quality={100}
        />
      </div>
      <div className="relative text-center w-11/12 md:w-10/12 2xl:w-8/12 mx-auto">
        <div className="uppercase text-lg mb-2">
          how it <span className="text-[#A952A3]">works</span>
        </div>
        <div className="capitalize text-4xl mb-8">
          Get started in 3 easy steps
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColour} flex flex-col max-w-[300px] z-10 mx-auto items-center p-8 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 duration-300 relative backdrop-blur-sm`}
            >
              <div className="pb-6 text-[#2B3F6C]">{card.icon}</div>
              <div className="text-xl font-semibold pb-6">{card.title}</div>
              <div className="text-gray-500 pb-20 h-40">{card.description}</div>
              <div className={`flex ${card.textColour}`}>
                <span className="text-xl font-bold">{card.number}</span>
                <div
                  className={`border-b-2 mb-3 w-52 ${card.borderColour} mx-2`}
                ></div>
                <div
                  className={`w-6 h-6 border-2 ${card.borderColour} rounded-full flex items-center justify-center`}
                >
                  <div
                    className={`w-2 h-2 ${card.bgCircleColour} rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
