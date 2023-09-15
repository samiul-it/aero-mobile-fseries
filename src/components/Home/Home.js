import React from "react";
import Navbar from "./Navbar/Navbar";

import DesignBanner from "./DesignBanner/DesignBanner";
import TextBanner from "./TextBanner/TextBanner";
import MobileCameraBanner from "./MobileCameraBanner/MobileCameraBanner";
import TopBanner from "./TopBaneer/TopBanner";
import SelfieBanner from "./SelfieBanner/SelfieBanner";
import ImageGallary from "./ImageGallary/ImgaeGallary";
import DeviceSpecification from "./DeviceSpecification/DeviceSpecification";

const Home = () => {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <DesignBanner></DesignBanner>
      <TextBanner></TextBanner>
      <MobileCameraBanner></MobileCameraBanner>
      <SelfieBanner></SelfieBanner>
      <ImageGallary></ImageGallary>
      <DeviceSpecification></DeviceSpecification>
    </div>
  );
};

export default Home;
