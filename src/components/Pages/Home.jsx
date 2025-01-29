import React, { useState } from "react";
import "../index.css";
import "swiper/css";
import copyIcon from "../../assets/image 15.png";
import solidProof from "../../assets/solidProof1.png";
import bnb1 from "../../assets/BNB.png";
import busd from "../../assets/BUSD.png";
import eth from "../../assets/ETH.png";
import usdt from "../../assets/usdt.png";
import other from "../../assets/othes.png";
import inputGroup from "../../assets/inputGroup.png";

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
import AiPowered from "./homeSections/AiPowered";
import PowerdDefi from "./homeSections/PowerdDefi";

const home = () => {
  const radioItems = [
    { id: "radio_1", label: "BNB", imageSrc: bnb1 },
    { id: "radio_2", label: "BUSD", imageSrc: busd },
    { id: "radio_3", label: "ETH", imageSrc: eth },
    { id: "radio_4", label: "USDT", imageSrc: usdt },
    { id: "radio_5", label: "OTHER", imageSrc: other },
  ];

  const [selectedRadio, setSelectedRadio] = useState("radio_1");

  return (
    <>
      <Navbar />
      <PowerdDefi />
      <BuildingSection />
      <SmartWallet />
      <MediaPartners />
      <KeyFeature />
      <AssetifyToken />
      <RoadMap />
      <HowItWork />
      <Blogs />
      <Faqs />
      <Footer />
    </>
  );
};

export default home;
