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
import mobileGif from "../../../assets/mobile-final.png";

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
      <div className="bg-[#12032c] lg:pt-12 font-montserrat xl:px-[48px]">
        <div className="container mx-auto">
          <div className="smart_wallet overflow-hidden relative border-[0.5px] border-[#8260b9] rounded-[22px] bg-[url('/src/assets/outline.png')] bg-cover bg-no-repeat bg-fixed xl:p-[50px] px-[20px] py-[50px]">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col">
                <button className="self-start py-[10px] px-[22px] rounded-lg font-semibold text-[14px] text-white bg-[#301881] border border-[#8260b9] inner-shadow leading-[17.07px]">
                  <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                    Why Choose Assetify?
                  </span>
                </button>

                <h3 className="text-[26px] lg:text-[46px] font-extrabold text-white leading-tight my-[18px]">
                  AI-Driven Smart Wallet
                </h3>

                <div className="ml-4 mb-[28px]">
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
                    <div
                      key={index}
                      className="flex items-center gap-3 mb-[10px]"
                    >
                      <img src={rightGreenIcon} alt="" className="w-6 h-6" />
                      <h5 className="text-white font-normal">
                        <span className="lg:text-[18px] lg:leading-[21.94px] font-medium me-2">
                          {item?.title}
                        </span>
                        <span className="lg:text-[16px] lg:leading-[19.05px] font-normal">
                          {item?.description}
                        </span>
                      </h5>
                    </div>
                  ))}
                </div>

                <div className="lg:grid md:grid grid-cols-1 md:grid-cols-2 gap-[24px] hidden xl:max-w-[700px]">
                  {aiDrivenData.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#8260b9] rounded-xl lg:px-[20px] lg:py-[30px] p-4 bg-[#13042c] h-full flex flex-col"
                    >
                      <img
                        src={item?.image}
                        alt="Smart Wallet Demo"
                        className="w-10 h-10"
                      />

                      <h4 className="text-[22px] text-white font-semibold leading-[26.82px] mb-[16px] mt-[30px]">
                        {item.title}
                      </h4>
                      <span className="text-[16px] text-white font-normal leading-[19.5px]">
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
                      clickable: true,
                      el: ".custom-pagination",
                      type: "bullets",
                      bulletClass: "custom-pagination-dot",
                      bulletActiveClass: "custom-pagination-dot-active",
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

              <div className="lg:col-span-5 text-center xl:block md:block lg:block hidden">
                <img
                  src={mobileGif}
                  alt="Smart Wallet Demo"
                  className=" mx-auto floating"
                />
              </div>
              <button className="xl:hidden md:hidden lg:hidden block self-start px-[32px] md:py-[15px] py-[12px] w-full md:w-auto rounded-xl text-[18px] font-semibold text-white leading-[21.94px] border-[1.5px] border-[#8260b9] bg-diamond-gradient">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartWallet;
