import Image from "next/image";
import FlowThree from "./FlowThree";
import { FaRightLong } from "react-icons/fa6";

export default function InfoTop() {
  return (
    <section id="offers" className=" w-full flex flex-col ">
      <div className="  bg-[#F9F9F9] p-6 lg:p-[96px] gap-y-[64px] w-full flex flex-col lg:flex-row justify-center items-center ">
        <FlowThree tag={'Microservices'} title={'Microservices: Your All-in-One Payment Solution'} desc={"Unlock a comprehensive suite of integrated financial services to streamline your business operations and unlock growth. From secure payments to digital banking, we've got you covered."} />
        <div className=" w-[576px] h-[540px] bg-white rounded-[27px] flex justify-center items-center">
          <Image
            src="/assets/NextDocs.png"
            width={350}
            height={316}
            alt={"Next app"}
            className=" object-cover  lg:w-full "
          />
        </div>
      </div>

      <div className="  bg-[white] p-6 lg:p-[96px] gap-[64px] w-full flex flex-col lg:flex-row justify-between items-center ">
        <div className="  h-[540px] bg-[#F9F9F9] rounded-[27px] p-[30px] flex flex-col justify-center items-center">
          <Image
            src="/assets/words.png"
            width={350}
            height={316}
            alt={"Next app"}
            className="  "
          />
          <p className="mb-[32px] text-justify mt-[20px] text-[#818181] text-[20px]">
            Unlock a comprehensive suite of integrated financial services to
            streamline your business operations and unlock growth. From secure
            payments to digital banking, we've got you covered.
          </p>
        </div>
        <div className="bg-white my-8">
          <div className="flex flex-col w-full justify-center items-center lg:items-start lg:justify-start   ">
            <Image
              src="/assets/brand.png"
              width={50}
              height={50}
              alt={"Next app"}
            />
            <p className="text-[16px] text-center lg:text-left mt-[32px] text-[#0073F5] leading-[24px]">
              Microservices
            </p>
            <h2 className=" mt-[20px] text-[#101828] text-center lg:text-left font-[600] text-[36px] leading-[44px] w-full lg:w-[584px]">
              Microservices: Your All-in-One Payment Solution
            </h2>
            <p className="mb-[32px] mt-[20px] text-[#818181] text-center lg:text-left text-[20px] w-full lg:w-[584px]">
              Unlock a comprehensive suite of integrated financial services to
              streamline your business operations and unlock growth. From secure
              payments to digital banking, we've got you covered.
            </p>
            <button className="bg-[#0073F5] flex w-[163px] justify-center gap-2 items-center h-[44px] text-white text-[16px] font-semibold px-4 py-1 rounded-full">
              Get Started
              <FaRightLong />
            </button>
          </div>
        </div>
      </div>

      <div className="  bg-white p-6 lg:p-[96px] gap-y-[64px] w-full flex flex-col lg:flex-row justify-center items-center ">
        <FlowThree tag={'Microservices'} title={'The only card you’ll ever need. Simple.' } desc={"Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business."} />
        <div className=" w-full lg:w-[576px] lg:p-[50px] h-[540px] rounded-[24px] bg-[#F9F9F9] flex justify-center items-center">
          <Image
            src="/assets/timeline.png"
            width={350}
            height={316}
            alt={"Next app"}
            className=" object-cover "
          />
        </div>
      </div>
    </section>
  );
}
