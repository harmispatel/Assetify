import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import analytics from "../../../assets/CryptoSider/analytics.png";
import blockChain from "../../../assets/CryptoSider/blockChain.png";
import blockOnomi from "../../../assets/CryptoSider/BlockOnomi.png";
import coinPedia from "../../../assets/CryptoSider/CoinPedia.png";
import cryptoDaily from "../../../assets/CryptoSider/cryptoDaily.png";
import finBold from "../../../assets/CryptoSider/finBold.png";
import newsBtc from "../../../assets/CryptoSider/newsBtc.png";
import theNewsCrypto from "../../../assets/CryptoSider/theNewsCrypto.png";

const mediaPartners = [
  {
    image: analytics,
  },
  {
    image: blockChain,
  },
  {
    image: blockOnomi,
  },
  {
    image: coinPedia,
  },
  {
    image: cryptoDaily,
  },
  {
    image: finBold,
  },
  {
    image: newsBtc,
  },
  {
    image: theNewsCrypto,
  },
];

const MediaPartners = () => {
  return (
    <>
      <div className="bg-[#12032C] media-partner-sec xl:pt-[60px]">
        <div className="bg-[url('/src/assets/media-partner-dots.png')] bg-no-repeat bg-cover bg-center">
          <div className="bg-[url('/src/assets/media-partner-bg.png')] bg-no-repeat bg-cover bg-center lg:py-10 py-[50px] font-montserrat">
            <div className="container mx-auto lg:px-20 px-4 flex flex-col justify-center items-center">
              <button className="px-[22px] py-[10px] rounded-lg font-semibold text-[14px] text-white bg-[#301881] border leading-[17.07px] border-[#8260b9] inner-shadow">
                <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                  Partners
                </span>
              </button>
              <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] leading-[55px] text-center lg:mt-[18px] lg:mb-[28px] my-4">
                Our Media Partners
              </h3>
              <div className="container mx-auto px-4">
                <div className="overflow-hidden">
                  <div className="mb-8">
                    <Swiper
                      modules={[Autoplay]}
                      speed={4000}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        767: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                      spaceBetween={20}
                      slidesPerView={4}
                      allowTouchMove={false}
                      loop={true}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                    >
                      {[...mediaPartners, ...mediaPartners].map(
                        (brand, index) => (
                          <SwiperSlide
                            key={`rtl-${index}`}
                            className="flex items-center justify-center"
                          >
                            <div className="relative group">
                              <img
                                src={brand.image}
                                className="transition-opacity duration-600 w-[250px]"
                              />
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPartners;
