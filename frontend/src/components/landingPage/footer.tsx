import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const description = ["A brief description about the company goes here."];
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Status", href: "#" },
    { name: "Security", href: "#" },
  ];

  const usefulLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
    { name: "API", href: "#" },
    { name: "Download", href: "#" },
  ];

  const contactLinks = [
    { name: "Email", href: "#" },
    { name: "Phone", href: "#" },
    { name: "WhatsApp", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-l from-[#ec9f112d] to-[#97d7b138] text-black py-12 pt-24">
        <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto flex flex-col md:flex-row lg:gap-3 gap-10">
          {/* Logo and Social Icons */}
          <div className="md:flex-1 md:mr-16">
            <div className="mb-4 text-xl">Logo</div>
            <div className="mb-4 text-sm text-[#787878]">{description}</div>
            <div className="flex space-x-2 align-middle items-center">
              <Link href="#">
                <FaLinkedin className="text-xl cursor-pointer text-blue-700" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-xl cursor-pointer" />
              </Link>
              <Link href="#">
                <FcGoogle className="text-xl cursor-pointer" />
              </Link>
              <Link href="#">
                <FaApple className="text-xl cursor-pointer" />
              </Link>
              <Link href="#">
                <DiAndroid className="text-xl cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:flex-1">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:flex-1">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul>
              {supportLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:flex-1">
            <h4 className="font-semibold mb-4">Links</h4>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:flex-1">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul>
              {contactLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link className="hover:underline" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-gradient-to-l from-[#ec9f112d] to-[#97d7b138] border-t border-[#C0C0C0] py-5 text-[#454545] text-sm">
        <div className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto">© Copyright by <Link className="underline hover:text-blue-900 duration-200" href="https://HussainAlnakhli.com">Hussain Alnakhli</Link>.  All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
