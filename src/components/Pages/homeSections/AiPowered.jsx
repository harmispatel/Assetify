import React, { useState } from "react";
import bnb1 from "../../../assets/BNB.png";
import busd from "../../../assets/BUSD.png";
import eth from "../../../assets/ETH.png";
import usdt from "../../../assets/usdt.png";
import other from "../../../assets/othes.png";
import mesageBox from "../../../assets/MessageBox.png";
import inputGroup from "../../../assets/inputGroup.png";
import copyIcon from "../../../assets/image 15.png";
import solidProof from "../../../assets/solidProof1.png";

const radioItems = [
  { id: "radio_1", label: "BNB", imageSrc: bnb1 },
  { id: "radio_2", label: "BUSD", imageSrc: busd },
  { id: "radio_3", label: "ETH", imageSrc: eth },
  { id: "radio_4", label: "USDT", imageSrc: usdt },
  { id: "radio_5", label: "OTHER", imageSrc: other },
];

const AiPowered = () => {
  const [selectedRadio, setSelectedRadio] = useState("radio_1");

  return (
    <>
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center">
        <div className="container mx-auto lg:px-16 px-4">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="lg:text-7xl  text-5xl font-extrabold text-white leading-tight">
                <span className="text-[#6E45E9]">AI</span>-Powered DeFi for{" "}
                <span className="text-[#6E45E9]">Real-World Assets.</span>
              </h3>

              <p className="text-[18px] text-white lg:font-medium md:font-medium ">
                Simplifying investments with AI, tokenizing real-world assets
                for everyone - Powered By Assetify
              </p>

              <div className="lg:flex md:flex gap-4 items-center grid">
                <button className="self-start rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-[#301881]  px-6 py-4 inner-shadow text-white">
                  Join the Revolution
                </button>
                <button className="lg:self-start justify-center flex gap-3 rounded-[8px] font-semibold text-[16px] leading-[17.07px] border border-[#8260b9]  px-4 py-3 text-white">
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
            <div className="grid place-items-end">
              <div className="border border-[#8260b9] lg:w-[500px] text-white lg:p-6 p-4 rounded-2xl relative">
                <div>
                  <h4 className="text-[24px] font-extrabold text-center">
                    Join the Revolution:
                  </h4>
                  <h4 className="text-[24px] font-extrabold text-center">
                    Buy $AST Now!
                  </h4>
                </div>
                <div className="flex justify-between  rounded-[8px] font-semibold text-[14px] leading-[17.07px] mt-3 bg-[#301881]  px-6 py-3 inner-shadow text-white">
                  <h5>Current Stage: 1st</h5>
                  <h5>Price: $0.05</h5>
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
                          <span className="text-[18px] font-semibold uppercase flex items-center justify-center gap-3">
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

                <div className="grid mb-4 relative">
                  <label className="text-[16px] mb-1">Choose amount</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl"
                      placeholder="00"
                    />
                    <img
                      src={inputGroup}
                      className="w-5 h-5 absolute top-4 right-4"
                    />
                  </div>
                </div>

                <div className="grid mb-6 relative">
                  <label className="text-[16px] mb-1">$AST You Receive</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-[#8260b9] bg-[#13042C] w-full p-3 rounded-xl"
                      placeholder="0.00"
                    />
                    <img
                      src={inputGroup}
                      className="w-5 h-5 absolute top-4 right-4"
                    />
                  </div>
                </div>

                <div className="">
                  <button className="w-[100%] rounded-[8px] mb-3 font-semibold text-[16px] leading-[17.07px] bg-[#301881]  px-6 py-4 inner-shadow text-white">
                    Connect Wallet
                  </button>
                  <button className="w-[100%] rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-white text-[#0E0F23] border border-[#8260b9]  px-6 py-4">
                    Manual Payment
                  </button>
                  {/* <div className="py-[18px] px-[22px] bg-[#753DD1] inline-block font-semibold text-lg leading-[21.94px] rounded-tl-lg rounded-tr-lg w-auto absolute right-0 lg:bottom-[145px] md:bottom-[125px] bottom-[140px]">
                    <span className="flex items-center justify-center gap-3">
                      Leave a Message{" "}
                      <img src={mesageBox} className="w-5 h-5" />
                    </span>
                  </div> */}
                </div>
                <div className="mt-3 text-base font-normal leading-[19px] flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="w-6 h-6 cursor-pointer"
                    required
                  />
                  <span className="font-normal text-[16px] leading-[19.5px] text-[#D8D8D8]">
                    By making a transaction, you consent and agree to our Terms
                    and Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPowered;
