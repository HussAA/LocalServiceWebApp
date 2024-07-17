"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 w-11/12 mx-auto text-black">
      {/* Logo on the left */}
      <div className="flex items-center">
        <span className="text-2xl">Logo</span>
      </div>

      {/* Middle links */}
      <nav className="flex justify-center flex-1">
        <Link
          className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
          href="/"
        >Category</Link>
        <Link
          className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
          href="#"
        >How It Works</Link>
        <Link
          className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
          href="/"
        >Become A worker</Link>
      </nav>

      {/* Right side - Login/Signup */}
      <div className="flex items-center">
        <Link  className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md" href="/signup">
          Register
        </Link>
        <Link className="bg-[#252525] hover:bg-[#1b1b1b] hover:text-amber-200 text-[#F0F0F0] px-7 py-1 rounded-2xl duration-200" href="/login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
