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
import { IconCircleArrowRight } from '@tabler/icons-react';
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
        <nav className="hidden font-medium lg:flex lg:justify-center lg:flex-1">
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
        </nav>

        {/* Right side - Login/Signup */}
        <div className="hidden lg:flex items-center">
          <Link
            className="font-medium text-[#2F2E2E] hover:text-gray-600 px-3 py-2 rounded-md"
            href="/signup"
          >
            Register
          </Link>
          <Link
            className="bg-[#252525] hover:bg-[#1b1b1b] hover:text-amber-200 text-[#F0F0F0] px-7 py-1 rounded-2xl duration-200"
            href="/login"
          >
            Login
          </Link>
        </div>
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Hamburger color="#0c0c0c" distance="sm" size={25} toggled={isOpen} toggle={toggle} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
