import React from "react";
import { RiSearch2Fill } from "react-icons/ri";
import { BiSolidCalendar } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";

const cards = [
  {
    icon: <RiSearch2Fill size={30} />,
    title: "Choose an Expert",
    description: "Find taskers quickly by searching for your desired service.",
    bgColour: "bg-[#ffaa0010]",
  },
  {
    icon: <BiSolidCalendar size={30} />,
    title: "Schedule a Task",
    description:
      "Book your preferred expert instantly. Use real-time chat to discuss details and schedule.",
    bgColour: "bg-[#AD00FF10]",
  },
  {
    icon: <GiWallet size={30} />,
    title: "Get it Done",
    description:
      "Pay securely through the app, and leave a review once the job is done.",
    bgColour: "bg-[#00ff0d10]",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="w-11/12 mx-auto text-center">
        <div className="uppercase text-lg mb-2">
          how it <span className="text-[#A952A3]">works</span>
        </div>
        <div className="capitalize text-4xl mb-8">
          Get started in 3 easy steps
        </div>

        <div className="flex gap-16 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColour} flex flex-col items-center p-10 w-11/12 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 duration-300 relative`}
            >
              <div className="pb-6 text-[#2B3F6C]">{card.icon}</div>
              <div className="text-xl font-semibold pb-6">{card.title}</div>
              <div className="text-gray-500 pb-20">{card.description}</div>
              <div className="flex items-center justify-between text-[#F1A409]">
                <span className="text-lg font-bold">1</span>
                <div className="flex-grow border-t border-[#F1A409] mx-2"></div>
                <div className="w-6 h-6 border-2 border-[#F1A409] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#F1A409] rounded-full"></div>
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
