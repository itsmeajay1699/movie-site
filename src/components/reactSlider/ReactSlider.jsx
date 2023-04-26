import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlider.scss";
import Utils from "../../utils/Utils";

export default function SimpleSlider({ children }) {
  return (
    <Slider {...Utils.settings} className="react-slider">
      {children}
    </Slider>
  );
}
