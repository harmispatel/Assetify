import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

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

const FAQItem = ({ question, answer, isOpen, onClick }) => (
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
        <span className="lg:text-[22px] text-[18px] font-semibold text-white leading-[26.82px]">
          {question}
        </span>
        {isOpen ? (
          <Minus className="text-white w-6 h-6" />
        ) : (
          <Plus className="text-white w-6 h-6" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 font-normal text-[16px] pb-6 text-white leading-[19.5px] mt-4">
          {answer}
        </div>
      </div>
    </div>
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#12032c] lg:py-10 py-6 font-montserrat">
      <div className="container mx-auto lg:px-12 px-6">
        <div className="flex justify-center lg:justify-start">
          <button className="self-start px-[22px] bg-[#301881] py-[10px] rounded-lg text-[14px] font-semibold border border-[#8260b9] leading-[17.07px] shadow-inset-custom ">
            <span className="common-btn-color">Faqs</span>
          </button>
        </div>
        <div className="lg:flex justify-between items-center my-4">
          <h3 className="lg:text-[46px] text-[28px] font-extrabold text-white text-center lg:text-start">
            Frequently Asked Questions
          </h3>
          <button className="lg:block hidden rounded-xl bg-[#301881] border-[1.5px] border-[#8260b9] px-[32px] py-[15px] text-white font-semibold text-[18px] blog-btn leading-[21.94px]">
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
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>

        <button className="lg:hidden block w-full mt-6 rounded-lg bg-[#301881] px-8 py-4 text-white font-semibold text-[16px]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Faqs;
