import React from "react";
import { useSelector } from "react-redux";
import "./movieCard.scss";
import Img from "../lazyLoadImage/img";
const MovieCard = ({ src, title, date }) => {
  const url = useSelector((state) => state.home.url.poster);
  return (
    <div className="movie-card-container">
      <div className="movie-top">
        <Img src={url + src} alt="movie poster" className="movie-poster"></Img>
      </div>
      <div className="movie-bottom">
        <div className="movie-title">
          <h3>{title}</h3>
        </div>
        <div className="movie-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
