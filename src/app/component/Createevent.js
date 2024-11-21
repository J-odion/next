import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import FlowThree from "./FlowThree";
import MixCarousel from "./MixCarousel";
import { Mixrecommendations } from "../data/data";

export default function Features() {
  const steps = [
    {
      icon: "/assets/message-smile-circle.png",
      name: "Loans",
      desc: "Create and manage diverse lending solutions with flexible terms and rates. From individual loans to group lending, with a loan management system.",
    },
    {
      icon: "/assets/command.png",
      name: "Risk Management Tools",
      desc: "Comprehensive risk assessment with automated credit scoring, guarantor tracking, and loan provisioning. Efficiently manage write-offs, refinancing, and loan rescheduling from one dashboard.",
    },
    {
      icon: "/assets/line-chart-up-03.png",
      name: "Customer Support & Communications",
      desc: "Our flexible CBA scales seamlessly as your business grows, across locations, without compromising performance or user experience.",
    },
    {
      icon: "/assets/message-smile-circle.png",
      name: "Client Management",
      desc: "Designed for 99.9% uptime, our platform ensures your customers enjoy smooth, dependable banking services every time they interact with your Microfinance institution.",
    },
    {
      icon: "/assets/command.png",
      name: "Accounting",
      desc: "Our comprehensive CBA platform is tailored to Nigeria's Microfinance ecosystem, helping you navigate local challenges across lending, savings, reporting, and customer service.",
    },
    {
      icon: "/assets/line-chart-up-03.png",
      name: "Security and Internal Control",
      desc: "Our flexible CBA scales seamlessly as your business grows, across locations, without compromising performance or user experience.",
    },
    {
      icon: "/assets/message-smile-circle.png",
      name: "Transactional Accounts",
      desc: "Designed for 99.9% uptime, our platform ensures your customers enjoy smooth, dependable banking services every time they interact with your Microfinance institution.",
    },
    {
      icon: "/assets/command.png",
      name: "Reporting",
      desc: "Our comprehensive CBA platform is tailored to Nigeria's Microfinance ecosystem, helping you navigate local challenges across lending, savings, reporting, and customer service.",
    },
    {
      icon: "/assets/line-chart-up-03.png",
      name: "Clean UI",
      desc: "Our flexible CBA scales seamlessly as your business grows, across locations, without compromising performance or user experience.",
    },
  ];
  return (
    <section id="how-it-works" className="w-full flex flex-col ">
      <div className="flex flex-col gap-8 lg:flex-row w-full justify-between "></div>
      <div className="w-full flex flex-col gap-[64px] px-10 py-[96px] ">
        <div className="mx-auto lg:w-[60%] gap-6 ">
          <p className="text-[20px] leading-[26px] font-[500] text-center mb-6 text-[#475467]">
            Features
          </p>
          <h2 className="text-[36px]  mb-4 text-center leading-[56px] font-[500]">
            All you need to run your finances effectively
          </h2>
          <p className="text-center text-[18px]  ">
            Our Core Banking Application is designed to meet the unique needs of
            Nigerian microfinance banks, empowering them to grow securely and
            adapt to the dynamic financial landscape.
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className=" w-[330px] border border-[#E5E7EA] rounded-[16px] p-4 mx-auto flex flex-col  items-start justify-start text-left "
              >
                <div className="bg-[#0073F5] border border-[#E5E7EA] w-10 h-10 shadow-sm shadow-[rgba(16, 24, 40, 0.05)] rounded-md flex justify-center items-center">
                  <Image
                    src={step.icon}
                    width={20}
                    height={20}
                    alt={step.name}
                  />
                </div>
                <p className="font-semibold text-[#1D1F1E] text-md mt-4">
                  {step.name}
                </p>
                <p className="text-[rgba(117, 117, 117, 1)] text-sm mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
