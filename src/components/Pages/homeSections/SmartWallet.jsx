import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import aiImage1 from "../../../assets/Mask group (6).png";
import aiImage2 from "../../../assets/Mask group (1).png";
import aiImage3 from "../../../assets/Mask group (2).png";
import aiImage4 from "../../../assets/Mask group (3).png";
import rightGreenIcon from "../../../assets/rightGreen.svg";
import mobileGif from "../../../assets/Mobile Without White Space .gif";

const SmartWallet = () => {
  const roadMapSec = useRef(null);

  const aiDrivenData = [
    {
      title: "Real-World Asset Tokenization",
      description:
        "Trading of fractional shares of assets like real estate and commodities etc. to unlock global opportunities",
      image: aiImage1,
    },
    {
      title: "Smarter Investments",
      description:
        "To maximize returns, our AI provides personalized recommendations, predictive analytics and risk assessments.",
      image: aiImage2,
    },
    {
      title: "Passive Income Opportunities",
      description:
        "Earn through AI-optimized staking, yield farming, and liquidity management.",
      image: aiImage3,
    },
    {
      title: "Transparency and Trust",
      description:
        "Our platform is built on blockchain to provide a secure, transparent and auditable transaction process.",
      image: aiImage4,
    },
  ];

  return (
    <>
      <div className="bg-[#12032c] lg:pt-12 pt-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="relative border border-[#8260b9] rounded-[22px] lg:p-10 p-4 bg-[url('/src/assets/outline.png')] bg-cover bg-no-repeat before:absolute bg-fixed before:inset-0 before:bg-[#12032c] before:opacity-80 before:rounded-[22px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
                  <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                    Why Choose Assetify?
                  </span>
                </button>

                <h3 className="text-[26px] lg:text-[46px] font-extrabold text-white leading-tight">
                  AI-Driven Smart Wallet
                </h3>

                <div className="space-y-4 ml-4">
                  {[
                    {
                      title: "AI Security:",
                      description:
                        "Prevent fraud and secure transactions with advanced AI algorithms.",
                    },
                    {
                      title: "Social Login & Recovery:",
                      description:
                        "Simplified onboarding and recovery without seed phrases.",
                    },
                    {
                      title: "Cross-Chain Compatibility:",
                      description:
                        "The easy management of assets across several blockchains.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={rightGreenIcon} alt="" className="w-6 h-6" />
                      <h5 className="lg:text-[16px] text-[15px] text-white font-normal lg:leading-[19.05px]">
                        <span className="lg:text-[18px] font-medium">
                          {item.title}
                        </span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
                </div>

                <div className="lg:grid md:grid grid-cols-1 md:grid-cols-2 gap-4 hidden">
                  {aiDrivenData.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#8260b9] rounded-xl lg:p-6 p-4 bg-[#13042c] h-full flex flex-col gap-4"
                    >
                      <img
                        src={item?.image}
                        alt="Smart Wallet Demo"
                        className="w-10 h-10"
                      />

                      <h4 className="text-[22px] text-white font-semibold leading-[26 px]">
                        {item.title}
                      </h4>
                      <span className="text-[16px] text-white font-normal leading-[24px]">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="lg:hidden md:hidden">
                  <Swiper
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (roadMapSec.current = swiper)}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true, // Make dots clickable
                      el: ".custom-pagination", // Specify a custom class for pagination
                      type: "bullets", // Type of pagination, 'bullets' for dots
                      bulletClass: "custom-pagination-dot", // Custom class for each dot
                      bulletActiveClass: "custom-pagination-dot-active", // Custom active dot class
                    }}
                  >
                    {aiDrivenData.map((item, index) => (
                      <SwiperSlide key={index} className="road-map-slider">
                        <div
                          key={index}
                          className="border border-[#8260b9] rounded-xl lg:p-6 p-4 bg-[#13042c] h-full flex flex-col gap-4"
                        >
                          {/* <AlphaIcon className="w-10 h-10 text-white" /> */}
                          <img
                            src={item?.image}
                            alt="Smart Wallet Demo"
                            className="w-10 h-10"
                          />

                          <h4 className="text-[22px] text-white font-semibold leading-[26 px]">
                            {item.title}
                          </h4>
                          <span className="text-[16px] text-white font-normal leading-[24px]">
                            {item.description}
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="custom-pagination" />
                </div>
              </div>

              <div className="lg:col-span-5 text-center">
                <img
                  src={mobileGif}
                  alt="Smart Wallet Demo"
                  className="w-4/5 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartWallet;
