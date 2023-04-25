import React from "react";
import "./home.scss";

import HeroBanner from "./heroBanner/heroBanner";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="homePage">
      <Header/>
      <HeroBanner />
    </div>
  );
};

export default Home;
