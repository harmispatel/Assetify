import React from "react";
import Dashboard1 from "../../../assets/Dashboard 3D 1.png";
import rightIcon from "../../../assets/rightIcon.svg";

const BuildingSection = () => {
  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full">
              <img
                src={Dashboard1}
                alt="What We're Building"
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-5">
              <button className="self-start rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-5 py-3 inner-shadow">
                <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                  About Assetify
                </span>
              </button>

              <h3 className="text-[28px] lg:text-[46px] lg:font-extrabold font-bold text-white lg:leading-[56.7px] leading-[34.13px]">
                What We're Building:
              </h3>

              <p className="lg:text-[16px] text-[14px] text-white font-normal lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
                Assetify Is A New Generation Decentralized Finance (DeFi)
                Platform That Combines The Power Of Blockchain And Artificial
                Intelligence (AI). On Our Platform, We Tokenize Real-World
                Assets Such As Real Estate, Gold and Invoices To Enable Users
                To:
              </p>

              <div className="space-y-4 ml-4">
                {[
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
                    description:
                      "through AI-optimized staking and yield farming",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={rightIcon} alt="" />
                    <h5 className="lg:text-[18px] text-[15px] text-white font-normal lg:leading-[27px] leading-[18.29px]">
                      <span className="font-medium">{item.title}</span>{" "}
                      {item.description}
                    </h5>
                  </div>
                ))}
              </div>

              <p className="lg:text-[16px] text-[14px] text-white font-normal lg:leading-[19.5px] leading-[17.07px] tracking-[0.9px]">
                We are launching a Smart Wallet powered by AI to offer the
                highest level of security, efficiency, and user friendly
                features. Our mission is to make decentralized finance
                accessible, transparent and profitable for everyone.
              </p>

              <button className="lg:self-start rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-8 py-4 inner-shadow text-white">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingSection;
