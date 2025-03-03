import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import swipericon1 from "../../shared/assets/icons/swipericon1.svg";
import swipericon2 from "../../shared/assets/icons/swipericon2.svg";
import swipericon3 from "../../shared/assets/icons/swipericon3.svg";
import swiperImg1 from "../../shared/assets/images/swiperimg.png";

const slides = [
  { id: 1, title: "Temuriylar davri adabiyoti", image: swiperImg1 },
  { id: 2, title: "Temuriylar davri adabiyoti", image: swiperImg1 },
  { id: 3, title: "Temuriylar davri adabiyoti", image: swiperImg1 },
];

const SwiperCustom = () => {
  return (
    <div className="container1 py-10 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination", // Use custom pagination container
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-12 h-[3px] bg-white inline-block mx-1"></span>`;
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[346px] relative">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex flex-col justify-center text-left px-10 py-6 rounded-xl">
              {/* Icons Positioned */}
              <img
                className="z-1 absolute bottom-1 left-1"
                src={swipericon1}
                alt=""
              />
              <img
                className="z-10 absolute bottom-10 left-1/2"
                src={swipericon2}
                alt=""
              />
              <img
                className="z-10 absolute top-0 left-1/3"
                src={swipericon3}
                alt=""
              />

              {/* Background with Gradient */}
              <div
                className="absolute inset-0 bg-right bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(93deg, #263a3d 67.19%, rgba(25, 25, 25, 0) 100%), url(${slide.image})`,
                  backgroundPosition: "right",
                }}></div>

              {/* Title */}
              <h1 className="relative z-10 text-3xl sm:text-5xl font-light w-40 text-[#c4a380] tracking-wide font-['Great_Vibes']">
                {slide.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination Below Title */}
        <div className="custom-pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center space-x-2"></div>
      </Swiper>
      <div className="w-full  mt-20">
        <div className="flex flex-col items-center justify-center w-[80%] !rounded-3xl overflow-hidden  shadow-[0_4px_77px_0_rgba(0,0,0,0.95)] bg-[#191919] mx-auto  p-8">
          <div className="w-full max-w-5xl text-center mb-6">
            <h1 className="text-4xl  text-[#d4b98c] font-['Great_Vibes']">
              Qidirish
            </h1>
          </div>

          <div className="w-[90%] max-w-5xl flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className="flex-grow !outline-[#d4b98c]  !border-none !placeholder:text-gray-300 !rounded-xl py-3 px-5 !text-gray-300 !bg-[#404040] border-[#3a3a3a]  focus:border-[#4a90e2] hover:border-[#4a90e2]"
              style={{
                height: "50px",
                fontSize: "16px",
                boxShadow: "none",
              }}
            />

            <button className="py-3 px-10 flex items-center gap-2 bg-[#c9ac8c] rounded-2xl hover:bg-[#c9ac8ca2]">
              {" "}
              <SearchOutlined />
              <p>Izlash</p>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCustom;
