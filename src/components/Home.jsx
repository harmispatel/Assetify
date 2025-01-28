import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Logo from "../assets/logo.svg";
import copyIcon from "../assets/image 15.png";
import solidProof from "../assets/solidProof1.png";
import Dashboard1 from "../assets/Dashboard 3D 1.png";
import bnb1 from "../assets/BNB.png";
import busd from "../assets/BUSD.png";
import eth from "../assets/ETH.png";
import inputGroup from "../assets/inputGroup.png";
import rightIcon from "../assets/rightIcon.svg";
import rightGreenIcon from "../assets/rightGreen.svg";
import mobileGif from "../assets/AI-Driven Smart Wallet.gif";
import aiImage1 from "../assets/Mask group (6).png";
import aiImage2 from "../assets/Mask group (1).png";
import aiImage3 from "../assets/Mask group (2).png";
import aiImage4 from "../assets/Mask group (3).png";
import aiImage5 from "../assets/Mask group (4).png";
import aiImage6 from "../assets/Mask group (5).png";
import currency from "../assets/currency.png";
import howItWork from "../assets/how-it-works.gif";
import roadMapLine from "../assets/Roadmap-Line.svg";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import astView from "../assets/AST.gif";
import analytics from "../assets/CryptoSider/analytics.png";
import blockChain from "../assets/CryptoSider/blockChain.png";
import blockOnomi from "../assets/CryptoSider/BlockOnomi.png";
import coinPedia from "../assets/CryptoSider/CoinPedia.png";
import cryptoDaily from "../assets/CryptoSider/cryptoDaily.png";
import finBold from "../assets/CryptoSider/finBold.png";
import newsBtc from "../assets/CryptoSider/newsBtc.png";
import theNewsCrypto from "../assets/CryptoSider/theNewsCrypto.png";
import { Link } from "react-router";
import {
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
  FileText,
  Shield,
  FileSignature,
  Lock,
  Coins,
  Globe,
  Copy,
  Minus,
  Plus,
  Check,
  ChevronDown,
} from "lucide-react";

const home = () => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const dropdownButtonRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
    { code: "es", name: "Español", flag: "https://flagcdn.com/w40/es.png" },
    { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  ];

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

  useEffect(() => {
    if (isOpen && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Check if there's enough space to open the dropdown upwards
      setIsTop(spaceAbove > spaceBelow);
    }
  }, [isOpen]);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [openIndex, setOpenIndex] = useState(0);

  function FAQItem({ question, answer, isOpen, onClick }) {
    return (
      <div className="mb-4">
        <div
          className={`rounded-lg border border-[#8260B9] transition-all duration-300 ${
            isOpen ? "bg-[rgba(130,96,185,0.1)]" : ""
          }`}
        >
          <button
            onClick={onClick}
            className="w-full text-left p-6 flex justify-between items-center"
          >
            <span className="text-xl font-semibold leading-[27px] text-white">
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
      <section className="bg-[#6e45e9] text-white text-center py-3 font-montserrat">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          <p className="text-[14px] font-light tracking-[1px]">
            Use Special Key:
          </p>
          <h5 className="text-[14px] font-extrabold tracking-[1px]">
            QWH6329JG
          </h5>
          <button
            onClick={() => {
              navigator.clipboard.writeText("QWH6329JG");
              alert("Copied to clipboard!");
            }}
            className="flex items-center justify-center rounded "
          >
            <Copy className="w-4 h-4" />
          </button>
          <span className="text-[14px] font-normal tracking-[1px]">
            to receive 300% Bonus!
          </span>
        </div>
      </section>
      <header>
        <nav className="text-white bg-[#12032c] font-montserrat w-full z-20 top-0 left-0">
          <ul className="navigation max-w-[93vw] flex flex-wrap justify-between items-center relative mx-auto py-5">
            <Link to="/" className="logo" href="#">
              <img src={Logo} alt="" className="w-[134px] h-[34px]" />
            </Link>
            <span className="menu flex items-center [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out font-normal  text-lg">
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Why Us</Link>
              </li>
              <li>
                <Link href="#">Roadmap</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
              <li>
                <Link href="#">Token Allocation</Link>
              </li>
              <li>
                <Link href="#">Audits</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>

              <li>
                <button
                  className="self-start px-5 py-2 rounded-xl text-[16px]  text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                  style={{
                    background: "linear-gradient(300deg, #200F56, #9747FF)",
                    boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                  }}
                >
                  Connect Wallet
                </button>
              </li>
            </span>
          </ul>
        </nav>
      </header>

      {/* AI-Powered DeFi Section */}
      <div className="bg-[#12032c] lg:py-12 py-6 font-montserrat bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center">
        <div className="container mx-auto lg:px-16 px-4">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="lg:text-7xl  text-5xl font-extrabold text-white leading-tight">
                <span className="text-[#6E45E9]">AI</span>-Powered DeFi for{" "}
                <span className="text-[#6E45E9]">Real-World Assets.</span>
              </h3>

              <p className="text-[18px] text-white text-justify">
                Simplifying investments with AI, tokenizing real-world assets
                for everyone - Powered By Assetify
              </p>

              <div className="lg:flex gap-4 items-center grid">
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
              <img
                src={solidProof}
                alt="What We're Building"
                className="w-[230px] shadow-white-30 rounded-2xl"
              />
            </div>
            <div className="grid place-items-end">
              <div className="border border-[#8260b9] lg:w-[500px] text-white lg:p-6 p-4 rounded-2xl">
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
                  <div class="flex w-full overflow-x-auto relative gap-3 no-scrollbar mt-3">
                    <div>
                      <input
                        class="hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        checked
                      />
                      <label
                        class="flex flex-col px-10 py-3 border-2 border-[#8260B9] cursor-pointer bg-[#13042C] rounded-xl"
                        for="radio_1"
                      >
                        <span class="text-lg font-semibold uppercase flex items-center justify-center gap-3">
                          BNB <img src={bnb1} alt="bnb-img" />
                        </span>
                      </label>
                    </div>
                    <div>
                      <input
                        class="hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                      />
                      <label
                        class="flex flex-col px-10 py-3 border-2 border-[#8260B9] cursor-pointer bg-[#13042C] rounded-xl"
                        for="radio_2"
                      >
                        <span class="text-lg font-semibold uppercase flex items-center justify-center gap-3">
                          BUSD <img src={busd} alt="bnb-img" />
                        </span>
                      </label>
                    </div>
                    <div>
                      <input
                        class="hidden"
                        id="radio_3"
                        type="radio"
                        name="radio"
                      />
                      <label
                        class="flex flex-col px-10 py-3 border-2 border-[#8260B9] cursor-pointer bg-[#13042C] rounded-xl"
                        for="radio_3"
                      >
                        <span class="text-lg font-semibold uppercase flex items-center justify-center gap-3">
                          ETH <img src={eth} alt="bnb-img" />
                        </span>
                      </label>
                    </div>
                    <div>
                      <input
                        class="hidden"
                        id="radio_3"
                        type="radio"
                        name="radio"
                      />
                      <label
                        class="flex flex-col px-10 py-3 border-2 border-[#8260B9] cursor-pointer bg-[#13042C] rounded-xl"
                        for="radio_3"
                      >
                        <span class="text-lg font-semibold uppercase flex items-center justify-center gap-3">
                          ETH <img src={bnb1} alt="bnb-img" />
                        </span>
                      </label>
                    </div>
                    <div>
                      <input
                        class="hidden"
                        id="radio_3"
                        type="radio"
                        name="radio"
                      />
                      <label
                        class="flex flex-col px-10 py-3 border-2 border-[#8260B9] cursor-pointer bg-[#13042C] rounded-xl"
                        for="radio_3"
                      >
                        <span class="text-lg font-semibold uppercase flex items-center justify-center gap-3">
                          ETH <img src={bnb1} alt="bnb-img" />
                        </span>
                      </label>
                    </div>
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

                <button className="w-[100%] rounded-[8px] mb-3 font-semibold text-[16px] leading-[17.07px] bg-[#301881]  px-6 py-4 inner-shadow text-white">
                  Connect Wallet
                </button>
                <button className="w-[100%] rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-white text-[#0E0F23] border border-[#8260b9]  px-6 py-4">
                  Manual Payment
                </button>
                <div className="mt-3 text-base font-normal leading-[19px] flex items-start gap-2">
                  <input type="checkbox" className="w-6 h-6" required />
                  <span>
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

              <h3 className="text-[26px] lg:text-[46px] font-extrabold text-white leading-tight">
                What We're Building:
              </h3>

              <p className="text-[16px] text-white text-justify">
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
                    <h5 className="text-lg text-white">
                      <span className="font-medium">{item.title}</span>{" "}
                      {item.description}
                    </h5>
                  </div>
                ))}
              </div>

              <p className="text-[16px] text-white text-justify">
                We are launching a Smart Wallet powered by AI to offer the
                highest level of security, efficiency, and user friendly
                features. Our mission is to make decentralized finance
                accessible, transparent and profitable for everyone.
              </p>

              <button className="self-start rounded-[8px] font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-8 py-4 inner-shadow text-white">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Wallet Section */}
      <div className="bg-[#12032c] lg:pt-12 pt-6 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="relative border border-[#8260b9] rounded-[22px] lg:p-10 p-4 bg-[url('/src/assets/outline.png')] bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-[#12032c] before:opacity-80 before:rounded-[22px]">
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
                      <h5 className="text-lg text-white">
                        <span className="font-medium">{item.title}</span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
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
                  ].map((item, index) => (
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
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src={mobileGif}
                  alt="Smart Wallet Demo"
                  className="w-full"
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
              <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] leading-[55px] text-center my-10">
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
      <div className="bg-custom-image bg-no-repeat bg-cover bg-center lg:py-12 py-6 font-montserrat">
        <div className="container mx-auto lg:px-20 px-4">
          <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
              Our Services
            </span>
          </button>
          <div className="flex justify-between items-center my-5">
            <h3 className="text-white font-extrabold lg:text-[46px] text-[28px] leading-[55px]">
              Key Features
            </h3>

            <div>
              <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] inner-shadow">
                <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E077FF] bg-clip-text text-transparent">
                  Buy Now
                </span>
              </button>
            </div>
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
                <div className="space-y-4 ml-4">
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
                      <h5 className="text-lg text-white">
                        <span className="font-medium">{item.title}</span>{" "}
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
                        "A 1% burn tax is embedded into the token contract, reducing the circulating supply with every transaction and creating long-term scarcity. In addition, periodic buyback-and-burn events based on platform profits will sustain a long term deflationary effect.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={rightIcon} alt="" className="w-6 h-6" />
                      <h5 className="text-lg text-white">
                        <span className="font-medium">{item.title}</span>{" "}
                        {item.description}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#8260b9] my-4"></div>

            <div className="distribution-section">
              <h4 className="text-2xl font-semibold text-white mb-6">
                Distribution Strategy
              </h4>
              <img src={astView} alt="AST Distribution" className="w-full" />
            </div>

            <div className="border-t border-[#8260b9] my-4"></div>

            <button
              className="self-start px-6 py-3 rounded-lg text-[18px] font-semibold text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
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

              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
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
                  ].map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 hidden lg:block"></div>

                      {/* Phase Card */}
                      <div className="rounded-2xl lg:p-5 p-4 border border-[#8260b9] h-full">
                        <button
                          className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                          style={{
                            background:
                              "linear-gradient(300deg, #200F56, #9747FF)",
                            boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                          }}
                        >
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
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    className="self-start lg:px-5 px-4 lg:py-3 py-2 rounded-lg lg:text-[18px] text-[14px] leading-[21px] font-semibold text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                    style={{
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    Explore the Roadmap
                  </button>

                  <div className="flex gap-4">
                    <button
                      className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                      style={{
                        background: "linear-gradient(300deg, #200F56, #9747FF)",
                        boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                      }}
                    >
                      <img src={leftArrow} alt="" className="w-6 h-6" />
                    </button>
                    <button
                      className="p-4 rounded-full bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
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
      </div>

      {/* How It Works Section */}
      <div className="bg-[#12032c] lg:py-12 font-montserrat">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <div>
                <img src={howItWork} alt="currency" className="w-full" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((blog) => (
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
                      background: "linear-gradient(300deg, #200F56, #9747FF)",
                      boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                    }}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#12032c]  lg:py-10 py-6 font-montserrat">
        <div className="container mx-auto lg:px-12 px-6">
          <div className="flex justify-between items-center">
            <button className="self-start rounded-lg font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-5 py-3 inner-shadow text-white">
              Faq
            </button>
          </div>
          <div className="lg:flex justify-between items-center my-6">
            <h3 className="lg:text-[46px] text-[25px] font-extrabold text-white leading-tight mb-6 lg:mb-0">
              Frequently Asked Questions
            </h3>

            <button className="self-start rounded-lg font-semibold text-[16px] leading-[17.07px] bg-[#301881] px-8 py-4 inner-shadow text-white">
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
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#12032c] lg:py-10 py-6 font-montserrat text-white">
        <div className="container mx-auto lg:px-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="logo" href="#">
              <img src={Logo} alt="" className="w-[134px] h-[34px]" />
            </Link>
            <p className="my-8 text-[16px]">
              Investments in digital assets carry risk. Please consult a
              financial advisor before investing.
            </p>
            <p className="text-[16px] mb-8">
              Copyright © 2025 Assetify.ai All Rights Reserved
            </p>

            <div className="relative inline-block text-left">
              <button
                ref={dropdownButtonRef}
                type="button"
                className="inline-flex items-center justify-between w-35 px-4 py-2.5 text-sm font-medium text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center">
                  <img
                    src={selectedLanguage.flag}
                    alt={`${selectedLanguage.name} flag`}
                    className="w-5 h-4 object-cover mr-2"
                  />
                  <span>{selectedLanguage.name}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  className={`absolute right-0 mt-2 w-35 bg-[#12032c] border border-[#FFFFFF] rounded-lg  focus:outline-none z-10 ${
                    isTop ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className={`${
                          selectedLanguage.code === language.code
                            ? "bg-gray-100 text-gray-900"
                            : "text-white"
                        } group flex items-center w-full px-4 py-2.5 text-sm hover:bg-gray-50 gap-1`}
                        onClick={() => {
                          setSelectedLanguage(language);
                          setIsOpen(false);
                        }}
                      >
                        <img
                          src={language.flag}
                          alt={`${language.name} flag`}
                          className="w-5 h-4 object-cover mr-2"
                        />
                        <span className="flex-grow text-left">
                          {language.name}
                        </span>
                        {selectedLanguage.code === language.code && (
                          <Check className="w-5 h5 text-indigo-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" /> Linkedin
              </li>
              <li className="flex items-center">
                <Twitter className="w-4 h-4 mr-2" /> Twitter
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" /> Discord
              </li>
              <li className="flex items-center">
                <Send className="w-4 h-4 mr-2" /> Telegram
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">
              Documentation
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileText className="w-4 h-4 mr-2" /> Whitepaper
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 mr-2" /> Security & Audits
              </li>
              <li className="flex items-center">
                <FileSignature className="w-4 h-4 mr-2" /> Terms And Conditions
              </li>
              <li className="flex items-center">
                <Lock className="w-4 h-4 mr-2" /> Privacy Policy
              </li>
              <li className="flex items-center">
                <Coins className="w-4 h-4 mr-2" /> Token Balance Checker
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default home;
