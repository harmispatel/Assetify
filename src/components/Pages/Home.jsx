import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import copyIcon from "../../assets/image 15.png";
import solidProof from "../../assets/solidProof1.png";
import Dashboard1 from "../../assets/Dashboard 3D 1.png";
import bnb1 from "../../assets/BNB.png";
import busd from "../../assets/BUSD.png";
import eth from "../../assets/ETH.png";
import usdt from "../../assets/usdt.png";
import other from "../../assets/othes.png";
import mesageBox from "../../assets/MessageBox.png";
import inputGroup from "../../assets/inputGroup.png";
import rightIcon from "../../assets/rightIcon.svg";
import rightGreenIcon from "../../assets/rightGreen.svg";
import mobileGif from "../../assets/Mobile Without White Space .gif";
import aiImage1 from "../../assets/Mask group (6).png";
import aiImage2 from "../../assets/Mask group (1).png";
import aiImage3 from "../../assets/Mask group (2).png";
import aiImage4 from "../../assets/Mask group (3).png";
import aiImage5 from "../../assets/Mask group (4).png";
import aiImage6 from "../../assets/Mask group (5).png";
import currency from "../../assets/currency.png";
import howItWork from "../../assets/How It Works .gif";
import roadMapLine from "../../assets/Roadmap-Line.svg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import astView from "../../assets/AST.gif";
import analytics from "../../assets/CryptoSider/analytics.png";
import blockChain from "../../assets/CryptoSider/blockChain.png";
import blockOnomi from "../../assets/CryptoSider/BlockOnomi.png";
import coinPedia from "../../assets/CryptoSider/CoinPedia.png";
import cryptoDaily from "../../assets/CryptoSider/cryptoDaily.png";
import finBold from "../../assets/CryptoSider/finBold.png";
import newsBtc from "../../assets/CryptoSider/newsBtc.png";
import theNewsCrypto from "../../assets/CryptoSider/theNewsCrypto.png";
import { Minus, Plus, X } from "lucide-react";
import Navbar from "../Common/Navbar";
import BuildingSection from "./homeSections/BuildingSection";
import SmartWallet from "./homeSections/SmartWallet";
import MediaPartners from "./homeSections/MediaPartners";
import KeyFeature from "./homeSections/KeyFeature";
import AssetifyToken from "./homeSections/AssetifyToken";
import RoadMap from "./homeSections/RoadMap";
import HowItWork from "./homeSections/HowItWork";
import Blogs from "./homeSections/Blogs";
import Faqs from "./homeSections/Faqs";
import Footer from "../Common/Footer";
import AiPowered from "./homeSections/AiPowered"

const home = () => {
  const radioItems = [
    { id: "radio_1", label: "BNB", imageSrc: bnb1 },
    { id: "radio_2", label: "BUSD", imageSrc: busd },
    { id: "radio_3", label: "ETH", imageSrc: eth },
    { id: "radio_4", label: "USDT", imageSrc: usdt },
    { id: "radio_5", label: "OTHER", imageSrc: other },
  ];

  const aiDrivenData = [
    {
      title: "Real-World Asset Tokenization",
      description:
        "Trading of fractional shares of assets like real estate and commodities etc. to unlock global opportunities",
      image: aiImage1,
    },
    {
      title: "Smarter Investments",
      description:
        "To maximize returns, our AI provides personalized recommendations, predictive analytics and risk assessments.",
      image: aiImage2,
    },
    {
      title: "Passive Income Opportunities",
      description:
        "Earn through AI-optimized staking, yield farming, and liquidity management.",
      image: aiImage3,
    },
    {
      title: "Transparency and Trust",
      description:
        "Our platform is built on blockchain to provide a secure, transparent and auditable transaction process.",
      image: aiImage4,
    },
  ];

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

  const faqs = [
    {
      question: "What Is Assetify?",
      answer:
        "Assetify Is A DeFi Platform That Uses AI To Help With Smarter Investment, Trading, And Earning Options For Tokenized Real World Assets.",
    },
    {
      question: "What Is The Smart Wallet?",
      answer:
        "The Smart Wallet is a secure digital wallet that allows you to store, manage, and trade your digital assets with advanced AI-powered features for optimal portfolio management.",
    },
    {
      question: "Who Can Join The Presale?",
      answer:
        "Anyone can join the presale. We welcome both retail and institutional investors who are interested in being early adopters of our revolutionary DeFi platform.",
    },
    {
      question: "How Do I Buy $AST Tokens?",
      answer:
        "You can buy $AST tokens during our presale phase using ETH, USDT, or other supported cryptocurrencies through our secure presale platform.",
    },
  ];

  const RoadmapData = [
    {
      phase: "Phase 01",
      title: "Foundation (Q1 2025)",
      items: [
        "Do a comprehensive security audit on $AST token.",
        "Presale Launch: Make $AST tokens available to early supporters at a discount.",
        "Release the whitepaper and tokenomics.",
        "Build community channels and initiate airdrop campaigns.",
      ],
    },
    {
      phase: "Phase 02",
      title: "Early Development (Q2–Q3 2025)",
      items: [
        "Launch cross chain enabled AI powered Smart Wallet.",
        "Begin CEX listings and integrate fiat onramp services.",
        "Start mobile app development, and sign up for beta testers.",
      ],
    },
    {
      phase: "Phase 03",
      title: "Platform Rollout (Q4 2025)",
      items: [
        "Launch DeFi marketplace for lending and trading tokenized assets.",
        "Deploy advanced AI tools and release the mobile app.",
        "Execute global marketing campaigns to expand awareness.",
      ],
    },
    {
      phase: "Phase 04",
      title: "Expansion (Q1–Q2 2026)",
      items: [
        "Launch staking dApps, AI-driven copytrading bots, and the Assetify Launchpad.",
        "Conduct a third airdrop campaign to reward loyal users.",
      ],
    },
    {
      phase: "Phase 05",
      title: "Ecosystem Growth (Q3–Q4 2026)",
      items: [
        "Deploy advanced analytics dashboard for real-time insights.",
        "Establish DAO governance for community-driven decisions.",
      ],
    },
    {
      phase: "Phase 06",
      title: "Global Expansion (2027+)",
      items: [
        "Secure Tier 1 CEX listings to boost liquidity and accessibility.",
        "Launch large-scale PR campaigns and drive global adoption.",
      ],
    },
  ];

  const blogsData = [
    {
      id: 1,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
    {
      id: 2,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
    {
      id: 3,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
    {
      id: 4,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
    {
      id: 5,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
    {
      id: 6,
      title: "What is Bitcoin Mining",
      description:
        "Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia.....",
      image: currency,
    },
  ];

  const roadMapSec = useRef(null);
  const [selectedRadio, setSelectedRadio] = useState("radio_1");

  const mediaPartners = [
    {
      image: analytics,
    },
    {
      image: blockChain,
    },
    {
      image: blockOnomi,
    },
    {
      image: coinPedia,
    },
    {
      image: cryptoDaily,
    },
    {
      image: finBold,
    },
    {
      image: newsBtc,
    },
    {
      image: theNewsCrypto,
    },
  ];

  const [gap, setGap] = useState(1);

  useEffect(() => {
    const updateGap = () => {
      const isDesktop = window.innerWidth > 767.9;
      setGap(isDesktop ? 0.0285 * window.innerWidth : 15);
    };

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  const swiperProps = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: gap,
    speed: 4000,
    allowTouchMove: false,
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  };

  const [openIndex, setOpenIndex] = useState(0);

  function FAQItem({ question, answer, isOpen, onClick }) {
    return (
      <div className="lg:mb-4 mb-6">
        <div
          style={{
            background: isOpen
              ? "linear-gradient(180deg, #12032C 0%, #9747FF 253.6%)"
              : "",
          }}
          className="rounded-xl border border-[#8260B9] transition-all duration-300"
        >
          <button
            onClick={onClick}
            className="w-full text-left py-6 px-4 flex justify-between items-center"
          >
            <span className=" lg:text-[22px] lg:font-semibold  text-[18px] font-medium leading-[26.82px] text-white">
              {question}
            </span>
            {isOpen ? (
              <Minus className="text-white w-6 h-6 flex-shrink-0" />
            ) : (
              <Plus className="text-white w-6 h-6 flex-shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 font-normal text-base pb-6 text-white">
              {answer}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <Navbar />

      {/* AI-Powered DeFi Section */}
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

                <div class="w-full bg-[#3C295B] rounded-full mt-3">
                  <div class="bg-gradient-to-r from-[#9747FF] to-[#5E21C2] text-xs font-semibold text-blue-100 text-end p-2 leading-none rounded-full w-3/4">
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

      <BuildingSection />
      <SmartWallet />
      <MediaPartners />
      <KeyFeature />
      <AssetifyToken />
      <RoadMap />
      <HowItWork />
      <Blogs />
      <Faqs />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default home;
