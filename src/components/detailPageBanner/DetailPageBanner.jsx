import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./detailPageBanner.scss";
const DetailPageBanner = () => {
  return (
    <div className="detail-banner">
      <div className="opac"></div>
      <div className="detail-banner-items">
        <div className="movie-img-container">
          <img
            src="https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"
            alt=""
          />
          <div className="opac1"></div>
        </div>
        <div className="movie-detail-container">
          <h1 className="title">The Super Mario Bros. Movie (2023)</h1>
          <div className="genre">
            PG 04/07/2023 (IN) Animation, Adventure, Family, Fantasy, Comedy 1h
            32m
          </div>
          <div className="trailer-btn">
            <BsFillPlayFill className="play" /> Play Trailer
          </div>
          <h2>Overview</h2>
          <p className="des">
            While working underground to fix a water main, Brooklyn plumbers—and
            brothers—Mario and Luigi are transported down a mysterious pipe and
            wander into a magical new world. But when the brothers are
            separated, Mario embarks on an epic quest to find Luigi.
          </p>
          <div className="name">
            <div className="rel-name">Shigeru Miyamoto</div>
            <div className="rel-name">Illumination</div>
            <div className="rel-name">Nintendo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageBanner;
