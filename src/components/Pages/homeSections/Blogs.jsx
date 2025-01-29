import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import currency from "../../../assets/currency.png";

const blogsData = [
  {
    id: 1,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
  {
    id: 2,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
  {
    id: 3,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
  {
    id: 4,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
  {
    id: 5,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
  {
    id: 6,
    title: "What is Bitcoin Mining",
    description:
      "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
    image: currency,
  },
];

const Blogs = () => {
  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="border border-[#8260b9] rounded-[22px] lg:p-10 p-4 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button
              className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
              style={{
                background: "linear-gradient(300deg, #200F56, #9747FF)",
                boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
              }}
            >
              News
            </button>
            <h3 className="lg:text-[46px] text-[35px] font-extrabold text-white leading-tight">
              Our Blog
            </h3>

            <div>
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
              >
                {blogsData.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div key={blog.id} className="relative">
                      <img
                        src={blog.image}
                        alt="currency"
                        className="w-[424px] h-[240px] object-cover rounded-[12px]"
                      />
                      <button
                        className="absolute top-4 left-4 text-white text-sm px-4 py-2 rounded-md"
                        style={{
                          background:
                            "linear-gradient(to right, #200F56 0%, #9747FF 100%)",
                          boxShadow:
                            "inset 6px 6px 24px 0px rgba(151, 71, 255, 0.7)",
                        }}
                      >
                        Jan 15
                      </button>
                      <h4 className="text-white text-[22px] font-bold mt-4">
                        {blog.title}
                      </h4>
                      <p className="text-white text-[17px] font-normal leading-5 mt-4 mb-5">
                        {blog.description}
                      </p>
                      <button
                        className="self-start px-6 py-2 rounded-lg text-[18px] font-medium text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                        style={{
                          background:
                            "linear-gradient(300deg, #200F56, #9747FF)",
                          boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
