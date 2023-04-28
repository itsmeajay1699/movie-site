import React from "react";
import { useSelector } from "react-redux";
import "./movieCard.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Img from "../lazyLoadImage/img";
const MovieCard = ({ src, title, date, id, path = `/movie/${id}` }) => {
  const navigate = useNavigate();
  const url = useSelector((state) => state.home.url.poster);
  return (
    <div onClick={() => navigate(`${path}`)} className="movie-card-container">
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
