import React from "react";
import "./home.scss";

import HeroBanner from "./heroBanner/heroBanner";
import Header from "../../components/header/Header";
import SimpleSlider from "../../components/reactSlider/ReactSlider";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <HeroBanner />
      <SimpleSlider />
    </div>
  );
};

export default Home;
