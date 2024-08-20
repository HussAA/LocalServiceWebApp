"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { IconCircleArrowRight } from '@tabler/icons-react';
import { NavMenu } from "./navMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="w-11/12 md:w-10/12 2xl:w-8/12 flex justify-between items-center py-8 mx-auto text-black">
      {/* Logo on the left */}
      <div className="flex items-center">
        <span className="text-2xl">Logo</span>
      </div>

      {/* Middle links */}
      <span className="hidden lg:flex">
        <NavMenu />
      </span>

      {/* <nav className="hidden font-medium lg:flex lg:justify-center lg:flex-1">
          <Link
            className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
            href="/"
          >
            Category
          </Link>
          <Link
            className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
            href="#"
          >
            How It Works
          </Link>
          <Link
            className="text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md flex group"
            href="/"
          >
            Become A Worker
            <IconCircleArrowRight className="text-[#ce8a0c] w-8 transition-transform group-hover:translate-x-1 duration-200" stroke={1.5} />
          </Link>
        </nav> */}

      {/* Right side - Login/Signup */}
      <div className="flex items-center">
        <div className="hidden xs:flex items-center">
          <Link
            className="font-medium text-[#2F2E2E] hover:text-cyan-900 duration-200 px-3 py-2 rounded-md"
            href="/signup"
          >
            Register
          </Link>
          <Link
            className="bg-[#252525] hover:bg-[#1b1b1b] hover:shadow-gray-800 hover:shadow-md shadow shadow-gray-500 text-[#F0F0F0] px-7 py-1 rounded-2xl duration-200"
            href="/login"
          >
            Login
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden ml-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Hamburger
                color="#0c0c0c"
                distance="sm"
                size={25}
                toggled={isOpen}
                toggle={toggle}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Logo</SheetTitle>
                <hr/>
                <Link className="pb-2 pt-5" href='#'>All Services</Link>
                <Link className="pb-2" href='#'>Help & Support</Link>
                <Link className="pb-2" href='#'>How it Works</Link>
                <Link className="pb-2" href='#'>All Services</Link>
                <Link className="pb-6" href='#'>All Services</Link>
                <hr className="pb-10"/>
                <SheetDescription>Login to your profile</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value="HussainAlnakhli@example.com"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    value="***********"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Sign In</Button>
                </SheetClose>
              </SheetFooter>
              <div></div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
