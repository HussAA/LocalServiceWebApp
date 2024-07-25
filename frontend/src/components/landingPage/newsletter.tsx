import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsletterProps {
  title: string;
  heading: string;
  policy: string;
}
const newsletterData: NewsletterProps = {
    title: "Subscribe to our newsletter to get updates to our latest collections",
    heading: "Get 15% off on your first order just by subscribing to our newsletter",
    policy: "You will be able to unsubscribe at any time. Read our privacy policy ",
  };
const Newsletter: React.FC = () => {
    const { title, heading, policy } = newsletterData;
  return (
    <div className="w-11/12 max-w-[1000px] flex flex-col md:flex-row max-h-[320px] mb-20 absolute left-1/2 transform -translate-x-1/2 md:-top-52 -top-28 mx-auto">
      <div className="rounded-[30px] bg-gradient-to-l from-[#ec9f1162] to-[#97d7b16b] flex flex-col md:flex-row md:items-stretch w-full">
        {/* Left side */}
        <div className="hidden md:block md:w-5/12 h-11/12">
          <Image
            src="/footer-image.png"
            alt="footer image"
            width={400}
            height={400}
            quality={100}
            className="rounded-xl object-contain h-full"
          />
        </div>
        {/* Right side */}
        <div className="md:w-7/12 w-full flex flex-col justify-center md:pr-6 p-5 space-y-3">
          {/* Title */}
          <div className="text-2xl font-semibold">{title}</div>
          {/* Heading */}
          <div className="text-sm text-gray-800">{heading}</div>
          {/* Search bar */}
          <div className="relative mb-4 flex items-center">
            <input
              type="text"
              className="w-full sm:w-11/12 lg:w-10/12 px-4 py-3 border bg-[#ac73002a] border-[#C6C2C2] rounded-full focus:outline-none focus:placeholder-opacity-30 placeholder-[#797272]"
              placeholder="Enter your email"
            />
            <button className="absolute lg:right-[95px] md:right-[46px] sm:right-[60px] right-[10px] bg-[#2B3F6C] text-[#F0F0F0] px-5 py-2 rounded-full hover:bg-[#172444] duration-200">
              Subscribe
            </button>
          </div>
          {/* Policy */}
          <div className="text-sm text-gray-800">
            {policy}
            <Link href="#" className="underline">
              here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
