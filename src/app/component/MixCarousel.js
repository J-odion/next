"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function MixCarousel({ recommendations }) {
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
      <div className="relative flex flex-col gap-[64px]">
        <Slider {...settings} ref={sliderRef}>
          {recommendations.map((place, index) => (
            <div key={index} className="px-2">
              <div
                style={{ backgroundImage: `url(${place.image})` }}
                className="relative w-[250px] md:w-[290px] flex flex-col  p-[18.08px] h-[300px] md:h-[400px]   bg-cover bg-center rounded-[31.58px] bg-white"
              >
                <div className="absolute inset-0 z-0 rounded-[31.58px] bg-black opacity-[16%]"></div>
                <div className="w-full z-10 flex flex-col justify-end h-full ">
                  <div className="flex  flex-col gap-[4px] ">
                    <h3 className="text-[29.3px] leading-[29.3px] text-white font-semibold">
                      {place.name}
                    </h3>
                    <p className="text-white text-[16px] leading-[29.3px] ">
                      {place.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[34px] justify-end ">
                    <p className="text-white text-[24px] self-end leading-[24.1px]">
                      {place.price}/{" "}
                      <span className="text-[15px] capitalize font-light">
                        {place.timeln}
                      </span>
                    </p>
                    <button className="bg-[#FFFFFF] w-full lg:w-[180px] self-end flex justify-center items-center gap-[10px] text-[16px] leading-[20px] z-10 text-[#1D1F1E] rounded-full px-[16px] py-[8px]">
                      Plan your trip{" "}
                      <FaArrowRightLong color="#1D1F1E" size={14} />
                    </button>
                  </div>
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

export default MixCarousel;
