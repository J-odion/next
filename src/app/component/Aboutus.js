import Image from "next/image";

export default function Aboutus() {
  const steps = [
    {
      icon: "/assets/message-smile-circle.png",
      name: "Reliability you can trust",
      desc: "Designed for 99.9% uptime, our platform ensures your customers enjoy smooth, dependable banking services every time they interact with your Microfinance institution.",
    },
    {
      icon: "/assets/command.png",
      name: "Custom solution for Nigerian MFBs",
      desc: "Our comprehensive CBA platform is tailored to Nigeria's Microfinance ecosystem, helping you navigate local challenges across lending, savings, reporting, and customer service.",
    },
    {
      icon: "/assets/line-chart-up-03.png",
      name: "Scalability you can count on",
      desc: "Our flexible CBA scales seamlessly as your business grows, across locations, without compromising performance or user experience.",
    },
    {
      icon: "/assets/shield-tick.png",
      name: "Security at the heart of everything",
      desc: "Our secure CBA empowers Nigerian microfinance to serve customers with confidence. Advanced security, compliance, and tailored solutions cover all your banking needs.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full flex relative bg-[#0073F5] text-white py-[96px] gap-y-[64px] flex-col lg:flex-col "
    >
      <Image
        src="/assets/aboutbg1.png"
        width={150}
        height={150}
        className=" object-contain   right-0  absolute top-0 z-0 "
      />
      <div className="mx-auto lg:w-[60%] gap-6 ">
        <p className="text-[20px] leading-[26px] font-[500] text-center mb-6 text-[#7BF1FF]">
          About Us
        </p>
        <h2 className="text-[36px]   mb-4 text-center leading-[56px] font-[500]">
          About Next
        </h2>
        <p className="text-center px-6  text-[18px]  ">
          Our Core Banking Application is designed to meet the unique needs of
          Nigerian microfinance banks, empowering them to grow securely and
          adapt to the dynamic financial landscape.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" w-[302px] h-[372px] bg-[#ffffff] rounded-[16px] p-5 mx-auto flex flex-col gap-[64px] items-start  text-left "
            >
              <div className="bg-[#0073F5]  w-10 h-10 shadow-sm shadow-[rgba(16, 24, 40, 0.05)] rounded-md flex justify-center items-center">
                <Image src={step.icon} width={20} height={20} alt={step.name} />
              </div>

              <div className="h-[254px] gap-[8px] flex flex-col ">
                <p className="font-semibold text-[#101828] text-[20px]">
                  {step.name}
                </p>
                <p className="text-[#475467] text-[16px] mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/assets/aboutbg2.png"
        width={100}
        height={100}
        className="w-full  object-contain   left-0  absolute bottom-0 z-0 "
      />
    </section>
  );
}
