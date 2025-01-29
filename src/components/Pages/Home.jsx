import React from "react";
import "../index.css";
import "swiper/css";
import Navbar from "../Common/Navbar";
import AiPowered from "./HomeSections/AiPowered";
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

const home = () => {
  return (
    <>
      <Navbar />
      <AiPowered />
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
