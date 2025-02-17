import React from "react";
import Dashboard1 from "../../../assets/Dashboard 3D 1.png";
import rightIcon from "../../../assets/rightIcon.svg";

const features = [
  {
    title: "Invest",
    description: "in fractional ownership of valuable assets",
  },
  {
    title: "Borrow",
    description: "funds using tokenized assets as collateral",
  },
  {
    title: "Earn Passive Income",
    description: "through AI-optimized staking and yield farming",
  },
];

const BuildingSection = () => (
  <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat relative z-[1] overflow-hidden">
    <div className="container mx-auto xl:px-8 lg:px-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
        <img
          src={Dashboard1}
          alt="What We're Building"
          className="w-full rounded-lg"
        />

        <div className="flex flex-col gap-5 px-[6px] xl:px-[0] mb-[10px] xl:mb-[0]">
          <button className="self-start rounded-[8px] font-semibold text-[14px] leading-[17.07px] bg-[#301881] py-[10px] px-[22px] border border-[#8260B9] why-chhose-btn">
            <span className="common-btn-color">About Assetify</span>
          </button>

          <h3 className="text-[28px] lg:text-[46px] font-extrabold text-white lg:leading-[56.7px] leading-[34.13px]">
            What We're Building:
          </h3>

          <p className="lg:text-[16px] text-[14px] text-white lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
            Assetify is a next-gen decentralized finance (DeFi) platform
            combining blockchain and AI. We tokenize real-world assets like real
            estate, gold, and invoices to empower users to:
          </p>

          <div className="space-y-4 ml-4">
            {features.map(({ title, description }, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={rightIcon} alt="" />
                <h5 className="lg:text-[18px] text-[15px] text-white leading-[18.29px]">
                  <span className="font-medium">{title}</span> {description}
                </h5>
              </div>
            ))}
          </div>

          <p className="lg:text-[16px] text-[14px] text-white lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
            We're launching a Smart Wallet powered by AI for top-tier security
            and efficiency. Our mission is to make DeFi accessible, transparent,
            and profitable for everyone.
          </p>

          <button className="lg:self-start rounded-xl border-[1.5px]  border-[#8260B9]  font-semibold text-[18px] bg-[#301881] py-[15px] px-[32px] inner-shadow text-white leading-[21.94px] relative shadow-[0_0_0_4px_#12032c]">
            <div>Join Now</div>
            <div class="fancyoutline absolute -top-[6px] -left-[6px] -right-[6px] -bottom-[6px] rounded-[17px] -z-[1] after:absolute after:top-1/2 after:left-1/2 after:w-[20rem] after:h-[20rem] after:-z-[1]"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BuildingSection;
