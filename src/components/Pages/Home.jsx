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
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";

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

      {/* What We're Building: Section */}
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

      {/* Smart Wallet Section */}
      <div className="bg-[#12032c] lg:pt-12 pt-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="relative border border-[#8260b9] rounded-[22px] lg:p-10 p-4 bg-[url('/src/assets/outline.png')] bg-cover bg-no-repeat before:absolute bg-fixed before:inset-0 before:bg-[#12032c] before:opacity-80 before:rounded-[22px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
                  <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                    Why Choose Assetify?
                  </span>
                </button>

                <h3 className="text-[26px] lg:text-[46px] font-extrabold text-white leading-tight">
                  AI-Driven Smart Wallet
                </h3>

                <div className="space-y-4 ml-4">
                  {[
                    {
                      title: "AI Security:",
                      description:
                        "Prevent fraud and secure transactions with advanced AI algorithms.",
                    },
                    {
                      title: "Social Login & Recovery:",
                      description:
                        "Simplified onboarding and recovery without seed phrases.",
                    },
                    {
                      title: "Cross-Chain Compatibility:",
                      description:
                        "The easy management of assets across several blockchains.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={rightGreenIcon} alt="" className="w-6 h-6" />
                      <h5 className="lg:text-[16px] text-[15px] text-white font-normal lg:leading-[19.05px]">
                        <span className="lg:text-[18px] font-medium">
                          {item.title}
                        </span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
                </div>

                <div className="lg:grid md:grid grid-cols-1 md:grid-cols-2 gap-4 hidden">
                  {aiDrivenData.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#8260b9] rounded-xl lg:p-6 p-4 bg-[#13042c] h-full flex flex-col gap-4"
                    >
                      <img
                        src={item?.image}
                        alt="Smart Wallet Demo"
                        className="w-10 h-10"
                      />

                      <h4 className="text-[22px] text-white font-semibold leading-[26 px]">
                        {item.title}
                      </h4>
                      <span className="text-[16px] text-white font-normal leading-[24px]">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="lg:hidden md:hidden">
                  <Swiper
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (roadMapSec.current = swiper)}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true, // Make dots clickable
                      el: ".custom-pagination", // Specify a custom class for pagination
                      type: "bullets", // Type of pagination, 'bullets' for dots
                      bulletClass: "custom-pagination-dot", // Custom class for each dot
                      bulletActiveClass: "custom-pagination-dot-active", // Custom active dot class
                    }}
                  >
                    {aiDrivenData.map((item, index) => (
                      <SwiperSlide key={index} className="road-map-slider">
                        <div
                          key={index}
                          className="border border-[#8260b9] rounded-xl lg:p-6 p-4 bg-[#13042c] h-full flex flex-col gap-4"
                        >
                          {/* <AlphaIcon className="w-10 h-10 text-white" /> */}
                          <img
                            src={item?.image}
                            alt="Smart Wallet Demo"
                            className="w-10 h-10"
                          />

                          <h4 className="text-[22px] text-white font-semibold leading-[26 px]">
                            {item.title}
                          </h4>
                          <span className="text-[16px] text-white font-normal leading-[24px]">
                            {item.description}
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="custom-pagination" />
                </div>
              </div>

              <div className="lg:col-span-5 text-center">
                <img
                  src={mobileGif}
                  alt="Smart Wallet Demo"
                  className="w-4/5 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Media Partners Section */}
      <div className="bg-[#12032C]">
        <div className="bg-[url('/src/assets/media-partner-dots.png')] bg-no-repeat bg-cover bg-center">
          <div className="bg-[url('/src/assets/media-partner-bg.png')] bg-no-repeat bg-cover bg-center lg:py-20 py-6 font-montserrat">
            <div className="container mx-auto lg:px-20 px-4 flex flex-col justify-center items-center">
              <button className="px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
                <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                  Partners
                </span>
              </button>
              <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] leading-[55px] text-center lg:my-10 my-4">
                Our Media Partners
              </h3>
              <div className="container mx-auto px-4">
                <div className="overflow-hidden">
                  <div className="mb-8">
                    <Swiper {...swiperProps}>
                      {[...mediaPartners, ...mediaPartners].map(
                        (brand, index) => (
                          <SwiperSlide
                            key={`rtl-${index}`}
                            className="relative items-center"
                          >
                            <div className="relative group">
                              <img
                                src={brand.image}
                                className="transition-opacity duration-600 w-[250px]"
                              />
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-custom-image bg-no-repeat bg-cover bg-center lg:py-12 py-16 font-montserrat">
        <div className="container mx-auto lg:px-20 px-4">
          <button className="self-center px-[22px] py-[10px] rounded-lg font-semibold flex m-auto lg:ml-0 md:ml-0 text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
              Our Services
            </span>
          </button>

          <div className="lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center my-5">
            <h3 className="text-white lg:font-extrabold md:font-extrabold font-bold lg:text-[46px] text-[28px] lg:leading-[55px] md:leading-[40px] leading-[34.13px] text-center">
              Key Features
            </h3>
            <button className="lg:block md:block hidden self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
              <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                Buy Now
              </span>
            </button>
          </div>
          <div className="">
            <div className="container mx-auto">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {[
                    {
                      title: "AI-Powered Smart Wallet",
                      items: [
                        "Real-time fraud detection and prevention.",
                        "Social login and seedless recovery for user convenience.",
                        "Automated liquidity management and optimized yield strategies.",
                        "Smart copy-trading to replicate successful trading patterns.",
                      ],
                      image: aiImage5,
                    },
                    {
                      title: "Decentralized Finance Ecosystem",
                      items: [
                        "Borrowing and Lending: Use tokenized assets as collateral.",
                        "Staking and Yield Farming: Maximize earnings with AI-optimized strategies.",
                        "Decentralized Marketplace: Trade assets in a peer-to-peer network.",
                      ],
                      image: aiImage6,
                    },
                    {
                      title: "Tokenization of Real-World Assets",
                      items: [
                        "Fractional ownership of high-value assets like real estate and gold.",
                        "Blockchain-based tokens representing tangible assets.",
                        "Global access to opportunities traditionally limited to the elite.",
                      ],
                      image: aiImage1,
                    },
                  ].map((phase, index) => (
                    <div key={index}>
                      <div className="rounded-xl lg:p-7 p-4 border border-[#8260B9] h-full bg-[#12032c]">
                        <img
                          src={phase?.image}
                          alt="Smart Wallet Demo"
                          className="w-10 h-10"
                        />
                        <h3 className="text-white text-[22px] font-semibold leading-[25px] my-7">
                          {phase?.title}
                        </h3>
                        <div className="space-y-4">
                          {phase.items.map((item, itemIndex) => (
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
            </div>
          </div>
          <button className="lg:hidden md:hidden w-full  self-start px-[32px] py-[12px] mt-6 w-full  rounded-lg font-semibold text-[18px] text-white bg-[#301881] border border-[#8260b9] inner-shadow">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
              Buy Now
            </span>
          </button>
        </div>
      </div>

      {/* The Assetify Token Section */}
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="border border-[#8260b9] rounded-[22px] lg:p-10 p-4 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button
              className="self-start px-5 py-2 rounded-lg text-[14px] font-semibold text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
              style={{
                background: "linear-gradient(300deg, #200F56, #9747FF)",
                boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
              }}
            >
              Token
            </button>

            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] lg:leading-[55px]">
              The Assetify Token ($AST)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-white lg:mb-6 mb-3">
                  Utility
                </h4>
                <div className="space-y-3 ml-4">
                  {[
                    {
                      title: "Governance:",
                      description:
                        "Vote on key decisions and platform updates.",
                    },
                    {
                      title: "Staking:",
                      description:
                        "Earn rewards for holding and staking $AST tokens.",
                    },
                    {
                      title: "Transaction Fees:",
                      description: "Use $AST for discounted transaction fees.",
                    },
                    {
                      title: "Ecosystem Integration:",
                      description:
                        "Access premium AI-driven features and services.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={rightIcon} alt="" className="w-6 h-6" />
                      <h5 className="lg:text-[16px] text-[15px] text-white font-normal lg:leading-[19.05px]">
                        <span className="lg:text-[18px] font-medium">
                          {item.title}
                        </span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-white lg:mb-6 mb-3">
                  Supply Mechanism
                </h4>
                <div className="space-y-4 ml-4">
                  {[
                    {
                      title: "Max Supply:",
                      description: "1,000,000,000 $AST (1 Billion)",
                    },
                    {
                      title: "Deflationary Pressure:",
                      description:
                        "A 1% Burn Tax Is Embedded Into The Token Contract, Reducing The Circulating Supply With Every Transaction And Creating Long-Term Scarcity. In Addition, Periodic Buyback-And-Burn Events Based On Platform Profits Will Sustain A Long Term Deflationary Effect.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={rightIcon} alt="" className="w-6 h-6" />
                      <h5 className="lg:text-[16px] text-[15px] text-white font-normal lg:leading-[19.05px] tracking-[1px]">
                        <span className="lg:text-[18px] font-medium">
                          {item.title}
                        </span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
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

            <button
              className="self-start px-[32px] md:py-[15px] py-[12px] w-full md:w-auto rounded-xl text-[18px] font-semibold text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
              style={{
                background: "linear-gradient(300deg, #200F56, #9747FF)",
                boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8">
          <div className="px-5 space-y-5">
            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] lg:leading-[55px]">
              Roadmap
            </h3>
          </div>
          <div className="bg-[#12032c]">
            <div className="container mx-auto px-5">
              <div className="flex justify-center items-center py-5">
                <img src={roadMapLine} alt="" />
              </div>

              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                slidesPerView={3}
                onSwiper={(swiper) => (roadMapSec.current = swiper)}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
              >
                {RoadmapData.map((phase, index) => (
                  <SwiperSlide key={index} className="road-map-slider">
                    <div key={index} className="relative h-full">
                      <div className="rounded-2xl lg:p-5 p-4 border border-[#8260b9] h-full">
                        <button className="self-start rounded-[8px] text-[14px] leading-[17.07px] bg-[#301881]  px-5 py-3 inner-shadow text-white">
                          {phase.phase}
                        </button>
                        <h3 className="text-white text-[22px] font-extrabold leading-[25px] my-5">
                          {phase?.title}
                        </h3>
                        <div className="space-y-4 px-4">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex gap-3">
                              <img src={rightIcon} alt="" className="w-6 h-6" />
                              <span className="text-white">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination my-4 lg:hidden md:hidden"></div>
              <div className="flex justify-between items-center mt-6">
                <button
                  className="self-start w-full md:w-auto md:px-5 md:py-3 px-[32px] py-[12px] rounded-xl lg:text-[18px] md:text-[18px] text-[16px] leading-[21px] font-medium text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                  style={{
                    background: "linear-gradient(300deg, #200F56, #9747FF)",
                    boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                  }}
                >
                  Explore the Roadmap
                </button>

                <div className="lg:flex md:flex lg:gap-4 md:gap-4 hidden">
                  <button
                    className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                    onClick={() => roadMapSec?.current?.slidePrev()}
                    style={{
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    <img src={leftArrow} alt="" className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                    onClick={() => roadMapSec?.current?.slideNext()}
                    style={{
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    <img src={rightArrow} alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
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
                  <svg
                    width="19"
                    height="379"
                    viewBox="0 0 19 379"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="9.5"
                      y1="10"
                      x2="9.5"
                      y2="369"
                      stroke="#6E45E9"
                      strokeDasharray="5 5"
                    />
                    <circle
                      cx="9.5"
                      cy="9.5"
                      r="9"
                      fill="#6E45E9"
                      stroke="#6E45E9"
                    />
                    <circle
                      cx="9.5"
                      cy="189.5"
                      r="9"
                      fill="white"
                      stroke="#6E45E9"
                    />
                    <circle
                      cx="9.5"
                      cy="369.5"
                      r="9"
                      fill="white"
                      stroke="#6E45E9"
                    />
                  </svg>
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

      {/* Our Blog Section */}
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="border border-[#8260b9] rounded-[22px] lg:p-10 p-4 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button
              className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
              style={{
                background: "linear-gradient(300deg, #200F56, #9747FF)",
                boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
              }}
            >
              News
            </button>
            <h3 className="lg:text-[46px] text-[35px] font-extrabold text-white leading-tight">
              Our Blog
            </h3>

            <div>
              <Swiper
                modules={[Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
              >
                {blogsData.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <div key={blog.id} className="relative">
                      <img
                        src={blog.image}
                        alt="currency"
                        className="w-[424px] h-[240px] object-cover rounded-[12px]"
                      />
                      <button
                        className="absolute top-4 left-4 text-white text-sm px-4 py-2 rounded-md"
                        style={{
                          background:
                            "linear-gradient(to right, #200F56 0%, #9747FF 100%)",
                          boxShadow:
                            "inset 6px 6px 24px 0px rgba(151, 71, 255, 0.7)",
                        }}
                      >
                        Jan 15
                      </button>
                      <h4 className="text-white text-[22px] font-bold mt-4">
                        {blog.title}
                      </h4>
                      <p className="text-white text-[17px] font-normal leading-5 mt-4 mb-5">
                        {blog.description}
                      </p>
                      <button
                        className="self-start px-6 py-2 rounded-lg text-[18px] font-medium text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                        style={{
                          background:
                            "linear-gradient(300deg, #200F56, #9747FF)",
                          boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#12032c]  lg:py-10 py-6 font-montserrat">
        <div className="container mx-auto lg:px-12 px-6">
          <div className="flex justify-center lg:justify-start md:justify-start">
            <button className="self-start rounded-lg font-semibold text-[16px] leading-[17.07px] bg-[#301881] py-[10px] px-[22px] inner-shadow text-white">
              Faqs
            </button>
          </div>
          <div className="lg:flex md:flex justify-between items-center my-6">
            <h3 className="lg:text-[46px] text-[28px] lg:font-extrabold font-bold text-white lg:leading-[56px] leading-[34.13px] lg:mb-0 md:mb-0 mb-6 text-center md:text-start">
              Frequently Asked Questions
            </h3>

            <button className="lg:block md:block hidden self-start rounded-lg font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-8 py-4 inner-shadow text-white">
              Buy Now
            </button>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
          <button className="lg:hidden md:hidden w-full mt-6 block lg:self-start rounded-lg font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-8 py-4 inner-shadow text-white">
            Buy Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default home;
