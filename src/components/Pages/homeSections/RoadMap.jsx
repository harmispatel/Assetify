import React, { useRef } from "react";
import roadMapLine from "../../../assets/Roadmap-Line.svg";
import rightIcon from "../../../assets/rightIcon.svg";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const RoadMap = () => {
  const roadMapSec = useRef(null);
  const RoadmapData = [
    {
      phase: "Phase 01",
      title: "Foundation (Q1 2025)",
      items: [
        "Do a comprehensive security audit on $AST token.",
        "Presale Launch: Make $AST tokens available to early supporters at a discount.",
        "Release the whitepaper and tokenomics.",
        "Build community channels and initiate airdrop campaigns.",
      ],
    },
    {
      phase: "Phase 02",
      title: "Early Development (Q2–Q3 2025)",
      items: [
        "Launch cross chain enabled AI powered Smart Wallet.",
        "Begin CEX listings and integrate fiat onramp services.",
        "Start mobile app development, and sign up for beta testers.",
      ],
    },
    {
      phase: "Phase 03",
      title: "Platform Rollout (Q4 2025)",
      items: [
        "Launch DeFi marketplace for lending and trading tokenized assets.",
        "Deploy advanced AI tools and release the mobile app.",
        "Execute global marketing campaigns to expand awareness.",
      ],
    },
    {
      phase: "Phase 04",
      title: "Expansion (Q1–Q2 2026)",
      items: [
        "Launch staking dApps, AI-driven copytrading bots, and the Assetify Launchpad.",
        "Conduct a third airdrop campaign to reward loyal users.",
      ],
    },
    {
      phase: "Phase 05",
      title: "Ecosystem Growth (Q3–Q4 2026)",
      items: [
        "Deploy advanced analytics dashboard for real-time insights.",
        "Establish DAO governance for community-driven decisions.",
      ],
    },
    {
      phase: "Phase 06",
      title: "Global Expansion (2027+)",
      items: [
        "Secure Tier 1 CEX listings to boost liquidity and accessibility.",
        "Launch large-scale PR campaigns and drive global adoption.",
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8">
          <div className="px-5 space-y-5  mb-6 xl:mb-0 lg:mb-6 md:mb-6 mt-6 xl:mt-0 lg:mt-6 md:mt-6">
            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] lg:leading-[55px] text-center lg:text-left md:text-left xl:text-left">
              Roadmap
            </h3>
          </div>
          <div className="bg-[#12032c]">
            <div className="container mx-auto px-5">
              <div className="xl:flex justify-center items-center py-5 hidden md:hidden">
                <img src={roadMapLine} alt="" />
              </div>

              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 40 },
                  1199: { slidesPerView: 3, spaceBetween: 20 },
                }}
                spaceBetween={20}
                slidesPerView={3}
                onSwiper={(swiper) => (roadMapSec.current = swiper)}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
              >
                {RoadmapData.map((phase, index) => (
                  <SwiperSlide key={index} className="road-map-slider">
                    <div key={index} className="relative h-full">
                      <div className="rounded-2xl lg:p-5 p-4 border border-[#8260b9] h-full">
                        <button className="self-start rounded-[8px] text-[14px] leading-[17.07px] bg-[#301881]  px-5 py-3 inner-shadow text-white">
                          {phase.phase}
                        </button>
                        <h3 className="text-white text-[22px] font-extrabold leading-[25px] my-5">
                          {phase?.title}
                        </h3>
                        <div className="space-y-4 px-4">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex gap-3">
                              <img src={rightIcon} alt="" className="w-6 h-6" />
                              <span className="text-white">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination my-4 lg:hidden md:hidden"></div>
              <div className="flex justify-between items-center mt-6">
                <button
                  className="self-start w-full md:w-auto md:px-5 md:py-3 px-[32px] py-[12px] rounded-xl lg:text-[18px] md:text-[18px] text-[16px] leading-[21px] font-medium text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                  style={{
                    background: "linear-gradient(300deg, #200F56, #9747FF)",
                    boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                  }}
                >
                  Explore the Roadmap
                </button>

                <div className="lg:flex md:flex lg:gap-4 md:gap-4 hidden">
                  <button
                    className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                    onClick={() => roadMapSec?.current?.slidePrev()}
                    style={{
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    <img src={leftArrow} alt="" className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                    onClick={() => roadMapSec?.current?.slideNext()}
                    style={{
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    <img src={rightArrow} alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
