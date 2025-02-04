import { Copy, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import copyIcon from "../../assets/Copy.png";
import mobileViewIcon from "../../assets/mobile-line-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="bg-[#6e45e9] text-white text-center py-3 font-montserrat">
        <div className="container mx-auto flex flex-wrap justify-center items-center space-x-[10px]">
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
            <img src={copyIcon} className="w-[16px] h-[16px]" />
          </button>
          <span className="text-[14px] font-normal tracking-[1px]">
            to receive 300% Bonus!
          </span>
        </div>
      </section>

      <nav className="text-white bg-[#12032c] font-montserrat w-full z-20 top-0 left-0 relative">
        <div className="max-w-[93vw] mx-auto py-5">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo flex items-center gap-2">
              <img src={Logo} alt="" className="w-[134px] h-[34px]" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden text-white hover:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <img src={mobileViewIcon} alt="mobile-icon" className="h-[12px] w-[16px]"/>}
            </button>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-8">
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                About us
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                Why Us
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                Roadmap
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                Resources
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                Token Allocation
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                Audits
              </Link>
              <Link
                to="#"
                className="text-[18px] font-medium leading-[21.94px] hover:text-gray-300 transition duration-200 text-[#D8D8D8]"
              >
                FAQs
              </Link>
              <button
                className="px-5 py-2 rounded-xl text-[16px] text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors"
                style={{
                  background: "linear-gradient(300deg, #200F56, #9747FF)",
                  boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                }}
              >
                Connect Wallet
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`xl:hidden ${
              isMenuOpen
                ? "block absolute top-[74px] left-0 bg-[#12032c] w-full p-[10px]"
                : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                About us
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                Why Us
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                Roadmap
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                Resources
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                Token Allocation
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                Audits
              </Link>
              <Link
                to="#"
                className="hover:text-gray-300 font-medium transition duration-200 py-2 text-[#D8D8D8]"
              >
                FAQs
              </Link>
              <button
                className="px-5 py-2 rounded-xl text-[16px] text-white border border-[#8260b9] hover:bg-[#3a1ca1] transition-colors w-full"
                style={{
                  background: "linear-gradient(300deg, #200F56, #9747FF)",
                  boxShadow: "6px 6px 24px 0px #9747FFB2 inset",
                }}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
