import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import currency from "../../../assets/currency.png";

const blogsData = Array(6).fill({
  title: "What is Bitcoin Mining",
  description:
    "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
  image: currency,
});

const Blogs = () => (
  <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
    <div className="container mx-auto lg:px-6 px-0">
      <div className="border border-[#8260b9] rounded-[22px] xl:p-12  py-10 px-6 space-y-4 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
        <button className="self-start px-[22px] bg-[#301881] py-[10px] rounded-lg text-[14px] font-semibold border border-[#8260b9] shadow-inset-custom leading-[17.07px]">
          <span className="common-btn-color">News</span>
        </button>
        <h3 className="lg:text-[46px] text-[35px] font-extrabold text-white leading-[56px]">
          Our Blog
        </h3>
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1199: { slidesPerView: 3, spaceBetween: 40 },
          }}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {blogsData.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={blog.image}
                  alt="currency"
                  className="w-full h-[240px] object-cover rounded-[12px]"
                />
                <button className="absolute top-4 left-4 text-[14px] leading-[17.07px] py-[10px] px-[22px] font-semibold rounded-[8px] bg-[#301881] shadow-inset-custom">
                  <span className="common-btn-color">Jan 15</span>
                </button>
                <h4 className="text-white text-[22px] font-bold mt-6 leading-[26.82px]">
                  {blog.title}
                </h4>
                <p className="text-white text-[17px] my-4 font-normal leading-[20.72px]">
                  {blog.description}
                </p>
                <button className="self-start py-[8px] px-[26px] rounded-xl text-[16px] font-medium  text-white border border-[#8260B9] blog-btn mt-2">
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);

export default Blogs;
