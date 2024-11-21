import React from "react";
import CustomSlides from "./Carosel";
import { recommendations } from "../data/data";

export default function Recommendation() {
  return (
    <section id="recommended" className="py-7 w-full">
      <div className=" flex flex-col lg:flex-row gap-[64px] justify-between items-start my-8 w-[80%] lg:w-[90%] mx-auto">
        <div className="flex flex-col gap-2">
          <p className="text-[36px] lg:text-[36px] leading-[42px] lg:leading-[54px] font-[500]  ">
            Your complete banking toolkit.
          </p>
          <p className="lg:w-[700px] text-[20px] tetx-[#545454]">
            Integrated solutions designed to streamline product development from
            concept to launch.
          </p>
        </div>
        <button className="bg-[#0073F5] w-[143px] h-[44px] text-white text-[16px] font-semibold px-4 py-1 rounded-full">
          Contact Us
        </button>
      </div>
      <div className="mx-auto w-full flex">
        <CustomSlides recommendations={recommendations} />
      </div>
    </section>
  );
}
