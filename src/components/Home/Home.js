import React from "react";
import Navbar from "./Navbar/Navbar";

import DesignBanner from "./DesignBanner/DesignBanner";
import TextBanner from "./TextBanner/TextBanner";
import MobileCameraBanner from "./MobileCameraBanner/MobileCameraBanner";
import TopBanner from "./TopBaneer/TopBanner";
import SelfieBanner from "./SelfieBanner/SelfieBanner";
import ImageGallary from "./ImageGallary/ImgaeGallary";
import DeviceSpecification from "./DeviceSpecification/DeviceSpecification";
import AndroidVersion from "./AndroidVersion/AndroidVersion";
import BezelBanner from "./BezelBanner/BezelBanner";
import Ui from "./Ui/Ui";
import DarkMode from "./DarkMode/DarkMode";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <DesignBanner></DesignBanner>
      <BezelBanner></BezelBanner>
      <TextBanner></TextBanner>
      <MobileCameraBanner></MobileCameraBanner>
      <SelfieBanner></SelfieBanner>
      <ImageGallary></ImageGallary>
      <DeviceSpecification></DeviceSpecification>
      <AndroidVersion></AndroidVersion>
      <Ui></Ui>
      <DarkMode></DarkMode>
      <Footer></Footer>
    </div>
  );
};

export default Home;
