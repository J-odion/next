"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { menus } from "../data/data";

// components/Navbar.js
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex w-full  items-center p-6 bg-white ">
      <div className="flex w-full h-[60px] justify-between rounded-full border border-[#D0D5DD] items-center p-2 bg-white">
        <div className="flex w-full justify-between lg:justify-start pr-5 lg  items-center gap-4">
          <div className="text-xl font-bold">
            <Image src="/assets/logo.png" width={74} height={30} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            {menus.map((menu, index) => (
              <li className=" " key={index}>
                <a
                  href={menu.ref}
                  className=" py-[10px] px-[12px] hover:bg-[#F6F6F6] flex items-center rounded-full justify-center text-[14px] font-[500] leading-[21px] text-[#344054] "
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="border border-[#D0D5DD] text-[#344054]  w-[123px] h-[44px] text-[16px] font-semibold px-4 py-1 rounded-full">
            Contact Us
          </button>
          <button className="bg-[#0073F5] w-[143px] h-[44px] text-white text-[16px] font-semibold px-4 py-1 rounded-full">
            Request Demo
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-28 left-0 w-full bg-white px-[16px] shadow-md z-[9999] lg:hidden">
            <ul className="flex flex-col  justify-between space-y-4 py-[24px]">
              {menus.map((menu, index) => (
                <li className=" ">
                  <a
                    href={menu.ref}
                    className=" py-[10px] px-[12px] hover:bg-[#F6F6F6] flex   text-[14px] font-[500] leading-[21px] text-[#344054] "
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 mt-4">
                <button className="border border-[#0073F5] text-[#0073F5] px-4 py-3 text-sm rounded-full">
                  Contact Us
                </button>
                <button className="bg-[#0073F5] text-white px-4 py-3 text-sm rounded-full">
                  Request Demo
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
