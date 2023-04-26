import { useState } from "react";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getApiConfiguration } from "./store/homeSlice";
import { getData } from "./store/trendingSlice";
import { getPopularData } from "./store/popular";
import useFetch from "./api/useFetch";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const trendingUrl = useSelector((state) => state.trending.trendingUrl);
  const resPopularData = useSelector((state) => state.popular.resPopularData);
  const popularUrl = useSelector((state) => state.popular.popularUrl);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_TMBD_API_BASE_URL
        }/configuration?api_key=${import.meta.env.VITE_REACT_APP_TMBD_API_KEY}`
      )
      .then((res) => {
        const url = {
          backdrop: res.data.images.secure_base_url + "original",
          poster: res.data.images.secure_base_url + "w500",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => console.log(err));
  };

  const { apiData, isLoading, serverError } = useFetch(
    `/trending/all/${trendingUrl}`
  );
  dispatch(getData(apiData));

  const { apiData: data } = useFetch(`/${popularUrl}/popular`);
  console.log(data)
  dispatch(getPopularData(data));
  return (
    <>
      <Home />
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
