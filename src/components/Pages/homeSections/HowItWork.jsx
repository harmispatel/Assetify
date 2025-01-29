import React from "react";
import howItWork from "../../../assets/How It Works .gif";
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
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <div>
                <img src={howItWork} alt="currency" className="w-4/5 mx-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <div className="mb-12">
                <h3 className="text-white font-extrabold lg:text-[46px] text-[35px] lg:leading-[55px]">
                  How It Works
                </h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img src={stepsImg} alt="step-image" className="w-full" />
                </div>

                <div>
                  {steps.map((step, index) => (
                    <div className="lg:mb-8" key={index}>
                      <button
                        className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors mb-4"
                        style={{
                          background:
                            "linear-gradient(300deg, #200F56, #9747FF)",
                          boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                        }}
                      >
                        {step.step}
                      </button>
                      <h3 className="font-semibold text-[22px] leading-6">
                        {step.title}
                      </h3>
                      <p className="font-normal text-[16px] leading-[19px] lg:my-6 my-5">
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
