import React, { useEffect } from "react";
import "./heroBanner.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../api/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const heroBanner = () => {
  const [search, setSearch] = useState("");
  const [img, setImg] = useState("");
  // const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.key === "Enter" && search.length > 0) {
      navigate(`/search/${search}`);
    } 
  };
  const url = useSelector((state) => state.home.url);

  const { isLoading, apiData, serverError } = useFetch("/movie/upcoming");

  useEffect(() => {
    const image =
     url.backdrop + apiData?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setImg(image);
  }, [apiData]);

  return (
    <div className="heroBanner">
      {!isLoading && (
        <div className="backdrop-img">
          <Img src={img} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover.Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={handleInput}
              placeholder="Search for a movie or tv show..."
            />
            <button className="">Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default heroBanner;
