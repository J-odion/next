"use client";
import Image from "next/image";
import { useState } from "react";
import { LuMoveRight } from "react-icons/lu";


export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  
  return (
    <section className="flex flex-col justify-between items-center lg:items-center relative w-full py-[40px] lg:py-[96px] gap-[64px] bg-white">
      <div className="w-full z-50 flex flex-col justify-center  items-center gap-[42px]  lg:pl-[49px]">
        <div className="flex items-center align-middle  p-2 border text-[#344054] rounded-full justify-around w-[400px] ">
          <div className="flex  p-2 justify-center w-[110px] h-[24px] border rounded-full items-center gap-2">
            <div className="bg-[#EBF4FF] flex justify-center items-center w-[16px] h-[12px] relative rounded-full ">
              <div className=" w-[6px] h-[6px] justify-center items-center rounded-full bg-[#0073F5] "></div>
            </div>
            <p className="">Next App</p>
          </div>
          <p className="text-[14px] w-[177px] font-[400] flex justify-center items-center text-center text-[#8B8B8B]">
            AI Powered Cloud Banking
          </p>
          <LuMoveRight size={30} color="#8B8B8B" />
        </div>
        <h1 className="text-[40px] lg:text-[64px] text-[#1D1F1E] text-center leading-[44px] lg:leading-[72px] ">
          The easiest way to build financial
          <br /> products.
        </h1>
        <p className="text-[20px] px-4 leading-[26px] lg:w-[768px] font-[400] text-center mb-6 text-[#8B8B8B]">
          Get everything your Microfinance bank needs to succeed - powerful
          software that's secure, reliable, and made for Nigeria.
        </p>
        <div className="flex gap-9">
          <button className="border border-[#D0D5DD] w-[167px] h-[52px] text-[17px] font-[500] flex items-center gap-2 text-[#344054] px-6 py-2 rounded-full">
            Request Demo
          </button>
          <button className="bg-[#0073F5] w-[143px] h-[52px] text-[17px] font-[500] flex items-center gap-2 text-white px-6 py-2 rounded-full">
            Contact us
          </button>
        </div>
      </div>

      <div className="z-50">
        <p className="text-[20px]ont-bold leading-[26px] lg:w-[768px] font-[500] text-center mb-6 text-[#475467]">
          Our Partners
        </p>
        <div className=" w-full flex flex-col gap-6 lg:justify-between ">
          <div className="flex gap-2 lg:gap-6 justify-center items-center">
            <Image src="/assets/microbiz.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/vis.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/creditGo.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/crc.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/mono.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/verve.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <Image src="/assets/termil.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/dojah.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/easypay.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
            <Image src="/assets/prov.png" width={118} height={30} className=" w-[50px] lg:w-[118px] "/>
          </div>
        </div>
      </div>

      <Image
        src="/assets/heroBGg.png"
        width={100}
        height={100}
        className="w-full  object-contain   left-0  absolute bottom-0 z-0 "
      />
    </section>
  );
}
