import React from "react";
import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import HeroBanner from "./heroBanner/heroBanner";
import Header from "../../components/header/Header";
import SimpleSlider from "../../components/reactSlider/ReactSlider";
import { getTrending } from "../../store/trendingSlice";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import { getPopular } from "../../store/popular";
import { getTrailer } from "../../store/trailerSlice";
import TrailerCard from "../../components/trailerCard/TrailerCard";
import ReactPlayer from "react-player";
import { getTrailerKey } from "../../store/trailerSlice";
import Footer from "../../components/footer/Footer";
const Home = () => {
  const dispatch = useDispatch();
  const trendingUrl = useSelector((state) => state.trending.trendingUrl);
  const trendingData = useSelector((state) => state.trending.resData);
  const url = useSelector((state) => state.home.url.poster);
  const popularUrl = useSelector((state) => state.popular.popularUrl);
  const popularData = useSelector((state) => state.popular.resPopularData);
  // trailer Data
  const trailerData = useSelector((state) => state.trailer.resData);
  const trailerId = useSelector((state) => state.trailer.trailerId);
  console.log(trailerId);

  return (
    <>
      <div className="homePage">
        <Header />
        <HeroBanner />
        <ContentWrapper>
          <div className="section-two-title">
            <h2>Trending</h2>
            <div className="btn-container">
              <button
                onClick={() => dispatch(getTrending("day"))}
                className={`${trendingUrl === "day" ? "kal" : ""} today `}
              >
                Today
              </button>
              <button
                onClick={() => dispatch(getTrending("week"))}
                className={`${trendingUrl === "week" ? "kal" : ""} not-today`}
              >
                This Week
              </button>
            </div>
          </div>
          <div className="section-two-container">
            <div className="section-two-items">
              <div className="opacity-layer"></div>
              <SimpleSlider>
                {
                  trendingData?.results?.map((item) => (
                    <MovieCard
                      key={item.id}
                      src={`${url}${item.poster_path}`}
                      title={item.title}
                      date={item.release_date}
                    />
                  ))
                  // <MovieCard
                }
              </SimpleSlider>
            </div>
          </div>
          <div className="bg-image">
            <div className="section-two-title also">
              <h2>Latest Trailers</h2>
              <div className="btn-container">
                <button
                  onClick={() => dispatch(getTrailer("movie"))}
                  className="latest-btn"
                >
                  Movie
                </button>
              </div>
            </div>
            <div className="section-two-container">
              <div className="section-two-items">
                <div className="opacity-layer"></div>
                <SimpleSlider>
                  {
                    trailerData?.results?.map((item) => (
                      <TrailerCard
                        key={item.id}
                        id={item.id}
                        src={`${url}${item.poster_path}`}
                        title={item.title}
                        date={item.release_date}
                      />
                    ))
                    // <MovieCard
                  }
                </SimpleSlider>
              </div>
            </div>
          </div>
          <div className="section-two-title">
            <h2>What's Popular</h2>
            <div className="btn-container">
              <button
                onClick={() => dispatch(getPopular("movie"))}
                className={`${popularUrl === "movie" ? "kal" : ""} today `}
              >
                Movie
              </button>
              <button
                onClick={() => dispatch(getPopular("tv"))}
                className={`${popularUrl === "tv" ? "kal" : ""} on-tv`}
              >
                On TV
              </button>
              <button
                onClick={() => dispatch(getPopular("person"))}
                className={`${popularUrl === "person" ? "kal" : " "} not-today`}
              >
                Person
              </button>
            </div>
          </div>
          <div className="section-two-container">
            <div className="section-two-items">
              <div className="opacity-layer"></div>
              <SimpleSlider>
                {popularData?.results?.map((item) => (
                  <MovieCard
                    key={item.id}
                    src={item.poster_path || item.profile_path}
                    title={item.title || item.name}
                    date={
                      item.release_date ||
                      item.first_air_date ||
                      item.known_for_department
                    }
                  />
                ))}
              </SimpleSlider>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </div>
      {trailerId && (
        <div
          className="trailer-container"
          onClick={() => dispatch(getTrailerKey(""))}
        >
          <div className="trailer-box">
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${trailerId}`}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
