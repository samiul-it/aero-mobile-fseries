import React from "react";
import Navbar from "./Navbar/Navbar";
import TopBanner from "../TopBaneer/TopBanner";
import DesignBanner from "./DesignBanner/DesignBanner";
import TextBanner from "./TextBanner/TextBanner";

const Home = () => {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <DesignBanner></DesignBanner>
      <TextBanner></TextBanner>
    </div>
  );
};

export default Home;
