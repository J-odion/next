"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
  LuArrowUpRight,
  LuArrowUpRightSquare,
  LuCornerRightUp,
} from "react-icons/lu";
import Image from "next/image";

function CustomSlides({ recommendations }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for desktop
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800, // For other large screens
        settings: {
          slidesToShow: 4.2,
        },
      },
      {
        breakpoint: 1600, // For other large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300, // For other large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1240, // For medium screens (above tablet size)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1124, // For tablets
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 900, // For tablets
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 800, // For tablets
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 700, // For tablets
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <div className="container w-full mx-auto px-4">
      <div className="relative flex flex-col lg:gap-[64px]">
        <Slider {...settings} ref={sliderRef}>
          {recommendations.map((place, index) => (
            <div key={index} className="pl-8 md:pl-0 ">
              <div
                 style={{ backgroundImage: `url(${place.image})` }}
                className="relative w-[250px] md:w-[290px] gap-[8px] flex flex-col p-[18px] lg:p-[28.08px] justify-between h-[350px] md:h-[413.13px]  bg-cover bg-center rounded-[31.58px]   bg-white"
              >
                <div className="w-full z-10 flex flex-col justify-start h-full">
                  <Image src={place.icon} width={30} height={30} />
                </div>
                <div className="relative backdrop-blur-sm  h-[280px] ">
                  <div className="flex flex-col gap-[34px] ">
                    <p className="text-white text-[30px] leading-[38px] ">
                      {place.name}
                    </p>
                    <p className="text-white text-[18px] leading-[24.1px]">
                      {place.text}
                    </p>
                  </div>
                  <button className="bg-none w-full justify-start lg:w-[180px] flex items-center gap-[10px] text-[16px] leading-[20px] text-white rounded-full  py-[8px]">
                    Get Started
                    <LuArrowUpRight color="white" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom navigation buttons below the slider */}
        <div className="flex justify-start space-x-4 mt-4">
          <SamplePrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <SampleNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
}

const SampleNextArrow = ({ onClick }) => {
  return (
    <button
      className="border-[#E0E0E0] border bg-white  p-4 rounded-full"
      style={{ zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowRightLong color="#002418" size={20} />
    </button>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <button
      className="border-[#E0E0E0] border bg-white p-4 rounded-full"
      style={{ zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowLeftLong color="#002418" size={20} />
    </button>
  );
};

export default CustomSlides;
