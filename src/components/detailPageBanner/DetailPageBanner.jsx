import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./detailPageBanner.scss";
import { useSelector, useDispatch } from "react-redux";
import Img from "../lazyLoadImage/img";
import { getTrailerKey } from "../../store/trailerSlice";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const DetailPageBanner = ({ movieDetail }) => {
  const defaultUrl = useSelector((state) => state.home.url.poster);
  const dispatch = useDispatch();
  const popularUrl = useSelector((state) => state.popular.popularUrl);
  const fetchTrailer = async (id) => {
    try {
      const apiData = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_TMBD_API_BASE_URL
        }/${popularUrl}/${id}/videos?api_key=${
          import.meta.env.VITE_REACT_APP_TMBD_API_KEY
        }`
      );

      dispatch(getTrailerKey(apiData.data.results[0].key));
      toast.success("video is loading");
    } catch (error) {
      toast.error("Trailer not available");
    }
  };
  return (
    <>
      <div className="detail-banner">
        <Toaster />
        <img src={defaultUrl + movieDetail?.backdrop_path} className="bg-img" />
        <div className="opac"></div>
        <div className="detail-banner-items">
          <div className="movie-img-container">
            <img src={defaultUrl + movieDetail?.poster_path} alt="" />
            <div className="opac1"></div>
          </div>
          <div className="movie-detail-container">
            <h1 className="title">
              {movieDetail?.title || movieDetail?.name} (
              {movieDetail?.release_date?.slice(0, 4) ||
                movieDetail?.first_air_date?.slice(0, 4)}
              )
            </h1>
            <div className="genre">
              {movieDetail?.genres.map((item) => (
                <div key={item.id} className="genre-item">
                  {item.name}
                </div>
              ))}
              {" " + movieDetail?.runtime ||
                " min" + " " + movieDetail?.episode_run_time ||
                " " + "min" + " " + movieDetail?.release_date.slice(5, 7) ||
                movieDetail?.first_air_date.slice(5, 7) +
                  "/" +
                  movieDetail?.release_date.slice(8, 10) ||
                movieDetail?.first_air_date.slice(8, 10) +
                  "/" +
                  movieDetail?.release_date.slice(0, 4)}
            </div>
            <div
              onClick={() => fetchTrailer(movieDetail?.id)}
              className="trailer-btn"
            >
              <BsFillPlayFill className="play" /> Play Trailer
            </div>
            <h2>Overview</h2>
            <p className="des">{movieDetail?.overview}</p>
            <div className="production-logo">
              {movieDetail?.production_companies.map((item) => (
                <div
                  key={item.id}
                  className={`${item.logo_path === null ? "hide" : "logo1"}`}
                >
                  <Img
                    src={
                      item.logo_path === null ? "" : defaultUrl + item.logo_path
                    }
                    alt=""
                    className="logo-img1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// PG 04/07/2023 (IN) Animation, Adventure, Family, Fantasy, Comedy 1h 34m
export default DetailPageBanner;
