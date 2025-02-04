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
        <h5 className="text-white font-normal">
          <span className="lg:text-[18px] lg:leading-[21.94px] font-medium me-2">
            {title}
          </span>
          <span className="lg:text-[16px] lg:leading-[19.05px] font-normal">
            {description}
          </span>
        </h5>
      </div>
    ));

  return (
    <>
      <div className="bg-[#12032c] lg:pb-12 py-6 font-montserrat">
        <div className="container mx-auto xl:px-4 md:px-4">
          <div className="border border-[#8260b9] rounded-[22px] lg:p-[50px] py-[50px] px-[20px] shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button className="self-start px-[22px] bg-[#301881] py-[10px] rounded-lg text-[14px] font-semibold border border-[#8260b9] shadow-inset-custom mb-[18px]">
              <span className="common-btn-color">Token</span>
            </button>
            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] lg:leading-[55px] mb-[38px]">
              The Assetify Token ($AST)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-[1px] border-[#8260b9] pb-[28px] mb-[28px]">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-[16px]">
                  Utility
                </h4>
                <div className="space-y-[10px] ml-4 mb-[20px]">
                  {renderData(utilityData)}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white mb-[16px]">
                  Supply Mechanism
                </h4>
                <div className="space-y-[10px] ml-4 mb-[20px]">
                  {renderData(supplyMechanism)}
                </div>
              </div>
            </div>

            <div>
              <h4 className="lg:text-[24px] text-[20px] font-semibold text-white mb-6">
                Distribution Strategy
              </h4>
              <img
                src={astView}
                alt="AST Distribution"
                className="lg:w-[70%] mx-auto"
              />
            </div>

            <div className="border-t border-[#8260b9] my-[28px]"></div>

            <button className="self-start px-[32px] md:py-[15px] py-[12px] w-full md:w-auto rounded-xl text-[18px] font-semibold text-white leading-[21.94px] border-[1.5px] border-[#8260b9] bg-diamond-gradient">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetifyToken;
