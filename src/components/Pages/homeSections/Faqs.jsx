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

const Faqs = () => {
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
            <span className=" lg:text-[20px] lg:font-semibold  text-[18px] font-medium leading-[26.82px] text-white">
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
    </>
  );
};

export default Faqs;
