import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import Img from "../lazyLoadImage/img";
import "./trailerCard.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTrailerKey } from "../../store/trailerSlice";
import useFetch from "../../api/useFetch";
const TrailerCard = ({ id, src, title, date }) => {
  const url = useSelector((state) => state.home.url.poster);
  const dispatch = useDispatch();
  const fetchTrailer = async (id) => {
    const apiData = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_TMBD_API_BASE_URL
      }/movie/${id}/videos?api_key=${
        import.meta.env.VITE_REACT_APP_TMBD_API_KEY
      }`
    );
    dispatch(getTrailerKey(apiData.data.results[0].key));
  };

  return (
    <div className="movie-card-container">
      <div className="movie-top" onClick={() => fetchTrailer(id)}>
        <Img src={url + src} alt="movie poster" className="movie-poster"></Img>
        <div className="yt">
          <AiFillYoutube />
        </div>
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

export default TrailerCard;
