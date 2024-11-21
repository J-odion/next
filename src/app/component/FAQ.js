import React from "react";
import FAQ from "./Accordion";
import Image from "next/image";

export default function FAQSection() {
  return (
    <section id="faq"  className="relative flex flex-col lg:flex-row pt-7 w-full   mx-auto justify-between mt-28">
      <div className="flex px-10 gap-8 flex-col lg:flex-row z-30 justify-center w-full lg:h-[616px] lg:justify-between">
        <div className="w-[30%] lg:w-[15%]">
          <p className="border border-[#8B8B8B] text-[#8B8B8B] w-[60%] p-1 text-center  rounded-full">
            FAQ
          </p>
        </div>
        <div className="w-full lg:w-[25%] flex flex-col gap-14">
          <p className="text-[36px] leading-[42px] lg:text-[34px] ">
            Answers to the frequently asked questions.
          </p>
          <div className="flex flex-col gap-6">
            <Image src="/assets/logo.png" width={140} height={38} />
            <div className=" flex flex-col ">
            <p className=" text-green-800 text-[20px] leading-[24px] font-semibold ">
              Still have questions?
            </p>
            <p className=" text-[#757575] text-[20px] leading-[24px]   ">
              For assistance, please send a message to our whatsapp{" "}
              <span className=" text-[#1D1F1E]  font-semibold ">
                <a href="https://wa.me/5521988391030">+55 21 988391030 </a>
              </span>{" "}
              or email us
              <span className=" text-[#1D1F1E]  font-semibold ">
                {" "}
                booking@albatross.live{" "}
              </span>{" "}
              <br/>
              Our dedicated team is ready to help you on your journey to explore
              new horizons.
            </p>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[35%]  z-10">
          <FAQ />
        </div>
      </div>

      <div className="w-full  lg:flex items-center z-0 absolute bottom-0  ">
        <Image
          src="/assets/FAQVector.png"
          width={380}
          height={480}
          className="w-full lg:h-[423px] "
        />
      </div>
    </section>
  );
}
