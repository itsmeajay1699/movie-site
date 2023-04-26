import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlider.scss";
import Utils from "../../utils/Utils";

export default function SimpleSlider() {
  //   var settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow:4,
  //     slidesToScroll: 1,
  //   };
  return (
    <Slider {...Utils.settings} className="react-slider">
      <div>
        <div className="container">
          <h3>1</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
      <div>
        <div className="container">
          <h3>2</h3>
        </div>
      </div>
    </Slider>
  );
}
