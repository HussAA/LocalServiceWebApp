'use client'
import React, { useState } from "react";
import Link from "next/link";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { DiAndroid } from "react-icons/di";

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number): void => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy", href: "#" },

      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "Email Our Team", href: "#" },
        { name: "General Call Line", href: "#" },
        { name: "Chat 24/7", href: "#" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-l from-[#ec9f112d] to-[#97d7b138] text-gray-800 py-16 pt-24">
        <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto flex flex-col md:flex-row lg:gap-12 gap-10">
          {/* Logo and Social Icons */}
          <div className="md:flex-1 lg:mr-32 md:mr-20">
            <div className="mb-6 text-2xl font-bold">Logo</div>
            <div className="mb-6 text-sm text-gray-600">
              A brief description about the company goes here.
            </div>
            <div className="flex space-x-4">
              <Link href="#">
                <FaLinkedin className="text-2xl hover:scale-125 text-blue-700 hover:text-blue-900 transition duration-200 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-2xl hover:scale-125 text-pink-500 hover:text-pink-700 transition duration-200 cursor-pointer" />
              </Link>
              <Link href="#">
                <FcGoogle className="text-2xl hover:scale-125 transition duration-200 cursor-pointer" />
              </Link>
              <Link href="#">
                <FaApple className="text-2xl hover:scale-125 text-gray-700 hover:text-gray-800 transition duration-200 cursor-pointer" />
              </Link>
              <Link href="#">
                <DiAndroid className="text-2xl hover:scale-125 text-green-600 hover:text-green-800 transition duration-200 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="md:flex-1">
              {/* Collapsible for md and under */}
              <div className="md:hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between w-full text-left font-semibold mb-4 text-lg md:text-base"
                >
                  {section.title}
                  <span className="text-2xl">
                    {openSection === index ? (
                      <MdExpandLess />
                    ) : (
                      <MdExpandMore />
                    )}
                  </span>
                </button>
                <ul
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSection === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link className="hover:underline text-gray-700" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Static section list for larger screens */}
              <div className="hidden md:block">
                <div className="font-semibold mb-4 text-lg md:text-base text-gray-800">
                  {section.title}
                </div>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link className="hover:underline text-gray-600 hover:text-gray-800 transition duration-200" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-gradient-to-l from-[#ec9f112d] to-[#97d7b138] border-t border-gray-300 py-5 text-gray-600 text-sm md:text-left text-center">
        <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">
          © Copyright by{" "}
          <Link
            className="underline hover:text-gray-800 transition duration-200"
            href="https://HussainAlnakhli.com"
          >
            Hussain Alnakhli
          </Link>
          . All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
