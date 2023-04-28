import React from "react";
import Img from "../lazyLoadImage/img";
import "./searchMovieCard.scss";
import { useSelector } from "react-redux";
const SearchMovieCard = ({ src, title, releaseDate, desc}) => {
  return (
    <div className="search-movie-card-container">
      <div className="img-container">
        <Img src={src} />
      </div>
      <div className="movie-info-container">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-release-date">{releaseDate}</p>
        <p className="movie-desc">{desc}</p>
      </div>
    </div>
  );
};

export default SearchMovieCard;
