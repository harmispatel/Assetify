import React, { useState } from "react";
import "./index.css";
import Logo from "../assets/logo.svg";
import Dashboard1 from "../assets/Dashboard 3D 1.png";
import rightIcon from "../assets/rightIcon.svg";
import rightGreenIcon from "../assets/rightGreen.svg";
import mobileGif from "../assets/mobile.gif";
import alphaSign from "../assets/alpha-sign.png";
import currency from "../assets/currency.png";
import howItWork from "../assets/how-it-works.gif";
import roadMapLine from "../assets/Roadmap-Line.svg";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import astView from "../assets/AST.gif";
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
} from "lucide-react";

const home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <>
      {/* Header Section */}
      <section className="bg-[#6e45e9] text-white text-center py-3 font-montserrat">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          <p className="text-sm sm:text-base">
            Use Special Key:{" "}
            <span className="font-bold ms-[15px] me-[35px]">QWH6529JG</span> to
            receive 300% Bonus!
          </p>
        </div>
      </section>
      <header>
        <nav className="text-white bg-[#12032c] font-montserrat w-full z-20 top-0 left-0">
          <ul className="navigation max-w-[93vw] flex flex-wrap justify-between items-center relative mx-auto py-5">
            <Link to="/" className="logo" href="#">
              <img src={Logo} alt="" className="w-[134px] h-[34px]" />
            </Link>
            <span className="menu flex items-center [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
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
                  className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
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

      {/* What We're Building: Section */}
      <div className="bg-[#12032c] py-12 font-montserrat">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full">
              <img
                src={Dashboard1}
                alt="What We're Building"
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-5">
              <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors">
                About Assetify
              </button>

              <h3 className="text-[30px] lg:text-[46px] font-extrabold text-white leading-tight">
                What We're Building:
              </h3>

              <p className="text-[16px] text-white">
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

              <p className="text-[16px] text-white">
                We are launching a Smart Wallet powered by AI to offer the
                highest level of security, efficiency, and user friendly
                features. Our mission is to make decentralized finance
                accessible, transparent and profitable for everyone.
              </p>

              <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Wallet Section */}
      <div className="bg-[#12032c] py-12 font-montserrat">
        <div className="container mx-auto px-8">
          <div className="relative border border-[#8260b9] rounded-[22px] p-10 bg-[url('/src/assets/outline.png')] bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-[#12032c] before:opacity-80 before:rounded-[22px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Content */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <button className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white bg-[#301881] border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors">
                  Why Choose Assetify?
                </button>

                <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
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
                    },
                    {
                      title: "Smarter Investments",
                      description:
                        "To maximize returns, our AI provides personalized recommendations, predictive analytics and risk assessments.",
                    },
                    {
                      title: "Passive Income Opportunities",
                      description:
                        "Earn through AI-optimized staking, yield farming, and liquidity management.",
                    },
                    {
                      title: "Transparency and Trust",
                      description:
                        "Our platform is built on blockchain to provide a secure, transparent and auditable transaction process.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#8260b9] rounded-xl p-6 bg-[#13042c] h-full flex flex-col gap-4"
                    >
                      {/* <AlphaIcon className="w-10 h-10 text-white" /> */}
                      <img
                        src={alphaSign}
                        alt="Smart Wallet Demo"
                        className="w-10 h-10"
                      />

                      <h4 className="text-xl font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="text-base text-white">
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

      {/* Key Features Section */}
      <div
        className="bg-[#12032c] py-12 font-montserrat"
        style={{
          backgroundImage: `
      url('/src/assets/Group 14.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top, center, bottom",
        }}
      >
        <div className="container mx-auto lg:px-20 px-10">
          <button
            className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
            style={{
              background: "linear-gradient(300deg, #200F56, #9747FF)",
              boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
            }}
          >
            Our Services
          </button>
          <div className="flex justify-between items-center my-5">
            <h3 className="text-white font-extrabold text-[46px] leading-[55px]">
              Key Features
            </h3>

            <div>
              <button
                className="self-start px-5 py-2 rounded-lg text-[14px] text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                style={{
                  background: "linear-gradient(300deg, #200F56, #9747FF)",
                  boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                }}
              >
                Buy Now
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
                    },
                    {
                      title: "Decentralized Finance Ecosystem",
                      items: [
                        "Borrowing and Lending: Use tokenized assets as collateral.",
                        "Staking and Yield Farming: Maximize earnings with AI-optimized strategies.",
                        "Decentralized Marketplace: Trade assets in a peer-to-peer network.",
                      ],
                    },
                    {
                      title: "Tokenization of Real-World Assets",
                      items: [
                        "Fractional ownership of high-value assets like real estate and gold.",
                        "Blockchain-based tokens representing tangible assets.",
                        "Global access to opportunities traditionally limited to the elite.",
                      ],
                    },
                  ].map((phase, index) => (
                    <div key={index}>
                      <div className="rounded-xl p-5 border border-[#8260B9] h-full bg-[#12032c]">
                        <h3 className="text-white text-[22px] font-semibold leading-[25px] my-5">
                          {phase?.title}
                        </h3>
                        <div className="space-y-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Assetify Token Section */}
      <div className="bg-[#12032c] py-12 font-montserrat">
        <div className="container mx-auto px-8">
          <div className="border border-[#8260b9] rounded-[22px] p-10 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
            <button
              className="self-start px-5 py-2 rounded-lg text-[14px] font-semibold text-sm text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
              style={{
                background: "linear-gradient(300deg, #200F56, #9747FF)",
                boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
              }}
            >
              Token
            </button>

            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              The Assetify Token ($AST)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-white mb-6">
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
                <h4 className="text-2xl font-semibold text-white mb-6">
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
      <div className="bg-[#12032c] py-12 font-montserrat">
        <div className="container mx-auto lg:px-8">
          <div className="px-5 space-y-5">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
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
                      <div className="rounded-2xl p-5 border border-[#8260b9] h-full">
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
                    className="self-start px-5 py-3 rounded-lg text-[18px] leading-[21px] font-semibold text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
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
      <div className="bg-[#12032c] lg:px-20 font-montserrat">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <div>
                <img src={howItWork} alt="currency" className="w-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <div className="mb-12">
                <h3 className="font-extrabold text-[46px] leading-[55px] mb-12">
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
                    <div className="mb-8" key={index}>
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
                      <p className="font-normal text-[16px] leading-[19px] my-6">
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
      <div className="bg-[#12032c] py-12 font-montserrat">
        <div className="container mx-auto px-8">
          <div className="border border-[#8260b9] rounded-[22px] p-10 space-y-5 shadow-[40px_40px_174px_0px_#9747FF24_inset]">
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

      {/* Footer Section */}
      <footer className="bg-[#12032c] pb-12 font-montserrat text-white">
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div>
              <button className="flex items-center px-4 py-2 border border-gray-500 rounded">
                <Globe className="w-5 h-5 mr-2" />
                English
              </button>
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
