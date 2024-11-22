import Image from "next/image";
import React from "react";
import { FaRightLong } from "react-icons/fa6";

export default function FlowThree({ tag, title, desc, btn }) {
  return (
    <div className="flex relative flex-col gap-8 lg:justify-between items-start lg:flex-row w-full justify-around ">
      <div className="w-full lg:w-[584px] flex flex-col lg:gap-[32px] lg:flex-row justify-center lg:justify-start ">
        <div className="flex flex-col w-full justify-center items-center lg:items-start lg:justify-start  ">
          <Image
            src="/assets/brand.png"
            width={50}
            height={50}
            alt={"Next app"}
          />
          <p className="text-[16px] text-center lg:text-left mt-[32px] text-[#0073F5] leading-[24px]">
            {tag}
          </p>
          <h2 className=" mt-[20px] text-center lg:text-left text-[#101828] font-[600] text-[36px] leading-[44px]  lg:w-[584px]">
            {title}
          </h2>
          <p className="mb-[32px] mt-[20px] text-center lg:text-left text-[#818181] text-[20px] w-full lg:w-[584px]">
            {desc}
          </p>
          <button className="bg-[#0073F5] flex w-[163px] justify-center gap-2 items-center h-[44px] text-white text-[16px] font-semibold px-4 py-1 rounded-full">
            Contact Us
            <FaRightLong />
          </button>
        </div>
      </div>

      
    </div>
  );
}
