import React from "react";
import howItWork from "../../../assets/how-it-works.gif";
import mobileHowItWork from "../../../assets/MobileHowIt.png";
import stepsImg from "../../../assets/Steps.png";

const steps = [
  {
    step: "Step 01",
    title: "Tokenize Assets:",
    description:
      "Real-world assets are converted into blockchain tokens representing ownership or value.",
  },
  {
    step: "Step 02",
    title: "Smart Wallet Features:",
    description:
      "AI-driven security, personalized insights, and automated strategies ensure seamless management.",
  },
  {
    step: "Step 03",
    title: "Earn and Trade:",
    description:
      "Users can trade tokenized assets, earn through staking, or borrow funds using assets as collateral.",
  },
];

const HowItWork = () => {
  return (
    <>
      <div className="bg-[#12032c] lg:py-12 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 xl:block md:block hidden">
              <div>
                <img src={howItWork} alt="currency" className="w-[90%] mx-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <div className="mb-12 mt-16 xl:mt-0 lg:mt-0 md:mt-0">
                <h3 className="text-white font-extrabold lg:text-[46px] xl:text-[46px] text-[28px] lg:leading-[55px] text-center lg:text-left md:text-left xl:text-left">
                  How It Works
                </h3>
                <div className="block xl:hidden md:hidden mt-10 xl:mt-0 lg:mt-0 md:mt-0">
                  <img
                    src={howItWork}
                    alt="currency"
                    className="w-4/5 mx-auto"
                  />
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 mt-3">
                  <img src={stepsImg} alt="step-image" className="w-full" />
                </div>

                <div>
                  {steps.map((step, index) => (
                    <div className="mb-[30px]" key={index}>
                      <button
                        className="self-start py-[10px] px-[22px] rounded-lg text-[14px] text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors leading-[17.07px] mb-[30px]"
                        style={{
                          background:
                            "linear-gradient(300deg, #200F56, #9747FF)",
                          boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                        }}
                      >
                        {step.step}
                      </button>
                      <h3 className="font-semibold text-[22px] leading-[26.82px] mb-[16px]">
                        {step.title}
                      </h3>
                      <p className="font-normal text-[16px] leading-[19.5px]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
