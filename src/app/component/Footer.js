import Image from "next/image";
import { LuMail, LuMoveRight } from "react-icons/lu";

export default function FooterSection() {
  return (
    <section id="contact" className="relative pt-10 w-full bg-[#F9F9F9]">
      <div className="relative my-2  w-full  pt-10 bg-[] rounded-3xl flex flex-col justify-between items-center  mx-auto ">
        <div className="relative text-[#5C5C5C] flex flex-col justify-between w-full   h-full py-6 items-center z-10 ">
          <div className=" bg-[#0073F5] bg-cover bg-[url('/assets/subscribeBG.png')] flex flex-col lg:flex-row items-center justify-center lg:justify-between p-[48px] mx-auto w-[90%] lg:w-[1280px] rounded-[32px]">
            <h1 className=" lg:w-[411px] text-center lg:text-left gap-4 font-bold leading-[38px] lg:leading-[48px] text-white text-[30px] lg:text-[36px]">
              Sign up for our newsletter
            </h1>

            <div className="bg-[#122023] pl-4 lg:w-[474px] gap-6 p-2 mt-[32px] lg:h-[60px] rounded-[42px] flex flex-col lg:flex-row justify-between items-center ">
              <div className="flex items-center ">
                <LuMail color="white" size={24} />
                <input
                  placeholder="Enter you email"
                  className="text-[20px] flex-1 bg-transparent h-[54px] ml-2 outline-none leading-[24px] text-[#929899] font-normal  "
                />
              </div>
              <button className="text-[#132124] w-full lg:w-[132px] h-[54px] bg-[#F7F8FA] px-4 py-1 text-[16px] rounded-full">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative w-full mt-8 gap-6 px-14 backdrop-blur-sm ">
            {/* menus */}
            <div className=" z-50 flex flex-col lg:flex-row justify-between w-full text-[#5C5C5C] gap-8 ">
              {/* logo */}
              <div className=" z-50 flex lg:flex-1  gap-[34px] flex-col">
                <Image src="/assets/brand.png" width={40} height={38} />
                <div className="lg:w-[336px]">
                  <p className="text-[16px] leading-[20px] font-normal ">
                    Empowering Nigerian entrepreneurs and small businesses with
                    accessible financing solutions.
                  </p>

                  <p className="text-[16px] leading-[20px] my-[30px] font-normal ">
                    Address: 123 Main Street, Lagos, Nigeria
                  </p>

                  <p className="text-[16px] leading-[20px] font-normal ">
                    +2341234567890
                  </p>
                </div>
              </div>

              {/* menus and links */}
              <div className="flex w-full lg:w-[408px] justify-between z-50 flex-row">
                <div className=" flex w-full justify-between flex-row gap-x-16 ">
                  <div className="flex z-50  flex-col gap-[24px] ">
                    <p className=" text-lg font-semibold ">Resources</p>
                    <a
                      href="/"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      Home
                    </a>
                    <a
                      href="#about-us"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      About Us
                    </a>
                    <a
                      href="#services"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      Services
                    </a>
                    <a
                      href="#eligibility"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      Eligibility
                    </a>
                  </div>

                  <div className="flex flex-col gap-[24px] text-right">
                    <p className=" text-lg font-semibold ">Socials</p>
                    <a
                      href="https://www.instagram.com/travel.albatross"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      LinkenIn
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="text-[16px] leading-[20px] font-normal "
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="mt-16 relative ">
              <div className="z-50 flex flex-col lg:flex-row w-full justify-between text-[#5C5C5C] mt-8">
                <div className="flex justify-between lg:justify-start text-[#5C5C5C] gap-4">
                  <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                    Privacy Policy
                  </p>
                  <p className=" z-50 text-[16px] leading-[20px] font-normal ">
                    Terms and conditions
                  </p>
                </div>
                <p className="z-50 text-[16px] mt-8 lg:mt-0 leading-[20px] font-normal ">
                  © 2024 Next. All rights reserved.
                </p>
              </div>
              <Image
                src="/assets/footerBG.png"
                width={100}
                height={100}
                className="w-full object-cover absolute bottom-0 z-0 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
