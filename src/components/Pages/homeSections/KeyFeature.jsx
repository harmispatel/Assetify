import React from "react";
import aiImage1 from "../../../assets/Mask group (6).png";
import aiImage5 from "../../../assets/Mask group (4).png";
import aiImage6 from "../../../assets/Mask group (5).png";
import rightIcon from "../../../assets/rightIcon.svg";

const aiData = [
  {
    title: "AI-Powered Smart Wallet",
    description: [
      "Real-time fraud detection and prevention.",
      "Social login and seedless recovery for user convenience.",
      "Automated liquidity management and optimized yield strategies.",
      "Smart copy-trading to replicate successful trading patterns.",
    ],
    image: aiImage5,
  },
  {
    title: "Decentralized Finance Ecosystem",
    description: [
      "Borrowing and Lending: Use tokenized assets as collateral.",
      "Staking and Yield Farming: Maximize earnings with AI-optimized strategies.",
      "Decentralized Marketplace: Trade assets in a peer-to-peer network.",
    ],
    image: aiImage6,
  },
  {
    title: "Tokenization of Real-World Assets",
    description: [
      "Fractional ownership of high-value assets like real estate and gold.",
      "Blockchain-based tokens representing tangible assets.",
      "Global access to opportunities traditionally limited to the elite.",
    ],
    image: aiImage1,
  },
];

const KeyFeature = () => {
  return (
    <>
      <div className="bg-custom-image bg-no-repeat bg-cover bg-center lg:py-[100px] py-16 font-montserrat">
        <div className="container mx-auto lg:px-16 px-4">
          <button className="self-center px-[22px] py-[10px] rounded-[8px] font-semibold flex m-auto lg:ml-0 md:ml-0 text-[14px] leading-[17.07px] text-white bg-[#301881] border border-[#8260b9] inner-shadow">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
              Our Services
            </span>
          </button>

          <div className="lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center my-5">
            <h3 className="text-white lg:font-extrabold md:font-extrabold font-bold lg:text-[46px] text-[28px] lg:leading-[55px] md:leading-[40px] leading-[34.13px] text-center">
              Key Features
            </h3>
            <button className="lg:block md:block hidden self-start py-[15px] px-[32px] rounded-[12px] font-semibold text-[18px] leading-[21.94px] text-white bg-[#301881] border-[1.5px] border-[#8260b9] blog-btn">
              Buy Now
            </button>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3  gap-5">
              {aiData?.map((phase, index) => (
                <div key={index}>
                  <div
                    className={`rounded-xl lg:p-7 p-4 border border-[#8260B9] h-full bg-[#12032c] ${
                      index === 0
                        ? "shadow-[40px_40px_174px_0px_#9747FF24_inset]"
                        : ""
                    }`}
                  >
                    <img
                      src={phase?.image}
                      alt="Smart Wallet Demo"
                      className="w-10 h-10"
                    />
                    <h3 className="text-white text-[22px] font-semibold leading-[25px] my-7">
                      {phase?.title}
                    </h3>
                    <div className="space-y-[12px]">
                      {phase?.description?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-3">
                          <img src={rightIcon} alt="" className="w-6 h-6" />
                          <span className="text-white font-normal text-[16px] leading-[20px]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="lg:hidden md:hidden   self-start px-[32px] py-[12px] mt-6 w-full  rounded-lg font-semibold text-[18px] text-white bg-[#301881] border border-[#8260b9] inner-shadow">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
              Buy Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyFeature;
