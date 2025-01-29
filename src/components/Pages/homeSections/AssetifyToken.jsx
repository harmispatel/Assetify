import React from "react";
import rightIcon from "../../../assets/rightIcon.svg";
import astView from "../../../assets/AST.gif";

const utilityData = [
  {
    title: "Governance:",
    description: "Vote on key decisions and platform updates.",
  },
  {
    title: "Staking:",
    description: "Earn rewards for holding and staking $AST tokens.",
  },
  {
    title: "Transaction Fees:",
    description: "Use $AST for discounted transaction fees.",
  },
  {
    title: "Ecosystem Integration:",
    description: "Access premium AI-driven features and services.",
  },
];

const supplyMechanism = [
  {
    title: "Max Supply:",
    description: "1,000,000,000 $AST (1 Billion)",
  },
  {
    title: "Deflationary Pressure:",
    description:
      "A 1% Burn Tax Is Embedded Into The Token Contract, Reducing The Circulating Supply With Every Transaction And Creating Long-Term Scarcity. In Addition, Periodic Buyback-And-Burn Events Based On Platform Profits Will Sustain A Long Term Deflationary Effect.",
  },
];

const AssetifyToken = () => {
  const renderData = (data) =>
    data.map(({ title, description }, index) => (
      <div key={index} className="flex items-start gap-3">
        <img src={rightIcon} alt="" className="w-6 h-6" />
        <h5 className="lg:text-[16px] text-[15px] text-white font-normal lg:leading-[19.05px]">
          <span className="lg:text-[18px] font-medium">{title}</span>
          {description}
        </h5>
      </div>
    ));

  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="border border-[#8260b9] rounded-[22px] lg:p-10 p-4 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button className="self-start px-[22px] bg-[#301881] py-[10px] rounded-lg text-[14px] font-semibold border border-[#8260b9] shadow-inset-custom ">
              <span className="common-btn-color">Token</span>
            </button>
            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] lg:leading-[55px]">
              The Assetify Token ($AST)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-white lg:mb-6 mb-3">
                  Utility
                </h4>
                <div className="space-y-3 ml-4">{renderData(utilityData)}</div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white lg:mb-6 mb-3">
                  Supply Mechanism
                </h4>
                <div className="space-y-4 ml-4">
                  {renderData(supplyMechanism)}
                </div>
              </div>
            </div>

            <div className="border-t border-[#8260b9]"></div>

            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">
                Distribution Strategy
              </h4>
              <img src={astView} alt="AST Distribution" className="w-full" />
            </div>

            <div className="border-t border-[#8260b9] my-4"></div>

            <button className="self-start px-[32px] md:py-[15px] py-[12px] w-full md:w-auto rounded-xl text-[18px] font-semibold text-white border-[1.5px] border-[#8260b9] bg-diamond-gradient">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetifyToken;
