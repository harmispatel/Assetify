import React, { useState, useEffect } from "react";
import bnb1 from "../../../assets/BNB.png";
import busd from "../../../assets/BUSD.png";
import eth from "../../../assets/ETH.png";
import usdt from "../../../assets/usdt.png";
import other from "../../../assets/othes.png";
import inputGroup from "../../../assets/inputGroup.png";
import copyIcon from "../../../assets/image 15.png";
import solidProof from "../../../assets/solidProof1.png";
import { X } from "lucide-react";
import closeIcon from "../../../assets/closeIcon.png";

const radioItems = [
  { id: "radio_1", label: "BNB", imageSrc: bnb1 },
  { id: "radio_2", label: "BUSD", imageSrc: busd },
  { id: "radio_3", label: "ETH", imageSrc: eth },
  { id: "radio_4", label: "USDT", imageSrc: usdt },
  { id: "radio_5", label: "OTHER", imageSrc: other },
];

const PowerdDefi = () => {
  const [selectedRadio, setSelectedRadio] = useState("radio_1");
  const [isMobile, setIsMobile] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleJoinRevolutionClick = () => {
    if (isMobile) {
      setShowGrid(!showGrid);
    }
  };

  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center">
        <div className="container mx-auto lg:px-16 px-4">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="lg:text-[71px]  text-5xl font-extrabold text-white lg:leading-[81px]  leading-tight">
                <span className="text-[#6E45E9]">AI</span>-Powered DeFi For{" "}
                <span className="text-[#6E45E9]">Real-World Assets.</span>
              </h3>

              <p className="text-[18px] text-white lg:font-medium md:font-medium leading-[21.94px]">
                Simplifying investments with AI, tokenizing real-world assets
                for everyone - Powered By Assetify
              </p>

              <div className="lg:flex md:flex gap-4 items-center grid">
                <button
                  className="self-start rounded-[12px] relative font-semibold text-[18px] leading-[21.94px] bg-[#301881] border-[1.5px] border-[#8260B9] blog-btn px-[32px] py-[15px] text-white"
                  onClick={handleJoinRevolutionClick}
                >
                  Join the Revolution
                </button>

                <button className="lg:self-start justify-center flex gap-3 rounded-[12px] font-semibold text-[18px] leading-[21.94px] border border-[#8260b9] bg-[#13042C]  px-[20px] py-[15px] text-white">
                  Read Whitepaper
                  <img
                    src={copyIcon}
                    alt="What We're Building"
                    className="w-5 h-5"
                  />
                </button>
              </div>

              <div className="flex justify-center lg:justify-start md:justify-start">
                <img
                  src={solidProof}
                  alt="What We're Building"
                  className="w-[230px] shadow-white-30 rounded-2xl"
                />
              </div>
            </div>
            {(!isMobile || showGrid) && (
              <div
                className={`grid place-items-end slide-up ${
                  showGrid ? "open" : ""
                }`}
              >
                <div
                  className={`lg:w-[500px] border-animation ${
                    showGrid ? "bg-transparent" : "#4a2881"
                  }`}
                >
                  <div
                    className={`border border-[#8260b9] ${
                      showGrid ? "bg-transparent" : "bg-[#4A2881]"
                    }  text-white lg:p-6 p-4 rounded-2xl relative backdrop-blur-[45px]`}
                  >
                    {showGrid && (
                      <div className="flex justify-end">
                        <img
                          src={closeIcon}
                          alt="close icon"
                          onClick={() => setShowGrid(!showGrid)}
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-[24px] font-extrabold text-center max-w-[300px] mx-auto leading-[29.26px]">
                        Join the Revolution: Buy $AST Now!
                      </h4>
                    </div>
                    <div className="flex justify-between  rounded-[8px] font-semibold text-[14px] leading-[17.07px] mt-3 bg-[#301881]  px-6 py-3 inner-shadow text-white">
                      <h5 className="common-btn-color">Current Stage: 1st</h5>
                      <h5 className="common-btn-color">Price: $0.05</h5>
                    </div>
                    <div className="flex justify-between mt-5">
                      <h5>Total Raised</h5>
                      <h5>7346573465.34 ATS</h5>
                    </div>
                    <div className="flex justify-between mt-1">
                      <h5>$3858385853.34</h5>
                      <h5>Remaining</h5>
                    </div>

                    <div className="w-full bg-[#3C295B] rounded-full mt-3">
                      <div className="bg-gradient-to-r from-[#9747FF] to-[#5E21C2] text-xs font-semibold text-blue-100 text-end p-2 leading-none rounded-full w-3/4">
                        74.59% Sold
                      </div>
                    </div>

                    <div className="grid my-4 currency">
                      <label>Choose Cryptocurrency</label>
                      <div className="flex w-full overflow-x-auto relative gap-3 no-scrollbar mt-3">
                        {radioItems.map((item, index) => (
                          <div key={item.id} className="relative">
                            <input
                              className="peer absolute opacity-0 w-full h-full cursor-pointer"
                              id={item.id}
                              type="radio"
                              name="radio"
                              checked={selectedRadio === item.id}
                              onChange={() => setSelectedRadio(item.id)}
                            />
                            <label
                              className="flex flex-col px-10 py-3 border border-[#8260B9] cursor-pointer bg-[#13042C] rounded-[12px] transition-all duration-200 hover:bg-[#2A0960] peer-checked:bg-[#2A0960] peer-checked:border-[1.5px] peer-checked:shadow-[inset_0px_0px_20px_2px_#9747ffb2]"
                              htmlFor={item.id}
                            >
                              <span className="text-[18px] font-semibold uppercase flex items-center justify-center gap-3 text-white leading-[21.94px]">
                                {item.label}
                                <img
                                  src={item.imageSrc}
                                  alt={item.label + "-img"}
                                  className="w-5 h-5"
                                />
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid mb-2 relative">
                      <label className="text-[16px] mb-1">Choose amount</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl text-[#FFF] placeholder-white placeholder:text-[15px]"
                          placeholder="00"
                        />
                        <img
                          src={inputGroup}
                          className="w-5 h-5 absolute top-4 right-4"
                        />
                      </div>
                    </div>

                    <div className="grid mb-6 relative">
                      <label className="text-[16px] mb-1">
                        $AST You Receive
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl placeholder-white placeholder:text-[15px]"
                          placeholder="0.00"
                        />
                        <img
                          src={inputGroup}
                          className="w-5 h-5 absolute top-4 right-4"
                        />
                      </div>
                    </div>

                    <div className="">
                      <button className="w-[100%] rounded-[12px] mb-3 font-semibold text-[16px] leading-[17.07px] bg-[#301881]  px-6 py-4 inner-shadow text-white border-[1.5px] border-[#8260B9]">
                        Connect Wallet
                      </button>
                      <button className="w-[100%] rounded-[12px] font-semibold text-[16px] leading-[17.07px] bg-white text-[#0E0F23] border-[1.5px] border-[#8260b9]  px-6 py-4">
                        Manual Payment
                      </button>
                      {/* <div className="py-[18px] px-[22px] bg-[#753DD1] inline-block font-semibold text-lg leading-[21.94px] rounded-tl-lg rounded-tr-lg w-auto absolute right-0 lg:bottom-[145px] md:bottom-[125px] bottom-[140px]">
                           <span className="flex items-center justify-center gap-3">
                             Leave a Message{" "}
                             <img src={mesageBox} className="w-5 h-5" />
                           </span>
                         </div> */}
                    </div>
                    <div className="csm-checkbox mt-5 text-base font-normal leading-[19px] flex items-start gap-2">
                      <input type="checkbox" id="html" />
                      <label for="html">
                        By making a transaction, you consent and agree to our
                        Terms and Conditions
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerdDefi;
