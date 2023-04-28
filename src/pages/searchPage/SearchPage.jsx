import React from "react";
import "./searchPage.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { getSearchData } from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import moviePoster from "../../assets/no-poster.png";
import axios from "axios";
import SearchMovieCard from "../../components/SearchMovieCard/SearchMovieCard";
const SearchPage = () => {
  const { query } = useParams();
  const url = useSelector((state) => state.home.url.poster);
  const dispatch = useDispatch();
  const resSerachData = useSelector((state) => state.search.resSearchData);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=23b5ff71afe8a3392b93c3310ea0915b&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        console.log(res.data.results);
        dispatch(getSearchData(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  console.log(query);
  return (
    <>
      <Header />
      <ContentWrapper>
        <div className="search-page-container">
          {resSerachData.map((item) => {
            return (
              <SearchMovieCard
                key={item.id}
                src={item.poster_path ? url + item.poster_path : moviePoster}
                title={item.title}
                releaseDate={item.release_date}
                desc={item.overview}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </>
  );
};

export default SearchPage;

//https://api.themoviedb.org/3/search/movie?api_key=23b5ff71afe8a3392b93c3310ea0915b&language=en-US&query=iron%20man&page=1&include_adult=false
