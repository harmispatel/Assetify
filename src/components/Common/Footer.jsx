import React, { useEffect, useRef, useState } from "react";
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
  Check,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";
import Logo from "../../assets/logo.svg";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "es", name: "Español", flag: "https://flagcdn.com/w40/es.png" },
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
];

const Footer = () => {
  const dropdownButtonRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    if (isOpen && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      setIsTop(spaceAbove > spaceBelow);
    }
  }, [isOpen]);

  return (
    <>
      <footer className="bg-[#12032c] lg:py-10 py-6 font-montserrat text-white">
        <div className="container mx-auto lg:px-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        } group flex items-center w-full px-4 py-2.5 text-sm gap-1`}
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

export default Footer;
