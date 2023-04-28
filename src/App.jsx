import { useState } from "react";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getApiConfiguration } from "./store/homeSlice";
import { getData } from "./store/trendingSlice";
import { getPopularData } from "./store/popular";
import useFetch from "./api/useFetch";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getTrailerData } from "./store/trailerSlice";
import "./App.css";
import Detail from "./pages/details/Detail";
import ProtectUserDashBoard from "./protectRoutes/home";
import LoginPage from "./pages/loginPage/loginPage";
import { login } from "./store/userSlice";

function App() {
  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (auth) {
        dispatch(login(auth));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const dispatch = useDispatch();
  const trendingUrl = useSelector((state) => state.trending.trendingUrl);
  const popularUrl = useSelector((state) => state.popular.popularUrl);
  const trailerData = useSelector((state) => state.trailer.resData);
  const trailerUrl = useSelector((state) => state.trailer.trailerUrl);
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
          poster: res.data.images.secure_base_url + "original",
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
  dispatch(getPopularData(data));

  const { apiData: latestData } = useFetch(`/movie/upcoming`);
  dispatch(getTrailerData(latestData));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectUserDashBoard />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
